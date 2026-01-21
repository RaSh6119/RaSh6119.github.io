import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* This adds the Tabs at the top */}
      <Navbar />
      
      {/* This renders the Home page (with your photo) */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<h2 style={{textAlign: 'center'}}>Projects Coming Soon</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;