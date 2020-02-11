import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';

const Navbar = () => (
  <nav className="container navbar navbar-expand-sm navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#Profile">Anthony</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#Skills">About me</a>
        <a className="nav-item nav-link" href="#Experience">Experience</a>
        <a className="nav-item nav-link" href="#Projects">Projects</a>
        <a className="nav-item nav-link" href="#Education">Education</a>
      </div>
    </div>
  </nav>
);


export default Navbar;
