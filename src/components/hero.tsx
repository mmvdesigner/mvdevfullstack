import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="container flex flex-col items-center justify-center text-center py-28 md:py-40">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-tight">
          John Doe
        </h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-primary">
          Desenvolvedor Full-Stack
        </h2>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Construindo soluções web robustas e escaláveis, da concepção ao deploy.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
            <Link href="#projects">
              Ver Projetos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-transform transform hover:scale-105">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Currículo
              <FileText className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
