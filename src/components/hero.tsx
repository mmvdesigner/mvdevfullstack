'use client';

import { MessageCircle } from 'lucide-react';
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
       <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    <span className="block">Desenvolvendo</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">
                    experiências
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                    digitais que
                    </span>
                    <span className="block">funcionam.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                  Edifico e otimizo da busca em SEO ao deploy, Node.js a soluções no-code, front-end a processos digitais robustos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                    href="https://wa.me/55DD9XXXXXXXX?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-primary hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                    <MessageCircle size={18} />
                    Fale comigo pelo whatsapp
                </a>
                <button 
                    onClick={() => scrollToSection('projetos')}
                    className="bg-secondary hover:bg-muted text-foreground font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                    Ver Projetos
                </button>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='bg-card p-4 rounded-lg border border-border shadow-lg'>
                    <pre className='text-sm text-gray-400'><code>
<span className='text-purple-400'>const</span> coder = {'{'}<br />
  <span className='text-blue-400'>name</span>: <span className='text-green-400'>'Messias Vasconcelos'</span>,<br />
  <span className='text-blue-400'>skills</span>: [<span className='text-green-400'>'React'</span>, <span className='text-green-400'>'Node.js'</span>, <span className='text-green-400'>'Next.js'</span>],<br />
  <span className='text-blue-400'>hardWorker</span>: <span className='text-orange-400'>true</span>,<br />
  <span className='text-blue-400'>problemSolver</span>: <span className='text-orange-400'>true</span><br />
{'}'};
                    </code></pre>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
