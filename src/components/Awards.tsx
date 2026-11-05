import React from "react";
import { Trophy, Award, Star, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

const award = {
  title: "Employee Appreciation Award",
  organization: "Edvoy Technologies",
  year: "2023",
  category: "Technical Excellence",
  description:
    "Honoured with 'employee appreciation' award for: Delivering a robust search engine using elasticsearch which added value in increasing the search performance of edvoy site for building Various Dashboards",
  impact:
    "Improved search performance by 40% and enhanced user experience across multiple dashboards",
};

const recognitions = [
  {
    title: "Team Leadership Excellence",
    description: "Successfully led a team of 4 developers for 2+ years",
    icon: Award,
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented scalable microservices solutions",
    icon: Star,
  },
  {
    title: "Search Performance Optimization",
    description: "Achieved 40% improvement in search engine performance",
    icon: Trophy,
  },
];

const Awards = () => {
  return (
    <section id="awards" aria-labelledby="awards-title" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="awards-title"
          title="Awards & Recognition"
          subtitle="Recognition for contributions to technical excellence and team leadership"
        />

        <Reveal className="mb-8">
          <article className="rounded-2xl border bg-card text-card-foreground p-6 md:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="inline-flex p-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-4">
                  <Trophy size={32} aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2 font-mono text-sm text-muted-foreground">
                    <Calendar size={16} aria-hidden="true" />
                    {award.year}
                  </div>
                  <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">
                    {award.category}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{award.title}</h3>
                <p className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-4">
                  {award.organization}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {award.description}
                </p>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Star
                      size={18}
                      className="text-amber-500"
                      aria-hidden="true"
                    />
                    Impact & Results
                  </h4>
                  <p className="text-muted-foreground">{award.impact}</p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Stagger as="ul" className="grid md:grid-cols-3 gap-6">
          {recognitions.map(({ title, description, icon: Icon }) => (
            <StaggerItem
              as="li"
              key={title}
              className="rounded-xl border bg-card text-card-foreground p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 w-fit rounded-full bg-accent p-3 text-brand">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Awards;
