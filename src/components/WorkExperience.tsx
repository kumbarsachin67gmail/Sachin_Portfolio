import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "iSpace Technologies (Client: Korn Ferry, KFAdvance)",
    location: "Hyderabad",
    duration: "Feb 2024 – Present",
    type: "Full-time",
    achievements: [
      "Browser-based PowerPoint generation engine (React + JSZip) that dynamically fills branded templates with editable text, native tables, charts and images; version-controlled templates on AWS S3",
      "Built the Smartsheet integration from scratch: EU and US region compliance, multi-template workflows, real-time job tracking",
      "AI-powered notes editor with OpenAI / Azure OpenAI for summarization, tone adjustment and perspective transformation",
      "Event-driven consent workflows on AWS EventBridge; configurable report system with PDF generation; secure document delivery with S3 signed URLs and RBAC",
    ],
    technologies: [
      "Node.js",
      "React",
      "Redux",
      "SQL",
      "JSZip",
      "OpenAI",
      "Azure OpenAI",
      "AWS S3",
      "AWS EventBridge",
      "Smartsheet",
    ],
  },
  {
    id: 3,
    title: "Fullstack Engineer, Backend Developer",
    company: "Edvoy Technologies",
    location: "Chennai",
    duration: "Jun 2021 – Jan 2024",
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
    duration: "Nov 2020 – May 2021",
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
    duration: "May 2018 – Jun 2018",
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

const WorkExperience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-20 px-6 bg-muted/40"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading id="experience-title" title="Work Experience" />

        <div ref={timelineRef} className="relative">
          {/* Timeline track and the line that draws itself on scroll */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[11px] top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-brand to-brand-2"
            style={{ scaleY: reduce ? 1 : lineScale }}
          />

          <ol className="relative space-y-10">
            {experiences.map((exp) => (
              <motion.li
                key={exp.id}
                className="relative pl-10 md:pl-14"
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-brand to-brand-2 shadow-md"
                />

                <article className="bg-card text-card-foreground rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Building2
                            size={16}
                            className="text-brand"
                            aria-hidden="true"
                          />
                          <span className="font-semibold text-foreground">
                            {exp.company}
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} aria-hidden="true" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2 font-mono text-sm">
                          <Calendar size={16} aria-hidden="true" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <span className="self-start shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {exp.type}
                    </span>
                  </header>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 bg-gradient-to-br from-brand to-brand-2 rounded-full mt-2.5 flex-shrink-0"
                        />
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-label="Technologies used"
                    className="flex flex-wrap gap-2"
                  >
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="chip text-xs font-mono">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
