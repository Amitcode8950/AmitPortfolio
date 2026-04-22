import React, { useRef } from 'react';
import './Projects.css';
import useTilt from '../hooks/useTilt';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div 
      ref={cardRef}
      className={`project-card glass-panel animate-on-scroll delay-${(index + 1) * 100}`}
    >
      <div className="project-content">
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{project.duration}</span>
        <h3 className="project-title" style={{ marginTop: '0.5rem' }}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
        <a href={project.link} className="btn-secondary" style={{padding: '8px 24px'}}>View Details</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Bank Transaction System',
      duration: '03/2026',
      description: 'A production-grade banking app with JWT auth, supporting 1000+ concurrent users and ACID transactions for financial consistency.',
      tags: ['MERN', 'JWT', 'RBAC', 'MongoDB ACID'],
      link: '#'
    },
    {
      title: 'Finance Analytics Dashboard',
      duration: '03/2026',
      description: 'Interactive Power BI dashboards visualizing 50K+ records with automated ETL pipelines and Python trend forecasting.',
      tags: ['Power BI', 'Python', 'ETL', 'Data Analytics'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      duration: '11/2024 - 12/2024',
      description: 'Full-featured shopping platform with zero-downtime deployments and Redis caching strategies for high performance.',
      tags: ['Express.js', 'Redis', 'React', 'REST APIs'],
      link: '#'
    },
    {
      title: 'Health Analysis Platform',
      duration: '11/2024 - 12/2024',
      description: 'Microservices-based health app featuring biometric data processing and an AI-driven personalized health recommendation engine.',
      tags: ['Microservices', 'AI', 'Real-time Chat', 'Biometrics'],
      link: '#'
    },
    {
      title: 'Real-Time Collaboration App',
      duration: '07/2024 - 10/2024',
      description: 'A multi-user document editor supporting concurrent edits with operational transformations and low-latency WebSocket updates.',
      tags: ['WebSockets', 'OT Algorithms', 'Node.js', 'React'],
      link: '#'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Major <span className="text-gradient">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
