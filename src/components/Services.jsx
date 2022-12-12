import { Link } from "react-router-dom"
import imgHealth from "../assets/Health.png"
import imgWork from "../assets/Work.png"
import imgTransport from "../assets/Transport.png"
import imgRent from "../assets/Rent.png"
import sun from "../assets/sun.png";

const Services = () => {
    return (
        <section id="services">
            <header>
                <h4>Services</h4>
                <span>What we provide</span>
            </header>
            <div className="container-grid">
                <Link to="/services/work">
                    <div>
                        <img src={imgWork} alt="" />
                        <h4>Work</h4>
                    </div>
                </Link>
                <Link to="/services/rent">
                    <div>
                        <img src={imgRent} alt="" />
                        <h4>Rent</h4>
                    </div>
                </Link>
                <Link to="/services/transport">
                    <div>
                        <img src={imgTransport} alt="" />
                        <h4>Transport</h4>
                    </div>
                </Link>

                <Link to="/services/health">
                    <div>
                        <img src={imgHealth} alt="" />
                        <h4>Health</h4>
                    </div>
                </Link>
                <Link to="/services/weather">
                    <div>
                        <img src={sun} alt="" />
                        <h4>weather</h4>
                    </div>
                </Link>
                <Link to="/services/rent">
                    <div>
                        <img src={imgRent} alt="" />
                        <h4>Rent</h4>
                    </div>
                </Link>
                <Link to="/services/transport">
                    <div>
                        <img src={imgTransport} alt="" />
                        <h4>Transport</h4>
                    </div>
                </Link>

                <Link to="/services/health">
                    <div>
                        <img src={imgHealth} alt="" />
                        <h4>Health</h4>
                    </div>
                </Link>
            </div>
        </section>
    )
}
export default Services