import React from 'react';
import profile from '../Profile.json';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

const Footer = () => {
  const fullName = `${profile.name} ${profile.lastname}`;
  return (
    <footer className="container">
      {fullName}
    </footer>
  );
};

export default Footer;
