import React from 'react';
import './About.css';
import myPhoto from './images/Mridul.png'; 
const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          I am Mridul Das, a learning Front End Designer and Back End Developer.
          </p>
          <p>
            I also excel at Database Management and Tinkering.
          </p>
          <p>
            I am trying to learn new things trying to always be my better self.
          </p>
          <h1>Education Qualifications</h1>
          <p>
            Completed 10th class from Prakash Vidyalaya, Bacheli (ICSE)
          </p>
          <p>
            Completed 12th class from Kendriya Vidyalaya, Bacheli (CBSE)
          </p>
          <p>
            Currently pursuing B.Tech from Gitam University, Visakhapatnam (CSE III Year)
          </p>
        </div>
        <div className="about-photo">
          <img src={myPhoto} alt="Mridul Das" />
        </div>
      </div>
    </section>
  );
};

export default About;
