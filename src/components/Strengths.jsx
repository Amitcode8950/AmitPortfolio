import React from 'react';

const Strengths = () => {
  const strengths = [
    { title: 'Problem-solving', desc: 'Strong DSA foundation with consistent LeetCode problem-solving' },
    { title: 'Learning', desc: 'Continuous learner exploring GenAI & Web3' },
    { title: 'Work Under Pressure', desc: 'Proven ability to work under pressure in hackathons' },
    { title: 'API Design', desc: 'Experience in RESTful API design best practices' },
    { title: 'Deployment Skill', desc: 'Production deployment experience with Vercel' }
  ];

  return (
    <section className="section" id="strengths">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My <span className="text-gradient">Strengths</span></h2>
        <div className="strengths-grid">
          {strengths.map((s, index) => (
            <div className="glass-panel strength-card animate-on-scroll" key={index}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
