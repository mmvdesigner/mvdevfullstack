import React from 'react';
import { Check } from 'lucide-react';

const experiences = [
  {
    id: 3,
    company: 'Tech Innovation Labs',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2023 - Presente',
    location: 'São Paulo, SP',
    description: 'Liderando o desenvolvimento de aplicações web modernas com React 18 e Node.js. Responsável pela arquitetura de microserviços e implementação de CI/CD.',
    achievements: [
      'Aumentou performance das aplicações em 40%',
      'Liderou equipe de 5 desenvolvedores',
      'Implementou testes automatizados (95% cobertura)',
      'Migrou arquitetura para microserviços'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL']
  },
  {
    id: 2,
    company: 'StartupX',
    position: 'Full Stack Developer',
    period: 'Mar 2021 - Dez 2022',
    location: 'Rio de Janeiro, RJ',
    description: 'Desenvolvimento de plataforma SaaS completa desde o MVP até a escala de 10k+ usuários. Foco em performance e experiência do usuário.',
    achievements: [
      'Desenvolveu MVP em 3 meses',
      'Escalou aplicação para 10k+ usuários',
      'Reduziu tempo de carregamento em 60%',
      'Implementou sistema de pagamentos'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Vercel', 'Redis']
  },
  {
    id: 1,
    company: 'FreelanceHub',
    position: 'Desenvolvedor Freelancer',
    period: 'Jan 2019 - Mai 2020',
    location: 'Trabalho Remoto',
    description: 'Desenvolvimento de soluções personalizadas para pequenas e médias empresas. Foco em e-commerce e automação de processos.',
    achievements: [
      'Completou 40+ projetos freelance',
      'Avaliação média 4.9/5 em plataformas',
      'Desenvolveu 8 lojas online',
      'Automação que economizou 200h/mês'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Mais de 5 anos construindo soluções inovadoras e liderando projetos de alta complexidade
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-800 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 md:pl-0 mb-12 last:mb-0">
              {/* Mobile and Desktop Dot */}
              <div className="absolute left-4 top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-950 md:left-1/2 md:w-4 md:h-4 md:transform md:-translate-x-1/2 md:border-4"></div>
              
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="md:w-1/2"></div>
                 <div className="md:w-1/2 md:px-6">
                  <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
                    <div className={`text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-blue-400 font-medium mb-2">{exp.company} | {exp.location}</p>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    </div>
                    <p className="text-gray-300 mb-4 text-left">{exp.description}</p>
                    <h4 className="font-semibold mb-2 text-left">Principais Conquistas:</h4>
                    <ul className="space-y-2 mb-4 text-left">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{ach}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 justify-start">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
