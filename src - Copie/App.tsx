import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Hackathon } from './components/Hackathon';
import { MatrixBackground } from './components/effects/MatrixBackground';
import { Footer } from './components/Footer';
import { SectionPrompt } from './components/ui/SectionPrompt';

function App() {
  return (
    <div className="min-h-screen bg-background-dark relative text-terminal-white">
      <div className="scanline"></div>
      <MatrixBackground />
      
      <Header />
      
      <main>
        <Hero />

        <About />

        <SectionPrompt section="projects" />
        <Projects />

        <SectionPrompt section="skills" />
        <Skills />

        <SectionPrompt section="certifications" />
        <Certifications />

        <SectionPrompt section="languages" />
        <Languages />

        <SectionPrompt section="hackathon" />
        <Hackathon />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;