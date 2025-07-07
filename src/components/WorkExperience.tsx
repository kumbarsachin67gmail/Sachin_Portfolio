import React from "react";
import { Calendar, MapPin, Users, Code, Database, Server } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer - AI Notes & Smartsheet Integrations",
      company: "Korn-Ferry | Ispace",
      location: "Hyderabad",
      duration: "2024-Mar - Present",
      type: "Full-time",
      achievements: [
        "Developed and integrated AI-powered features for enterprise note-taking and workflow automation, leveraging OpenAI and advanced prompt engineering.",
        "Implemented robust role-based access controls and dynamic user experiences across multiple modules.",
        "Upgraded and maintained AI infrastructure, ensuring compliance with security and quality standards.",
        "Designed and built scalable UI components and data management features for project planning and reporting.",
        "Collaborated with cross-functional teams to optimize backend processes, database queries, and deployment workflows.",
        "Contributed to both client-side and server-side development, supporting ongoing enhancements and dashboard/reporting solutions.",
        "Worked on multiple 3rd party integrations including OpenAI, Smartsheet, and CMS platforms.",
      ],
      technologies: [
        "Node.js",
        "SQL",
        "React",
        "CSS",
        "OpenAI",
        "Redux",
        "Smartsheet",
      ],
    },
    {
      id: 3,
      title: "Fullstack Engineer, Backend Developer",
      company: "Edvoy Technologies",
      location: "Chennai",
      duration: "2021-Jun - 2024-Jan",
      type: "Full-time",
      achievements: [
        "Implemented backend solutions using Nest.js and Node.js, utilized MongoDB for database management, developed microservices architecture for scalability",
        "Integrated RMQ and Redis for efficient message queuing and caching, designed event-driven systems for asynchronous communication",
        "Followed Domain-Driven Design principles for modular and maintainable code",
        "Led a team of 4 developers, overseeing task assignment and ensuring timely delivery while providing technical guidance and mentorship",
        "Additionally, developed Elasticsearch-based Dashboard, collaborated on Business Requirements with UI developers",
        "Provided aligned technical solutions through stakeholder collaboration",
      ],
      technologies: [
        "Nest.js",
        "Node.js",
        "MongoDB",
        "Redis",
        "RabbitMQ",
        "Elasticsearch",
        "Microservices",
      ],
    },
    {
      id: 4,
      title: "Jr Fullstack Engineer",
      company: "Edvoy Technologies",
      location: "Chennai",
      duration: "Nov 2020 - May 2021",
      type: "Full-time",
      achievements: [
        "Developed a customizable table data system utilizing Nest.js pub/sub model and file stream concepts",
        "Implemented personalized views with filtering capabilities, allowing users to create custom or standard views and export data seamlessly",
        "Led the design and development of client and server code, ensuring seamless functionality and optimal user experience",
      ],
      technologies: [
        "Nest.js",
        "TypeScript",
        "File Streaming",
        "Pub/Sub Pattern",
      ],
    },
    {
      id: 5,
      title: "Networking and Embedded System Intern",
      company: "Azure Skynet Solutions Pvt. Ltd, Vitvara Technologies",
      location: "Remote",
      duration: "May 2018 - Jun 2018",
      type: "Internship",
      achievements: [
        "Conducted packet analysis with Wireshark, completed CCNA projects in Cisco Packet Tracer",
        "Implemented MySQL and PHP API projects for automatic door control, railway crossing gate control, and home automation",
        "Gained hands-on experience with networking protocols and embedded systems integration",
      ],
      technologies: [
        "Wireshark",
        "CCNA",
        "MySQL",
        "PHP",
        "Embedded Systems",
        "IoT",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-300 to-purple-300 hidden md:block"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:ml-16 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Code size={18} className="text-blue-600" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-green-600" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-purple-600" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-blue-800">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users size={20} className="text-blue-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Server size={20} className="text-green-600" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm rounded-full border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
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
};

export default WorkExperience;
