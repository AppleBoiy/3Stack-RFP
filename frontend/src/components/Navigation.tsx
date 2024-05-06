import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Logo
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li>
          <Link to="/reset" className="nav-link">
            Reset Password
          </Link>
        </li>
        <li>
          <Link to="/waiting" className="nav-link">
            Waiting Confirmation
          </Link>
        </li>
        <li>
          <Link to="/confirmed" className="nav-link">
            Confirmed
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
