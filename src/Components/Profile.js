import React from 'react';
import { information } from '../Profile.json';
import imageProfile from '../Images/imageProfile.png';
// import { getCollection } from '../api';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = information;
  }

  componentDidMount() {
    // const information = getCollection('information');
    // const { name, lastname, email, title, subTitle, phone, 
    //   location, facebook, twitter, linkedin, github } = information;
    // this.setState({
    //   name, lastname, email, title, subTitle, phone, 
    //   location, facebook, twitter, linkedin, github
    // })
  }

  render() {
    const iconEmailUrl = 'https://img.icons8.com/wired/64/000000/email.png';
    const iconPhoneUrl = 'https://img.icons8.com/material-sharp/48/000000/phone-not-being-used.png';
    const iconLocationUrl = 'https://img.icons8.com/material/48/000000/worldwide-location--v1.png';
    const iconFacebook = 'https://img.icons8.com/color/48/000000/facebook.png';
    const iconTwitter = 'https://img.icons8.com/color/48/000000/twitter.png';
    const iconLinkedin = 'https://img.icons8.com/color/48/000000/linkedin.png';
    const iconGithub = 'https://img.icons8.com/material-sharp/48/000000/github.png';

    const { name, lastname, email, title, phone, 
      location, facebook, twitter, linkedin, github } = this.state;

    const mailto = `mailto: ${email}`;
    const fullName = `${name} ${lastname}`;

    return (
      <section id="Profile" className="container">
        <div className="row row-profile">
          <div className="col-12 col-sm-6">
            <div className="info-profile">
              <img src={imageProfile} className="img-profile" alt="img-profile" />
              <h2>{fullName}</h2>
              <h5>{title}</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-info">
            <div className="info-profile">
              <img src={iconEmailUrl} alt="icon-email" className="icon-profile" />
              <span><a className="link-email" href={mailto}>{email}</a></span>
            </div>
            <div className="info-profile">
              <img src={iconPhoneUrl} alt="icon-phone" className="icon-profile" />
              <span>{phone}</span>
            </div>
            <div className="info-profile">
              <img src={iconLocationUrl} alt="icon-location" className="icon-profile" />
              <span>{location}</span>
            </div>
            <div className="info-profile">
              <a href={facebook}>
                <img src={iconFacebook} className="icon-social" alt="icon-facebook" />
              </a>
              <a href={twitter}>
                <img src={iconTwitter} className="icon-social" alt="icon-twitter" />
              </a>
              <a href={linkedin}>
                <img src={iconLinkedin} className="icon-social" alt="icon-linkedin" />
              </a>
              <a href={github}>
                <img src={iconGithub} className="icon-social" alt="icon-github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
};

export default Profile;
