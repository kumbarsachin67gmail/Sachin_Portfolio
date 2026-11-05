import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Cloud, Code, Database, Server, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Reveal";
import { EASE_OUT, VIEWPORT, stagger } from "@/lib/motion";

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "REST",
      "GraphQL",
      "gRPC",
      "Microservices",
      "Event-Driven Architecture",
      "DDD",
      "CQRS",
    ],
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Redux", "Vue.js", "Nuxt.js", "Material UI", "HTML/CSS"],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "RabbitMQ",
      "Google Pub/Sub",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (EC2, Lambda, S3, EventBridge, CodeBuild)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "AI",
    icon: Sparkles,
    skills: [
      "OpenAI",
      "Azure OpenAI",
      "Claude Code (skills, MCP servers, plugins)",
      "Cursor",
    ],
  },
];

const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: EASE_OUT },
  },
};

const SkillChips = ({ skills }: { skills: string[] }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className="flex flex-wrap gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger(0.04, 0.1)}
    >
      {skills.map((skill) => (
        <motion.li
          key={skill}
          className="chip cursor-default transition-colors hover:border-brand/50 hover:text-foreground"
          variants={chipPop}
          whileHover={{ scale: 1.06 }}
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-20 px-6 bg-muted/40"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="skills-title"
          title="Technical Skills"
          subtitle="Deep in backend and distributed systems, comfortable across the stack."
        />

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <StaggerItem
              key={title}
              className="rounded-2xl border bg-card text-card-foreground p-6 shadow-sm"
            >
              <h3 className="flex items-center gap-3 text-lg font-bold mb-5">
                <span className="rounded-lg bg-gradient-to-br from-brand to-brand-2 p-2 text-white dark:text-slate-950">
                  <Icon size={20} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <SkillChips skills={skills} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Skills;
