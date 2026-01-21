/* Navbar.js */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Side: Logo */}
        <Link to="/" className="navbar-logo">
          Rahul Shetty<span className="dot"></span>
        </Link>
        
        {/* Right Side: Links */}
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <a href="/Rahul_ML.pdf" target="_blank" rel="noopener noreferrer" className="nav-item">Resume</a>
          <a href="https://www.linkedin.com/in/rahul-shetty-8b417a179" target="_blank" rel="noopener noreferrer" className="nav-item">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;