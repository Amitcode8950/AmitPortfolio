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
      <div className="project-header">
        <span className="project-duration">{project.duration}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>
      
      <div className="project-details">
        <div className="detail-item">
          <strong>Problem:</strong> {project.problem}
        </div>
        <div className="detail-item">
          <strong>Approach:</strong> {project.approach}
        </div>
      </div>

      <div className="project-impact">
        <h4>Impact & Learning:</h4>
        <p>{project.impact}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span className="tag" key={i}>{tag}</span>
        ))}
      </div>
      
      <a href={project.link} className="btn-secondary" style={{width: '100%'}}>View Details</a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Secure Bank Backend (Project)',
      duration: '03/2026',
      problem: 'Maintaining strict data consistency and preventing inconsistent states in transactional simulations.',
      approach: 'Built a transaction-safe backend using MongoDB transactions and implemented secure authentication with RBAC.',
      impact: 'Focused on Preventing race conditions and ensuring reliable state management in financial flows.',
      tags: ['Node.js', 'MongoDB', 'JWT', 'System Design'],
      link: '#'
    },
    {
      title: 'Finance Analytics Dashboard',
      duration: '03/2026',
      problem: 'Handling batch processing of large financial datasets for performance-driven visualization.',
      approach: 'Processed 50K+ records using optimized PostgreSQL queries and improved load times by 70%.',
      impact: 'Demonstrated ability to optimize data pipelines and improve end-to-end system performance.',
      tags: ['Python', 'PostgreSQL', 'Data Engineering', 'React'],
      link: '#'
    },
    {
      title: 'Real-Time Collaboration Platform',
      duration: '10/2024',
      problem: 'Implementing real-time synchronization and exploring conflict resolution concepts in multi-user environments.',
      approach: 'Utilized WebSockets for live sync and explored basic conflict resolution logic for concurrent edits.',
      impact: 'Maintained low-latency updates and gained deep insight into distributed state management.',
      tags: ['WebSockets', 'Node.js', 'React', 'Algorithms'],
      link: '#'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Engineering <span className="text-gradient">Projects</span></h2>
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
