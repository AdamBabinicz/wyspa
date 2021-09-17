import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <Link to="/">
            <li>Start</li>
          </Link>
          <Link to="/opracowania">
            <li>Opracowania</li>
          </Link>
          <Link to="/wypr">
            <li>Wypr</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
