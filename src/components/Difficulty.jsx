import React from "react";
import { Button } from "react-bootstrap";

const Difficulty = ({ setDifficulty, setIsGaming }) => {
  return (
    <div className="d-flex flex-column justify-content-center text-center w-75">
      <p style={{ fontSize: "3.5rem", fontWeight: "700" }}>
        Select the difficulty
      </p>
      <div className="d-flex justify-content-between">
        {[
          { number: 9, color: "success" },
          { number: 16, color: "primary" },
          { number: 25, color: "danger" },
        ].map((difficulty) => (
          <Button
            key={difficulty.color}
            variant={difficulty.color}
            style={{
              width: "30%",
              height: 100,
              fontSize: "2.5rem",
              fontWeight: "500",
            }}
            onClick={() => {
              setDifficulty(difficulty.number);
              setIsGaming(true);
            }}
            className="shadow-lg"
          >
            {difficulty.number}x{difficulty.number}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
