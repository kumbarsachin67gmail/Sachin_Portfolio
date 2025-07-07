
import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Edvoy-edge (B2B, Edvoy)",
      category: "Enterprise Platform",
      description: "Orchestrated the seamless integration of the Gmail API, facilitating real-time email communication capabilities within the application framework, enhancing collaboration and workflow efficiency for the Student Recruitment Team and Counsellors.",
      detailedDescription: "Spearheaded the integration of B2B contracts, overseeing the development of commission templates and implementing dynamic dashboard functionalities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Nest.js", "Node.js", "MongoDB", "Gmail API", "Dashboard", "B2B Integration"],
      features: [
        "Real-time email communication via Gmail API",
        "Dynamic commission templates",
        "B2B contract management",
        "Interactive dashboards for recruitment teams",
        "Seamless workflow integration"
      ],
      impact: "Enhanced collaboration efficiency by 60% and streamlined recruitment processes",
      duration: "6 months",
      teamSize: "4 developers"
    },
    {
      id: 2,
      title: "CRM (Edvoy)",
      category: "Customer Relationship Management",
      description: "Optimized search functionality with Elasticsearch integration and designed user-friendly dashboards tailored to counselor workflows, enhancing decision-making efficiency.",
      detailedDescription: "Collaborated with stakeholders to define CRM needs, developing APIs for seamless data exchange and integration with existing systems, ensuring industry-standard compliance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Elasticsearch", "APIs", "Dashboard Design", "Data Integration", "Nest.js", "MongoDB"],
      features: [
        "Advanced search with Elasticsearch",
        "Counselor-specific dashboards",
        "Stakeholder requirement analysis",
        "Seamless API integrations",
        "Industry-standard compliance"
      ],
      impact: "Improved search performance by 40% and enhanced counselor productivity",
      duration: "8 months",
      teamSize: "5 developers"
    },
    {
      id: 3,
      title: "PartnerShip-Module (B2C, Edvoy)",
      category: "Partnership Management",
      description: "Led initiatives to optimize institution data integrity and streamline outbound agent workflows, enhancing the recruitment territory framework.",
      detailedDescription: "Spearheaded migration for merged institutions, resolving compatibility issues across diverse platforms, ensuring uninterrupted functionality.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["Data Migration", "Territory Framework", "Agent Workflows", "Platform Integration", "Node.js"],
      features: [
        "Institution data optimization",
        "Outbound agent workflow streamlining",
        "Migration management for merged institutions",
        "Cross-platform compatibility",
        "Territory framework enhancement"
      ],
      impact: "Reduced data inconsistencies by 70% and improved agent workflow efficiency",
      duration: "4 months",
      teamSize: "3 developers"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Comprehensive portfolio of enterprise-level applications and systems, showcasing expertise in full-stack development, 
            system integration, and team leadership across diverse technology stacks.
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                    <span className="text-sm font-semibold text-blue-800">{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <Calendar size={20} className="text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <Users size={20} className="text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">{project.teamSize}</div>
                    <div className="text-xs text-gray-600">Team Size</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <TrendingUp size={20} className="text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">High</div>
                    <div className="text-xs text-gray-600">Impact</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features & Achievements</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={18} className="text-green-600" />
                      <span className="font-semibold text-green-800">Business Impact</span>
                    </div>
                    <p className="text-green-700 text-sm">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm rounded-full border border-gray-300 hover:shadow-md transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Portfolio Summary
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-700">Major Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <div className="text-gray-700">Months Development</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-700">Team Members</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
