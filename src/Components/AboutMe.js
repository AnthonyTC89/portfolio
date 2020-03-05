import React from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import { aboutMe } from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './AboutMe.css';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullText: aboutMe.fullText,
      techSkills: aboutMe.techSkills,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await axios.get('api/aboutMe', { withCredentials: true })
      .then((response) => {
        this.setState(response.data[0]);
      })
      .catch(() => {
        this.setState({
          fullText: aboutMe.fullText,
          techSkills: aboutMe.techSkills,
        });
      });
  }

  render() {
    const { fullText, techSkills } = this.state;
    return (
      <section id="AboutMe" className="container">
        <h2 className="header-aboutMe">About Me</h2>
        <div className="row-about-me">
          <span>{fullText}</span>
          <ul>
            {techSkills.map((skill) => (
              <li key={uuidv4()}><span>{skill}</span></li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default AboutMe;
