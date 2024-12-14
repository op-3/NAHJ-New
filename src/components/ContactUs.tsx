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
    <section id="contact" className="relative min-h-screen py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nahj-copper/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-nahj-copper/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="relative text-center mb-20">
          {/* Decorative Circles */}
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

          {/* Title Content */}
          <div className="relative z-10 space-y-8">
            {/* Main Title */}
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
                Get in Touch
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto
                        relative z-10 py-4 px-8"
            >
              Let&apos;s discuss your project and see how we can help you
              achieve your goals
              <div
                className="absolute -top-2 left-0 w-12 h-12 border-t-2 border-l-2 
                           border-nahj-copper/30 transform -translate-x-4"
              />
              <div
                className="absolute -bottom-2 right-0 w-12 h-12 border-b-2 border-r-2 
                           border-nahj-copper/30 transform translate-x-4"
              />
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 
                         hover:border-nahj-copper/30 transition-all duration-300 shadow-lg group"
            >
              <h3 className="text-2xl font-bold text-nahj-copper mb-6 group-hover:translate-x-2 transition-transform duration-300">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-nahj-copper/10 rounded-full group-hover:bg-nahj-copper/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-nahj-copper" />
                  </div>
                  <div>
                    <p className="text-gray-600">Call Us</p>
                    <p className="text-lg font-medium text-gray-800">
                      +968 77444980
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-nahj-copper/10 rounded-full group-hover:bg-nahj-copper/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-nahj-copper" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email Us</p>
                    <p className="text-lg font-medium text-gray-800">
                      info@nahj.tech
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-nahj-copper/10 rounded-full group-hover:bg-nahj-copper/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-nahj-copper" />
                  </div>
                  <div>
                    <p className="text-gray-600">Visit Us</p>
                    <p className="text-lg font-medium text-gray-800">
                      Al-Buraimi, Oman
                    </p>
                  </div>
                </motion.div>
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
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 
                      hover:border-nahj-copper/30 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nahj-copper 
                              focus:ring-2 focus:ring-nahj-copper/20 outline-none transition-all duration-300
                              bg-white/50 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nahj-copper 
                              focus:ring-2 focus:ring-nahj-copper/20 outline-none transition-all duration-300
                              bg-white/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nahj-copper 
                              focus:ring-2 focus:ring-nahj-copper/20 outline-none transition-all duration-300
                              bg-white/50 backdrop-blur-sm"
                      placeholder="Your message"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-nahj-copper hover:bg-nahj-copper/90 text-white py-4 rounded-xl
                            flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
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
