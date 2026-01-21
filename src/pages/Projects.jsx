import { useState } from 'react';
import Navbar from '../Navbar';
import './Projects.css';

function Projects() {
  const [activeTab, setActiveTab] = useState('ml');

  // --- MACHINE LEARNING PROJECTS ---
  const mlProjects = [
    {
      title: "Agentic Hybrid RAG Engine",
      description: "Architected a Neuro-Symbolic RAG system integrating Knowledge Graphs (Neo4j) and Vector Search. Improved accuracy by 106% using a Semantic Router.",
      skills: ["Python", "Neo4j", "LangChain", "Qdrant"],
      image: "agentic-demo.mp4",
      links: {
        code: "https://github.com/RaSh6119/Agentic-Hybrid-RAG-Engine",
        paper: "", 
        video: "" 
      }
    },
    {
      title: "Photo Memory Finder",
      description: "Built a serverless multimodal cloud app on GCP (Vertex AI, Cloud Run) to search photos via text. Achieved <2s latency.",
      skills: ["GCP", "Vertex AI", "React", "Gemini 2.5"],
      image: "photo-demo.mp4",
      links: {
        code: "https://github.com/RaSh6119/Photo-Memory-Finder",
        demo: "https://www.youtube.com/watch?v=yOYm1MJ0z8A",
      }
    },
    {
      title: "Ansh.ai - Real time AI Conversational Journal",
      description: "Secured 2nd place at HackCU 11. Built an optimized AI application running locally on AMD Ryzen AI hardware.",
      skills: ["AMD Ryzen AI", "Computer Vision", "Optimization"],
      image: "ansh-demo.mp4",
      links: {
        code: "https://github.com/RaSh6119/HackCU11",
        video: "https://youtu.be/1wwqeeN3aRM"
      }
    },
    {
      title: "NLC2CMD: RAG Implementation",
      description: "Implemented a Retrieval-Augmented Generation (RAG) system to accurately convert natural language instructions into functional Command Line Interface (CLI) commands.",
      skills: ["RAG", "NLP", "Python", "Shell"],
      // Use a placeholder image or add your own GIF/Screenshot later
      image: "nlc2cmd.png", 
      links: {
        code: "https://github.com/RaSh6119/NLC2CMD/tree/rs/rag_implementation",
        paper: "", 
        video: "" 
      }
    }
  ];

  // --- ROBOTICS PROJECTS ---
  const roboticsProjects = [
    {
      title: "DEFT: Failure Recovery in Robots",
      description: "Generative AI framework for robot trajectories. Improved transport task success from 42% to 99% under failure conditions.",
      skills: ["PyTorch", "Diffusion Model", "Robotics"],
      image: "robot-demo.mp4",
      links: {
        // code: "https://github.com/RaSh6119",
        paper: "Diffusion_Failure_Recovery_ICRA_2026.pdf",
        video: "https://drive.google.com/drive/folders/1ckgJSAS3jynshk8qbAzHzp9Or98flMsv?usp=sharing"
      }
    },
    {
      title: "AWS DeepRacer Autonomous Driving",
      description: "Trained a Reinforcement Learning (RL) agent to drive autonomously on a simulated track. Optimized reward functions using waypoints and speed parameters.",
      skills: ["Reinforcement Learning", "AWS DeepRacer", "Python"],
      // Placeholder image for DeepRacer
      image: "deepracer-demo.mp4",
      links: {
        code: "https://github.com/RaSh6119/Deepracer_Project_Final",
        // PASTE YOUR SPECIFIC LINKS BELOW
        paper: "Report_LegoRacers-1.pdf", 
        video: "" 
      }
    }
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <h1 className="projects-title">Featured Projects</h1>

        {/* TAB BUTTONS */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'ml' ? 'active' : ''}`}
            onClick={() => setActiveTab('ml')}
          >
            Machine Learning / AI
          </button>
          <button 
            className={`tab-btn ${activeTab === 'robotics' ? 'active' : ''}`}
            onClick={() => setActiveTab('robotics')}
          >
            Robotics
          </button>
        </div>
        
        {/* GRID DISPLAY */}
        <div className="project-grid">
          {(activeTab === 'ml' ? mlProjects : roboticsProjects).map((project, index) => (
            <div key={index} className="project-card">
              
              {/* IMAGE AREA (Hover Trigger) */}
              <div className="card-image-wrapper">
                {/* The Smart Check: Is it a video or an image? */}
                {project.image.endsWith('.mp4') ? (
                  <video 
                    src={project.image} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="project-img" 
                  />
                ) : (
                  <img src={project.image} alt={project.title} className="project-img" />
                )}
                
                {/* OVERLAY (Stays the same) */}
                <div className="image-overlay">
                  {project.links.code && <a href={project.links.code} target="_blank" rel="noreferrer" className="overlay-btn">View Code</a>}
                  {project.links.paper && <a href={project.links.paper} target="_blank" rel="noreferrer" className="overlay-btn">Read Paper</a>}
                  {project.links.video && <a href={project.links.video} target="_blank" rel="noreferrer" className="overlay-btn">Watch Video</a>}
                  {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer" className="overlay-btn">Live Demo</a>}
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="skills"><strong>Stack:</strong> {project.skills.join(", ")}</p>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;