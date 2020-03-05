import React from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Experience.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: Profile.experience,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await axios.get('api/experience', { withCredentials: true })
      .then((response) => {
        this.setState({
          experience: response.data,
        });
      })
      .catch(() => {
        this.setState({
          experience: Profile.experience,
        });
      });
  }

  render() {
    const { experience } = this.state;
    return (
      <section id="Experience" className="container">
        <h2 className="header-experience">Work Experience</h2>
        <div className="row row-experience">
          {experience.map((exp) => (
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
  }
}

export default Experience;
