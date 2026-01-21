import React from 'react';
import './Home.css';
import myPhoto from '../assets/me.jpg'; 
// Import icons (ensure you ran: npm install react-icons)
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="img-container">
            <img 
              src={myPhoto} 
              alt="Rahul Profile" 
              className="profile-img" 
            />
            <div className="img-glow"></div>
          </div>
          
          <h1 className="home-title">
            Hi, I'm <span className="gradient-text">Rahul</span>
          </h1>
          
          <p className="home-description">
            I am a <strong>Machine Learning Engineer</strong> and <strong>Robotics Researcher</strong> currently 
            pursuing my MS in Computer Science at <strong>CU Boulder</strong>. My work focuses on 
            building <strong>Generative AI</strong> systems, <strong>Neuro-Symbolic RAG</strong> architectures, 
            and robust <strong>Robot Autonomy</strong>.
          </p>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://linkedin.com/in/rahul-shetty-8b417a179" target="_blank" rel="noreferrer" className="social-btn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/RaSh6119" target="_blank" rel="noreferrer" className="social-btn">
              <FaGithub />
            </a>
            <a href="mailto:rahulshetty61199@gmail.com" className="social-btn">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
           <p>Scroll</p>
           <FaChevronDown className="bounce" />
        </div>
      </section>

      {/* 2. EDUCATION SECTION */}
      <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="cards-grid">
          <div className="education-card">
            <div className="card-header">
              <h3>MS Computer Science</h3>
              <span className="year-badge">2024 - 2026</span>
            </div>
            <p className="university">University of Colorado, Boulder</p>
            <p className="card-detail">Focus: Robotics & Machine Learning</p>
          </div>
          
          <div className="education-card">
            <div className="card-header">
              <h3>B.Tech in ECE</h3>
              <span className="year-badge">2018 - 2022</span>
            </div>
            <p className="university">Sardar Patel Institute of Technology</p>
            <p className="card-detail">Mumbai, India</p>
          </div>
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="section contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <p className="contact-text">
            Interested in working together? Drop me a message below.
          </p>
          
          <form className="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© Rahul Shetty, 2026</p>
      </footer>

    </div>
  );
}

export default Home;