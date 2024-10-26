import React, { useState } from "react";
import "../style/instruction.css";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTime";


const Instruction = () =>{
    const [buttonText, setButtonText] = useState("Start voting")


    const handleCountdownEnd = () =>{
        setButtonText("Voting Ended")
    }

    const date = new Date();
   const  futureDate = new Date(date)
    futureDate.setDate(futureDate.getDate() + 3)
    


    return(
        <div className="instruction-card">
            <h2> VX Press</h2>
            <h3>Before you start Voting </h3>
            <p><span>Review All Options:</span> Ensure you understand all the choices available before casting your vote.</p>
            <p><span>Choose Carefully:</span> Once a vote is cast, it cannot be changed, so make sure you're confident in your decision.</p>
            <p><span>Stay Informed:</span> Results will be available in real-time after the vote.</p>
            <div className="instruction-btn">
                <CountdownTimer onEnd={handleCountdownEnd}/>
              
            </div> 
             <div>
                 <Link to="/Voting" className="btn">{buttonText}</Link>
             </div>
            <footer><small>Your voice matters—let it be heard!</small></footer>
        </div>
    )
}
export default Instruction;


