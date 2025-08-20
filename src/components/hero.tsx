import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="container flex flex-col items-center justify-center text-center py-24 md:py-32">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Desenvolvedor Full-Stack
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
        Especializado em criar aplicações web modernas e performáticas com as tecnologias mais recentes. Bem-vindo ao meu portfólio digital.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#projects">
            Ver Projetos
            <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact">
            Entrar em Contato
            <FileText className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
