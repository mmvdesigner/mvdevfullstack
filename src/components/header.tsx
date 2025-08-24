import Link from 'next/link';
import { Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-foreground" />
          <span className="font-bold text-lg text-foreground">JD</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary text-foreground">Sobre</Link>
          <Link href="#skills" className="transition-colors hover:text-primary text-foreground">Habilidades</Link>
          <Link href="#projects" className="transition-colors hover:text-primary text-foreground">Projetos</Link>
          <Link href="#contact" className="transition-colors hover:text-primary text-foreground">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
