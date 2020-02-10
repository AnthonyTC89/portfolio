import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';

const Education = () => (
  <section id="Education" className="container">
    <h2>Education</h2>
    <div className="row">
      {profile.education.map((edu) => (
        <article key={uuidv4()} className="col-12 col-sm-6">
          <h4>{edu.date}</h4>
          <h3>{edu.institution}</h3>
          <span>{edu.grade}</span>
          <p>{edu.goals}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
