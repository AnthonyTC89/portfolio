import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';

const Experience = () => (
  <section id="Experience" className="container">
    <h2>Work Experience</h2>
    <div className="row">
      {profile.experience.map((exp) => (
        <article key={uuidv4()} className="col-12 col-sm-6">
          <h4>{exp.date}</h4>
          <h3>{exp.company}</h3>
          <span>{exp.position}</span>
          <p>{exp.goals}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
