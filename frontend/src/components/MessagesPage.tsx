import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MessagesPage.css";

const MessagesPage = () => {
  const [messages, setMessages] = useState<{ id: number; msg: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/messages`,
        );
        setMessages(response.data.reverse());
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch messages. Please try again later.");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleNextClick = () => {
    if (startIndex + 4 < messages.length) {
      setStartIndex((prevIndex) => prevIndex + 4);
    }
  };

  const handleBackClick = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex((prevIndex) => prevIndex - 4);
    }
  };

  const displayedMessages = messages
    .filter((message) =>
      message.msg.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(startIndex, startIndex + 4)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setStartIndex(0);
  };

  if (loading) {
    return <p>Loading messages...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="messages-container">
      <div className="search-container">
        <h2>Messages</h2>
        <input
          className="search-bar"
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="button-container">
          <button onClick={handleBackClick}>Back</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>

      {displayedMessages.length === 0 ? (
        <p>No messages available.</p>
      ) : (
        <>
          {displayedMessages.map((message, index) => (
            <div key={index} className="message">
              <h3>Message ID: {message.id}</h3>
              <p>{message.msg}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MessagesPage;
