import React from "react";
import ChildB from "./ChildB";

const ChildA = (props) => {
  const { user } = props;
  return (
    <div>
      <h1 className="text-5xl font-bold text-red-700">Child-A</h1>
      <ChildB childa={user} />
    </div>
  );
};

export default ChildA;
