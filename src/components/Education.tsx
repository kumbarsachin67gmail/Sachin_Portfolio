
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Electronics and Communication",
      institution: "NMAM Institute of Technology",
      location: "Karnataka, India",
      duration: "Aug 2018 - Jun 2020",
      type: "Full-time",
      description: "Specialized in embedded systems, digital signal processing, and communication protocols. Completed projects in IoT, microcontroller programming, and network analysis.",
      achievements: [
        "Completed advanced coursework in Digital Signal Processing",
        "Worked on IoT projects with Arduino and Raspberry Pi",
        "Studied communication protocols and network analysis",
        "Participated in technical symposiums and coding competitions"
      ],
      gpa: "8.2/10.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Microprocessor & Microcontroller",
        "Digital Signal Processing"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational History
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Strong academic foundation in electronics and communication engineering with focus on software development
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                        {edu.field}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={18} className="text-indigo-600" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-green-600" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-purple-600" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Award size={20} className="text-indigo-600" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Academic Performance</h5>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-1">{edu.gpa}</div>
                      <div className="text-sm text-gray-600">Cumulative GPA</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <h5 className="font-semibold text-gray-800 mb-4">Relevant Coursework</h5>
                    <div className="space-y-2">
                      {edu.relevantCourses.map((course) => (
                        <div key={course} className="bg-white rounded-lg p-3 border border-gray-200">
                          <span className="text-sm text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">B.Tech</div>
            <div className="text-gray-600">Engineering Degree</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2020</div>
            <div className="text-gray-600">Graduation Year</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">8.2</div>
            <div className="text-gray-600">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
