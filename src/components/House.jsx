import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaLocationArrow  } from "react-icons/fa";

export default function ({name , description , picture , id}) {
    return (
        <>
            <div className="item">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h5>{description.slice(0,80)}...</h5>
                <div className="stars">
                    <FaStar className="star" size={"25px"} />
                    <FaStar className="star" size={"25px"} />
                    <FaStar className="star" size={"25px"} />
                    <FaStar className="star" size={"25px"} />
                    <FaStar className="star" size={"25px"} />
                    <p>(4.7)</p>
                </div>
                <Link to={`/services/rent/rentDetails/${id}`}>
                    <FaLocationArrow size={"18px"} />
                    <p>Read more </p>
                </Link>
            </div>
        </>
    )
}