import React from "react";

const Another = ({ name }) => {
  const para = {
    textAlign: "center",
    color: "gray",
  };

  return (
    <div className="main">
      <h2 style={{ textAlign: "center", color: "brown" }}>
        Another Comp {name} ❤️
      </h2>
      <p style={para}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        asperiores quia accusamus minus obcaecati hic dolore, harum ad veritatis
        doloremque.
      </p>
    </div>
  );
};

export default Another;
