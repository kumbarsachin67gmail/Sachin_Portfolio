
import React, { useState } from 'react';
import { Code, Database, Server, Cloud, GitBranch, Workflow } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Technologies',
      icon: <Server size={24} />,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'Node.js', level: 95, experience: '4+ years' },
        { name: 'Nest.js', level: 92, experience: '3+ years' },
        { name: 'Express', level: 88, experience: '4+ years' },
        { name: 'GraphQL', level: 85, experience: '2+ years' },
        { name: 'gRPC', level: 80, experience: '2+ years' },
        { name: 'RabbitMQ', level: 85, experience: '2+ years' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: <Database size={24} />,
      color: 'from-green-500 to-green-700',
      skills: [
        { name: 'MongoDB', level: 90, experience: '3+ years' },
        { name: 'MySQL', level: 85, experience: '3+ years' },
        { name: 'Redis', level: 88, experience: '2+ years' },
        { name: 'SQL', level: 87, experience: '4+ years' },
        { name: 'Elasticsearch', level: 82, experience: '2+ years' }
      ]
    },
    frontend: {
      title: 'Frontend Technologies',
      icon: <Code size={24} />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'JavaScript', level: 93, experience: '4+ years' },
        { name: 'TypeScript', level: 90, experience: '3+ years' },
        { name: 'React', level: 85, experience: '3+ years' },
        { name: 'Vue.js', level: 78, experience: '2+ years' },
        { name: 'NuxtJs', level: 75, experience: '1+ years' },
        { name: 'HTML/CSS', level: 88, experience: '4+ years' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      color: 'from-orange-500 to-orange-700',
      skills: [
        { name: 'Docker', level: 85, experience: '2+ years' },
        { name: 'Amazon AWS', level: 82, experience: '2+ years' },
        { name: 'Git', level: 90, experience: '4+ years' },
        { name: 'CQRS', level: 78, experience: '1+ years' }
      ]
    },
    architecture: {
      title: 'Architecture & Patterns',
      icon: <Workflow size={24} />,
      color: 'from-red-500 to-red-700',
      skills: [
        { name: 'Event Driven Architecture', level: 88, experience: '2+ years' },
        { name: 'DDD (Domain Driven Design)', level: 85, experience: '2+ years' },
        { name: 'Microservices', level: 87, experience: '2+ years' },
        { name: 'Scrum (Agile)', level: 90, experience: '3+ years' }
      ]
    }
  };

  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, with deep specialization in backend technologies and system architecture
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">{skill.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">{skill.experience}</span>
                    <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
