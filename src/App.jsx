import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects'; // <--- 1. Import the new file
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 2. Update this line to use the Component, not text */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;