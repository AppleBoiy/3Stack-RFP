import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Sample React TypeScript</h1>
      <p>Experience the power of TypeScript in React.</p>
      <p>
        Sample React TypeScript showcases TypeScript's effectiveness in modern
        React applications.
      </p>
      <button className="cta-button">Get Started</button>
    </div>
  );
};

export default HomePage;
