"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project Name 1",
    description:
      "An innovative open-source solution that helps developers build better applications faster. Features include automated testing, CI/CD integration, and performance optimization.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "#",
    demo: "#",
    image: "/project1.png",
  },
  {
    title: "Project Name 2",
    description:
      "A comprehensive development toolkit that streamlines the process of building modern web applications. Includes state management, API integration, and UI components.",
    tags: ["Next.js", "GraphQL", "Tailwind"],
    github: "#",
    demo: "#",
    image: "/project2.png",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="relative group"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-nahj-copper/20 to-nahj-copper/10 
                   rounded-[20px] sm:rounded-[25px] md:rounded-[30px] blur-xl group-hover:blur-2xl 
                   transition-all duration-500 opacity-50"
      />

      <div
        className="relative bg-white/80 backdrop-blur-xl 
                   rounded-[20px] sm:rounded-[25px] md:rounded-[30px] 
                   p-4 sm:p-6 md:p-8 lg:p-10
                   border border-white/20 hover:border-nahj-copper/30 
                   transition-all duration-500
                   shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-1"
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "30px", sm: "40px", md: "50px" }}
              transition={{ duration: 0.8 }}
              className="h-0.5 sm:h-1 bg-nahj-copper mb-2 sm:mb-3 md:mb-4"
            />
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold 
                       bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                       bg-clip-text text-transparent"
            >
              {project.title}
            </h3>
          </div>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-nahj-copper"
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>

        {/* Project Description */}
        <p
          className="text-sm sm:text-base md:text-lg text-gray-600 
                     mb-4 sm:mb-6 md:mb-8 leading-relaxed"
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 
                       bg-gradient-to-r from-nahj-copper/10 to-nahj-copper/5
                       text-nahj-copper rounded-full text-xs sm:text-sm font-medium
                       border border-nahj-copper/20 hover:border-nahj-copper/40
                       transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Button
            variant="default"
            className="w-full sm:w-auto bg-nahj-copper hover:bg-nahj-copper/90 
                     text-white text-sm sm:text-base
                     shadow-lg hover:shadow-xl transition-all duration-300
                     flex items-center justify-center gap-2 
                     px-4 sm:px-6 py-2 sm:py-4 rounded-full"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-nahj-copper text-nahj-copper 
                     hover:bg-nahj-copper/10 text-sm sm:text-base
                     flex items-center justify-center gap-2 
                     px-4 sm:px-6 py-2 sm:py-4 rounded-full"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function OpenSource() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top center+=100",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative min-h-screen w-full 
                      py-8 sm:py-12 md:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 
                      w-48 sm:w-72 h-48 sm:h-72 
                      bg-nahj-copper/20 rounded-full blur-3xl opacity-20"
        />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 
                      w-64 sm:w-96 h-64 sm:h-96 
                      bg-nahj-copper/20 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-20 md:mb-32">
          <motion.div className="relative inline-block mb-4 sm:mb-6">
            <Sparkles
              className="w-6 h-6 sm:w-8 sm:h-8 text-nahj-copper 
                               absolute -top-4 sm:-top-6 -left-4 sm:-left-6 
                               animate-pulse"
            />
            <h2
              className="animate-header text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
                       font-bold bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                       bg-clip-text text-transparent"
            >
              Open Source Projects
            </h2>
          </motion.div>
          <p
            className="animate-header text-base sm:text-lg md:text-xl lg:text-2xl 
                       text-gray-600 max-w-3xl mx-auto"
          >
            We believe in giving back to the community through open source
            contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
