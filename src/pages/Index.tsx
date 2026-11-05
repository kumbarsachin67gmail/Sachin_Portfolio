import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Education from "../components/Education";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

// cmdk and the dialog only load the first time the palette opens
const CommandPalette = lazy(() => import("../components/CommandPalette"));

const Index = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteLoaded, setPaletteLoaded] = useState(false);

  const openPalette = () => {
    setPaletteLoaded(true);
    setPaletteOpen(true);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteLoaded(true);
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header onOpenPalette={openPalette} />
      <main id="main">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Contact />
      </main>
      <BackToTop />
      {paletteLoaded && (
        <Suspense fallback={null}>
          <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
