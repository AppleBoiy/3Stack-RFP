import React from "react";
import "./EmailConfirmationPage.css";

function EmailConfirmationPage() {
  return (
    <div className="email-confirmation-container">
      <div className="email-confirmation-content">
        <img src="/mail.png" alt="Email icon" className="email-icon" />
        <h2>Waiting for Email Confirmation</h2>
        <p>
          Please check your email and follow the instructions to confirm your
          email address.
        </p>
        <p>If you haven't received the email, please check your spam folder.</p>
      </div>
    </div>
  );
}

export default EmailConfirmationPage;
