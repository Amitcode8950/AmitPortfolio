import React from 'react';

const Certifications = () => {
  const certs = [
    { title: 'Artificial Intelligence Fundamentals', issuer: 'Not Specified' },
    { title: 'HTML Certification Test', issuer: 'Not Specified' }
  ];

  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Professional <span className="text-gradient">Certifications</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {certs.map((cert, index) => (
            <div className="glass-panel animate-on-scroll" style={{ padding: '24px' }} key={index}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{cert.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Status: Completed</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
