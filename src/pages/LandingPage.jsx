import { Link } from "react-router-dom"
import img from "../assets/imageLandingPage.png"
import mobile from "../assets/mobileLandingPage.png";
import platforms from "../assets/platforms.png"
const LandingPage =()=>{

    return(
         <div className="landing-page">
                <div className="img-landing-page">
                    <img src={window.innerWidth > 768 ? img : mobile } alt="" />
                </div>
                <div className="container">
                    <h2>Tun<span>isia</span> Ap<span>p</span></h2>
                    <p>The app you were always <br/> waiting for ! </p>
                    <Link to={"home-page"}>
                      Try Desktop Version
                    </Link>
                    <h4>or</h4>
                    <img src={platforms} alt="" />
                </div>
         </div>
    )

}
export default LandingPage