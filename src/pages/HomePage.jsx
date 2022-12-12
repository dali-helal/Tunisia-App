import About from "../components/About"
import Nav from "../components/Nav"
import Home from "../components/Home"
import Services from "../components/Services"
import img from "../assets/PageHome.png"
import Contact from "../components/Contact"
import { useEffect } from "react"
import Footer from "../components/Footer"

const HomePage = () => {
    useEffect(()=>{ 
         
        window.scrollTo({
            top:0
        })
    },[])
    return (
        <>
            <Nav />
            <Home />
            <Services />
            <About />
            <img src={img} alt="" className="banner" style={{ width: "100%" }} />
            <Contact />
            <Footer/>
        </>
    )

}
export default HomePage