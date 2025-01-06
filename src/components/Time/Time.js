import React from "react";
import "./Time.css";

const Time = ({ events }) => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Nasza historia</h1>
            <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="image-container">
            <img src={event.image} alt={event.title} className="image" />
          </div>
          <div className="text-container">
            <h3>{event.title}</h3>
            <h4>{event.date}</h4>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Time;
