import React from 'react';

const experiences = [
  {
    id: 1,
    company: 'Tech Innovations Inc',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2022 - Present',
    description: 'Led development of microservices architecture for enterprise SaaS platform, implementing CI/CD pipelines and improving deployment efficiency by 30%.'
  },
  {
    id: '2',
    company: 'Digital Solutions',
    position: 'Full Stack Developer',
    period: 'March 2020 - Dec 2021',
    description: 'Developed and maintained client-facing applications using React and Node.js while collaborating with cross-functional teams.'
  },
  {
    id: 3,
    company: 'WebCraft Studios',
    position: 'Frontend Developer',
    period: 'June 2018 - Feb 2020',
    description: 'Created responsive web interfaces and optimized application performance, resulting in 40% faster load times.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:translate-x-px"></div>
            
            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative mb-12 md:flex md:items-center"
              >
                 <div className="md:w-1/2 md:pr-8">
                  <div className={`
                    p-6 rounded-xl bg-gray-800/50 border border-gray-800
                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                  `}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                 </div>
                 <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950"></div>
                 <div className="md:hidden absolute top-4 left-0 -translate-x-[5px] w-3 h-3 rounded-full bg-blue-500 border-3 border-gray-950"></div>
                 <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:pl-8'}`}></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
