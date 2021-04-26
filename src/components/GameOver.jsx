import React from "react";
import { Button } from "react-bootstrap";

const GameOver = ({ result, handleGameReset }) => {
  const currentTopScore = JSON.parse(
    localStorage.getItem("color-game-top-score") || result
  );

  if (!currentTopScore || parseInt(currentTopScore) <= result) {
    localStorage.setItem("color-game-top-score", JSON.stringify(result));
  } else {
    localStorage.setItem(
      "color-game-top-score",
      JSON.stringify(currentTopScore)
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div style={{ fontSize: "5rem", fontWeight: "600" }}>Game Over</div>

      <p style={{ fontSize: "2rem", fontWeight: "600" }}>
        Your score: <span className="text-success">{result}</span>
      </p>

      <p style={{ fontSize: "2rem", fontWeight: "600" }}>
        Top score: <span className="text-success">{currentTopScore}</span>
      </p>

      <Button className="mt-5" size="lg" onClick={handleGameReset}>
        Try Again
      </Button>
    </div>
  );
};

export default GameOver;
