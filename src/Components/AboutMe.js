import React from 'react';
import uuidv4 from 'uuid/v4';
import { aboutMe } from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './AboutMe.css';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = aboutMe;
  }

  componentDidMount() {

  }
  render() {
    const { fulltext, techSkills } = this.state;
    return (
      <section id="AboutMe" className="container">
        <h2 className="header-aboutMe">About Me</h2>
        <div className="row-about-me">
          <span>{fulltext}</span>
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
