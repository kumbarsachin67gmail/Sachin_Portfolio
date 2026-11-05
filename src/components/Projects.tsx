import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, TrendingUp, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./motion/TiltCard";
import { Stagger, StaggerItem } from "./motion/Reveal";
import { EASE_OUT } from "@/lib/motion";

type Project = {
  id: string;
  title: string;
  org: string;
  category: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  features: string[];
  impact?: string;
  duration?: string;
  teamSize?: string;
};

const projects: Project[] = [
  {
    id: "pptx-engine",
    title: "PowerPoint Generation Engine",
    org: "KFAdvance · Korn Ferry",
    category: "Document Generation",
    description:
      "A browser-based engine that dynamically fills branded PowerPoint templates with editable text, native tables, charts and images, and downloads an editable .pptx.",
    technologies: ["React", "JSZip", "AWS S3"],
    features: [
      "Templates with placeholders are filled with data from the API",
      "The engine edits the slide XML directly in the browser using JSZip",
      "Editable text, native tables, charts and images in the output",
      "Version-controlled templates stored on AWS S3",
    ],
  },
  {
    id: "ai-notes",
    title: "AI-Powered Notes Editor",
    org: "KFAdvance · Korn Ferry",
    category: "AI Integration",
    description:
      "A notes editor with built-in AI assistance using OpenAI and Azure OpenAI for summarization, tone adjustment and perspective transformation.",
    technologies: ["OpenAI", "Azure OpenAI", "React", "Node.js"],
    features: [
      "Summarization, tone adjustment and perspective rewriting",
      "Role-based validation for AI modifiers and dynamic prompts",
      "Upgraded from GPT-3.5 to GPT-4 with integrated guardrails",
      "Audit logging and a progressive typing UX",
    ],
  },
  {
    id: "paper-trading",
    title: "Paper Trading Platform for NSE Stocks",
    org: "Personal project",
    category: "Fintech",
    description:
      "Simulated trading on live Upstox prices with OAuth, plus a stock screener built on hand-written technical indicators.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
    ],
    features: [
      "Simulated trading on live Upstox prices with OAuth login",
      "Stock screener with hand-written SMA, EMA, RSI, MACD and Bollinger Bands",
      "pytest suite with an isolated database per test",
    ],
  },
  {
    id: "edvoy-edge",
    title: "Edvoy-edge (B2B)",
    org: "Edvoy",
    category: "Enterprise Platform",
    description:
      "Orchestrated the seamless integration of the Gmail API, facilitating real-time email communication capabilities within the application framework, enhancing collaboration and workflow efficiency for the Student Recruitment Team and Counsellors.",
    detailedDescription:
      "Spearheaded the integration of B2B contracts, overseeing the development of commission templates and implementing dynamic dashboard functionalities.",
    technologies: [
      "Nest.js",
      "Node.js",
      "MongoDB",
      "Gmail API",
      "Dashboard",
      "B2B Integration",
    ],
    features: [
      "Real-time email communication via Gmail API",
      "Dynamic commission templates",
      "B2B contract management",
      "Interactive dashboards for recruitment teams",
      "Seamless workflow integration",
    ],
    impact:
      "Enhanced collaboration efficiency by 60% and streamlined recruitment processes",
    duration: "6 months",
    teamSize: "4 developers",
  },
  {
    id: "edvoy-crm",
    title: "CRM",
    org: "Edvoy",
    category: "Customer Relationship Management",
    description:
      "Optimized search functionality with Elasticsearch integration and designed user-friendly dashboards tailored to counselor workflows, enhancing decision-making efficiency.",
    detailedDescription:
      "Collaborated with stakeholders to define CRM needs, developing APIs for seamless data exchange and integration with existing systems, ensuring industry-standard compliance.",
    technologies: [
      "Elasticsearch",
      "APIs",
      "Dashboard Design",
      "Data Integration",
      "Nest.js",
      "MongoDB",
    ],
    features: [
      "Advanced search with Elasticsearch",
      "Counselor-specific dashboards",
      "Stakeholder requirement analysis",
      "Seamless API integrations",
      "Industry-standard compliance",
    ],
    impact:
      "Improved search performance by 40% and enhanced counselor productivity",
    duration: "8 months",
    teamSize: "5 developers",
  },
  {
    id: "edvoy-partnership",
    title: "Partnership Module (B2C)",
    org: "Edvoy",
    category: "Partnership Management",
    description:
      "Led initiatives to optimize institution data integrity and streamline outbound agent workflows, enhancing the recruitment territory framework.",
    detailedDescription:
      "Spearheaded migration for merged institutions, resolving compatibility issues across diverse platforms, ensuring uninterrupted functionality.",
    technologies: [
      "Data Migration",
      "Territory Framework",
      "Agent Workflows",
      "Platform Integration",
      "Node.js",
    ],
    features: [
      "Institution data optimization",
      "Outbound agent workflow streamlining",
      "Migration management for merged institutions",
      "Cross-platform compatibility",
      "Territory framework enhancement",
    ],
    impact:
      "Reduced data inconsistencies by 70% and improved agent workflow efficiency",
    duration: "4 months",
    teamSize: "3 developers",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <TiltCard className="group relative h-full">
      <article className="relative h-full overflow-hidden rounded-2xl border bg-card text-card-foreground p-6 shadow-sm transition-[border-color,box-shadow] duration-300 group-hover:border-brand/50 group-hover:shadow-[0_12px_40px_-12px_hsl(var(--brand)/0.45)]">
        {/* Accent line that lights up on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {project.org}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {(project.duration || project.teamSize) && (
          <div className="flex flex-wrap gap-4 mb-4 font-mono text-xs text-muted-foreground">
            {project.duration && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} aria-hidden="true" />
                {project.duration}
              </span>
            )}
            {project.teamSize && (
              <span className="flex items-center gap-1.5">
                <Users size={14} aria-hidden="true" />
                {project.teamSize}
              </span>
            )}
          </div>
        )}

        <ul
          aria-label="Technologies used"
          className="flex flex-wrap gap-2 mb-5"
        >
          {project.technologies.map((tech) => (
            <li key={tech} className="chip text-xs font-mono">
              {tech}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-brand hover:underline underline-offset-4"
        >
          Key features
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {project.detailedDescription && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.detailedDescription}
                  </p>
                )}
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 bg-gradient-to-br from-brand to-brand-2 rounded-full mt-2 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {project.impact && (
                  <p className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-800 dark:text-emerald-300">
                    <TrendingUp
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    {project.impact}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </TiltCard>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="projects-title"
          title="Featured Projects"
          subtitle="Enterprise features I've built at Korn Ferry and Edvoy, plus a personal project."
        />

        <Stagger
          as="ul"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start"
        >
          {projects.map((project) => (
            <StaggerItem as="li" key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Projects;
