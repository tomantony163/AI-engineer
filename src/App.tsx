import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { LearningJourney } from './components/LearningJourney';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }
      const sections = ['contact', 'journey', 'experience', 'projects', 'skills', 'about', 'home'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#18181b] selection:bg-blue-900 selection:text-white flex flex-col font-sans">
      {/* 1. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me */}
        <About />

        {/* 4. Tech Stack / Skills */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Hackathons & Ideathons */}
        <Hackathons />

        {/* 7. Learning Journey */}
        <LearningJourney />

        {/* 8. Currently Exploring */}
        <CurrentlyExploring />

        {/* 9. Contact / Social Links */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
