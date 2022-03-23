import React from "react";
import "./Card.css";

function Card({ card, handleChoice, matched, disableFlip }) {
  // Function to handle the flipping.
  const handleFlip = () => {
    if (!disableFlip) {
      handleChoice(card);
    }
  };

  return (
    <div className={matched}>
      <img src={card.src} alt={card.alt} className="card front" />
      <img
        src="/images/cover.jpg"
        alt="cover"
        onClick={handleFlip}
        className="card back"
      />
    </div>
  );
}

export default Card;
