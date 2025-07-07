
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
          <p className="mb-6">
            I am a full-stack web developer with a passion for creating efficient and user-friendly web applications. My expertise lies in 
            React for front-end development, Node.js and NestJS for back-end services, and SQL for database management. I have a 
            strong background in building scalable and maintainable applications, and I am always eager to learn new technologies and 
            improve my skills.
          </p>
          
          <p className="mb-6">
            My professional journey has been marked by a commitment to delivering high-quality solutions that meet the 
            needs of users and clients alike. In my free time, I enjoy exploring new coding challenges and contributing to open-source 
            projects.
          </p>
          
          <p>
            I believe in writing clean, maintainable code and following best practices to ensure that applications are not only 
            functional but also sustainable for long-term growth and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
