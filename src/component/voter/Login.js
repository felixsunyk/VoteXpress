import React from "react";
import "../style/Login.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate(); 

    const handleExit = () => {
        navigate("/"); 
    };
    return(
        <div className="login-box">
             <div className="close-btn">
                 <button onClick={handleExit} className="exit-button">
                       x
                    </button>
             </div>
            <p className="welcome">Welcome to VoteXpress</p>
            <form action="">
                <div>
                    <label for="name">Name: </label>
                    <input type="text" name="Name" placeholder="Enter your name" required />
                </div>
                <div>
                    <label for="Emaill">Email: </label>
                    <input type="emaill" name="Email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label for="id">ID no: </label>
                    <input type="text" name="ID no" placeholder="Enter your id no" required />
                </div>
            </form>
            <div className="buttons">
                <Link to="/Instruction" className="btn">submit</Link>
               
            </div>
           <div className="signup-page">
            <p> don't have an acount?<span><Link to="/Signup" className="to-signup">signup</Link></span></p>
           </div>
        </div>
    )
}
export default Login;