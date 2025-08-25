'use client'

import React, { useState } from 'react';
import { Menu, X, Code } from "lucide-react";
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
  
  const navItems = ['home', 'projects', 'skills', 'experience', 'contact'];

  return (
    <header className="fixed w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-400 flex items-center space-x-2">
          <Code size={24} />
          <span>DevPortfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize hover:text-blue-400 transition-colors ${
                activeSection === item ? 'text-blue-400 font-medium' : 'text-gray-300'
              }`}
            >
              {item === 'home' ? 'Home' : item}
            </button>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-left py-2 hover:text-blue-400 transition-colors ${
                activeSection === item ? 'text-blue-400 font-medium' : 'text-gray-300'
              }`}
            >
              {item === 'home' ? 'Home' : item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
