import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import FileBase64 from 'react-file-base64';
import { TextField, Snackbar, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BF1020"
    }
  }
})

export default function () {
  const [signIn, setSignIn] = useState(true);
  const [picture, setPicture] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [success , setSuccess] = useState(false);
  const [name , setName] = useState("");
  const [phone , setPhone] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState(""); 
  const navigate = useNavigate();

  function handleClose() {
    setError1(false);
    setError2(false);
    setError3(false);
    setSuccess(false);
  }

  async function signUpHandler(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        picture
      })
    })
    const data = await response.json();

    switch (data.msg) {
      case "user with the given email already exists":
        setError3(true);
        break;
      case "user created successfully":
        setSuccess(true);
        break;
      default:
        break;
    }
  }

  async function signInHandler(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();

    switch (data.msg) {
      case "user with the given email doesn't exist":
        setError1(true);
        break;
      case "wrong password":
        setError2(true);
        break;
      case "ok":
        sessionStorage.setItem("profile", JSON.stringify(data));
        navigate("/");
        break;
      default:
        break;
    }
  }

  function toggleForm() {
    setSignIn(!signIn);
  }

  return (
    <>
      <section id="auth">
        <form onSubmit={signIn ? signInHandler : signUpHandler} autoComplete="off">
          <ThemeProvider theme={theme}>
            {
              !signIn && <>

                <TextField
                  label="Enter name..."
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  style={{ marginBottom: ".75rem" }}
                />
                <TextField
                  label="Enter phone..."
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                  style={{ marginBottom: ".75rem" }}
                />

              </>
            }

            <TextField
              label="Enter email..."
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              style={{ marginBottom: ".75rem" }}
            />
            <TextField
              label="Enter password..."
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              style={{ marginBottom: ".75rem" }}
            />
          </ThemeProvider>

          {
            signIn && <Link to={"/"} >
              Forgot password ?
            </Link>
          }

          {
            !signIn && <div className="file">
              <span>Profile Picture : </span>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setPicture(base64)}
              />
            </div>
          }

          <button>
            {
              signIn ? "Sign in" : "Sign up"
            }
          </button>
          {
            signIn ? <>
              <h3 onClick={toggleForm}>Don't have an account ? <span>Sign up !</span></h3>
              <div className="wrapper">
                <h4>Or sign in with</h4>
              </div>
              <div className="social">
                <div>
                  <img src={google} alt="" />
                </div>
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <img src={twitter} alt="" />
                </div>
              </div>
            </> : <h3 onClick={toggleForm}>
              Already have an account ? <span>Sign in !</span>
            </h3>
          }
        </form>
        <Snackbar autoHideDuration={5000} open={error1} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose} variant="filled" >
            user with the given email doesn't exist
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={5000} open={error2} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose} variant="filled" >
            wrong password
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={5000} open={error3} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose} variant="filled" >
            user with the given email already exists
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={5000} open={success} onClose={handleClose}>
          <Alert severity="success" onClose={handleClose} variant="filled" >
            user created successfully
          </Alert>
        </Snackbar>

      </section>
    </>
  )
}