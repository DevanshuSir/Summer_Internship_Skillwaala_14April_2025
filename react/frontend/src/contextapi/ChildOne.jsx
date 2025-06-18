import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-green-900">Child_One</h1>
      <ChildTwo />
    </div>
  );
};

export default ChildOne;
