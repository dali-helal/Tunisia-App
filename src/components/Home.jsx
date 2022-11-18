import homeImg from "../assets/homeImg.png"

const Home=()=>{

    return(
        <section id="home">
                <div>
                <h2>Tun<span>isia</span> Ap<span>p</span></h2>
                <p>The app you were always <br/> waiting for ! </p>
                 <a href="#">
                 <button>Get Started</button>
                </a> 
                </div>
                <div>
                    <img src={homeImg} alt="" />
                </div>
            </section>
    )
}
export default Home