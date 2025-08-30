'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

interface HeroProps {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function Hero({ sectionRefs }: HeroProps) {
  const { headline, subheadline, ctaButtons, codeBlock } = portfolioData.hero;

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
       <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="block">{headline.line1}</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    {headline.line2}
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                    {headline.line3}
                    </span>
                    <span className="block">{headline.line4}</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                  {subheadline}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a 
                      href={ctaButtons.primary.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-primary hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                      {ctaButtons.primary.text}
                  </a>
                  <button 
                      onClick={() => scrollToSection(ctaButtons.secondary.scrollTo)}
                      className="bg-secondary hover:bg-muted text-foreground font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                  >
                      {ctaButtons.secondary.text}
                  </button>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='bg-card p-4 rounded-lg border border-border shadow-lg'>
                  <div className="flex items-center pb-2 mb-2 border-b border-border/50">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-sm text-muted-foreground ml-auto">{codeBlock.fileName}</p>
                  </div>
                    <pre className='text-sm text-gray-400'><code>
<span className='text-purple-400'>const</span> <span className='text-blue-300'>{codeBlock.variable}</span> = {'{'}<br />
  <span className='text-blue-400'>name</span>: <span className='text-green-400'>'{codeBlock.name}'</span>,<br />
  <span className='text-blue-400'>skills</span>: [<span className='text-green-400'>'{codeBlock.skills.join("', '")}'</span>],<br />
  <span className='text-blue-400'>passion</span>: <span className='text-green-400'>'{codeBlock.passion}'</span><br />
{'}'};
                    </code></pre>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
