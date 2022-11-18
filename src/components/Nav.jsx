import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Nav = () => {

    useEffect(()=>{

        const handleAnimation = ()=>{
            if(window.scrollY > 0){
                document.querySelector("nav").classList.add("animated");
            }else{
                document.querySelector("nav").classList.remove("animated");
            }
        }

        document.addEventListener("scroll" , handleAnimation)

        return ()=>{ document.removeEventListener("scroll" , handleAnimation) }

    } , [])

    return (
        <nav className="nav-home">
            <Link to={"/"}>
                <div className="logo-home">
                    <img src={logo} alt="" />
                </div>
            </Link>

            <div className="list-nav-desktop">
                <ul>
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
            <Link>
                <button className="nav-btn">Sign in </button>
            </Link>
        </nav>
    )
}
export default Nav