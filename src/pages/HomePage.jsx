import About from "../components/About"
import Nav from "../components/Nav"
import Home from "../components/Home"
import Services from "../components/Services"
import img from "../assets/PageHome.png"
import Contact from "../components/Contact"
const HomePage=()=>{
    return(
        <>
        <Nav/>
        <Home/>
        <Services/>
        <About/>
        <img  src={img} alt="" style={{width : "100%"}}/>
        <Contact/>
        </>
    )

}
export default HomePage