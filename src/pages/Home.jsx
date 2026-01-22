import React from 'react';
import './Home.css';
import myPhoto from '../assets/me.jpg'; 
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="img-container">
            <img src={myPhoto} alt="Rahul Profile" className="profile-img" />
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

          <div className="social-links">
            <a href="https://linkedin.com/in/rahul-shetty-8b417a179" target="_blank" rel="noreferrer" className="social-btn"><FaLinkedin /></a>
            <a href="https://github.com/RaSh6119" target="_blank" rel="noreferrer" className="social-btn"><FaGithub /></a>
            <a href="mailto:rahulshetty61199@gmail.com" className="social-btn"><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="scroll-indicator">
           <p>Scroll</p>
           <FaChevronDown className="bounce" />
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION (NEW) */}
      <section className="section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          
          {/* Role 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="card-header">
                <h3>Graduate Researcher</h3>
                <span className="year-badge">Jan 2025 - Present</span>
              </div>
              <p className="company">CU Boulder (Human Interaction & Robotics Group)</p>
              <ul className="job-details">
                <li>Developed <strong>DEFT</strong>, a diffusion-based generative AI framework for robot trajectories, improving success rates from 42% to 99%.</li>
                <li>Designed task-conditioned diffusion models for zero-shot adaptation to hardware failures.</li>
                <li>Validated on 4.7M+ trajectories; Manuscript submitted to <strong>ICRA 2026</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Role 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="card-header">
                <h3>Software Development Engineer</h3>
                <span className="year-badge">July 2022 - July 2024</span>
              </div>
              <p className="company">Nomura</p>
              <ul className="job-details">
                <li>Migrated 700+ data marts (13TB) to Snowflake on AWS, saving $800k in infrastructure costs.</li>
                <li>Built a Snowpark framework using Python to cut data processing time by 75%.</li>
                <li>Enhanced the Front Office Supervision portal, optimizing Oracle DB fetches and SpringBoot backend.</li>
              </ul>
            </div>
          </div>

          {/* Role 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="card-header">
                <h3>Software Engineering Intern</h3>
                <span className="year-badge">Jan 2022 - June 2022</span>
              </div>
              <p className="company">Nomura</p>
              <ul className="job-details">
                <li>Automated Git release details via JIRA API, eliminating manual errors.</li>
                <li>Led the migration of a JSP monitoring portal to a modern <strong>React.js</strong> frontend.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SKILLS SECTION (NEW) */}
      <section className="section skills-section">
        <h2 className="section-title">Technical Arsenal</h2>
        <div className="skills-grid">
          {/* Category 1 */}
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Python</span><span>Java</span><span>C++</span><span>SQL</span><span>MATLAB</span><span>Bash</span>
            </div>
          </div>
          {/* Category 2 */}
          <div className="skill-category">
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span>TensorFlow</span><span>PyTorch</span><span>LangChain</span><span>RAG</span><span>GenAI</span><span>Knowledge Graphs</span><span>Computer Vision</span>
            </div>
          </div>
          {/* Category 3 */}
          <div className="skill-category">
            <h3>Tools & Cloud</h3>
            <div className="skill-tags">
              <span>AWS</span><span>GCP</span><span>Docker</span><span>Kubernetes</span><span>ROS2</span><span>React</span><span>Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATION SECTION */}
      <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="cards-grid">
          <div className="education-card">
            <div className="card-header">
              <h3>MS Computer Science</h3>
              <span className="year-badge">2024 - 2026</span>
            </div>
            <p className="university">University of Colorado, Boulder</p>
            <p className="card-detail">GPA: 3.8/4.0 | Focus: Robotics & ML</p>
          </div>
          <div className="education-card">
            <div className="card-header">
              <h3>B.Tech in ECE</h3>
              <span className="year-badge">2018 - 2022</span>
            </div>
            <p className="university">Sardar Patel Institute of Technology</p>
            <p className="card-detail">GPA: 9.1/10 | Focus: Data Structures & Algorithms</p>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="section contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <p className="contact-text">Interested in working together? Drop me a message below.</p>
          <form className="contact-form" action="https://formspree.io/f/mykkadqo" method="POST">
            <div className="form-group"><input type="text" name="name" placeholder="Name" required /></div>
            <div className="form-group"><input type="email" name="email" placeholder="Email" required /></div>
            <div className="form-group"><textarea name="message" rows="5" placeholder="Your Message..." required></textarea></div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer"><p>© Rahul Shetty, 2026</p></footer>
    </div>
  );
}

export default Home;