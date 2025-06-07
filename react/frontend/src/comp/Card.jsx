import React from "react";
import "./card.css";
import Another from "./Another";
const Card = () => {
  let user = "Devanshu sir";

  return (
    <div className="main">
      <h1 className="heading">Hello Card 😍</h1>
      <Another name={user} />
    </div>
  );
};

export default Card;
