import React, { useEffect } from "react";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  useEffect(() => {
    // Log a message to reassure users
    console.log(
      "ConfirmationPage component loaded. This message may appear twice in development mode with React Strict Mode enabled. It's expected behavior and does not indicate an issue.",
    );

    // Code to trigger something when the component is loaded
    // Your actual useEffect code goes here
  }, []);

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <img src="/checkIcon.png" alt="Check icon" className="check-icon" />
        <div className="confirmation-text">
          <h2>Confirmation Page</h2>
          <p>Your registration has been successfully confirmed.</p>
          <p>You can now login with your credentials.</p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
