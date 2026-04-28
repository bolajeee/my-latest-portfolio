"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaArrowDown, FaBriefcase, FaCodeBranch } from "react-icons/fa6";
import { usePinnedStepScroll } from "./usePinnedStepScroll";

const experiences = [
  {
    stage: "Foundation",
    role: "Food Engineering & Research",
    company: "University of Ilorin",
    summary:
      "Developed a systems-thinking approach to engineering by working with real-world process flows, focusing on input-output relationships, optimization, and repeatability principles I now apply to software architecture.",
    highlights: [
      "Designed and tested rice-soy extrusion processes, translating raw material variables into controlled outputs",
      "Applied process optimization and quality control methods to improve consistency and efficiency",
      "Built a strong analytical foundation for designing predictable, scalable systems",
    ],
    tools: ["Process Design", "Quality Systems", "Analytical Thinking"],
  },
  {
    stage: "Industry",
    role: "Industrial Trainee",
    company: "OK Foods",
    summary:
      "Worked within live production environments, gaining firsthand experience in operational efficiency, safety systems, and workflow reliability under real constraints.",
    highlights: [
      "Identified production bottlenecks and observed their impact on throughput and team coordination",
      "Applied safety and compliance principles in high-risk, process-driven environments",
      "Developed a practical understanding of how systems fail and how to design against failure",
    ],
    tools: ["Operations", "Process Optimization", "Compliance"],
  },
  {
    stage: "Leadership",
    role: "Technical Lead / Frontend Engineer",
    company: "Kuagi Resources",
    summary:
      "Led the development of enterprise web systems, focusing on scalable architecture, maintainable codebases, and aligning technical execution with business goals.",
    highlights: [
      "Architected internal platforms for resource management and financial tracking used across teams",
      "Led engineering workflows including sprint planning, code reviews, and deployment cycles",
      "Built modular dashboards and real-time data systems using React and API-driven design",
    ],
    tools: ["React", "Node.js", "REST APIs", "MongoDB"],
  },
  {
    stage: "Execution",
    role: "Senior Fullstack Developer",
    company: "Eleaders Network",
    summary:
      "Building scalable web and mobile applications with a focus on performance, system reliability, and seamless user experience across platforms.",
    highlights: [
      "Developed cross-platform mobile apps with offline support and optimized state management",
      "Built fullstack financial systems with secure authentication and real-time dashboards",
      "Architecting scalable backend systems with caching, WebSockets, and microservice-ready design",
    ],
    tools: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
  },
];

