import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const Counter = () => {
  const counts = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter 🔢- <span style={{ color: "green" }}>{counts}</span>{" "}
      </h1>

      <button
        style={{
          backgroundColor: "green",
          border: "none",
          color: "white",
          padding: "4px",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        style={{
          backgroundColor: "red",
          border: "none",
          color: "white",
          padding: "4px",
          margin: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
