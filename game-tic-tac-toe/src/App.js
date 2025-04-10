import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Game from "./components/Game";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;