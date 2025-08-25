import { Code, Server, Cloud } from 'lucide-react';

const skills = {
  frontend: [
    { id: 1, name: 'React', level: '90%' },
    { id: 2, name: 'TypeScript', level: '85%' }, 
    { id: 3, name: 'JavaScript', level: '95%' },
    { id: 4, name: 'CSS/Tailwind', level: '90%' },
    { id: 5, name: 'HTML', level: '95%' }
  ],
  backend: [
    { id: 1, name: 'Node.js', level: '85%' },
    { id: '2', name: 'Express', level: '80%' },
    { id: 3, name: 'PostgreSQL', level: '75%' },
    { id: 4, name: 'MongoDB', level: '80%' },
    { id: 5 , name: 'GraphQL', level: '70%' }
  ],
  devops: [ 
    { id: 1, name: 'Docker', level: '75%' }, 
    { id: 2 , name: 'Git', level: '90%' },
    { id: 3, name: 'CI/CD', level: '80%' }, 
    { id: '4', name: 'AWS', level: '70%' },
    { id: '5', name: 'Linux', level: '85%' } 
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, and DevOps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                <Code size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            
            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                <Server size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            
            <div className="space-y-6">
              {skills.backend.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* DevOps Skills */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                <Cloud size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">DevOps</h3>
            </div>
            
            <div className="space-y-6">
              {skills.devops.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
