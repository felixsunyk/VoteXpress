import React, { useState, useEffect } from "react";
import '../style/Countdown.css'


const targetDate = new Date().getTime() + 1 * 30 * 30 * 30 * 100; 


const CountdownTimer = ({onEnd = () => {}}) => {

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeLeft <= 0){
           onEnd();
          return;
      }

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0); 
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000); 

    return () => clearInterval(intervalId); 
  },[timeLeft, onEnd]);

  const formatTimeLeft = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="result-dev">
      <p className="left">{timeLeft > 0 ? (
        <p className="pres">Voting will end in : {formatTimeLeft(timeLeft)}. cast your vote now</p> ): 
        <p>Voting has Ended! </p>}
        </p>
    </div>
  );
};

export default CountdownTimer;
