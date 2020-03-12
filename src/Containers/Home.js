import React from 'react';
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

const Home = () => (
  <>
    <header><Navbar /></header>
    <main>
      <Profile />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  </>
);

export default Home;
