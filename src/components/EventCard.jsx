import React from 'react';
import './EventCard.css';

function EventCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank">
        Visit Link
      </a>
    </div>
  );
}

export default EventCard;