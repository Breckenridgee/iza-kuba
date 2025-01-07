import React from "react";
import "./Time.css";

const Time = ({ events }) => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Nasza historia</h1>
      <div class="timeline">
      <div class="point"/>
      <div class="point"/>
      <div class="point"/>
      <div class="point"/>
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="image-container">
            <img src={event.image} alt={event.title} className="image" />
          </div>
          <div className="time-text-container">
            <h2>{event.title}</h2>
            <p className="time-text-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Time;
