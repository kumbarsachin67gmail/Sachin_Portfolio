import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/Reveal";

const edu = {
  degree: "Bachelor of Technology",
  field: "Electronics and Communication",
  institution: "NMAM Institute of Technology",
  location: "Karnataka, India",
  duration: "Aug 2018 – Jun 2020",
  description:
    "Specialized in embedded systems, digital signal processing, and communication protocols. Completed projects in IoT, microcontroller programming, and network analysis.",
  achievements: [
    "Completed advanced coursework in Digital Signal Processing",
    "Worked on IoT projects with Arduino and Raspberry Pi",
    "Studied communication protocols and network analysis",
    "Participated in technical symposiums and coding competitions",
  ],
  gpa: "8.2/10.0",
  relevantCourses: [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Database Management Systems",
    "Software Engineering",
    "Microprocessor & Microcontroller",
    "Digital Signal Processing",
  ],
};

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-20 px-6 bg-muted/40"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="education-title"
          title="Education"
          subtitle="Strong academic foundation in electronics and communication engineering with focus on software development"
        />

        <Reveal>
          <article className="rounded-2xl border bg-card text-card-foreground p-6 md:p-8 shadow-sm">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-brand to-brand-2 text-white dark:text-slate-950">
                    <GraduationCap size={24} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-lg font-semibold text-brand mb-3">
                      {edu.field}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} aria-hidden="true" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2 font-mono text-sm">
                        <Calendar size={16} aria-hidden="true" />
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {edu.description}
                </p>

                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Award size={20} className="text-brand" aria-hidden="true" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 bg-gradient-to-br from-brand to-brand-2 rounded-full mt-2.5 flex-shrink-0"
                      />
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl border bg-muted/50 p-6 text-center">
                  <h4 className="font-semibold mb-3">Academic Performance</h4>
                  <div className="text-3xl font-bold text-brand mb-1">
                    {edu.gpa}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cumulative GPA
                  </div>
                </div>

                <div className="rounded-xl border bg-muted/50 p-6">
                  <h4 className="font-semibold mb-4">Relevant Coursework</h4>
                  <ul className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course) => (
                      <li key={course} className="chip text-xs">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
