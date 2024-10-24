import React, { useState, useEffect } from "react";
import '../style/Countdown.css'


const targetDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; 
const CountdownTimer = () => {

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0); 
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, );

  const formatTimeLeft = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s Left`;
  };

  return (
    <div className="result-dev">
      <h2>Countdown Timer</h2>
      <p className="left">{timeLeft > 0 ? formatTimeLeft(timeLeft) : "Time's up!"}</p>
    </div>
  );
};

export default CountdownTimer;
