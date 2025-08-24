import { Button } from '@/components/ui/button';
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="container flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left py-24 md:py-32 gap-12">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Seu Nome Aqui
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-muted-foreground">
          Desenvolvedor Full-Stack Especializado em criar aplicações web modernas e performáticas com as tecnologias mais recentes. Bem-vindo ao meu portfólio digital.
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
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
        <div className="mt-8 flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image 
          src="https://placehold.co/400x400.png" 
          alt="Sua Foto"
          width={400} 
          height={400} 
          className="rounded-full border-4 border-primary shadow-lg object-cover"
          data-ai-hint="professional portrait"
        />
        <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-20"></div>
      </div>
    </section>
  );
}
