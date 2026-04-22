import React, { useState } from 'react';
import './SystemDesign.css';

const CaseStudy = ({ study }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <div className="case-study glass-panel animate-on-scroll">
      <div className="case-study-header">
        <div className="case-study-badge">Conceptual / Learning Project</div>
        <h3 className="text-gradient">{study.title}</h3>
        <p className="case-study-summary">{study.summary}</p>
      </div>

      <div className="case-study-tabs">
        <button 
          className={activeTab === 'architecture' ? 'active' : ''} 
          onClick={() => setActiveTab('architecture')}
        >
          Architecture
        </button>
        <button 
          className={activeTab === 'tradeoffs' ? 'active' : ''} 
          onClick={() => setActiveTab('tradeoffs')}
        >
          Tradeoffs
        </button>
        <button 
          className={activeTab === 'scaling' ? 'active' : ''} 
          onClick={() => setActiveTab('scaling')}
        >
          Scaling & Reliability
        </button>
      </div>

      <div className="case-study-content">
        {activeTab === 'architecture' && (
          <div className="architecture-view">
            <div className="diagram-container">
              <div className="mock-diagram">
                {study.diagramNodes.map((node, i) => (
                  <div key={i} className="diagram-node">
                    <span className="node-icon">{node.icon}</span>
                    <span className="node-label">{node.label}</span>
                  </div>
                ))}
                <div className="diagram-flow"></div>
              </div>
            </div>
            <div className="tech-stack-list">
              {study.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tradeoffs' && (
          <div className="tradeoffs-view">
            <div className="tradeoff-grid">
              {study.tradeoffs.map((item, i) => (
                <div key={i} className="tradeoff-item">
                  <h4>{item.decision}</h4>
                  <div className="tradeoff-comparison">
                    <div className="pro"><span>Pros:</span> {item.pros}</div>
                    <div className="con"><span>Cons:</span> {item.cons}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'scaling' && (
          <div className="scaling-view">
            <div className="scaling-grid">
              <div className="scaling-card">
                <h4>Scaling Strategies</h4>
                <p>{study.horizontalScaling}</p>
              </div>
              <div className="scaling-card">
                <h4>Failure Handling</h4>
                <p>{study.failureHandling}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SystemDesign = () => {
  const studies = [
    {
      title: "Scalable Banking System Simulation",
      summary: "Designed a transaction-safe backend system focused on consistency, concurrency, and failure handling.",
      techStack: ["Node.js", "MongoDB Transactions", "Redis Locking", "System Design Concepts"],
      diagramNodes: [
        { label: "API Layer", icon: "🌐" },
        { label: "Auth Flow", icon: "🔐" },
        { label: "Transaction Logic", icon: "⚙️" },
        { label: "Consistent DB", icon: "💾" }
      ],
      tradeoffs: [
        {
          decision: "Consistency vs Availability",
          pros: "Strict consistency ensures data integrity in financial simulations.",
          cons: "Higher latency due to lock management and transaction coordination."
        }
      ],
      horizontalScaling: "Explored scaling via horizontal replication and shared state management.",
      failureHandling: "Implemented retry mechanisms and transaction rollbacks for robust failure recovery."
    },
    {
      title: "Analytics Dashboard System",
      summary: "Pipeline for batch and near real-time processing with optimized live updates.",
      techStack: ["Python", "PostgreSQL", "WebSockets", "Batch Processing"],
      diagramNodes: [
        { label: "Data Ingest", icon: "📥" },
        { label: "Batch ETL", icon: "🔄" },
        { label: "Optimized DB", icon: "📊" },
        { label: "Live Feed", icon: "🔌" }
      ],
      tradeoffs: [
        {
          decision: "Batch vs Real-time",
          pros: "Batch processing handles high volume; WebSockets provide 'near' real-time feel.",
          cons: "Managing dual pipelines increases system complexity."
        }
      ],
      horizontalScaling: "Designed for parallel worker processing and read-replica scaling.",
      failureHandling: "Fallback to historical data during feed interruptions for consistent UI."
    }
  ];

  return (
    <section className="section system-design" id="system-design">
      <div className="container">
        <h2 className="section-title animate-on-scroll">System Design <span className="text-gradient">Case Studies</span></h2>
        <div className="studies-wrapper">
          {studies.map((study, i) => (
            <CaseStudy key={i} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
