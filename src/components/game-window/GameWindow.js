import React, { useEffect, useState } from "react";
import cardsInfo from "../../const";
import Card from "../card/Card";
import Timer from "../timer/Timer";
import "./GameWindow.css";

function GameWindow() {
  // Defining states
  const [cards, setCards] = useState([]); // Cards List.
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turnsCount, setTurnsCount] = useState(0); // No. of turns.
  const [score, setScore] = useState(0); // Game score.
  const [matchedCards, setMatchedCards] = useState(0); // State to keep track of matched pairs.
  const [disableFlip, setDisableFlip] = useState(false); // State to use for delaying flip between attempts.

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    compareCoices();
    // eslint-disable-next-line
  }, [choice1, choice2]);

  // Function for comparing two choices
  const compareCoices = () => {
    if (choice1 && choice2) {
      setDisableFlip(true);
      if (choice1.src === choice2.src) {
        setScore((prevScore) => prevScore + 5);
        setMatchedCards((prevMatchedCard) => prevMatchedCard + 1);
      } else {
        setScore((prevScore) => prevScore - 1);
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === choice1.id || card.id === choice2.id) {
                return { ...card, paired: false };
              } else {
                return card;
              }
            });
          });
        }, 500);
      }

      setTimeout(() => {
        resetChoices();
      }, 500);
    }
  };

  // Function for shuffling the cards.
  const shuffleCards = () => {
    const shuffledCards = [...cardsInfo, ...cardsInfo]
      .sort(() => Math.random() - 0.5)
      .map((currCard) => {
        return { ...currCard, id: Math.random() * 100 };
      });

    setCards(shuffledCards);
  };

  // Changing state after cards clicked.
  const handleChoice = (selectedCard) => {
    if (choice1 === null) {
      setChoice1(selectedCard);
    } else {
      setChoice2(selectedCard);
    }
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === selectedCard.id) {
          return { ...card, paired: true };
        } else {
          return card;
        }
      });
    });
  };

  // Function for resetting the states storing choices.
  const resetChoices = () => {
    setChoice1(null);
    setChoice2(null);
    setTurnsCount((prevTurn) => prevTurn + 1);
    setDisableFlip(false);
  };

  // Showing the results of the game and resetting the states.
  const gameFinished = (time, resetClick) => {
    if (resetClick) {
      alert(`Congratulations!!
You completed the game in ${turnsCount + 1} turns in ${time} seconds.
Your Score is ${score}
    `);
    }
    setChoice1(null);
    setChoice2(null);
    setTurnsCount(0);
    setScore(0);
    setMatchedCards(0);
    shuffleCards();
  };

  return (
    <div className="container game-container">
      <h1 className="game-window-heading">Memory Game</h1>
      <div className="game-panel" id="card-desk">
        {cards.map((card, id) => {
          return (
            <Card
              card={card}
              handleChoice={handleChoice}
              matched={card.paired ? "matched" : ""}
              disableFlip={disableFlip}
              key={`${card.src} ${id}`}
            />
          );
        })}
      </div>
      <div className="game-panel" id="result-panel">
        <div className="result-display">
          <p>Turns : {turnsCount}</p>
          <p>Score : {score}</p>
          <Timer matchedCards={matchedCards} gameFinished={gameFinished} />{" "}
        </div>
      </div>
    </div>
  );
}

export default GameWindow;
