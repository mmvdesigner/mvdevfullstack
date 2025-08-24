"use client";

import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Desenvolvedor Full-Stack Sênior',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2021 - Presente',
    description: 'Lidero o desenvolvimento de aplicações web de ponta a ponta, utilizando React, Node.js e arquiteturas de microsserviços. Sou responsável por projetar APIs, gerenciar bancos de dados e otimizar o desempenho do front-end.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
  },
  {
    role: 'Engenheiro de Software Pleno',
    company: 'Innovate Co.',
    period: 'Jun 2018 - Dez 2020',
    description: 'Participei da criação de um SaaS de análise de dados, colaborando com equipes de produto e design. Desenvolvi features complexas com Angular e Python (Django), e ajudei a manter a infraestrutura na nuvem.',
    tags: ['Angular', 'Python', 'Django', 'PostgreSQL', 'GCP'],
  },
  {
    role: 'Desenvolvedor Web Júnior',
    company: 'Web Starters',
    period: 'Jul 2016 - Mai 2018',
    description: 'Comecei minha carreira construindo e mantendo sites institucionais e e-commerces. Ganhei experiência com HTML, CSS, JavaScript e PHP (Laravel), aprendendo os fundamentos do desenvolvimento web.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Experiência Profissional</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Minha jornada no mundo do desenvolvimento de software.</p>
      </div>
      <div className="mt-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border rounded-full hidden md:block"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start relative">
              <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <p className="font-semibold text-primary">{exp.period}</p>
              </div>
              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                 <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -translate-y-1/2 md:-left-4 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 hidden md:block"></div>
                 <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-card border border-border transition-transform transform hover:scale-105 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground font-semibold">{exp.company}</p>
                  <p className="mt-3 text-muted-foreground">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
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
