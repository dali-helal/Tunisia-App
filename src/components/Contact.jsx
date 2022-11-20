
import img from "../assets/contactImage.png"

const Contact = () => {
    return (
        <div id="contact">
            <header>
                <h4>Contact</h4>
                <span>Get in touch</span>
            </header>
            <div className="container">
                <form>
                    <div className="line-one" >
                        <div className="input" >
                            <input
                                type="text"
                                required={true}
                            />
                            <span>Enter name</span>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                required={true}
                            />
                            <span>Enter subject</span>
                        </div>
                    </div>

                    <div className="input" >
                        <input
                            type="text"
                            required={true}
                        />
                        <span>Enter email</span>
                    </div>

                    <div className="area" >
                        <textarea
                            type="text"
                            required={true}
                            rows={6}
                        />
                        <span>Enter message</span>
                    </div>
                    <button type="submit">Send message</button>
                </form>
                <div className="illustration" >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Contact