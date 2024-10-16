import React from "react";
import "../style/instruction.css";
import { Link } from "react-router-dom";


const Instruction = () =>{

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
                <button>{date.toDateString()}</button>
                
                <button>{futureDate.toDateString() }</button>
            </div>
            <div>
                 <Link to="/Voting" className="btn">start voting</Link>
            </div>
            <footer><small>Your voice matters—let it be heard!</small></footer>
        </div>
    )
}
export default Instruction;

// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   // Set your target date and time (e.g., 3 days from now)
//   const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

//   const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const now = new Date().getTime();
//       const timeRemaining = targetDate - now;

//       if (timeRemaining <= 0) {
//         clearInterval(intervalId);
//         setTimeLeft(0); // Countdown reached zero
//       } else {
//         setTimeLeft(timeRemaining);
//       }
//     }, 1000); // Update every second

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, [targetDate]);

//   const formatTimeLeft = (milliseconds) => {
//     const totalSeconds = Math.floor(milliseconds / 1000);
//     const days = Math.floor(totalSeconds / (60 * 60 * 24));
//     const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
//     const seconds = totalSeconds % 60;

//     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   };

//   return (
//     <div>
//       <h2>Countdown Timer</h2>
//       <p>{timeLeft > 0 ? formatTimeLeft(timeLeft) : "Time's up!"}</p>
//     </div>
//   );
// };

// export default CountdownTimer;
