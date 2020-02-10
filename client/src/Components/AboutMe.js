import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './AboutMe.css';

const AboutMe = () => (
  <section id="AboutMe" className="container">
    <h2>About Me</h2>
    <span>{profile.aboutMe}</span>
    <ul>
      {profile.techSkills.map((skill) => (
        <li key={uuidv4()}><span>{skill}</span></li>
      ))}
    </ul>
  </section>
);

export default AboutMe;
