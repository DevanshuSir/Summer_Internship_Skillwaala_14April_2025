import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "brown", color: "white" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>LogOut</button>
      </h1>
    </div>
  );
};

export default Navbar;
