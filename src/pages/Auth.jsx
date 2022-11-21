import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import FileBase64 from 'react-file-base64';

export default function () {
  const [signIn, setSignIn] = useState(true);
  const [image , setImage] = useState();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  

  async function signUpHandler() {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        passwod: passwordRef.current.value,
        image
      })
    })
    const data = await response.json();
  }

  async function signInHandler() {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        passwod: passwordRef.current.value
      })
    })
    const data = await response.json();
  }



  function toggleForm(){
    setSignIn(!signIn);
  }

  return (
    <>
      <section id="auth">
        <form onSubmit={signIn ? signInHandler : signUpHandler}>

          {
            !signIn && <>

              <div className="input">
                <input
                  type="text"
                  required={true}
                  ref={nameRef}
                />
                <span>Enter name</span>
              </div>

              <div className="input">
                <input
                  type="text"
                  required={true}
                  ref={phoneRef}
                />
                <span>Enter phone</span>
              </div>

            </>
          }

          <div className="input">
            <input
              type="text"
              required={true}
              ref={emailRef}
            />
            <span>Enter email</span>
          </div>

          <div className="input">
            <input
              type="password"
              required={true}
              ref={passwordRef}
            />
            <span>Enter password</span>
          </div>

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
                onDone={({base64}) => setImage(base64) }
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
      </section>
    </>
  )
}