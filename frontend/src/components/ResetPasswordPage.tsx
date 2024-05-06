import React, { useState } from "react";
import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission
    // Implement your reset password logic here
    console.log("Resetting password for:", email);
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword} className="reset-password-form">
        <div className="form-group reset-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
