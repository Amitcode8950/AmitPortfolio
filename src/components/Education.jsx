import React from 'react';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Educational <span className="text-gradient">Background</span></h2>
        <div className="glass-panel education-card animate-on-scroll">
          <h3 className="education-title">B.Tech in Computer Science & Engineering</h3>
          <h4 className="education-school text-gradient">MDU Rohtak</h4>
          <p className="education-duration">07/2023 - 06/2027 | Rohtak, Haryana</p>
          <div className="education-content">
            <h4>Core Strengths</h4>
            <p>Strong foundation in problem solving and DSA with Java, with consistent contributions to coding challenges and algorithmic optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
