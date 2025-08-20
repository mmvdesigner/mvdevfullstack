import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma E-commerce',
    description: 'Uma plataforma de e-commerce completa com carrinho, pagamentos e gerenciamento de produtos.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online store',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Aplicativo de Tarefas',
    description: 'Um aplicativo de lista de tarefas colaborativo com autenticação de usuário e atualizações em tempo real.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Blog Pessoal com CMS',
    description: 'Um blog com renderização estática para performance máxima, com suporte a Markdown e integração com CMS.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'personal blog',
    tags: ['Next.js', 'MDX', 'Vercel'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projetos em Destaque</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Uma seleção de projetos que demonstram minhas habilidades e paixão por desenvolvimento.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardHeader className="p-0 relative">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-auto" data-ai-hint={project.dataAiHint} />
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow bg-card">
              <CardTitle className="leading-tight">{project.title}</CardTitle>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <CardDescription className="mt-3 flex-grow">{project.description}</CardDescription>
              <CardFooter className="p-0 pt-4 mt-auto flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button size="sm" asChild>
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
