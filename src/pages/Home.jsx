import './Home.css';
import myPhoto from '../assets/me.jpg'; 

function Home() {
  return (
    <div className="home-wrapper">
      
      {/* 1. HERO SECTION (Your Profile) */}
      <section className="hero-section">
        <div className="home-container">
          <img 
            src={myPhoto} 
            alt="Rahul Profile" 
            className="profile-img" 
          />
          <h1 className="home-title">Hi, I'm Rahul</h1>
          <p className="home-description">
            I am a <strong>Machine Learning Engineer</strong> and <strong>Robotics Researcher</strong> currently 
            pursuing my MS in Computer Science at <strong>CU Boulder</strong>. My work focuses on 
            building <strong>Generative AI</strong> systems, <strong>Neuro-Symbolic RAG</strong> architectures, 
            and robust <strong>robot autonomy</strong>. With experience in backend engineering 
            and cloud infrastructure, I bridge the gap between complex algorithms and 
            scalable real-world applications.
          </p>
        </div>
      </section>

      {/* 2. EDUCATION SECTION (Similar to reference) */}
      <section className="section education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <h3>Master of Science in Computer Science</h3>
          <p className="university">University of Colorado, Boulder</p>
          <p className="year">2024 - 2026</p>
        </div>
        <div className="education-card">
          <h3>Bachelor of Technology in ECE</h3>
          <p className="university">Sardar Patel Institute of Technology, Mumbai</p>
          <p className="year">2018 - 2022</p>
        </div>
      </section>

      {/* 3. CONTACT SECTION (At the end) */}
      <section className="section contact-section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Interested in working together? Feel free to reach out!
        </p>
        
        <a href="mailto:rahulshetty61199@gmail.com" className="email-link">
          rahulshetty61199@gmail.com
        </a>

        {/* Simple Contact Form Layout */}
        <form className="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Rahul Shetty, 2026</p>
      </footer>

    </div>
  );
}

export default Home;