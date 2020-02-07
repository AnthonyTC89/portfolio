import React from 'react';
import CryptoJS from 'crypto-js';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';

const Profile = () => {
  const hash = CryptoJS.MD5(profile.email);
  const url = `http://www.gravatar.com/avatar/${hash}`;
  const iconEmailUrl = 'https://img.icons8.com/wired/64/000000/email.png';
  const iconPhoneUrl = 'https://img.icons8.com/material-sharp/48/000000/phone-not-being-used.png';
  const iconLocationUrl = 'https://img.icons8.com/material/48/000000/worldwide-location--v1.png';
  const iconFacebook = 'https://img.icons8.com/color/48/000000/facebook.png';
  const iconTwitter = 'https://img.icons8.com/color/48/000000/twitter.png';
  const iconLinkedin = 'https://img.icons8.com/color/48/000000/linkedin.png';
  const iconGithub = 'https://img.icons8.com/material-sharp/48/000000/github.png';
  const mailto = `mailto: ${profile.email}`;
  const fullName = `${profile.name} ${profile.lastname}`;
  return (
    <section id="Profile" className="container">
      <img src={url} className="img-profile" alt="img-profile" />
      <h2>{fullName}</h2>
      <h5>{profile.title}</h5>
      <div>
        <img src={iconEmailUrl} alt="icon-email" />
        <a href={mailto}>{profile.email}</a>
      </div>
      <div>
        <img src={iconPhoneUrl} alt="icon-phone" />
        <span>{profile.phone}</span>
      </div>
      <div>
        <img src={iconLocationUrl} alt="icon-location" />
        <span>{profile.location}</span>
      </div>
      <div>
        <a href={profile.facebook}>
          <img src={iconFacebook} className="icon-social" alt="icon-facebook" />
        </a>
        <a href={profile.twitter}>
          <img src={iconTwitter} className="icon-social" alt="icon-twitter" />
        </a>
        <a href={profile.linkedin}>
          <img src={iconLinkedin} className="icon-social" alt="icon-linkedin" />
        </a>
        <a href={profile.github}>
          <img src={iconGithub} className="icon-social" alt="icon-github" />
        </a>
      </div>
    </section>
  );
};

export default Profile;
