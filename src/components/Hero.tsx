import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Info */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SACHIN KUMBAR
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
                Full Stack Developer | AI Enthusiast
              </h2>

              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Expert full-stack engineer specializing in backend development
                with 4+ years of experience in Node.js, Nest.js, microservices
                architecture, and scalable system design. Proven track record of
                leading teams and delivering high-performance applications.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">4</div>
                <div className="text-sm text-gray-400">Team Members Led</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Experience
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info & Profile */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src="/lovable-uploads/15811608-2256-4a8b-9e50-28986a217b1e.png"
                    alt="Sachin Kumbar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="p-2 bg-blue-500 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-semibold">
                      kumbarsachin67@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="p-2 bg-green-500 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="font-semibold">9481329017</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="p-2 bg-purple-500 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-semibold">Bengaluru, Karnataka</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <a
                  href="https://linkedin.com/in/sachin-kumbar-634b42171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
