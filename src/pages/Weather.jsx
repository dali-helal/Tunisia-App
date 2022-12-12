import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function () {
    const navigate = useNavigate();

    useEffect(()=>{
        window.location.href = "https://www.meteo.tn";
    } , []);

    return (
        <>
            
        </>
    )
}