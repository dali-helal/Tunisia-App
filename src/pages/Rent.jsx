import imgRent from "../assets/imgrent.png"
import exemple from "../assets/exemple.png"
import { FaSearch, FaPlusCircle, FaStar, FaLocationArrow } from 'react-icons/fa';
import { TextField } from "@mui/material";
import FileBase64 from 'react-file-base64';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Pagination from "../pages/Pagination";
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#BF1020"
        }
    }
})

const Rent = () => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(4);

    return (
        <section id="rent-page">
            <div className="header">

                <div className="container_img">
                    <img src={imgRent} alt="" />
                </div>

                <div className="container">
                    <h2>Discover Your New Home </h2>
                    <h4>We help tunisians rent houses </h4>
                    <div className="container-search">
                        <input
                            placeholder="Search for homes to rent " />
                        <button>
                            <FaSearch size={"20px"} />
                            <h6>search</h6>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-main">
                <div className="container-grid">

                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>


                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>
                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>
                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>
                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>
                    <div className="item">
                        <img src={exemple} alt="" />
                        <h2>Maison monastir</h2>
                        <h5>Lorem ipsum dolor sit amet elit.
                            consectetur adipisicing elit.
                        </h5>
                        <div className="stars">
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <FaStar className="star" size={"25px"} />
                            <p>(4.7)</p>
                        </div>
                        <Link to={"/services/rent/rentDetails"}>
                            <FaLocationArrow size={"18px"} />
                            <p>Read more </p>
                        </Link>
                    </div>



                </div>
                <div className="container-form">
                    <form autoComplete="off" >
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Enter name"
                            />
                            <TextField
                                label="Enter description"
                            />
                            <TextField
                                label="Enter price "
                            />
                            <TextField
                                label="Enter location"
                            />
                            <TextField
                                label="Enter phone number"
                            />
                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => setImage(base64)}
                            />

                            <button>
                                <FaPlusCircle size={"18px"} />
                                <p>Post house for rent </p>
                            </button>

                        </ThemeProvider>

                    </form>
                </div>

            </div>
            <div className="pagination">
                <Pagination
                    page={page}
                    setPage={setPage}
                    pages={pages}
                />
            </div>

        </section>
    )
}

export default Rent