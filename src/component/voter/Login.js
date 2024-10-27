import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    const [error, setError] = useState({
        name: "",
        email: "",
        id: ""
    });

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        const newError = {
            name: "",
            email: "",
            id: ""
        };

        if (!name.trim()) {
            newError.name = "Name is required";
            isValid = false;
        }
        if (!email.trim()) {
            newError.email = "Email is required";
            isValid = false;
        }
        if (!id.trim()) {
            newError.id = "ID number is required";
            isValid = false;
        }

        setError(newError);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (validateForm()) {
           
            setName("");
            setEmail("");
            setId("");
            navigate("/instruction"); 
        }
    };
    const handleExit = () => {
        navigate("/");
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="close-btn">
                    <button onClick={handleExit} className="exit-button">x</button>
                </div>
                <p className="welcome">Welcome to VoteXpress</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className={error.name ? "error-input" : ""}
                            title={error.name || ""}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className={error.email ? "error-input" : ""}
                            title={error.email || ""}
                        />
                    </div>
                    <div>
                        <label htmlFor="id">ID No: </label>
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Enter your ID no"
                            className={error.id ? "error-input" : ""}
                            title={error.id || ""}
                        />
                    </div>
            
                    <div className="buttons">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
                <div className="signup-page">
                    <p>
                        Don't have an account?
                        <span>
                            <Link to="/Signup" className="to-signup">signup</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
