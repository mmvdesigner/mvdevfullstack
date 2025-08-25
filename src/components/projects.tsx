import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    imageUrl: 'https://roboneo-public.meitudata.com/public/html_imgs/04m6e9qac3y7g7a2/4ae3bb45326446f095287cd51e8faa03.png',
    hint: 'e-commerce platform',
  },
  {
    id: 2,
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, authorization and data validation.',
    technologies: ['Express', 'PostgreSQL', 'JWT', 'Docker'],
    link: '#',
    imageUrl: 'https://roboneo-public.meitudata.com/public/html_imgs/04m6e9qac3y7g7a2/4ae3bb45326446f095287cd51e8faa03.png',
    hint: 'api task management',
  },
  {
    id: 3,
    title: 'DevOps Dashboard',
    description: 'Real-time monitoring dashboard for server metrics and deployment status.',
    technologies: ['React', 'Golang', 'InfluxDB', 'Grafana'],
    link: '#',
    imageUrl: 'https://roboneo-public.meitudata.com/public/html_imgs/04m6e9qac3y7g7a2/4ae3bb45326446f095287cd51e8faa03.png',
    hint: 'devops dashboard',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-16">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/link"
                >
                  View Project
                  <ExternalLink size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
