import React from "react";
import ChildC from "./ChildC";

const ChildB = (props) => {
  const { childa } = props;
  return (
    <div>
      <h1 className="text-5xl font-bold text-blue-700">Child-B</h1>
      <ChildC childb={childa} />
    </div>
  );
};

export default ChildB;
