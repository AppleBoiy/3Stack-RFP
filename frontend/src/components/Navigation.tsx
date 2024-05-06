import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul className="nav-links">
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
      </div>
    </nav>
  );
};

export default Navigation;
