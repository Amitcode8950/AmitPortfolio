import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI/UX',
      skills: ['Reactjs', 'Angularjs', 'Vuejs', 'Redux', 'JavaScript ES6', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'SQL', 'Redis', 'Socket.IO', 'JWT', 'RESTful API', 'Microservices']
    },
    {
      title: 'Data Analysis & ML',
      skills: ['Python', 'Pandas', 'Numpy', 'MatplotLib', 'Seaborn', 'Microsoft Power BI', 'EDA', 'GenAI Integration']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Docker', 'Git', 'GitHub', 'npm', 'Postman', 'Vercel', 'CI/CD Pipelines', 'Visual Studio Code', 'Cursor']
    },
    {
      title: 'Fundamentals',
      skills: ['DSA with Java', 'System Design', 'Problem Solving', 'API Design']
    },
    {
      title: 'Languages',
      skills: ['Hindi (Native)', 'English (Professional Working Proficiency)']
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical <span className="text-gradient">Skillset</span></h2>
        
        <div className="skills-wrapper">
          {skillCategories.map((category, idx) => (
            <div className={`skill-category animate-on-scroll delay-${(idx + 1) * 100}`} key={idx}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-container">
                {category.skills.map((skill, index) => (
                  <div className="skill-pill" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
