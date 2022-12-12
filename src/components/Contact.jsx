import img from "../assets/contactImage.png"
import { TextField, Snackbar, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const theme = createTheme({
    palette: {
        primary: {
            main: "#BF1020"
        }
    }
})

const Contact = () => {
    const [name, setName] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        const params = {
            name,
            object,
            email,
            message
        }
        emailjs.send('service_1dk3kwi', 'template_3o010dd', params, 'sR_PEsCtOx9ByxbmS')
            .then((result) => {
                setOpen(true);
                setName("");
                setObject("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div id="contact">
            <header>
                <h4>Contact</h4>
                <span>Get in touch</span>
            </header>
            <div className="container">
                <form autoComplete="off" onSubmit={sendEmail}>
                    <ThemeProvider theme={theme}>
                        <div className="line-one" >
                            <TextField
                                label="Enter name"
                                style={{ background: "white" }}
                                className="input"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <TextField
                                label="Enter subject"
                                style={{ background: "white" }}
                                className="input"
                                value={object}
                                onChange={(e) => { setObject(e.target.value) }}
                            />
                        </div>
                        <TextField
                            label="Enter email"
                            style={{ background: "white" }}
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <TextField
                            label="Enter message"
                            style={{ background: "white" }}
                            multiline
                            rows={6}
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                    </ThemeProvider>
                    <button type="submit">Send message</button>
                </form>
                <div className="illustration" >
                    <img src={img} alt="" />
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert variant="filled" severity="success" onClose={handleClose}>
                    Message Sent Successfully !
                </Alert>
            </Snackbar>
        </div>
    )
}
export default Contact