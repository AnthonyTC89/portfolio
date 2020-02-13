import React from 'react';
import uuidv4 from 'uuid/v4';
import Slider from './Slider';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Projects.css';

const Projects = () => {
  const { projects } = profile;
  return (
    <section id="Projects" className="container">
      <h2 className="header-projects">Projects</h2>
      {projects.map((proj) => {
        if (!proj.pinned) {
          return null;
        }
        return (
          <article key={uuidv4()} className="row row-project">
            <div className="col-12 col-sm-6">
              <Slider images={proj.screenshots} />
            </div>
            <div className="col-12 col-sm-6 info-project">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div>
                <a className="link" href={proj.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a className="link" href={proj.source} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
