import Image from 'next/image';
import Link from 'next/link';
import { Code, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { title, description, projects, viewAllButtonText, viewAllButtonLink } = portfolioData.projects;

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.hint}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 h-20">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-secondary text-sm text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-4">
                  <Link 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full">
                      <Code />
                      Ver código
                    </Button>
                  </Link>
                  <Link 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-primary">
                      <Eye />
                      Ver demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <Link href={viewAllButtonLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
                {viewAllButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
