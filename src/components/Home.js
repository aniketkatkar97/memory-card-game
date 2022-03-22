import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Function to navigate to the game page.
  const navToGamePage = () => {
    navigate("/Game");
  };

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div id="game-info">
        <div id="game-rules">
          <p>
            Looking for a fun game?? You're in the right place. The Memory
            (Card) Game is made to check how sharp is your memory. The rules are
            simple -
          </p>
          <ol>
            <li>
              There will be 10 different cards in pairs (i.e. total 20 cards)
              put upside down.
            </li>
            <li>
              You can flip two cards at a time. When two similar cards are
              flipped you will get 5 points.
            </li>
            <li>Flipping a different cards will give you a -1 point.</li>
            <li>Try to make a Highscore with minimum time possible.</li>
          </ol>
        </div>
        <img src="../images/cards.jpg" alt="Game Cards Display" />
      </div>
      <button id="game-start-btn" onClick={navToGamePage}>
        Start Game
      </button>
    </div>
  );
}

export default Home;
