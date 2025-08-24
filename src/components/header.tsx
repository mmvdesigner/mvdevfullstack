import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">NextFolio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">Sobre</Link>
          <Link href="#skills" className="transition-colors hover:text-primary">Habilidades</Link>
          <Link href="#projects" className="transition-colors hover:text-primary">Projetos</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
