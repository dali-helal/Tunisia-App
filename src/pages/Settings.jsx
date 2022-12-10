import { FaUserCircle, FaUserAlt, FaInfoCircle,FaTools ,FaTrashAlt} from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"

import imgsettings from "../assets/imgSettings.png"
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Settings = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#777"
            }
        }
    })
    return (
        <section className="setting-user">

            <div className="nav">
                <div>
                    <div className="icon-user">
                        <div>
                            <FaUserCircle className="user" />
                        </div>

                        <h2>user Ben Hamouda </h2>
                    </div>

                    <div className="container-span">
                        <div>

                            <h4>
                                <FaUserAlt />
                                <p>Basic info </p>
                            </h4>

                            <h4>
                                <div className="icon-info">
                                    <FaInfoCircle />
                                </div>

                                <p>about</p>
                            </h4>

                            <h4>
                                <div className="icon-settings ">
                                    <AiFillSetting />
                                </div>
                                <p>settings</p>
                            </h4>

                        </div>


                    </div>

                </div>
                <span>
                    <div className="icon-logout">
                        <FiLogOut size={"20px "} />
                    </div>
                    <p>sign out </p>
                </span>
            </div>

            <div className="container-main">

                <div className="modify-account">
                    <h2>Account Settings </h2>
                    <form>
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Enter name"
                                style={{background :"white"}}
                            />
                            <TextField
                                label="Enter phone"
                                style={{background :"white"}}
                            />
                            <TextField
                                label="Enter email "
                                style={{background :"white"}}
                            />
                            <TextField
                                label="Enter password"
                                style={{background :"white"}}
                            />
                            <TextField
                                label="Enter phone number"
                                style={{background :"white"}}
                            />
                            <div className="conatiner-btn">
                                <button id="first-btn">
                                 <FaTools size={"20px"} color={"white"} />
                                <p>Update  account </p>
                                </button>
                                <button>
                                    <FaTrashAlt size={"20px"}/>
                                     <p>Delete account </p>
                                </button>
                            </div>
                        </ThemeProvider>


                    </form>
                </div>
                <div className="container-img">
                    <img src={imgsettings} alt="" />
                </div>

            </div>

        </section>
    )
}
export default Settings; 