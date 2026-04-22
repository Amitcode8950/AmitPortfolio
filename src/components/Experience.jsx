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
        <h3 className="timeline-role text-gradient">{exp.role}</h3>
        <h4 className="timeline-company">{exp.company}</h4>
        <p className="timeline-duration">{exp.duration}</p>
        <ul className="timeline-desc-list">
          {Array.isArray(exp.desc) ? (
            exp.desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          ) : (
            <li>{exp.desc}</li>
          )}
        </ul>
        <div className="timeline-links">
          {exp.links && exp.links.map((link, i) => (
            <button className="link-btn" key={i}>{link}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Zaalima Development Pvt. Ltd',
      duration: '01/2026 - Present | Bahadurgarh, Haryana',
      desc: [
        'Contributed to backend services for high-concurrency transaction-based systems.',
        'Improved API performance and reliability using specialized indexing and caching strategies.',
        'Assisted in modularizing monolithic components into a service-based architecture.',
        'Implemented secure authentication flows using JWT and role-based access control (RBAC).'
      ],
      links: ['Portfolio', 'GitHub']
    },
    {
      role: 'Full Stack Intern',
      company: 'Future Interns',
      duration: '01/2024 - 05/2024 | Remote',
      desc: [
        'Built a real-time analytics dashboard with WebSocket integration for live data updates.',
        'Developed REST APIs and optimized database queries for performance gains.',
        'Improved frontend performance and aesthetics, achieving high Lighthouse scores (90+).'
      ],
      links: ['Live Demo', 'GitHub']
    },
    {
      role: "GenAI & MERN Stack Trainee",
      company: "WEBTECH INDUSTRY",
      duration: "Sep 2024 - Oct 2024",
      desc: [
        "Completed a hands-on workshop covering MERN stack development and Generative AI fundamentals.",
        "Built mini projects integrating APIs and AI-driven features into web applications."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "CODTECH IT SOLUTIONS",
      duration: "Jul 2024 - Sep 2024",
      desc: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Built multiple frontend projects focusing on UI/UX improvements and cross-device compatibility."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "CodSoft",
      duration: "Jul 2024 - Aug 2024",
      desc: [
        "Worked on real-world web development projects, strengthening fundamentals in frontend development.",
        "Gained experience in project-based learning and agile workflows."
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "Self / Personal Projects",
      duration: "Jul 2024 - Aug 2024",
      desc: [
        "Built personal frontend projects using JavaScript and modern web design principles.",
        "Focused on improving UI design, interactivity, and performance optimization."
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
