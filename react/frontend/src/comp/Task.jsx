import React from "react";

const Task = () => {
  const tasks = [
    { myTask: "Buy Bike" },
    { myTask: "Buy I-phone" },
    { myTask: "Buy Car" },
    { myTask: "Buy ToyCar" },
  ];

  return (
    <div>
      <h1>Tasks 🧾</h1>
      {tasks.map((items, index) => (
        <ul key={index}>
          <li>{items.myTask}</li>
        </ul>
      ))}
    </div>
  );
};

export default Task;
