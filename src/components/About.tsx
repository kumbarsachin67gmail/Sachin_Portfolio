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
              I'm a backend-focused senior engineer who builds the parts of
              enterprise SaaS that have to be reliable: event-driven workflows,
              integrations with third-party platforms, and services that scale.
              Over six years I've worked mostly in Node.js, NestJS and
              TypeScript on AWS, and lately I've been adding AI features to
              production products with OpenAI and Azure OpenAI.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              Right now I work on Korn Ferry's KFAdvance platform. There I've
              built a browser-based PowerPoint generation engine, a Smartsheet
              integration that runs in both EU and US regions, and AI-assisted
              editing tools. Before that, at Edvoy, I led a team of four
              engineers building microservices for a student-recruitment
              platform.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p>
              I care about clean domain boundaries, systems that are boring to
              operate, and code the next engineer can pick up easily.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};

export default About;
