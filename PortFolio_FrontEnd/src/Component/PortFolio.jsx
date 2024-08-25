import React from 'react';
import '../CSS/PortFolio.css';

const projects = [
  {
    title: 'Todo List App',
    description: 'A simple and efficient todo list application to manage daily tasks.',
    githubLink: 'https://github.com/ashu8950/toDoList',
    deployedLink: 'https://to-do-list-six-psi-80.vercel.app/'
  },
  {
    title: 'Tour & Travel Website',
    description: 'A dynamic tour and travel booking website offering a wide range of destinations and packages.',
    githubLink: 'https://github.com/ashu8950/TourTravel',
    deployedLink: 'https://tour-travel-henna.vercel.app/'
  },
  {
    title: 'Twitter Clone',
    description: 'A clone of Twitter built using React and Node.js, featuring real-time updates and user interactions.',
    githubLink: 'https://github.com/ashu8950/Twiter_Clone',
    deployedLink: 'https://yourtwitterclone.com'
  },
  {
    title: 'Zerodha',
    description: 'A frontend clone of the Zerodha trading platform, created using React.',
    githubLink: 'https://github.com/ashu8950/Zerodha',
    deployedLink: 'https://zerodhasite.netlify.app/'
  }
];


const PortFolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;
