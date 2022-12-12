import React from "react";
import { FaStar , FaUserCircle , FaLocationArrow } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";

export default function(){
    const { id } = useParams();
    const [house , setHouse] = useState({});

    useEffect(()=>{

        console.log(id);

        async function fetchData(){
            const response = await fetch(`http://localhost:5000/rent/getHouseById?id=${id}`);
            const data = await response.json();

            setHouse(data);
        }
        fetchData();

    } , []);

    return(
        <>
           <section id="rent">
                <div className="heading-container">
                    <div className="left">
                        <img src={house.picture} />
                    </div>
                    <div className="right">
                        <h1>{house.name}</h1>
                        <p> {house.description} </p>
                        <div className="stars-wrapper">
                            <div className="stars">
                                <FaStar color="#ff9901" className="star"/>
                                <FaStar color="#ff9901" className="star"/>
                                <FaStar color="#ff9901" className="star"/>
                                <FaStar color="#ff9901" className="star"/>
                                <FaStar color="#ff9901" className="star"/>
                            </div>
                            <span>( 4.7 )</span>
                        </div>
                        <div className="contact-wrapper">
                            <span id="phone">
                                +216 {house.phone}
                            </span>
                            <span id="price">
                                {house.price}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="comments-container">
                    <div className="header">
                        <h1>Comments</h1>
                        <div className="line">

                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment">
                            <div className="picture">
                                <FaUserCircle color="#555" className="icon" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h3>Dhia Ben Hamouda</h3>
                                    <p>Yesterday at 3:32PM</p>
                                </div>
                                <div className="bottom">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="picture">
                                <FaUserCircle color="#555" className="icon" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h3>Dhia Ben Hamouda</h3>
                                    <p>Yesterday at 3:32PM</p>
                                </div>
                                <div className="bottom">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="picture">
                                <FaUserCircle color="#555" className="icon" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h3>Dhia Ben Hamouda</h3>
                                    <p>Yesterday at 3:32PM</p>
                                </div>
                                <div className="bottom">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <input type="text" placeholder="Enter comment" />
                    <button>
                        <FaLocationArrow color="white" />
                        <p>Send</p>
                    </button>
                </div>

            </section> 
        </>
    )
}