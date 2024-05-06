import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MessagesPage from "./components/MessagesPage";
import SendMessagePage from "./components/SendMessagePage";

const App: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/send_message" element={<SendMessagePage />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
};

export default App;
