import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
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
  const [difficulty, setDifficulty] = React.useState(0);
  const [counter, setCounter] = React.useState(60);
  const [result, setResult] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  // Function to randomize an array items
  const randomizationFun = (a, b) => {
    return 0.5 - Math.random();
  };

  const handleColorCheck = (e) => {
    if (e.target.value === currentColor) {
      setResult(result + 1);
      setCurrentColor(getRandomItem(colorsArray));
      // setBoxItems(generateColorsButtons());
    }
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
        key={25}
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
    // return buttonsArray.sort(randomizationFun);
    return buttonsArray;
  };

  // Setting one minute timer
  const setTimer = () => {
    const oneMinTimer = setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      window.clearTimeout(oneMinTimer);
    }
  };

  const handleGameReset = () => {
    setCurrentColor(getRandomItem(colorsArray));
    setDifficulty(0);
    setCounter(60);
    setResult(0);
  };

  const [boxItems, setBoxItems] = React.useState(generateColorsButtons());

  return (
    <div className="App d-flex justify-content-center">
      {difficulty === 0 ? (
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
                }}
                className="shadow-lg"
              >
                {difficulty.number}x{difficulty.number}
              </Button>
            ))}
          </div>
        </div>
      ) : counter !== 0 ? (
        <div>
          <div className="d-flex justify-content-between m-3">
            <div style={{ fontSize: "2rem", fontWeight: "600" }}>
              Timer: {counter}
            </div>
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
              width: `${
                ((difficulty === 25 ? 110 : 80) * screenHeight) / 100
              }px`,
              height: `${
                ((difficulty === 25 ? 110 : 80) * screenHeight) / 100
              }px`,
            }}
          >
            {/* {boxElements()} */}
            {generateColorsButtons()}
            {/* {boxItems} */}
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div style={{ fontSize: "5rem", fontWeight: "600" }}>Game Over</div>

          <p style={{ fontSize: "2rem", fontWeight: "600" }}>
            Your score: <span className="text-success">{result}</span>
          </p>

          <Button className="mt-5" size="lg" onClick={handleGameReset}>
            Try Again
          </Button>
        </div>
      )}
      {setTimer()}
    </div>
  );
}

export default App;
