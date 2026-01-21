import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        {/* Internal Links (Client-side routing) */}
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/projects" className="nav-item">Projects</Link>
        
        {/* External Links (Opens in new tab) */}
        <a href="/Rahul_ML.pdf" target="_blank" rel="noopener noreferrer" className="nav-item">Resume</a>
        <a href="https://www.linkedin.com/in/rahul-shetty-8b417a179" target="_blank" rel="noopener noreferrer" className="nav-item">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;