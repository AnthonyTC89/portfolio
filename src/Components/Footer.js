import React from 'react';
import { Social } from '../Icons.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

const Footer = () => (
  <footer className="container">
    <div className="row row-footer">
      <section className="copyright-section">
        <small>AnthonyTC89 © 2020</small>
      </section>
      <section className="link-section">
        <img src={Social.facebook} alt="facebook-icon" className="icon-social" />
        <img src={Social.twitter} alt="twitter-icon" className="icon-social" />
        <img src={Social.linkedin} alt="linkedin-icon" className="icon-social" />
        <img src={Social.github} alt="github-icon" className="icon-social" />
      </section>
    </div>
  </footer>
);

export default Footer;
