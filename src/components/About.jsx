
import aboutImg from "../assets/aboutImg.png"

const About = () => {

    return (
        <div id="about">
            <header>
                <h4>About</h4>
                <span>Who we are</span>
            </header>
            <div className="container">
                <div>
                    <p>
                        Tunisia App is an original idea from a tunisian startup called JustNet . Tunisia App helps tunisian citenzens do day-to-day activities like finding buses , looking for jobs and visiting the doctor ...
                        Tunisia App is available in these versions :<br/>
                         - Mobile  version
                        <br/>
                        - Web app
                    </p>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
             
        </div>
    )
}
export default About