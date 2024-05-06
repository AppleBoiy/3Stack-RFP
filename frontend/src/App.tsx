import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ConfirmationPage from "./components/ConfirmationPage";
import EmailConfirmationPage from "./components/EmailConfirmationPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route path="/waiting" element={<EmailConfirmationPage />} />
            <Route path="/confirmed" element={<ConfirmationPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
