import React, { useEffect } from "react";
import '../style/Thanks.css';
import { useNavigate } from "react-router-dom";




const Thanks = ()=>{
    const navigate = useNavigate()

    useEffect (() => { 
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);
        return()=>clearTimeout(timer)
    },[navigate]);

    return(
        <div className="successful-vote">
            <h2 className="submition"> Vote successfully submitted. <span>👍</span></h2>
        </div>
    )
}
export default Thanks;

