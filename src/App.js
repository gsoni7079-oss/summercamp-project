import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/program";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">🌞 SummerCamp 2026</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <h3>SummerCamp 2026</h3>
        <p>Building Confidence • Creating Memories • Inspiring Future</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </Router>
  );
}

export default App;