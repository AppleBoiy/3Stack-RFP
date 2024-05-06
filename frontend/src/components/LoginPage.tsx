import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission
    // Implement your login logic here
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login Page</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="forgot-password">
        Forgot your password?{" "}
        <a href="#" className="reset-link">
          Reset it
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
