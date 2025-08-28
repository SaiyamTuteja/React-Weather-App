import React from "react";
import "./Cards.css";
const Card = (props) => {
  return (
    <div className="card">
      <h2 id="card-title">{props.name} </h2>
      <img id="card-image" src={props.image} alt={props.name} />
      <p id="card-description">{props.Desc}</p>
      <button id="card-button">Learn More</button>
    </div>
  );
};

export default Card;
