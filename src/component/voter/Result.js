import React from "react";
import "../style/Result.css";
import { useLocation, useNavigate } from "react-router-dom";


const Result = () =>{
    const location = useLocation();
    const { name, position} = location.state ||{};
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate("/");
    }

    const isEmpty = !name && !position;
console.log("isEmpty");
    return(
        <div>
            <div>
                <ul className="result-nav">
                    <li>Name</li>
                    <li>Position</li>
                    <li>Number of vote</li>
                </ul>
            </div>
            <div className={isEmpty ? "result-box no-border" : "result-box"}>
                <p>{name}</p>
                <p>{position}</p>
                <p>no of v</p>
        </div>
            <div className="buttons"><button onClick={handleGoBack} className="btn">Back to Home</button></div>
        </div>
    )
}

export default Result;