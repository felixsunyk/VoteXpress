import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "../style/Signup.css";


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        id: ""
    });

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        const newError = {
            name: "",
            email: "",
            password: "",
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
        if (!password.trim()) {
            newError.password = "Password is required";
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
            setPassword("");
            setId("");
            navigate("/instruction");
        }
    };

    const handleExit = () => {
        navigate("/");
    };
   
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="signup-container">  1
            <div className="signup-box">
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
                            placeholder="Enter your name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={error.name ? "error-input" : ""}
                            title={error.name || ""}
                            autocomplete="name"
                        />
            
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={error.email ? "error-input" : ""}
                            title={error.email || ""}
                            autocomplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={error.password ? "error-input" : ""}
                                    title={error.password || ""}
                                    autocomplete="new-password"
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEye />: <FaRegEyeSlash />}
            
                                </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="id">ID No: </label>
                        <input
                            type="text"
                            name="id"
                            placeholder="Enter your ID No"
                            id="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className={error.id ? "error-input" : ""}
                            title={error.id || ""}
                            autocomplete="Id"
                        />
                    </div>
                    <div className="buttons">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
                <div className="login-page">
                    <p>Already have an account?
                        <span>
                            <Link to="/Login" className="to-login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
