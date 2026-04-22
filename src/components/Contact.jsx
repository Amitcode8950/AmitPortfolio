import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-wrapper glass-panel animate-on-scroll">
          <div className="contact-info">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>Contact <span className="text-gradient">Us</span></h2>
            <p className="contact-text">
              Let's connect! I'm always open to discussing web development, UI/UX design, or new opportunities.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <p>amitkumar8950764059@gmail.com</p>
              </div>
            </div>
            
            <div className="social-links" style={{marginTop: '40px'}}>
              <h3 style={{marginBottom: '16px', color: 'var(--text-secondary)'}}>Connect with me:</h3>
              <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                {['Instagram', 'Snapchat', 'LinkedIn', 'Twitter', 'Discord', 'Telegram', 'Threads'].map(social => (
                  <span key={social} className="link-btn">{social}</span>
                ))}
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', padding: '16px', borderRadius: '8px', color: 'var(--text-primary)'}}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea id="feedback" rows="4"></textarea>
            </div>
            <button type="button" className="btn-primary" style={{width: '100%'}}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
