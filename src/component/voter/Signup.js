import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Signup.css"
import { Link } from "react-router-dom";


const Signup = () =>{
    const navigate = useNavigate(); 

    const handleExit = () => {
        navigate("/"); 
    };
    return(
        <div className="signup-box">
            <div className="close-btn">
            <button onClick={handleExit} className="exit-button ">
                   x
                </button>
            </div>
            <p className="welcome"> Welcome to  VoteXpress</p>
            <form>
                <div>
                    <label for="name">Name: </label>
                    <input type="text" name="name" placeholder="Enter your name" id="name" />
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="email" name="Email" placeholder="Enter your email" id="email" />
                </div>
                <div>
                    <label for="password"> Password: </label>
                    <input type="password" name="password" placeholder="Enter your password" id="password" />
                </div>
                <div>
                    <label for="id"> ID no: </label>
                    <input type="text" name="ID NO" placeholder="Enter your id no" id="id" />
                </div>

            </form>
            <div className="buttons">
                <button className="btn">Submit</button>
               
            </div>
            <div className="login-page"><p>Already have an acount? <span><Link to="/Login" className="to-login">login</Link></span> </p></div>
        </div>
    )
}

export default Signup;