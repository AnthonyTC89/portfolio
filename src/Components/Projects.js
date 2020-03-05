import React from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Slider from './Slider';
import Profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Projects.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: Profile.projects,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await axios.get('api/projects', { withCredentials: true })
      .then((response) => {
        this.setState(response.data);
      })
      .catch(() => {
        this.setState({
          projects: Profile.projects,
        });
      });
  }

  render() {
    const { projects } = this.state;
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
  }
}
export default Projects;
