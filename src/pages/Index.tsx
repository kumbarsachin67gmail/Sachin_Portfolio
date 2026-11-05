import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Education from "../components/Education";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
