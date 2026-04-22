import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroImage from '../assets/hero-premium.png';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="about">
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content animate-on-scroll">
          <h2 className="hero-greeting">👋 Hello It's Me,</h2>
          <h1 className="hero-title" style={{fontSize: '3.5rem'}}>
            AMIT <span className="text-gradient">KUMAR</span>
          </h1>
          <h3 style={{marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.4'}}>
            Full Stack Developer — MERN Stack — Data Analyst — Backend Developer
          </h3>
          <p className="hero-subtitle">
            I am a Full Stack Developer (MERN) and Data Analyst with a strong foundation in Data Structures and Algorithms, cloud deployment, and building scalable web applications.
          </p>
          <div className="hero-actions">
            <a href="https://linkedin.com" className="btn-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="hero-image animate-on-scroll delay-200">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--accent)' }}>
            <img src={heroImage} alt="Amit Kumar Workspace" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
