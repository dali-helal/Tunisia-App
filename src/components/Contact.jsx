
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
                    <div>
                        <div>
                            <input
                                type="text"
                            />
                            <span>Enter name</span>
                        </div>
                        <div>
                            <input
                                type="text"
                            />
                            <span>Enter subject</span>
                        </div>
                    </div>

                    <div>
                        <input
                            type="email"
                        />
                        <span>Enter email</span>
                    </div>

                    <div>
                        <textarea
                            type="text"
                            rows={6}
                        />
                        <span>Enter message</span>
                    </div>
                    <button type="submit">Send message</button>
                </form>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Contact