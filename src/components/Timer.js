import React, { useEffect, useState } from "react";

let timer;

function Timer({ matchedCards, gameFinished }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (matchedCards === 10) {
      clearInterval(timer);
      setTimeout(() => {
        gameFinished(time, true);
        setTime(0);
        timer = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      }, 500);
    }
  }, [matchedCards]);

  // Resetting the game.
  const resetTime = () => {
    gameFinished(time, false);
    setTime(0);
    clearInterval(timer);
    timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <>
      <div>Time : {time}</div>
      <button onClick={resetTime} id="restart-button">
        Restart
      </button>
    </>
  );
}

export default Timer;
