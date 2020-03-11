import React from 'react';
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import Footer from '../Components/Footer';

const Home = () => (
  <>
    <header><Navbar /></header>
    <main>
      <Profile />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  </>
);

export default Home;
