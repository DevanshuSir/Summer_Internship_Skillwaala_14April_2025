import React from "react";

const Greeting = (props) => {
  //   console.log(props);

  const { name } = props;

  return (
    <div>
      <h1>Hello Good Morning {name} ❤️</h1>
    </div>
  );
};

export default Greeting;
