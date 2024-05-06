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
            <Link to="/messages" className="nav-link">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/send_message" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
