import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Plataforma de E-commerce',
    description: 'Uma plataforma de e-commerce completa com carrinho de compras, checkout, e painel de administração.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveHref: '#',
    repoHref: '#',
    hint: 'online store',
  },
  {
    title: 'Sistema de Gerenciamento de Conteúdo (CMS)',
    description: 'Um CMS headless que permite aos usuários gerenciar conteúdo de forma fácil e intuitiva.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    liveHref: '#',
    repoHref: '#',
    hint: 'content management',
  },
  {
    title: 'Aplicativo de Análise de Dados',
    description: 'Uma ferramenta de visualização de dados que transforma dados brutos em insights acionáveis.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Vue.js', 'Python', 'Flask', 'D3.js'],
    liveHref: '#',
    repoHref: '#',
    hint: 'data dashboard',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Meus Projetos</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Uma seleção de projetos que demonstram minhas habilidades e paixão por desenvolvimento.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-secondary/30 border-border/50 group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.hint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4 h-12">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link href={project.liveHref} target="_blank" className="text-sm font-semibold text-primary hover:underline">
                  Ver ao vivo <ArrowRight className="inline-block h-4 w-4" />
                </Link>
                <Link href={project.repoHref} target="_blank" className="text-sm font-semibold text-primary hover:underline">
                  Repositório <ArrowRight className="inline-block h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
