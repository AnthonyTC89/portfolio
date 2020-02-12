import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#AboutMe">About me</a>
        <a className="nav-item nav-link" href="#Experience">Experience</a>
        <a className="nav-item nav-link" href="#Projects">Projects</a>
        <a className="nav-item nav-link" href="#Education">Education</a>
      </div>
    </div>
    <a className="navbar-brand" href="#Profile">Anthony</a>
  </nav>
);


export default Navbar;
