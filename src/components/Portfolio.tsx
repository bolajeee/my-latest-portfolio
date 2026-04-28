"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import { FaArrowDown, FaCodeBranch } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import { usePinnedStepScroll } from "./usePinnedStepScroll";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  keyFeatures?: string[];
  githubLink?: string;
  liveLink: string;
  src: string;
  width: number;
  height: number;
}

const projects: Project[] = projectsData.map((project) => ({
  ...project,
  src: project.image,
}));

const Portfolio = () => {
  const mobileCardRef = useRef<HTMLDivElement | null>(null);
  const [mobileCardHeight, setMobileCardHeight] = useState(0);
  const { activeIndex, progressPercent, sectionRef } = usePinnedStepScroll(
    projects.length,
    {
      enableTouchOnMobile: true,
      mobileScrollProgress: false,
    }
  );
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const element = mobileCardRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      setMobileCardHeight(element.offsetHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  const mobileProjectTrackHeight =
    mobileCardHeight > 0 ? `${mobileCardHeight + 40}px` : undefined;

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-background pt-16 pb-4 md:py-32 lg:pt-4 lg:pb-64"
      id="projects"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-blue-900/5 dark:from-slate-100/5 dark:to-blue-200/5" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-blue-200/10" />
      <div className="absolute right-10 h-96 w-96 rounded-full bg-blue-900/5 blur-3xl dark:bg-slate-200/5" />

      <div className="hidden min-h-screen items-center px-6 lg:flex">
        <div className="mx-auto grid h-[80vh] w-full max-w-[1320px] grid-cols-[340px_minmax(0,1fr)] gap-8">
            <div className="flex h-full flex-col rounded-[2rem] border border-gray-200/80 bg-white/75 p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-gray-700/80 dark:bg-black/20">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-slate-100/85 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
                  <FaLayerGroup />
                  Featured Projects
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold leading-tight text-foreground">
                    {activeProject.title}
                  </h2>
                </div>

                <div className="rounded-[1.5rem] border border-slate-900/10 bg-slate-50/85 p-5 dark:border-slate-200/10 dark:bg-slate-900/40">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-100">
                      Selected Project
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-blue-900 dark:bg-slate-900/45 dark:text-blue-200">
                      0{activeIndex + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-900/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-200/10 dark:bg-white/5 dark:text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex-1 space-y-3 pt-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`rounded-[1.35rem] border px-4 py-3 transition-all duration-300 ${
                      activeIndex === index
                        ? "border-slate-900/15 bg-slate-100/85 shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:border-slate-200/10 dark:bg-slate-900/45"
                        : "border-gray-200/70 bg-white/25 dark:border-gray-700/70 dark:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                          activeIndex === index
                            ? "bg-slate-900 text-white dark:bg-blue-200 dark:text-slate-950"
                            : "bg-foreground/5 text-foreground/70"
                        }`}
                      >
                        0{index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-foreground">
                          {project.title}
                        </p>
                        <p className="truncate text-sm text-secondary">
                          {project.techStack.slice(0, 3).join(" / ")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 rounded-[1.5rem] border border-gray-200/70 bg-white/55 p-4 dark:border-gray-700/70 dark:bg-white/[0.03]">
                <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-200 dark:to-blue-400"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 text-sm text-secondary">
                  <div className="flex items-center gap-3">
                    <FaArrowDown className="text-blue-900 dark:text-blue-200" />
                    <span>{activeIndex + 1} of {projects.length}</span>
                  </div>
                  <span className="truncate">{activeProject.title}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full justify-center gap-2 py-4">
                      <FaExternalLinkAlt />
                      Live Demo
                    </Button>
                  </a>
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full justify-center gap-2 py-4">
                        <FaGithub />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700/40 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 shadow-[0_30px_120px_rgba(15,23,42,0.25)]">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 48, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -48, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 grid grid-rows-[auto_1fr] gap-6 p-8 text-white xl:p-9"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                          Featured Build
                        </span>
                        <span className="text-sm text-white/50">
                          Project 0{activeIndex + 1}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold leading-tight">
                          {activeProject.title}
                        </h3>
                        <p className="max-w-3xl text-base leading-relaxed text-white/75">
                          {activeProject.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),rgba(15,23,42,0.45)_55%,rgba(2,6,23,0.9))] p-5">
                        <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                          <div className="mb-3 flex items-center gap-2 px-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                          </div>
                          <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-white/10 bg-slate-900/80">
                          <Image
                            src={activeProject.src}
                            alt={activeProject.title}
                            fill
                            className="object-contain p-3"
                            sizes="(min-width: 1280px) 42vw, 100vw"
                          />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <div className="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
                                {activeProject.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-5">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <div className="mb-4 flex items-center gap-3 text-blue-100">
                            <FaCodeBranch />
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                              Project Highlights
                            </span>
                          </div>
                          <div className="space-y-3 text-sm leading-relaxed text-white/75">
                            {(activeProject.keyFeatures ?? []).slice(0, 4).map((feature) => (
                              <p
                                key={feature}
                                className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                              >
                                {feature}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-white/10 bg-blue-500/10 p-5">
                          <div className="mb-2 flex items-center gap-3 text-blue-100">
                            <FaRocket />
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                              Tech Stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {activeProject.techStack.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-blue-200/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-slate-50"
                              >
                                {tech}
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
      </div>

      <div
        className="relative z-10 px-4 pt-3 pb-0 lg:hidden"
        style={
          mobileProjectTrackHeight
            ? { minHeight: mobileProjectTrackHeight }
            : undefined
        }
      >
        <div
          ref={mobileCardRef}
          className="sticky top-4 mx-auto max-w-md rounded-[2rem] border border-gray-200/80 bg-white/75 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-gray-700/80 dark:bg-black/20"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 dark:border-slate-200/10 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/60">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-3 p-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-100/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 dark:border-slate-200/10 dark:bg-slate-900/55 dark:text-slate-100">
                      <FaLayerGroup />
                      Featured Projects
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-blue-200 dark:text-slate-950">
                      0{activeIndex + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold leading-tight text-foreground">
                      {activeProject.title}
                    </h3>
                    <p className="line-clamp-4 text-sm leading-relaxed text-secondary">
                      {activeProject.description}
                    </p>
                  </div>
                </div>

                <div className="relative h-44 shrink-0 overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-slate-900/90 sm:h-52">
                  <Image
                    src={activeProject.src}
                    alt={activeProject.title}
                    fill
                    className="object-contain p-3"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.25rem] border border-slate-900/10 bg-white/70 p-4 dark:border-slate-200/10 dark:bg-white/[0.04]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      Highlights
                    </p>
                    <div className="space-y-2.5">
                      {(activeProject.keyFeatures ?? []).slice(0, 2).map((feature) => (
                        <p
                          key={feature}
                          className="rounded-xl border border-slate-900/10 bg-slate-100/80 px-3 py-2 text-sm leading-relaxed text-foreground/80 dark:border-slate-200/10 dark:bg-slate-900/45 dark:text-slate-100"
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-900/10 bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-200/10 dark:bg-slate-900/45 dark:text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-200 dark:to-blue-400"
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs text-secondary">
                      <span className="inline-flex items-center gap-2">
                        <FaArrowDown className="text-blue-900 dark:text-blue-200" />
                        Swipe to explore
                      </span>
                      <span>{activeIndex + 1} of {projects.length}</span>
                    </div>
                  </div>

                  <div className={`grid gap-3 ${activeProject.githubLink ? "sm:grid-cols-2" : ""}`}>
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full justify-center gap-2 py-4">
                        <FaExternalLinkAlt />
                        Live Demo
                      </Button>
                    </a>
                    {activeProject.githubLink && (
                      <a
                        href={activeProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full justify-center gap-2 py-4">
                          <FaGithub />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
