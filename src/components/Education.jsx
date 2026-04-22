import React from 'react';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Educational <span className="text-gradient">Background</span></h2>
        <div className="glass-panel animate-on-scroll" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>B.Tech in Computer Science & Engineering</h3>
          <h4 className="text-gradient" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>MDU Rohtak</h4>
          <p style={{ color: 'var(--text-secondary)' }}>07/2023 - 06/2027 | Rohtak, Haryana</p>
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Core Strengths</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Strong foundation in problem solving and DSA with Java, with consistent contributions to coding challenges and algorithmic optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
