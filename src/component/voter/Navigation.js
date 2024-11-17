import React, { useState } from "react";
import image from "../img/img.png";
import CountdownTimer from "./CountdownTime";
import { Link } from "react-router-dom";
import '../style/Navigation.css'
import { IoMenuOutline } from "react-icons/io5";




const Navigation = () =>{ 
    const [isMenuOpen, setIsMenuOpen] = useState(true);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

    return(
        <div className="nav-container">
             <nav>
                <div className="nav-bar">
                    <img src={image} alt="logo" className="logo" />
                     <ul className={`list-cont ${isMenuOpen ? "open" : ""}`}>
                     <li>
                       <Link
                         to="#"
                         onClick={() =>
                          document.getElementById("vx-box").scrollIntoView({ behavior: "smooth" })
                        }
                       >
                         About
                       </Link>
                     </li>
                     <li>
                       <Link to="/Signup">signup</Link>
                     </li>
                     <li>
                       <Link to="/Login">Login</Link>
                     </li>
                     <li>
                       <Link to="/Result">View Result</Link>
                     </li>
                   </ul>
                        <IoMenuOutline className="menu-icon" onClick={toggleMenu} />
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