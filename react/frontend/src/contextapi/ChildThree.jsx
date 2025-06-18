import React, { useContext } from "react";
import { data } from "../App";

const ChildThree = () => {
  const firstName = useContext(data);

  return (
    <div>
      <h1 className="text-5xl font-bold text-orange-600">
        Child_Three {firstName}
      </h1>
    </div>
  );
};

export default ChildThree;
