import React, { useState, useEffect, useCallback } from "react";
import "./Counter.css";

const Counter = () => {
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date("2025-06-18T15:00:00Z"); // Target date: June 18, 2025
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [calculateTimeLeft]); // Dependency added to avoid warnings


  return (
    <div className="counter-container">
      <h2>Widzimy się juz za</h2>
      <div className='counter-line'/>
      <div className="counter-container2">
      <div>
        <h1>{timeLeft.days}</h1>
        <span>Dni</span>
      </div>
      <div>
        <h1>{timeLeft.hours}</h1>
        <span>Godzin</span>
      </div>
      <div >
        <h1>{timeLeft.minutes}</h1>
        <span>Minut</span>
      </div>
      <div>
        <h1>{timeLeft.seconds}</h1>
        <span>Sekund</span>
      </div>
      </div>
    </div>
  );
};

export default Counter;
