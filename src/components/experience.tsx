'use client';

const experiences = [
  {
    id: 1,
    company: 'Tech Innovation Labs',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2023 - Presente',
    location: 'São Paulo, SP',
    description: [
      'Liderando o desenvolvimento de aplicações web modernas com React 18 e Node.js.',
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
    description: [
      'Desenvolvimento de plataforma SaaS completa desde o MVP até a escala de 10k+ usuários.',
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
    description: [
      'Desenvolvimento de soluções personalizadas para pequenas e médias empresas.',
      'Completou 40+ projetos freelance',
      'Avaliação média 4.9/5 em plataformas',
      'Desenvolveu 8 lojas online',
      'Automação que economizou 200h/mês'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  },
];

export default function Experience() {
  return (
    <section id="experiencias" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mais de 5 anos construindo soluções inovadoras e liderando projetos de alta complexidade.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="order-1 w-5/12"></div>
              
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <div className="mx-auto text-primary-foreground font-semibold text-lg">{exp.id}</div>
              </div>
              
              <div className={`order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border border-border ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-muted-foreground mb-1">{exp.period} | {exp.location}</p>
                <h3 className="font-bold text-lg text-foreground">{exp.position}</h3>
                <h4 className="font-semibold text-primary mb-3">{exp.company}</h4>
                <ul className="text-sm text-muted-foreground list-disc list-inside mb-4">
                  {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
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