const WorkExperience = () => {
  const { activeIndex, progressPercent, sectionRef } = usePinnedStepScroll(
    experiences.length
  );
  const activeExperience = experiences[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative isolate overflow-hidden bg-background py-24 md:py-32 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_38%),linear-gradient(180deg,transparent,rgba(15,23,42,0.04),transparent)] dark:bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.1),transparent_38%),linear-gradient(180deg,transparent,rgba(191,219,254,0.05),transparent)]" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-blue-200/10" />
      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-900/10 blur-3xl dark:bg-slate-100/10" />

      <div className="hidden min-h-screen items-center px-6 py-[8vh] lg:flex">
        <div className="mx-auto grid h-[76vh] w-full max-w-[1200px] grid-cols-[300px_minmax(0,1fr)] gap-6">
          <aside className="flex h-full min-h-0 flex-col rounded-[2rem] border border-gray-200/80 bg-white/78 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-gray-700/80 dark:bg-black/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-slate-100/85 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
                <FaBriefcase />
                Work Experience
              </div>
            </div>

            <div className="relative mt-3 min-h-0 flex-1 overflow-y-auto pr-1 pt-2">
              <div className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-slate-300 via-slate-300/80 to-transparent dark:from-slate-700 dark:via-slate-700/80" />
              <div className="space-y-3">
                {experiences.map((experience, index) => (
                  <div key={experience.role} className="relative pl-12">
                    <div
                      className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-semibold transition-all duration-300 ${
                        activeIndex === index
                          ? "border-slate-900 bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.2)] dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                          : "border-gray-200/80 bg-white text-foreground/70 dark:border-gray-700/80 dark:bg-slate-900/60"
                      }`}
                    >
                      0{index + 1}
                    </div>
                    <div
                      className={`rounded-[1.25rem] border px-4 py-3 transition-all duration-300 ${
                        activeIndex === index
                          ? "border-slate-900/15 bg-slate-100/90 dark:border-slate-200/10 dark:bg-slate-900/45"
                          : "border-transparent bg-transparent"
                      }`}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
                        {experience.stage}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {experience.role}
                      </p>
                      <p className="mt-1 text-sm text-secondary">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[1.25rem] border border-gray-200/70 bg-white/55 p-4 dark:border-gray-700/70 dark:bg-white/[0.03]">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
                  Progress
                </p>
                <span className="text-sm text-secondary">
                  {activeIndex + 1}/{experiences.length}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-slate-900 via-blue-950 to-blue-800 dark:from-slate-100 dark:via-blue-200 dark:to-blue-400"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          </aside>

          <div className="relative h-full min-h-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeExperience.role}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/80 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-gray-700/80 dark:bg-black/20"
              >
                <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto pr-1">
                  <div className="grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex rounded-full border border-slate-900/10 bg-slate-100/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
                          {activeExperience.stage}
                        </span>
                        <span className="text-sm text-secondary">
                          {activeExperience.company}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="max-w-3xl text-[1.5rem] font-bold leading-tight text-foreground xl:text-[1.75rem]">
                          {activeExperience.role}
                        </h3>
                        <p className="max-w-3xl text-sm leading-relaxed text-secondary">
                          {activeExperience.summary}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-blue-900/10 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-3.5 dark:border-blue-200/10 dark:bg-gradient-to-br dark:from-blue-950/25 dark:via-slate-950/40 dark:to-slate-900/50">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-900 dark:text-blue-200">
                        Snapshot
                      </p>
                      <p className="mt-2 text-2xl font-bold text-foreground">
                        0{activeIndex + 1}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        A focused stage in the journey toward reliable frontend and fullstack delivery.
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-sm text-secondary">
                        <FaArrowDown className="text-blue-900 dark:text-blue-200" />
                        <span>Scroll to move through the timeline</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid min-h-0 gap-3 xl:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.35rem] border border-gray-200/80 bg-white/65 p-3.5 dark:border-gray-700/80 dark:bg-white/5">
                      <div className="mb-3 flex items-center gap-3 text-foreground">
                        <FaCodeBranch className="text-slate-800 dark:text-slate-100" />
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                          Key Contributions
                        </p>
                      </div>
                      <div className="grid gap-2">
                        {activeExperience.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-gray-200/70 bg-background/80 px-3.5 py-2 dark:border-gray-700/70"
                          >
                            <p className="text-sm leading-relaxed text-foreground/80">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-slate-900/10 bg-slate-50/90 p-3.5 dark:border-slate-200/10 dark:bg-slate-900/40">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-100">
                        Tools and Focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeExperience.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-slate-900/10 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-200/10 dark:bg-slate-950/60 dark:text-slate-100"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:hidden">
        <div className="mx-auto max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="space-y-4 text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-slate-100/85 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
              <FaBriefcase />
              Work Experience
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              A clean timeline of how I learned to build reliable products.
            </h2>
           
          </motion.div>

          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[2rem] border border-gray-200/80 bg-white/80 p-6 shadow-lg backdrop-blur-xl dark:border-gray-700/80 dark:bg-black/20"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-slate-900/10 bg-slate-100/85 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
                    {experience.stage}
                  </span>
                  <p className="mt-3 text-sm text-secondary">{experience.company}</p>
                </div>
                <span className="text-sm font-medium text-secondary">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                {experience.role}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
                {experience.summary}
              </p>

              <div className="mt-6 space-y-3">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 dark:border-gray-700 dark:bg-white/5"
                  >
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-900/10 bg-slate-100/80 px-3.5 py-2 text-sm font-medium text-slate-700 dark:border-slate-200/10 dark:bg-slate-900/45 dark:text-slate-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
