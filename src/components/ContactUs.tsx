"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react";
import { Button } from "./ui/button";

export default function ContactUs() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div
              className="bg-white/80 backdrop-blur-xl 
                         rounded-2xl sm:rounded-3xl 
                         p-4 sm:p-6 md:p-8 
                         border border-white/20 
                         hover:border-nahj-copper/30 
                         transition-all duration-300 shadow-lg group"
            >
              <h3
                className="text-xl sm:text-2xl font-bold text-nahj-copper 
                           mb-4 sm:mb-6 
                           group-hover:translate-x-2 transition-transform duration-300"
              >
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
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
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div
                      className="p-2 sm:p-3 bg-nahj-copper/10 rounded-full 
                                  group-hover:bg-nahj-copper/20 
                                  transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-nahj-copper" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-600">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-800">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl 
                        rounded-2xl sm:rounded-3xl 
                        p-4 sm:p-6 md:p-8 
                        border border-white/20 
                        hover:border-nahj-copper/30 
                        transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Form Fields */}
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                    icon: User,
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your@email.com",
                    icon: AtSign,
                  },
                ].map((field) => (
                  <div key={field.id} className="space-y-1 sm:space-y-2">
                    <label
                      htmlFor={field.id}
                      className="block text-sm sm:text-base text-gray-700 font-medium"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <field.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 
                                           text-gray-400 absolute left-3 
                                           top-1/2 -translate-y-1/2"
                      />
                      <input
                        type={field.type}
                        id={field.id}
                        className="w-full pl-9 sm:pl-10 pr-4 
                                 py-2.5 sm:py-3 rounded-xl 
                                 border border-gray-200 
                                 focus:border-nahj-copper 
                                 focus:ring-2 focus:ring-nahj-copper/20 
                                 outline-none transition-all duration-300
                                 bg-white/50 backdrop-blur-sm
                                 text-sm sm:text-base"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}

                {/* Message Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base text-gray-700 font-medium"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="w-4 h-4 sm:w-5 sm:h-5 
                                            text-gray-400 absolute left-3 top-3"
                    />
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full pl-9 sm:pl-10 pr-4 
                               py-2.5 sm:py-3 rounded-xl 
                               border border-gray-200 
                               focus:border-nahj-copper 
                               focus:ring-2 focus:ring-nahj-copper/20 
                               outline-none transition-all duration-300
                               bg-white/50 backdrop-blur-sm
                               text-sm sm:text-base"
                      placeholder="Your message"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-nahj-copper hover:bg-nahj-copper/90 
                              text-white py-3 sm:py-4 rounded-xl
                              text-sm sm:text-base
                              flex items-center justify-center gap-2 
                              transition-all duration-300"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
