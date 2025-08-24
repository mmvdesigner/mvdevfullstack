import { Button } from '@/components/ui/button';
import { ArrowDown, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="container flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 md:py-32 gap-12">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          Jane Doe
        </h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-muted-foreground">
          Desenvolvedora Front-End | UI Designer
        </h2>
        <p className="mt-4 max-w-xl text-lg md:text-xl text-muted-foreground">
          Criando experiências digitais fluidas e bonitas. Bem-vindo ao meu espaço criativo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#projects">
              Meus Projetos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Meu Currículo
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
           <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Twitter className="h-7 w-7" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image 
          src="https://placehold.co/400x400.png" 
          alt="Jane Doe"
          width={400} 
          height={400} 
          className="rounded-full border-4 border-border shadow-lg object-cover"
          data-ai-hint="professional portrait woman"
        />
      </div>
    </section>
  );
}
