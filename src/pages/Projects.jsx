import { useState } from 'react';
import Navbar from '../Navbar';
import './Projects.css';

function Projects() {
  const [activeTab, setActiveTab] = useState('ml'); // Default to ML tab

  // Data from your Resume
  const mlProjects = [
    {
      title: "Agentic Hybrid RAG Engine",
      description: "Architected a Neuro-Symbolic RAG system integrating Knowledge Graphs (Neo4j) and Vector Search (Qdrant). Improved accuracy by 106% over naive baselines using a Semantic Router.",
      skills: ["Python", "Neo4j", "LangChain", "Docker", "Qdrant"],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*9qF8r1d3qF8r1d3.png", // Placeholder
      link: "https://github.com/RaSh6119" // Link to your GitHub
    },
    {
      title: "Photo Memory Finder",
      description: "Serverless cloud app on GCP using Vertex AI and Gemini 2.5 Flash for multimodal photo search. Achieved <2s latency for concurrent uploads with a serverless event-driven architecture.",
      skills: ["GCP", "React", "Vertex AI", "Pinecone", "Gemini API"],
      image: "https://cloud.google.com/static/vertex-ai/docs/images/vertex-ai-overview.png", // Placeholder
      link: "https://github.com/RaSh6119"
    },
    {
      title: "AMD Ryzen AI App (HackCU 11)",
      description: "Secured 2nd place among 50+ teams by building an optimized AI application running locally on AMD Ryzen AI hardware.",
      skills: ["AMD Ryzen AI", "Computer Vision", "Optimization"],
      image: "https://images.anandtech.com/doci/18739/AMD_Ryzen_AI_Logo_678x452.jpg", // Placeholder
      link: "https://github.com/RaSh6119"
    }
  ];

  const roboticsProjects = [
    {
      title: "DEFT: Diffusion-Based Trajectory Gen",
      description: "Developed a generative AI framework for robot manipulator trajectories. Improved transport task success from 42% to 99% under failure conditions using diffusion models.",
      skills: ["PyTorch", "Diffusion Models", "Robotics", "Simulation"],
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJtZ3Z5bmx5Z3Z5bmx5/3o7abAHdYvZdBNcJ7G/giphy.gif", // Placeholder
      link: "https://github.com/RaSh6119"
    },
    {
      title: "Autonomous Tic-Tac-Toe Arm",
      description: "Designed a 6-DOF robotic arm system capable of playing Tic-Tac-Toe against humans using computer vision for state detection and motion planning.",
      skills: ["ROS2", "MoveIt", "OpenCV", "Kinematics"],
      image: "https://miro.medium.com/max/1400/1*c_fiB-YgbnMl6nntYGB7tA.gif", // Placeholder
      link: "https://github.com/RaSh6119"
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
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="skills"><strong>Stack:</strong> {project.skills.join(", ")}</p>
                <p className="description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="view-btn">View Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;