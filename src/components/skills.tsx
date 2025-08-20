import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Server, BrainCircuit, Smartphone, PenTool } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Code2 className="h-10 w-10 text-primary" />, description: 'React, Next.js, TypeScript, TailwindCSS' },
  { name: 'Backend', icon: <Database className="h-10 w-10 text-primary" />, description: 'Node.js, Express, Firebase, SQL/NoSQL' },
  { name: 'APIs', icon: <BrainCircuit className="h-10 w-10 text-primary" />, description: 'RESTful APIs, GraphQL, tRPC' },
  { name: 'DevOps', icon: <Server className="h-10 w-10 text-primary" />, description: 'Docker, Vercel, Google Cloud' },
  { name: 'Mobile', icon: <Smartphone className="h-10 w-10 text-primary" />, description: 'React Native, Responsive Design' },
  { name: 'UI/UX Design', icon: <PenTool className="h-10 w-10 text-primary" />, description: 'Figma, User-centric design principles' },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24 bg-muted/50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Minhas Habilidades</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Um resumo das tecnologias e ferramentas que eu uso para dar vida às ideias.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="p-0 flex flex-col items-center">
              {skill.icon}
              <CardTitle className="mt-4">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
