import React from "react";
import "./App.css";
import GameOver from "./components/GameOver";
import Difficulty from "./components/Difficulty";
import GameGrid from "./components/GameGrid";

function App() {
  const [difficulty, setDifficulty] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [isGaming, setIsGaming] = React.useState(true);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  const handleGameReset = () => {
    setDifficulty(0);
    setResult(0);
  };

  console.log(localStorage);

  return (
    <div className="App d-flex justify-content-center">
      {difficulty === 0 ? (
        <Difficulty setDifficulty={setDifficulty} setIsGaming={setIsGaming} />
      ) : isGaming ? (
        <GameGrid
          difficulty={difficulty}
          screenHeight={screenHeight}
          setResult={setResult}
          result={result}
          setIsGaming={setIsGaming}
        />
      ) : (
        <GameOver result={result} handleGameReset={handleGameReset} />
      )}
    </div>
  );
}

export default App;
