import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-foreground">John Doe</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#projects" className="transition-colors hover:text-primary text-foreground">Projetos</Link>
          <Link href="#skills" className="transition-colors hover:text-primary text-foreground">Habilidades</Link>
          <Link href="#experience" className="transition-colors hover:text-primary text-foreground">Experiência</Link>
          <Link href="#contact" className="transition-colors hover:text-primary text-foreground">Contato</Link>
        </nav>
        <Button asChild className="hidden md:flex">
          <Link href="#contact">Contrate-me</Link>
        </Button>
      </div>
    </header>
  );
}
