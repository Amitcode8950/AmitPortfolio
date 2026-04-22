import React, { useRef } from 'react';
import useTilt from '../hooks/useTilt';
import './Achievements.css';
import backendIcon from '../assets/backend-icon.png';
import analyticsIcon from '../assets/analytics-icon.png';
import healthIcon from '../assets/health-icon.png';

const AchievementCard = ({ a, index }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div 
      ref={cardRef}
      className={`glass-panel achievement-card animate-on-scroll ${index % 2 !== 0 ? 'reverse' : ''}`}
    >
      <div className="achievement-icon">
        <img src={a.icon} alt={a.title} />
      </div>
      <div className="achievement-info">
        <h3>{a.title}</h3>
        <p>{a.desc}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    { 
      title: 'Bank Backend System MERN', 
      desc: 'Engineered secure backend with JWT authentication, role-based access control, and MongoDB transactions ensuring ACID compliance for financial operations',
      icon: backendIcon
    },
    { 
      title: 'Finance Dashboard & Data Analytics', 
      desc: 'Built interactive Power BI dashboards visualizing 50K financial records, improving query performance through optimization',
      icon: analyticsIcon
    },
    { 
      title: 'Full Stack Health Platform', 
      desc: 'Architected comprehensive MERN application with biometric simulation and AI health coaching, showcasing complex system design',
      icon: healthIcon
    }
  ];

  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Key <span className="text-gradient">Achievements</span></h2>
        <div className="achievements-list">
          {achievements.map((a, index) => (
            <AchievementCard a={a} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
