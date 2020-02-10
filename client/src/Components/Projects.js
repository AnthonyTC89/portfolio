import React from 'react';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {
  const { projects } = profile;
  return (
    <section>
      {projects.map((proj) => (
        <article>
          <img src={proj.screnshot} alt="img-screnshot" />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.live}>Live Demo</a>
          <a href={proj.source}>Source</a>
        </article>
      ))}
    </section>
  );
};

export default Projects;
