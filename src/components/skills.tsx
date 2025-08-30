import { Code, Server, Cloud, PencilRuler } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const SkillBar = ({ name, level }: { name: string, level: string }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm font-medium text-muted-foreground">{level}</span>
    </div>
    <div className="w-full bg-secondary rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-blue-500 to-primary h-2.5 rounded-full"
        style={{ width: level }}
      ></div>
    </div>
  </div>
);

export default function Skills() {
  const { title, description, categories } = portfolioData.skills;
  
  return (
    <section id="habilidades" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col gap-12">
          {/* Frontend & Backend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Code size={24} className="text-primary" /> {categories.frontend.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.frontend.skills.map((skill) => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Server size={24} className="text-primary" /> {categories.backend.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.backend.skills.map((skill) => (
                  <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
          
          {/* DevOps & Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><PencilRuler size={24} className="text-primary" /> {categories.devops.title}</h3>
            <div className="flex flex-wrap gap-4">
              {categories.devops.tools.map((tool, index) => (
                <div key={index} className="bg-card border border-border px-4 py-2 rounded-lg text-foreground">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
