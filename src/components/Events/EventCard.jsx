import React from "react";
import "./EventCard.css";

const EventCard = ({ title, imageSrc, description, rules, prize }) => {
  return (
    <div className="event-layout">
      <img src={imageSrc} alt={title} className="event-img" />
      <div className="event-info">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {rules && (
          <ul>
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        )}
        {prize && (
          <p>
            <strong>Prizes:</strong> {prize}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventCard;
