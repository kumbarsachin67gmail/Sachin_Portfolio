import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Contact
        </h2>

        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={20} />
            <a
              href="mailto:kumbarsachin67@gmail.com"
              className="text-lg underline hover:text-blue-600 transition-colors"
            >
              Email: kumbarsachin67@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
            <a
              href="https://www.linkedin.com/in/sachin-kumbar-634b42171/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:text-blue-600 transition-colors"
            >
              LinkedIn: https://www.linkedin.com/in/sachin-kumbar-634b42171/
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={20} />
            <a
              href="https://github.com/kumbarsachin67gmail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:text-blue-600 transition-colors"
            >
              GitHub: https://github.com/kumbarsachin67gmail
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 Sachin Kumbar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
