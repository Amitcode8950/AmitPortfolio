import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    'Open Source Contributions',
    'Coding Challenges and Competitions',
    'Tech Blogging',
    'Learning Languages and Frameworks',
    'Building Personal Projects',
    'Gaming',
    'Attending Meetups and Conferences',
    'Participating in Hackathons',
    'Mentoring and Teaching',
    'Reading Tech Books and Journals'
  ];

  return (
    <section className="section" id="hobbies">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My <span className="text-gradient">Hobbies</span></h2>
        <div className="hobbies-container animate-on-scroll delay-200">
          {hobbies.map((hobby, index) => (
            <div className="hobby-pill" key={index}>
              {hobby}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
