import React from "react";

const Counter = ({ setIsGaming }) => {
  const [counter, setCounter] = React.useState(60);
  const oneMinTimer = setTimeout(() => setCounter(counter - 1), 1000);
  if (counter === 0) {
    setIsGaming(false);
    window.clearTimeout(oneMinTimer);
  }

  return (
    <div style={{ fontSize: "2rem", fontWeight: "600" }}>Timer: {counter}</div>
  );
};

export default Counter;
