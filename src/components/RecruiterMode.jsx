import React from 'react';
import './RecruiterMode.css';

const RecruiterMode = () => {
  return (
    <section className="recruiter-mode">
      <div className="container">
        <div className="glass-panel recruiter-card animate-on-scroll">
          <div className="recruiter-header">
            <div className="status-badge">
              <span className="dot"></span> Open to Backend Roles
            </div>
            <h2 className="text-gradient">Recruiter Mode</h2>
          </div>
          
          <div className="recruiter-content">
            <div className="summary-section">
              <h3>30-Second Summary</h3>
              <p>
                Backend-focused Software Engineer with experience building scalable APIs, 
                real-time systems, and data-driven applications. Strong in Data Structures, 
                System Design fundamentals, and performance optimization.
              </p>
              <p style={{ marginTop: '10px' }}>
                Targeting <strong>SDE roles (SDE 2 / aspiring SDE 3)</strong> focused on 
                backend systems and distributed architecture.
              </p>
            </div>
            
            <div className="highlights-section">
              <h3>Key Highlights</h3>
              <ul>
                <li>Contributed to ACID-compliant banking backend simulations.</li>
                <li>Reduced system latency by 85% via Redis & Query Tuning.</li>
                <li>Implemented modular architectures for scalable services.</li>
              </ul>
            </div>
            
            <div className="actions-section">
              <a href="/resume.pdf" className="btn-primary" download>
                <span>📄</span> Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <span>💬</span> Quick Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterMode;
