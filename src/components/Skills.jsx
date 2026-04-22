import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'REST APIs', 'Spring Boot Basics']
    },
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Fundamentals',
      skills: ['Data Structures & Algorithms', 'System Design Basics', 'Database Normalization', 'Object Oriented Programming']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Docker Basics', 'Git', 'GitHub', 'Postman', 'Vercel', 'VS Code', 'Cursor']
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
