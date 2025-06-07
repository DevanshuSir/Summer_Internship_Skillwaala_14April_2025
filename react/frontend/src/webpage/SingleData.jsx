import React from "react";
import { useParams } from "react-router-dom";

const SingleData = () => {
  const id = useParams();
  const { datakey } = id;
  return (
    <div>
      <h1>SingleData 🧾 {datakey}</h1>
    </div>
  );
};

export default SingleData;
