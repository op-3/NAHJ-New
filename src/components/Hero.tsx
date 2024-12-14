"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Tilt } from "react-tilt";
import Image from "next/image";

interface FloatingShapeProps {
  className: string;
  animationDuration?: number;
}

const TILT_OPTIONS = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const FloatingShape: React.FC<FloatingShapeProps> = ({
  className,
  animationDuration = 5,
}) => {
  return (
    <motion.div
      className={`hidden lg:block ${className}`}
      animate={{
        y: [0, 20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-nahj-copper/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-0 bg-gradient-to-br from-white to-gray-50">
        <div className="absolute top-0 left-0 w-[60%] sm:w-[40%] h-[50%] rounded-full bg-gradient-to-r from-nahj-copper/20 to-transparent blur-3xl sm:blur-4xl" />
        <div className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] h-[50%] rounded-full bg-gradient-to-l from-nahj-copper/20 to-transparent blur-3xl sm:blur-4xl" />

        <FloatingShape
          className="absolute top-[10%] left-[20%] w-12 sm:w-16 h-12 sm:h-16 bg-nahj-copper/5 rounded-2xl rotate-12"
          animationDuration={6}
        />
        <FloatingShape
          className="absolute top-[20%] right-[15%] w-16 sm:w-20 h-16 sm:h-20 bg-nahj-copper/10 rounded-full"
          animationDuration={7}
        />
        <FloatingShape
          className="absolute bottom-[15%] left-[10%] w-20 sm:w-24 h-20 sm:h-24 bg-nahj-copper/5 rounded-2xl -rotate-12"
          animationDuration={8}
        />

        <ParticleEffect />

        <div
          className="absolute inset-0 hidden sm:block opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(193, 127, 89, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Main content container */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full flex-1 flex items-center justify-center"
        >
          {/* Logo container */}
          <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <Tilt options={TILT_OPTIONS}>
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-nahj-copper/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Image
                  src="/Untitled-3.png"
                  alt="NAHJ Logo"
                  width={500}
                  height={500}
                  className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] 
           relative z-10 object-contain
           [filter:drop-shadow(0_0_15px_rgba(0,0,0,0.4))_drop-shadow(0_0_30px_rgba(0,0,0,0.3))_drop-shadow(0_0_45px_rgba(0,0,0,0.2))]"
                  style={{ aspectRatio: "1/1" }}
                />
              </motion.div>
            </Tilt>
          </div>
        </motion.div>

        {/* Scroll indicator positioned at the bottom of hero section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-10 h-10 border-2 border-nahj-copper rounded-full 
                      flex items-center justify-center
                      hover:bg-nahj-copper/10 transition-colors duration-300 
                      cursor-pointer group"
          >
            <FiChevronDown
              className="text-nahj-copper w-6 h-6 
                         group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
