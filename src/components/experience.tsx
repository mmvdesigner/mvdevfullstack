'use client';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { title, description, experiences } = portfolioData.experience;
  
  return (
    <section id="experiencias" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="order-1 w-5/12"></div>
              
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-primary-foreground font-semibold text-lg">{exp.id}</div>
              </div>
              
              <div className={`order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border border-border ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-muted-foreground mb-1">{exp.period} | {exp.location} | {exp.employmentType}</p>
                <h3 className="font-bold text-lg text-foreground">{exp.position}</h3>
                <h4 className="font-semibold text-primary mb-3">{exp.company}</h4>
                <p className='text-sm text-muted-foreground mb-3'>{exp.description}</p>
                <p className='text-sm text-foreground font-semibold mb-2'>{exp.achievements.title}</p>
                <ul className={`text-sm text-muted-foreground list-disc list-inside mb-4 ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                  {exp.achievements.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                  {exp.technologies.map(tech => (
                    <span key={tech} className="bg-secondary text-xs text-muted-foreground px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
