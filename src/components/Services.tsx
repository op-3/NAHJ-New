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
    <section
      className="relative min-h-screen w-full py-8 sm:py-12 md:py-16 lg:py-20"
      id="services"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="relative text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative z-10">
            {/* Decorative Line */}
            <div
              ref={lineRef}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1
                         bg-gradient-to-r from-nahj-copper to-nahj-copper/70 transform origin-left"
            />

            {/* Main Title */}
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-4 sm:mb-6 md:mb-8
                         bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                         bg-clip-text text-transparent relative z-10"
            >
              Our Services
            </h2>

            {/* Subtitle with Gradient Border */}
            <div className="relative inline-block">
              <p
                ref={subtitleRef}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto
                           relative z-10 py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8"
              >
                Comprehensive technology solutions tailored to your needs
              </p>

              {/* Decorative Elements */}
              <div
                className="absolute -top-2 left-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 
                            border-nahj-copper/30 transform -translate-x-2 sm:-translate-x-3 md:-translate-x-4"
              />
              <div
                className="absolute -bottom-2 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 
                            border-nahj-copper/30 transform translate-x-2 sm:translate-x-3 md:translate-x-4"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={setCardRef(index)}
              className="group perspective-1000"
            >
              <div
                className="h-full bg-white/10 backdrop-blur-xl p-4 sm:p-6 md:p-8 
                          rounded-2xl sm:rounded-[25px] md:rounded-[30px] 
                          border border-white/20 hover:border-nahj-copper/30 
                          transition-all duration-300
                          shadow-lg hover:shadow-2xl 
                          transform-gpu hover:scale-[1.02] hover:rotate-y-5"
              >
                <div
                  className="text-nahj-copper mb-3 sm:mb-4 md:mb-6 
                            transform-gpu group-hover:scale-110 
                            group-hover:rotate-12 transition-all duration-300"
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-nahj-copper 
                             mb-2 sm:mb-3 md:mb-4 
                             group-hover:translate-x-2 transition-transform duration-300"
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm sm:text-base md:text-lg text-gray-700
                             transform-gpu group-hover:translate-y-1 
                             transition-transform duration-300"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
