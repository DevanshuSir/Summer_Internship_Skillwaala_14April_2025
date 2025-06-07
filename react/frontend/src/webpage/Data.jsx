import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [value, setValue] = useState(200);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>@Data 🍁</h1>

      <h1>
        {value}{" "}
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Click
        </button>{" "}
      </h1>

      <div className="container">
        <div className="row">
          {product.map((value, index) => (
            <div
              key={index}
              className="col-md-3"
              style={{ width: "200px", height: "30vh", overflow: "hidden" }}
            >
              <div className="card">
                <Link to={`/single/${value.id}`}>
                  <img src={value.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <p className="card-text">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
