import React from "react";
import house from "../assets/house.png";
import { FaStar , FaUserCircle , FaLocationArrow } from "react-icons/fa";

export default function(){
    return(
        <>
           <section id="rent">
                <div className="heading-container">
                    <div className="left">
                        <img src={house} />
                    </div>
                    <div className="right">
                        <h1>Maison monastir</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum illum, beatae doloribus quod soluta explicabo error asperiores autem assumenda fugiat quo voluptates ab mollitia necessitatibus id architecto consequatur. Tenetur?</p>
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
                                +216 24 684 936
                            </span>
                            <span id="price">
                                480 DT
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
                    <input type="text" />
                    <button>
                        <FaLocationArrow color="white" />
                        <p>Send</p>
                    </button>
                </div>

            </section> 
        </>
    )
}