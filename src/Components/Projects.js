import React from 'react';
import uuidv4 from 'uuid/v4';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Projects.css';

const Projects = () => {
  const { projects } = profile;
  return (
    <section id="Projects" className="container">
      <h2 className="header-projects">Projects</h2>
      <div className="row row-projects">
        {projects.map((proj) => {
          if (!proj.pinned) {
            return null;
          }
          return (
            <article key={uuidv4()} className="col-12 section-project">
              <img src={proj.screnshot} className="img-project" alt="img-screnshot" />
              <div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a className="link" href={proj.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a className="link" href={proj.source} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
