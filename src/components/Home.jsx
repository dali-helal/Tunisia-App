import homeImg from "../assets/homeImg.png"

const Home = () => {

    return (
        <section id="home">
            <div className="container">
                <div className="text" >
                    <h2>Tun<span>isia</span> Ap<span>p</span></h2>
                    <p>The app you were always <br /> waiting for ! </p>
                    <a href="#">
                        Get Started
                    </a>
                </div>
                <div className="illustration" >
                    <img src={homeImg} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Home