import { Badge } from '@/components/ui/badge';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 
  'React', 'Next.js', 'TailwindCSS', 
  'Figma', 'UI/UX Design', 'Design Systems',
  'Node.js', 'GraphQL', 'Storybook',
  'Git', 'CI/CD', 'Vercel',
  'Web Performance', 'Accessibility'
];

export default function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24 bg-muted/20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Minhas Ferramentas</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">As tecnologias e ferramentas que uso para criar produtos digitais incríveis.</p>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-lg px-6 py-3 rounded-md transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-secondary text-secondary-foreground">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
