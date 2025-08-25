'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';

interface HeroProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function Hero({ sectionRefs }: HeroProps) {

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://roboneo-public.meitudata.com/public/html_imgs/04m6e9qac3y7g7a2/4ae3bb45326446f095287cd51e8faa03.png" 
          alt="Tech background"
          data-ai-hint="tech background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Alex Johnson
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer passionate about building modern, scalable web applications
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-blue-400" />
        </div>
      </div>
    </section>
  );
}
