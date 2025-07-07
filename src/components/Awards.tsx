
import React from 'react';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Employee Appreciation Award",
      organization: "Edvoy Technologies",
      year: "2023",
      category: "Technical Excellence",
      description: "Honoured with 'employee appreciation' award for: Delivering a robust search engine using elasticsearch which added value in increasing the search performance of edvoy site for building Various Dashboards",
      impact: "Improved search performance by 40% and enhanced user experience across multiple dashboards",
      icon: <Trophy className="text-yellow-500" size={32} />,
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const recognitions = [
    {
      title: "Team Leadership Excellence",
      description: "Successfully led a team of 4 developers for 2+ years",
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented scalable microservices solutions",
      icon: <Star className="text-purple-500" size={24} />
    },
    {
      title: "Search Performance Optimization",
      description: "Achieved 40% improvement in search engine performance",
      icon: <Trophy className="text-green-500" size={24} />
    }
  ];

  return (
    <section id="awards" className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Recognition for outstanding contributions to technical excellence and team leadership
          </p>
        </div>

        {/* Main Awards */}
        <div className="space-y-8 mb-12">
          {awards.map((award) => (
            <div key={award.id} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${award.color} text-white mb-4`}>
                    {award.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="font-semibold">{award.year}</span>
                    </div>
                    <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-orange-800">{award.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">
                    {award.organization}
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {award.description}
                  </p>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Star size={18} className="text-yellow-500" />
                      Impact & Results
                    </h5>
                    <p className="text-gray-700">{award.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognitions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Recognitions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-100 rounded-full">
                    {recognition.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {recognition.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {recognition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">1</div>
            <div className="text-gray-600">Major Award</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
            <div className="text-gray-600">Team Members Led</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
            <div className="text-gray-600">Performance Improvement</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2023</div>
            <div className="text-gray-600">Recognition Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
