import React from "react";
import { Button } from "react-bootstrap";
import Counter from "./Counter";

const GameGrid = ({
  difficulty,
  screenHeight,
  setResult,
  result,
  setIsGaming,
}) => {
  // Function to get a random item from an array
  const getRandomItem = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  };

  const colorsArray = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "light",
  ];

  const [currentColor, setCurrentColor] = React.useState(
    getRandomItem(colorsArray)
  );

  // Function to randomize an array items
  const randomizationFun = (a, b) => {
    return 0.5 - Math.random();
  };

  const generateColorsButtons = () => {
    const otherColorsArray = colorsArray.filter(
      (color) => color !== currentColor
    );
    const buttonsArray = [];
    for (let i = 0; i < difficulty * difficulty - 1; i++) {
      buttonsArray.push(
        <Button
          key={i}
          variant={otherColorsArray[i % 5]}
          style={{
            width: `${100 / difficulty}%`,
            height: `${100 / difficulty}%`,
          }}
          onClick={handleColorCheck}
          value={otherColorsArray[i % 5]}
          className="shadow"
        ></Button>
      );
    }

    buttonsArray.push(
      <Button
        key={difficulty * difficulty}
        variant={currentColor}
        style={{
          width: `${100 / difficulty}%`,
          height: `${100 / difficulty}%`,
        }}
        onClick={handleColorCheck}
        value={currentColor}
        className="shadow"
      ></Button>
    );
    return buttonsArray.sort(randomizationFun);
  };

  const handleColorCheck = (e) => {
    if (e.target.value === currentColor) {
      setResult(result + 1);
      setCurrentColor(getRandomItem(colorsArray));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between m-3">
        <Counter setIsGaming={setIsGaming} />
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ fontSize: "2rem", fontWeight: "600", width: "30%" }}
        >
          Next:{" "}
          <Button
            variant={currentColor}
            style={{
              width: `30%`,
              height: `70%`,
            }}
            className="ml-2 shadow-lg"
          ></Button>
        </div>
      </div>
      <div
        className="d-flex flex-wrap shadow-lg colors-containers"
        style={{
          width: `${((difficulty === 25 ? 110 : 80) * screenHeight) / 100}px`,
          height: `${((difficulty === 25 ? 110 : 80) * screenHeight) / 100}px`,
        }}
      >
        {generateColorsButtons()}
      </div>
    </div>
  );
};

export default GameGrid;
