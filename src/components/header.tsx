'use client'

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import Link from 'next/link';

interface HeaderProps {
  activeSection: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function Header({ activeSection, sectionRefs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'depoimentos', label: 'Depoimentos'},
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-foreground flex items-center space-x-2">
           <span className='text-primary'>mvdev</span>
           <span>fullstack</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`capitalize text-muted-foreground hover:text-foreground transition-colors ${
                activeSection === item.id ? '!text-foreground font-medium' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border py-4 px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`capitalize text-left py-2 text-muted-foreground hover:text-foreground transition-colors ${
                activeSection === item.id ? '!text-foreground font-medium' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
