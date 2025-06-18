import React, { useContext } from "react";
import ChildThree from "./ChildThree";
import { data } from "../App";

const ChildTwo = () => {
  const firstName = useContext(data);

  return (
    <div>
      <h1 className="text-5xl text-blue-900 font-bold">
        Child_Two {firstName}
      </h1>
      <ChildThree />
    </div>
  );
};

export default ChildTwo;
