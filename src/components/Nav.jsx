import logo from "../assets/logo.png"
import flag from "../assets/flag.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import decode from "jwt-decode";
import avatar from "../assets/avatar.png";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const handleAnimation = () => {
            if (window.scrollY > 0) {
                document.querySelector("nav").classList.add("animated");
            } else {
                document.querySelector("nav").classList.remove("animated");
            }
        }

        if (window.innerWidth > 768) {
            document.addEventListener("scroll", handleAnimation);
        }

        return () => { document.removeEventListener("scroll", handleAnimation) }

    }, [])

    useEffect(() => {

        const user = sessionStorage.getItem("profile");

        if (user) {
            const token = JSON.parse(sessionStorage.getItem("profile")).token;
            setProfile(JSON.parse(JSON.stringify(decode(token))));
        }

    }, [])

    function clickHandler() {
        document.querySelector(".mobile-list").classList.toggle("opened");
        document.querySelector(".bars").classList.toggle("clicked");
    }

    function toggler(){
        document.querySelector(".settings").classList.toggle("visible");
    }

    return (
        <nav className="nav-home">
            <Link to={"/"}>
                <div className="logo-home">
                    <img src={window.innerWidth > 768 ? logo : flag} alt="" />
                </div>
            </Link>
            <ul className="desktop-list">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </ul>
            <ul className="mobile-list">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </ul>
            <div className="bars" onClick={clickHandler} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {
                profile ? <div className="avatar-wrapper">
                    <img src={profile.picture == "" ? avatar : profile.picture} onClick={toggler} className="avatar" />
                    <div className="settings">
                        <div onClick={()=>{navigate("/settings")}}>
                            <FaCog color="#555"/>
                            <h3>Settings</h3>
                        </div>
                        <div onClick={()=>{ setProfile(null); sessionStorage.clear(); navigate("/");   }}>
                            <FaSignOutAlt color="#555"/>
                            <h3>Sign out</h3>
                        </div>
                    </div>
                </div> : <Link to="/auth" className="nav-btn" >
                    Sign in
                </Link>
            }
        </nav>
    )
}
export default Nav