import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import ImpactMetrics from './components/ImpactMetrics';
import RecruiterMode from './components/RecruiterMode';
import SystemDesign from './components/SystemDesign';
import EngineeringDepth from './components/EngineeringDepth';
import ArchitectureDecisions from './components/ArchitectureDecisions';

import CareerGoal from './components/CareerGoal';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <Navbar />
      <main>
        <Hero />
        <RecruiterMode />
        <ImpactMetrics />
        <Experience />
        <EngineeringDepth />
        <SystemDesign />
        <ArchitectureDecisions />
        <CareerGoal />
        <Strengths />
        <Achievements />
        <Education />
        
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top glass-panel">
          ↑
        </button>
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
