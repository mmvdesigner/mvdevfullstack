import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Desenvolvedor Full-Stack Sênior',
    period: 'Jan 2021 - Presente',
    description: 'Liderei o desenvolvimento de múltiplos projetos de larga escala, utilizando React, Node.js e Kubernetes. Fui responsável pela arquitetura de microsserviços e pela otimização de performance.',
    tags: ['React', 'Node.js', 'TypeScript', 'Kubernetes', 'AWS'],
  },
  {
    company: 'Innovate Co.',
    role: 'Desenvolvedor Full-Stack',
    period: 'Jun 2018 - Dez 2020',
    description: 'Desenvolvi e mantive aplicações web completas, participando de todo o ciclo de vida do produto, desde o conceito até o deploy. Colaborei em equipes ágeis para entregar funcionalidades de alta qualidade.',
    tags: ['Angular', 'Java', 'Spring Boot', 'Docker', 'GCP'],
  },
  {
    company: 'Web Starters',
    role: 'Desenvolvedor Front-end Júnior',
    period: 'Jul 2016 - Mai 2018',
    description: 'Iniciei minha carreira focando em criar interfaces de usuário responsivas e interativas com HTML, CSS e JavaScript. Aprendi os fundamentos de frameworks como Vue.js.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-32 bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Experiência Profissional</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Minha jornada no mundo do desenvolvimento de software.
        </p>
      </div>
      <div className="relative mt-12 max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experienceData.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className={`absolute top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center ${index % 2 === 0 ? 'right-[calc(50%-1rem)]' : 'left-[calc(50%-1rem)]'}`}>
                <Briefcase className="h-4 w-4" />
              </div>
              <Card className="bg-card/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{item.role}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.company} | {item.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-start">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
