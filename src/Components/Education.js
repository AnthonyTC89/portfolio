import React from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import Profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: Profile.education,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    await axios.get('api/education', { withCredentials: true })
      .then((response) => {
        this.setState({
          education: response.data,
        });
      })
      .catch(() => {
        this.setState({
          education: Profile.education,
        });
      });
  }

  render() {
    const { education } = this.state;
    return (
      <section id="Education" className="container">
        <h2 className="header-education">Education</h2>
        <div className="row row-education">
          {education.map((edu) => (
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
  }
}

export default Education;
