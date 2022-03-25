import React from "react";
import { TypeOfCards } from "../../const";
import "./Card.css";


type CardProps = {
  card: TypeOfCards,
  handleChoice: (card: TypeOfCards) => void,
  matched: "matched" | "",
  disableFlip: boolean
}

function Card({ card, handleChoice, matched, disableFlip }: CardProps) {
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
