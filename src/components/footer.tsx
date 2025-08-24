"use client";

import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {year} Jane Doe. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
           <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
