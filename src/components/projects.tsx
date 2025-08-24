import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma de E-commerce B2B',
    description: 'Sistema completo de e-commerce para atacado, com gerenciamento de catálogo, pedidos e clientes, e integração com gateway de pagamento.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce platform dashboard',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'API de Análise Preditiva',
    description: 'Uma API RESTful que utiliza machine learning para prever tendências de mercado, com autenticação JWT e documentação Swagger.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'api data analytics',
    tags: ['Python', 'Flask', 'scikit-learn', 'Docker', 'JWT'],
    github: '#',
    live: '#',
  },
  {
    title: 'Aplicativo de Gerenciamento de Tarefas',
    description: 'Um app colaborativo em tempo real para equipes, com quadros Kanban, notificações e sincronização instantânea usando WebSockets.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'task management app',
    tags: ['React', 'Firebase', 'WebSocket', 'Styled-Components'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-24 bg-background">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Projetos em Destaque</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Uma seleção de projetos que demonstram minhas habilidades técnicas.</p>
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
              <CardDescription className="mt-4 flex-grow text-muted-foreground">{project.description}</CardDescription>
              <CardFooter className="p-0 pt-6 mt-auto flex justify-end gap-3">
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
