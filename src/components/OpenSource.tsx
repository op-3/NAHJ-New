"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const projects = [
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

const ProjectCard = ({ project, index }: any) => {
  const cardRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(cardRef.current!, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
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
                    rounded-[30px] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"
      />

      <div
        className="relative bg-white/80 backdrop-blur-xl rounded-[30px] p-8 md:p-10
                    border border-white/20 hover:border-nahj-copper/30 transition-all duration-500
                    shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-1"
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-nahj-copper mb-4"
            />
            <h3
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
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
            <Code2 className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-nahj-copper/10 to-nahj-copper/5
                       text-nahj-copper rounded-full text-sm font-medium
                       border border-nahj-copper/20 hover:border-nahj-copper/40
                       transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="default"
            className="bg-nahj-copper hover:bg-nahj-copper/90 text-white
                     shadow-lg hover:shadow-xl transition-all duration-300
                     flex items-center gap-2 px-6 py-4 rounded-full"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </Button>
          <Button
            variant="outline"
            className="border-nahj-copper text-nahj-copper hover:bg-nahj-copper/10
                     flex items-center gap-2 px-6 py-4 rounded-full"
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
  const headerRef = useRef(null);

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
    <section className="relative min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nahj-copper/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-nahj-copper/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 md:mb-32">
          <motion.div className="relative inline-block mb-6">
            <Sparkles className="w-8 h-8 text-nahj-copper absolute -top-6 -left-6 animate-pulse" />
            <h2
              className="animate-header text-5xl md:text-7xl font-bold
                         bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                         bg-clip-text text-transparent"
            >
              Open Source Projects
            </h2>
          </motion.div>
          <p className="animate-header text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We believe in giving back to the community through open source
            contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
