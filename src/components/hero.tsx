import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="container flex flex-col items-center justify-center text-center py-28 md:py-40">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-tight font-headline">
          Psicóloga Comportamental
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Ajudo você a superar desafios e construir uma vida mais plena e feliz.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
            <Link href="#contato">
              Agende sua Consulta
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
