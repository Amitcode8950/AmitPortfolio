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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {strengths.map((s, index) => (
            <div className="glass-panel animate-on-scroll" style={{ padding: '24px' }} key={index}>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
