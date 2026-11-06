import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

type Experience = {
  id: number;
  title: string;
  company: string;
  client?: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "iSpace Technologies",
    client:
      "Client: Korn Ferry, a global organizational consulting firm. KFAdvance is its enterprise SaaS for leadership assessment, coaching and talent development.",
    location: "Hyderabad",
    duration: "Feb 2024 – Present",
    type: "Full-time",
    achievements: [
      "Built a browser-based PowerPoint generation engine (React, JSZip) that fills versioned, S3-hosted branded templates with editable text, tables, charts and images, reducing manual report preparation effort by 50%",
      "Built the Smartsheet integration from scratch (EU/US region compliance, multi-template workflows, real-time job tracking), cutting manual setup effort by 35%",
      "Built an AI-powered notes editor with OpenAI and Azure OpenAI for summarization, tone adjustment and perspective transformation",
      "Optimized SQL queries and database operations for large-dataset synchronization, improving API response time by 25%",
      "Designed event-driven consent-recording workflows on AWS EventBridge for downstream processing",
      "Built a configurable report system with template selection, page-level customization and PDF generation",
      "Built deep-cloning of engagement configurations with selective overrides, so teams can reuse complex setups across client engagements",
      "Delivered documents securely with AWS S3 signed URLs and role-based access control",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
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
    id: 2,
    title: "Fullstack Engineer",
    company: "Edvoy Technologies",
    client:
      "Student-recruitment platform (B2B and B2C) connecting students, counsellors, universities and agents.",
    location: "Chennai",
    duration: "Nov 2020 – Jan 2024",
    type: "Full-time",
    achievements: [
      "Led a team of 4 developers: planned and assigned work, owned delivery timelines, reviewed code and mentored junior engineers",
      "Built NestJS microservices on MongoDB and Redis using Domain-Driven Design, with RabbitMQ-based asynchronous pipelines that improved background processing efficiency by 20%",
      "Built the Elasticsearch-powered search engine and counsellor dashboards for the CRM, improving search response time by 20% (Employee Appreciation Award, 2023)",
      "Integrated the Gmail API into Edvoy-edge (B2B) so counsellors could send and receive email inside the platform",
      "Rebuilt the Partnership Module's agent workflows and territory framework after migrating institution data, and built a configurable data-table system with saved views, filtering and streamed exports",
    ],
    technologies: [
      "Nest.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "Microservices",
    ],
  },
  {
    id: 3,
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
      className="py-20 px-4 sm:px-6 bg-muted/40"
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
                className="relative pl-9 md:pl-14"
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                {/* Timeline dot; the current role pulses */}
                {exp.duration.includes("Present") && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-7 h-6 w-6 rounded-full bg-brand/50 motion-safe:animate-ping"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-br from-brand to-brand-2 shadow-md"
                />

                <article className="bg-card text-card-foreground rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 md:p-8">
                  <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Building2
                            size={16}
                            className="shrink-0 text-brand"
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
                      {exp.client && (
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {exp.client}
                        </p>
                      )}
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
