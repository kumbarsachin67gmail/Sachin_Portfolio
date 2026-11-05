import React from "react";
import { Mail, Linkedin, Github, Copy, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Reveal";
import { SITE, copyEmail } from "@/lib/site";

const cardClass =
  "group flex h-full w-full flex-col items-center gap-3 rounded-2xl border bg-card text-card-foreground p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg motion-reduce:transform-none";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          id="contact-title"
          title="Contact"
          subtitle="Open to conversations about backend, distributed systems and AI-powered products."
        />

        <Stagger as="ul" className="grid gap-6 sm:grid-cols-3">
          <StaggerItem as="li">
            <button
              type="button"
              onClick={copyEmail}
              className={cardClass}
            >
              <span className="rounded-full bg-accent p-3 text-brand">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span className="font-semibold">Email</span>
              <span className="text-sm text-muted-foreground break-all">
                {SITE.email}
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground group-hover:text-brand">
                <Copy size={14} aria-hidden="true" /> click to copy
              </span>
            </button>
          </StaggerItem>

          <StaggerItem as="li">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <span className="rounded-full bg-accent p-3 text-brand">
                <Linkedin size={22} aria-hidden="true" />
              </span>
              <span className="font-semibold">LinkedIn</span>
              <span className="text-sm text-muted-foreground">
                sachin-kumbar-634b42171
              </span>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-brand">
                open profile <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </StaggerItem>

          <StaggerItem as="li">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              <span className="rounded-full bg-accent p-3 text-brand">
                <Github size={22} aria-hidden="true" />
              </span>
              <span className="font-semibold">GitHub</span>
              <span className="text-sm text-muted-foreground">
                kumbarsachin67gmail
              </span>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-brand">
                view repos <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </a>
          </StaggerItem>
        </Stagger>
      </div>

      <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sachin Kumbar. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
