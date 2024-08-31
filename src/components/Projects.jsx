import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>DB Modify and Report Generator</h2>
          <p>
            This is a part of my project which i created during my offline internship for accessing database using the app.
          </p>
          <a href="https://github.com/MridulHu/DB-Modify-and-Report-Generator.git" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="project-item">
          <h2>CuraSphere</h2>
          <p>
          The Project consists of a Working Interface for the Problem Statement Received During the TechNova Hackathon.
          </p>
          <a href="https://github.com/MridulHu/CuraSphere.git" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
