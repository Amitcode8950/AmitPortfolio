import React from 'react';
import './ArchitectureDecisions.css';

const ArchitectureDecisions = () => {
  const decisions = [
    {
      title: "MongoDB vs PostgreSQL for Consistency",
      context: "Choosing a primary data store for systems requiring strong data integrity.",
      decision: "PostgreSQL",
      rationale: "Chose PostgreSQL for systems where relational integrity and ACID compliance are critical. Foreign keys and row-level locking prevent mathematical inconsistencies in simulations.",
      tradeoff: "Sacrificed the schema flexibility of NoSQL for better data reliability and complex join support."
    },
    {
      title: "Microservices vs Modular Monolith",
      context: "Designing for initial development speed vs long-term scaling.",
      decision: "Modular Monolith Initially",
      rationale: "Preferred a modular monolith for initial phases to reduce operational complexity and network overhead. Microservices considered for independent scaling of high-load modules.",
      tradeoff: "Easier to manage early on, but requires careful module boundaries to prevent 'spaghetti' code."
    },
    {
      title: "In-Memory Caching Strategy",
      context: "Optimizing read-heavy systems and real-time state.",
      decision: "Redis Basics",
      rationale: "Used Redis for caching frequently accessed data and managing real-time connection state across instances.",
      tradeoff: "Improves speed significantly but introduces cache invalidation challenges."
    }
  ];

  return (
    <section className="section arch-decisions" id="decisions">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Architecture & <span className="text-gradient">Tech Decisions</span></h2>
        <div className="decisions-timeline">
          {decisions.map((d, i) => (
            <div className="decision-card glass-panel animate-on-scroll" key={i}>
              <div className="decision-header">
                <span className="decision-label">Thinking</span>
                <h3>{d.title}</h3>
              </div>
              <div className="decision-body">
                <p className="context"><strong>Context:</strong> {d.context}</p>
                <div className="result-box">
                  <span className="result-label">Preferred Approach:</span>
                  <span className="result-value">{d.decision}</span>
                </div>
                <p className="rationale"><strong>Rationale:</strong> {d.rationale}</p>
                <div className="tradeoff-box">
                  <strong>Tradeoff Analysis:</strong> {d.tradeoff}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDecisions;
