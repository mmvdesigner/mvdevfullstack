import Link from 'next/link';
import { HeartPulse } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <HeartPulse className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-foreground font-headline">Dra. Ana Lúcia</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#inicio" className="transition-colors hover:text-primary text-foreground">Início</Link>
          <Link href="#sobre" className="transition-colors hover:text-primary text-foreground">Sobre</Link>
          <Link href="#servicos" className="transition-colors hover:text-primary text-foreground">Serviços</Link>
          <Link href="#depoimentos" className="transition-colors hover:text-primary text-foreground">Depoimentos</Link>
          <Link href="#contato" className="transition-colors hover:text-primary text-foreground">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
