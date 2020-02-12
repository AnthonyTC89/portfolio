import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Education.css';

const Education = () => (
  <section id="Education" className="container">
    <h2 className="header-education">Education</h2>
    <div className="row row-education">
      {profile.education.map((edu) => (
        <article key={uuidv4()} className="col-12 col-sm-6 education">
          <h6>{edu.date}</h6>
          <div className="institution">
            <h4>{edu.institution}</h4>
          </div>
          <strong>{edu.grade}</strong>
          <p>{edu.goals}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
