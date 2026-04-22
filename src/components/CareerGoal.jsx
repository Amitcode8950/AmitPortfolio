import React from 'react';
import './CareerGoal.css';

const CareerGoal = () => {
  return (
    <section className="section career-goal" id="career">
      <div className="container">
        <div className="glass-panel career-card animate-on-scroll">
          <h2 className="text-gradient">What I’m Looking For</h2>
          <p className="career-statement">
            Seeking backend-focused SDE roles where I can build scalable systems, 
            work on real-world distributed architectures, and grow toward Senior / SDE 3 level engineering.
          </p>
          <div className="career-points">
            <div className="point">
              <span className="icon">🚀</span>
              <span>High-scale system development</span>
            </div>
            <div className="point">
              <span className="icon">⚙️</span>
              <span>Distributed architecture design</span>
            </div>
            <div className="point">
              <span className="icon">📈</span>
              <span>Performance-driven engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGoal;
