import React from 'react';
import './ImpactMetrics.css';

const ImpactMetrics = () => {
  const metrics = [
    {
      value: '85%',
      label: 'Latency Reduction',
      desc: 'Optimized API endpoints from 800ms to 120ms through caching and query optimization.',
      icon: '⚡'
    },
    {
      value: '50K+',
      label: 'Records Handled',
      desc: 'Engineered high-performance data pipelines (batch processing) for financial analytics.',
      icon: '📈'
    },
    {
      value: 'JWT',
      label: 'Secure Auth',
      desc: 'Implemented secure authentication and role-based access control (RBAC) simulations.',
      icon: '🔐'
    },
    {
      value: 'Scale',
      label: 'High Availability',
      desc: 'Designed systems with high availability and fault tolerance fundamentals.',
      icon: '🚀'
    }
  ];

  return (
    <section className="section impact-metrics" id="impact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Engineering <span className="text-gradient">Impact</span></h2>
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div className="metric-card glass-panel animate-on-scroll" key={i} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="metric-icon">{m.icon}</div>
              <div className="metric-value text-gradient">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              <p className="metric-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
