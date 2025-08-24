import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'Next.js', 'TypeScript', 'TailwindCSS', 
  'Node.js', 'Express', 'Firebase', 'SQL', 'NoSQL',
  'RESTful APIs', 'GraphQL', 'tRPC',
  'Docker', 'Vercel', 'Google Cloud',
  'React Native', 'Responsive Design',
  'Figma', 'UI/UX Design'
];

export default function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24 bg-background">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Habilidades Técnicas</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Um resumo das tecnologias e ferramentas que eu uso para dar vida às ideias.</p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-lg px-4 py-2 rounded-full transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
