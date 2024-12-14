"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Smartphone, Cloud, Database, Lock, Brush } from "lucide-react";
import { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile applications designed to meet your business needs and engage your users.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure and solutions to power your digital transformation journey.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our advanced analytics solutions.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive security solutions and best practices.",
  },
  {
    icon: Brush,
    title: "UI/UX Design",
    description:
      "Create beautiful and intuitive user experiences that delight your customers.",
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    const tl = gsap.timeline();

    tl.fromTo(
      lineRef.current,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    )
      .fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Cards animation
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotateY: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          delay: 0.2 * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const setCardRef = (index: number) => (element: HTMLDivElement | null) => {
    cardRefs.current[index] = element;
  };

  return (
    <section className="relative min-h-screen z-10 pt-16 pb-20 md:pt-20 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with New Design */}
        <div ref={headerRef} className="relative text-center mb-20 md:mb-32">
          <div className="relative z-10">
            {/* Decorative Line */}
            <div
              ref={lineRef}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-1 
                         bg-gradient-to-r from-nahj-copper to-nahj-copper/70 transform origin-left"
            />

            {/* Main Title */}
            <h2
              ref={titleRef}
              className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8
                         bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                         bg-clip-text text-transparent relative z-10"
            >
              Our Services
            </h2>

            {/* Subtitle with Gradient Border */}
            <div className="relative inline-block">
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto
                           relative z-10 py-4 px-8"
              >
                Comprehensive technology solutions tailored to your needs
              </p>

              {/* Decorative Elements */}
              <div
                className="absolute -top-2 left-0 w-12 h-12 border-t-2 border-l-2 
                            border-nahj-copper/30 transform -translate-x-4"
              />
              <div
                className="absolute -bottom-2 right-0 w-12 h-12 border-b-2 border-r-2 
                            border-nahj-copper/30 transform translate-x-4"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={setCardRef(index)}
              className="group perspective-1000"
            >
              <div
                className="h-full bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[20px] md:rounded-[30px] 
                            border border-white/20 hover:border-nahj-copper/30 transition-all duration-300
                            shadow-lg hover:shadow-2xl transform-gpu hover:scale-105 hover:rotate-y-5"
              >
                <div
                  className="text-nahj-copper mb-4 md:mb-6 transform-gpu group-hover:scale-110 
                              group-hover:rotate-12 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-nahj-copper mb-3 md:mb-4 
                             group-hover:translate-x-2 transition-transform duration-300"
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-700 text-base md:text-lg transform-gpu 
                             group-hover:translate-y-1 transition-transform duration-300"
                >
                  {service.description}
                </p>
                <div className="mt-6">
                  <button
                    className="text-sm md:text-base font-medium text-gray-600 hover:text-nahj-copper 
                                   transition-all duration-300 flex items-center gap-2 group
                                   hover:translate-x-2 transform-gpu"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transform transition-all duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
