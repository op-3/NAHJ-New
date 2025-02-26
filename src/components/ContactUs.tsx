"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-8 sm:py-12 md:py-20 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
        <div className="relative text-center mb-10 sm:mb-16 md:mb-20">
          {/* Decorative Circles */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[150px] sm:w-[200px] md:w-[300px] 
                      h-[150px] sm:h-[200px] md:h-[300px] 
                      rounded-full border border-nahj-copper/20 opacity-50"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[100px] sm:w-[150px] md:w-[250px] 
                      h-[100px] sm:h-[150px] md:h-[250px] 
                      rounded-full border border-nahj-copper/30 opacity-50"
          />

          {/* Title Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="relative inline-block">
              <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                          font-extrabold tracking-tight
                          bg-gradient-to-r from-nahj-copper to-nahj-copper/70 
                          bg-clip-text text-transparent relative z-10"
              >
                Get in Touch
              </motion.h2>

              {/* Underline Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 
                          left-0 w-full h-0.5 sm:h-1 
                          bg-gradient-to-r from-nahj-copper to-nahj-copper/30 
                          transform origin-left"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl 
                        text-gray-600 max-w-3xl mx-auto
                        relative z-10 py-2 sm:py-3 md:py-4 
                        px-4 sm:px-6 md:px-8"
            >
              Let&apos;s discuss your project and see how we can help you
              achieve your goals
              <div
                className="absolute -top-2 left-0 
                           w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 
                           border-t-2 border-l-2 border-nahj-copper/30 
                           transform -translate-x-2 sm:-translate-x-3 md:-translate-x-4"
              />
              <div
                className="absolute -bottom-2 right-0 
                           w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 
                           border-b-2 border-r-2 border-nahj-copper/30 
                           transform translate-x-2 sm:translate-x-3 md:translate-x-4"
              />
            </motion.p>
          </div>
        </div>

        {/* Contact Information Card - Centered and Enhanced */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-nahj-copper/30 to-nahj-copper/10 rounded-2xl sm:rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <div
              className="relative bg-white/80 backdrop-blur-xl 
                         rounded-2xl sm:rounded-3xl 
                         p-6 sm:p-8 md:p-10 
                         border border-white/20 
                         hover:border-nahj-copper/30 
                         transition-all duration-500 
                         shadow-xl hover:shadow-2xl 
                         group transform hover:-translate-y-1"
            >
              <h3
                className="text-2xl sm:text-3xl font-bold 
                           text-gray-800
                           mb-6 sm:mb-8 
                           group-hover:translate-x-2 transition-transform duration-300
                           flex items-center"
              >
                <span className="relative">
                  Contact Information
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -bottom-1 
                              left-0 w-full h-0.5
                              bg-gradient-to-r from-nahj-copper/70 to-transparent 
                              transform origin-left"
                  />
                </span>
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {/* Contact Items */}
                {[
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+968 77444980",
                  },
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "info@nahj.tech",
                  },
                  {
                    icon: MapPin,
                    label: "Visit Us",
                    value: "Al-Buraimi, Oman",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 sm:gap-6"
                  >
                    <div
                      className="p-3 sm:p-4 
                                bg-gradient-to-br from-nahj-copper/20 to-nahj-copper/5
                                rounded-full 
                                group-hover:from-nahj-copper/30 group-hover:to-nahj-copper/10
                                shadow-md
                                transition-all duration-300
                                border border-nahj-copper/10"
                    >
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-nahj-copper" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-500 font-medium">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-xl font-semibold text-gray-800 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-nahj-copper/20 rounded-br-3xl"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-nahj-copper/20 rounded-tl-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
