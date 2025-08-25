import React from 'react';
import { Check } from 'lucide-react';

const experiences = [
  {
    id: 1,
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
    id: 3,
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
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-5 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-px"></div>
            
            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative mb-12 flex flex-col md:flex-row items-start"
              >
                {/* Left Side (for even indexes) or Spacer */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:order-2 md:pl-8'}`}>
                  {index % 2 === 0 && (
                    <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-left">
                      <p className="text-blue-400 font-medium mb-2">{exp.company} | {exp.location}</p>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Principais Conquistas:</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start">
                            <Check size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{ach}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-full md:w-auto flex md:flex-col items-center justify-center my-4 md:my-0">
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950"></div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-950 absolute left-0 top-1 -translate-x-[5px]"></div>
                </div>

                {/* Right Side (for odd indexes) or Spacer */}
                <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-8' : 'md:order-2 md:pr-8'}`}>
                  {index % 2 !== 0 && (
                     <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 text-left">
                      <p className="text-blue-400 font-medium mb-2">{exp.company} | {exp.location}</p>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Principais Conquistas:</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start">
                            <Check size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{ach}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
