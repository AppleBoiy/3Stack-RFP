import React, { useState } from "react";
import "./RegisterPage.css";

interface RegisterProps {
  onRegister?: () => void;
}

const RegisterPage = ({ onRegister }: RegisterProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    // Implement your registration logic here
    console.log("Registering with:", { username, password, email });
    // Call onRegister if provided
    if (onRegister) {
      onRegister();
    }
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
