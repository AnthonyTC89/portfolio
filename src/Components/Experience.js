import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Experience.css';

const Experience = () => (
  <section id="Experience" className="container">
    <h2 className="header-experience">Work Experience</h2>
    <div className="row row-experience">
      {profile.experience.map((exp) => (
        <article key={uuidv4()} className="col-12 col-sm-6 experience">
          <h6>{exp.date}</h6>
          <div className="company">
            <h4>{exp.company}</h4>
          </div>
          <strong>{exp.position}</strong>
          <p>{exp.goals}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
