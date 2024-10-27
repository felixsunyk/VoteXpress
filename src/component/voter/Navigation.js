import React from "react";
import image from "../img/img.png";
import CountdownTimer from "./CountdownTime";
import { Link } from "react-router-dom";
import '../style/Navigation.css'




const Navigation = () =>{ 
    return(
        <div className="nav-container">
             <nav>
                <div className="nav-bar">
                    <img src={image} alt="logo" className="logo" />
                    <ul className="list-cont">
                        <Link to="#" onClick={() =>document.getElementById("vx-box").scrollIntoView({behavior: "smooth"})}>about</Link>
                        <li><Link to="/Signup">signup</Link></li>
                        <li><Link to="/Login">login</Link></li>
                        <li><Link to="/Result">view Result</Link></li>
                    </ul>
                </div>
                <div className="scroll-container">
                    <div className="countdown">
                        <CountdownTimer />
                    </div>
                </div>
            </nav>
        </div>
    )
} 
export default Navigation;