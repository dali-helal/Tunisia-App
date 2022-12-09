import img from "../assets/contactImage.png"
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#BF1020"
        }
    }
})

const Contact = () => {
    return (
        <div id="contact">
            <header>
                <h4>Contact</h4>
                <span>Get in touch</span>
            </header>
            <div className="container">
                <form>
                    <ThemeProvider  theme={theme}>
                        <div className="line-one" >
                            <TextField
                                label="Enter name"
                                style={{background:"white"}}
                                className="input"
                            />
                            <TextField
                                label="Enter subject"
                                style={{background:"white"}}
                                className="input"
                            />
                        </div>
                        <TextField
                            label="Enter email"
                            style={{background:"white"}}
                        />
                        <TextField
                            label="Enter message"
                            style={{background:"white"}}
                            multiline
                            rows={6}
                        />
                    </ThemeProvider>
                    <button type="submit">Send message</button>
                </form>
                <div className="illustration" >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Contact