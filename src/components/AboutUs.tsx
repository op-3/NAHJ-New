"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import {
  Rocket,
  Lightbulb,
  Target,
  Zap,
  Palette,
  Gauge,
  Settings,
} from "lucide-react";

interface TabProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const tabs: TabProps[] = [
  {
    title: "Technical Excellence",
    content:
      "We deliver innovative technical solutions that exceed expectations, focusing on the latest technologies and global standards.",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Continuous Innovation",
    content:
      "We constantly develop creative and unique solutions that meet our clients' needs and keep pace with market developments.",
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Reliability",
    content:
      "We are committed to providing high-quality and reliable services, ensuring customer satisfaction and project success.",
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
  },
];

const FeaturesGrid = () => {
  const features = [
    {
      title: "Advanced Development",
      description:
        "Using cutting-edge technologies to build sophisticated solutions",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      title: "Creative Design",
      description: "Crafting unique and engaging user experiences",
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      title: "High Performance",
      description: "Ensuring superior performance and lightning-fast speed",
      icon: <Gauge className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      title: "Custom Solutions",
      description: "Developing solutions tailored to your specific needs",
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20
                     hover:border-nahj-copper/30 transition-all duration-300 group"
        >
          <div className="text-nahj-copper mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-nahj-copper mb-2">
            {feature.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-10 md:my-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center justify-center md:justify-start gap-2
                       ${
                         activeTab === index
                           ? "bg-nahj-copper text-white shadow-lg"
                           : "bg-white/20 text-gray-600 hover:bg-white/40"
                       }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-current">{tab.icon}</span>
            <span className="hidden md:inline">{tab.title}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20"
        >
          <p className="text-base md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            {tabs[activeTab].content}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [100, 500], [0, 1]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen z-10 pt-16 md:pt-20"
      id="about"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Title Section */}
        <div className="relative text-center mb-20">
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full 
                       border border-nahj-copper/20 opacity-50"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full 
                       border border-nahj-copper/30 opacity-50"
          />

          {/* Main Content */}
          <div className="relative z-10 space-y-8">
            {/* Title */}
            <div className="relative inline-block">
              <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-extrabold tracking-tight
                           bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                           bg-clip-text text-transparent relative z-10"
              >
                We are NAHJ
              </motion.h2>

              {/* Underline Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r 
                           from-nahj-copper to-nahj-copper/30 transform origin-left"
              />
            </div>

            {/* Animated Text */}
            <div className="relative z-10 mt-8">
              <TypeAnimation
                sequence={[
                  "Creating Digital Future",
                  2000,
                  "Designing Exceptional Experiences",
                  2000,
                  "Developing Advanced Solutions",
                  2000,
                ]}
                wrapper="p"
                speed={50}
                className="text-2xl md:text-4xl text-gray-700 font-light"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Tabs Section */}
        <TabSection />

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative mt-20 mb-20"
        >
          <div
            className="relative z-10 bg-white/10 backdrop-blur-xl p-12 md:p-16 
                         rounded-[30px] border border-white/20 hover:border-nahj-copper/30 
                         transition-all duration-500 shadow-xl"
          >
            {/* Vision Title */}
            <div className="relative text-center mb-12">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8 }}
                className="h-[2px] bg-nahj-copper/50 mx-auto mb-8"
              />
              <h3 className="text-5xl md:text-7xl font-bold relative inline-block">
                <span
                  className="bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                                bg-clip-text text-transparent"
                >
                  Our Vision
                </span>
                {/* Decorative Elements */}
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 
                               border-nahj-copper/30"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 
                               border-nahj-copper/30"
                />
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8 }}
                className="h-[2px] bg-nahj-copper/50 mx-auto mt-8"
              />
            </div>

            {/* Vision Content */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                We strive to be at the forefront of digital transformation,
                leading technological change and contributing to building a more
                innovative and advanced digital future. We believe that
                technology is the primary driver of progress, and we are
                committed to harnessing its potential to serve our clients and
                achieve their vision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20 mb-20"
        ></motion.div>
      </motion.div>
    </section>
  );
}
