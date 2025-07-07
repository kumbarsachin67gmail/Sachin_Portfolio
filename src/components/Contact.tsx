
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

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
            <span className="text-lg">Email: alex.johnson@example.com</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
            <span className="text-lg">LinkedIn: linkedin.com/in/alexjohnson</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={20} />
            <span className="text-lg">GitHub: github.com/alexjohnson</span>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
