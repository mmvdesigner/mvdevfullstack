import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Design System para SaaS',
    description: 'Um design system abrangente para uma plataforma SaaS, garantindo consistência e escalabilidade da UI.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'design system dashboard',
    tags: ['Figma', 'Storybook', 'React'],
    github: '#',
    live: '#',
  },
  {
    title: 'Aplicativo Web de Produtividade',
    description: 'Um aplicativo web que ajuda os usuários a gerenciar tarefas e aumentar a produtividade com uma interface limpa e intuitiva.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'productivity app',
    tags: ['Next.js', 'tRPC', 'Prisma'],
    github: '#',
    live: '#',
  },
  {
    title: 'Landing Page Animada',
    description: 'Uma landing page visualmente atraente com animações suaves em scroll para uma startup de tecnologia.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'landing page animation',
    tags: ['GSAP', 'TailwindCSS', 'TypeScript'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-24 bg-background">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Trabalhos Selecionados</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Aqui estão alguns dos projetos dos quais mais me orgulho.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border-border">
            <CardHeader className="p-0 relative">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-auto" data-ai-hint={project.dataAiHint} />
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="leading-tight text-foreground">{project.title}</CardTitle>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">{tag}</Badge>)}
              </div>
              <CardDescription className="mt-3 flex-grow text-muted-foreground">{project.description}</CardDescription>
              <CardFooter className="p-0 pt-4 mt-auto flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Código
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
