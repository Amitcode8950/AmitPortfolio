import React from 'react';
import './EngineeringDepth.css';

const EngineeringDepth = () => {
  const dsaStats = [
    { label: 'Problems Solved', value: '100+', sub: 'LeetCode / GFG' },
    { label: 'Key Focus', value: 'Graphs, DP, Trees', sub: 'Algorithmic Depth' },
    { label: 'Core Skills', value: 'Problem Solving', sub: 'Strong Fundamentals' }
  ];

  const skillCards = [
    {
      title: 'System Knowledge',
      icon: '⚖️',
      skills: ['Caching (Redis basics)', 'API Design (REST)', 'DB Design (SQL vs NoSQL)', 'Intro to Message Queues']
    },
    {
      title: 'Backend Engineering',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Frontend & Tools',
      icon: '🛠️',
      skills: ['React', 'JavaScript (ES6+)', 'Docker Basics', 'Git / GitHub']
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      skills: ['DSA', 'System Design Basics', 'REST API Best Practices', 'Database Normalization']
    }
  ];

  return (
    <section className="section engineering-depth" id="depth">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Engineering <span className="text-gradient">Depth</span></h2>
        
        <div className="dsa-stats-grid animate-on-scroll">
          {dsaStats.map((stat, i) => (
            <div className="stat-card glass-panel" key={i}>
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="skills-depth-grid">
          {skillCards.map((card, i) => (
            <div className="depth-card glass-panel animate-on-scroll" key={i} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="depth-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul className="depth-skills-list">
                {card.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringDepth;
