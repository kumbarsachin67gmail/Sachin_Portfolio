
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Awards from '../components/Awards';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Skills />
        <Projects />
        <Education />
        <Awards />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
