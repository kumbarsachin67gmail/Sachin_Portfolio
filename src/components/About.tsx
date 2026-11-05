import React from "react";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Reveal";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading id="about-title" title="About Me" />

        <Stagger className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <StaggerItem>
            <p>
              I am a senior software engineer focused on backend and distributed
              systems, with a passion for creating efficient and user-friendly
              applications. My expertise lies in Node.js and NestJS for back-end
              services, React for the front end, and SQL for database
              management. I have a strong background in building scalable and
              maintainable applications, and I am always eager to learn new
              technologies and improve my skills.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              My professional journey has been marked by a commitment to
              delivering high-quality solutions that meet the needs of users and
              clients alike. In my free time, I enjoy exploring new coding
              challenges and contributing to open-source projects.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              I believe in writing clean, maintainable code and following best
              practices to ensure that applications are not only functional but
              also sustainable for long-term growth and development.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default About;
