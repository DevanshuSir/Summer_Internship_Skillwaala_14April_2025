import React from "react";
import { useState } from "react";

// useState hook - state management -  react

const Counts = () => {
  // let num = 1;

  const [num, setNum] = useState(1);
  const [countName, setCountName] = useState("Counts");

  // function handleCounts() {
  //   num++;
  //   console.log(num++);
  //   // console.log("Count Function 😍");
  // }

  function handleIncrement() {
    setNum(num + 1);
  }

  function handleName() {
    setCountName("New Counts ");
  }

  function handleDecrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>
        {countName} 🌎 {num}{" "}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleName}>Change</button>
    </div>
  );
};

export default Counts;
