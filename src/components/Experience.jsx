import React, { useRef } from 'react';
import './Experience.css';
import useTilt from '../hooks/useTilt';

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div 
      ref={cardRef}
      className={`timeline-item glass-panel animate-on-scroll delay-${(index + 1) * 100}`}
    >
      <div className="timeline-content">
        <h3 className="timeline-role">{exp.role}</h3>
        <h4 className="timeline-company text-gradient">{exp.company}</h4>
        <p className="timeline-duration">{exp.duration}</p>
        <ul style={{ marginTop: '1rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
          {exp.points.map((point, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Zaalima Development Pvt. Ltd',
      role: 'Web Developer',
      duration: '03/2026 - Present | Bahadurgarh, Haryana',
      points: [
        'Architecting production-grade MERN applications handling 5K+ daily requests',
        'Implemented JWT token-based authentication with refresh token rotation',
        'Optimized MongoDB queries reducing response time from 800ms to 120ms',
        'Designed role-based access control (RBAC) supporting multi-tier roles'
      ]
    },
    {
      company: 'Future Interns',
      role: 'Full Stack Web Developer',
      duration: '03/2026 | Not Specified',
      points: [
        'Architecting scalable MERN applications with Express.js APIs',
        'Achieved 40% performance gains through MongoDB optimization',
        'Deployed production apps to Vercel with automated CI/CD pipelines'
      ]
    },
    {
      company: 'CodTech IT Solutions',
      role: 'Frontend Developer',
      duration: '09/2024 - 10/2024 | Not Specified',
      points: [
        'Built responsive React.js interfaces with Tailwind CSS achieving 95 Lighthouse scores',
        'Implemented component-based architecture reducing code duplication',
        'Collaborated with UI/UX teams on pixel-perfect implementations'
      ]
    },
    {
      company: 'CodSoft & Prodigy InfoTech',
      role: 'Web Developer',
      duration: '07/2024 - 12/2024 | Not Specified',
      points: [
        'Developed 8 full-featured web projects including dashboards and e-commerce platforms',
        'Implemented WCAG 2.1 accessibility standards and cross-browser testing',
        'Managed Git workflows for seamless team collaboration'
      ]
    },
    {
      company: 'WebTech Industry',
      role: 'Frontend Web Developer (GenAI/ML)',
      duration: '09/2024 - 10/2024 | Not Specified',
      points: [
        'Explored GenAI integration in React frontends',
        'Built machine learning-powered data visualization dashboards',
        'Participated in cross-functional sprints with ML engineers'
      ]
    }
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Professional <span className="text-gradient">Experience</span></h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard exp={exp} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
