import React, { useState } from "react";
import axios from "axios";
import "./SendMessagePage.css";

const SendMessagePage = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(process.env.REACT_APP_API_URL);
  };

  return (
    <div className="send-message-container">
      <h2>Send Message</h2>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
        className="send-message-input-field"
      />
      <button onClick={handleSubmit} className="send-button">
        Send
      </button>
      {response && <p className="send-message-response">{response}</p>}
      {error && <p className="send-message-error">{error}</p>}
    </div>
  );
};

export default SendMessagePage;
