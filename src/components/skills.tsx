import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Server, Component } from 'lucide-react';

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "Django", "Flask", "Java", "Spring Boot", "RESTful APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  tools: ["Git", "Docker", "Kubernetes", "CI/CD", "Webpack", "Vite", "Jest"],
};

export default function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Minhas Habilidades</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tecnologias e ferramentas que utilizo para criar soluções de ponta.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="bg-secondary/30 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-primary">Frontend</CardTitle>
            <Component className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary/30 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-primary">Backend</CardTitle>
            <Server className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsData.backend.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary/30 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-primary">Bancos de Dados</CardTitle>
            <Database className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsData.databases.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary/30 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-primary">Ferramentas & DevOps</CardTitle>
            <Code className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
