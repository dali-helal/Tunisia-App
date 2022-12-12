import { FaUserCircle, FaUserAlt, FaInfoCircle, FaTools, FaTrashAlt } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import imgsettings from "../assets/imgSettings.png"
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link , useNavigate } from "react-router-dom";

const theme = createTheme({
	palette: {
		primary: {
			main: "#777"
		}
	}
})

const Settings = () => {
	const navigate = useNavigate();

	return (
		<section className="user-settings">
			<div className="nav">
				<div className="wrapper">
					<div className="top">
						<div className="user">
							<div>
								<FaUserCircle className="avatar" />
							</div>
							<h2>Dhia Ben Hamouda </h2>
						</div>
						<div className="container-span">
							<div className="inner">
								<h4>
									<FaUserAlt className="icon" />
									<p>Basic info </p>
								</h4>

								<h4>
									<FaInfoCircle className="icon" />
									<p>about</p>
								</h4>

								<h4>
									<AiFillSetting className="icon" />
									<p>settings</p>
								</h4>
							</div>
						</div>
					</div>

					<span className="link" onClick={()=>{  sessionStorage.clear(); navigate("/home-page");   }} >
						<FiLogOut className="icon" />
						<p>sign out </p>
					</span>
				</div>
			</div>

			<div className="container-main">

				<div className="modify-account">
					<h2>Account Settings </h2>
					<form>
						<ThemeProvider theme={theme}>
							<TextField
								label="Enter name"
								style={{ background: "white" }}
							/>
							<TextField
								label="Enter phone"
								style={{ background: "white" }}
							/>
							<TextField
								label="Enter email "
								style={{ background: "white" }}
							/>
							<TextField
								label="Enter password"
								style={{ background: "white" }}
							/>
							<div className="conatiner-btn">
								<button id="first-btn">
									<FaTools size={"20px"} color={"white"} />
									<p>Update  account </p>
								</button>
								<button>
									<FaTrashAlt size={"20px"} />
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