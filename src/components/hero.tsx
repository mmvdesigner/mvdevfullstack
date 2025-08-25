import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="container flex flex-col items-center justify-center text-center py-28 md:py-48">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-tight">
          Desenvolvedor Full-Stack Inovador
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground">
          Construindo o futuro da web, uma linha de código de cada vez. Especializado em criar experiências digitais rápidas, responsivas e intuitivas.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
            <Link href="#projects">
              Ver Projetos
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform transform hover:scale-105">
            <Link href="/resume.pdf" target="_blank">
              Baixar Currículo
              <FileText className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
