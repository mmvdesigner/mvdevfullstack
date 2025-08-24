import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Layout, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Front-End",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Redux']
  },
  {
    title: "Back-End",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'PHP']
  },
  {
    title: "Bancos de Dados",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Prisma', 'SQLAlchemy']
  },
  {
    title: "DevOps & Ferramentas",
    icon: <Settings className="w-6 h-6 text-primary" />,
    skills: ['Docker', 'AWS', 'GCP', 'Vercel', 'Git & GitHub', 'CI/CD', 'Jest', 'Webpack']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24 bg-muted/20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Minhas Habilidades</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Tecnologias e ferramentas que domino para criar soluções completas.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="bg-card border-border shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              {category.icon}
              <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 rounded-md bg-secondary text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
