import React, { useContext } from "react";
import { data } from "../App";

const ChildC = (props) => {
  const { childb } = props;

  const user = useContext(data);

  return (
    <div>
      <h1 className="text-5xl font-bold text-green-900">
        Child-C {user} {childb}
      </h1>
    </div>
  );
};

export default ChildC;
