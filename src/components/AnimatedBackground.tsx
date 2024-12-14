"use client";

import { motion } from "framer-motion";

const FloatingShape: React.FC<{
  className: string;
  animationDuration?: number;
}> = ({ className, animationDuration = 5 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, 20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] rounded-full bg-gradient-to-l from-nahj-copper/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[45%] h-[45%] rounded-full bg-gradient-to-r from-nahj-copper/20 to-transparent blur-3xl" />

      {/* Floating Elements */}
      <FloatingShape
        className="absolute top-40 left-[15%] w-20 h-20 bg-nahj-copper/5 rounded-lg -rotate-12"
        animationDuration={7}
      />
      <FloatingShape
        className="absolute top-60 right-[20%] w-24 h-24 bg-nahj-copper/10 rounded-full"
        animationDuration={8}
      />
      <FloatingShape
        className="absolute bottom-40 left-[25%] w-16 h-16 bg-nahj-copper/5 rounded-lg rotate-12"
        animationDuration={6}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(193, 127, 89, 0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
