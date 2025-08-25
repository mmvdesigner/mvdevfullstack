'use client'

import React, { useState, useEffect, useRef } from 'react'
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = '';

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetBottom = offsetTop + ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);


  return (
    <div className="flex flex-col min-h-dvh">
      <Header activeSection={activeSection} sectionRefs={sectionRefs} />
      <main>
        <div ref={sectionRefs.home}>
          <Hero sectionRefs={sectionRefs} />
        </div>
        <div ref={sectionRefs.projects}>
          <Projects />
        </div>
        <div ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div ref={sectionRefs.experience}>
          <Experience />
        </div>
        <div ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
