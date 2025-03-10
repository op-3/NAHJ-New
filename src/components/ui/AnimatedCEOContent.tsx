"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Mail,
  Phone,
  ChevronRight,
  Award,
  Target,
  Zap,
} from "lucide-react";

export default function AnimatedCEOContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          {/* Black shadow for logo */}
          <div className="relative w-[180px] h-[180px] mx-auto">
            <div className="absolute inset-0 bg-black/10 rounded-full blur-lg"></div>
            <Image
              src="/Untitled-3.png"
              alt="NAHJ Logo"
              width={180}
              height={180}
              className="relative z-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-nahj-copper"
        >
          Chief Executive Officer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-nahj-copper to-amber-400 rounded-full mb-8"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center md:items-start md:col-span-5"
        >
          <div className="relative w-72 h-72 md:w-full md:h-[450px] mb-8 perspective-1000 group">
            {/* Modern frame for image */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-nahj-copper/20 via-amber-300/20 to-nahj-copper/20 rounded-2xl blur-sm"></div>

            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-nahj-copper to-amber-300 opacity-50 mix-blend-overlay"></div>
              <Image
                src="/image.png"
                alt="CEO Portrait"
                fill
                style={{ objectFit: "cover" }}
                className="transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-nahj-copper to-amber-400 flex items-center justify-center text-white font-bold text-xl">
                NAHJ
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold text-xs">
                CEO
              </div>
            </div>
          </div>

          <div className="flex space-x-5 mt-6">
            <Link
              href="https://wa.me/+96890999016"
              target="_blank"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white text-green-600 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/30"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.instagram.com/l3r_h/"
              target="_blank"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white text-pink-600 border-2 border-pink-500 hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="mailto:info@nahj.tech"
              target="_blank"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white text-nahj-copper border-2 border-nahj-copper hover:bg-nahj-copper hover:text-white transition-all duration-300 shadow-lg hover:shadow-nahj-copper/30"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-7"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-2xl relative overflow-hidden backdrop-blur-sm bg-white/80">
            {/* Modern decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-nahj-copper/10 to-transparent rounded-bl-[100px]"></div>
              <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-nahj-copper/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-nahj-copper"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-40 h-40">
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-nahj-copper/5 to-transparent rounded-tr-[100px]"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nahj-copper relative inline-block">
              About Our CEO
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-nahj-copper rounded-full"></div>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-nahj-copper to-transparent rounded-full"></div>
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Our CEO leads NAHJ Technology Solutions with vision and expertise,
              driving innovation and excellence in every project we undertake.
            </p>

            {/* Leadership qualities section - modern cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:border-nahj-copper/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nahj-copper/20 to-amber-300/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-nahj-copper group-hover:to-amber-400 transition-all duration-300">
                  <Award className="w-7 h-7 text-nahj-copper group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Excellence
                </h3>
                <p className="text-gray-600 text-sm">
                  Highest standards in every project
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:border-nahj-copper/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nahj-copper/20 to-amber-300/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-nahj-copper group-hover:to-amber-400 transition-all duration-300">
                  <Target className="w-7 h-7 text-nahj-copper group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Vision</h3>
                <p className="text-gray-600 text-sm">
                  Forward-thinking technology solutions
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:border-nahj-copper/20 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nahj-copper/20 to-amber-300/20 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-nahj-copper group-hover:to-amber-400 transition-all duration-300">
                  <Zap className="w-7 h-7 text-nahj-copper group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  Creative solutions for complex challenges
                </p>
              </div>
            </div>

            {/* Contact section - modern design */}
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-nahj-copper/20 flex items-center justify-center mr-2">
                  <span className="w-3 h-3 rounded-full bg-nahj-copper"></span>
                </span>
                Contact Information
              </h3>

              <div className="group flex items-center p-5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 border border-transparent hover:border-gray-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mr-5 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold mb-1 text-lg">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600">+96890999016</p>
                </div>
                <Link
                  href="https://wa.me/+96890999016"
                  target="_blank"
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-nahj-copper" />
                </Link>
              </div>

              <div className="group flex items-center p-5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 border border-transparent hover:border-gray-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 text-pink-600 mr-5 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold mb-1 text-lg">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@l3r_h</p>
                </div>
                <Link
                  href="https://www.instagram.com/l3r_h/"
                  target="_blank"
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-nahj-copper" />
                </Link>
              </div>

              <div className="group flex items-center p-5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 border border-transparent hover:border-gray-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-nahj-copper mr-5 group-hover:bg-nahj-copper group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold mb-1 text-lg">
                    Email
                  </h3>
                  <p className="text-gray-600">info@nahj.tech</p>
                </div>
                <Link
                  href="mailto:info@nahj.tech"
                  target="_blank"
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-nahj-copper" />
                </Link>
              </div>
            </div>

            {/* Modern decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-nahj-copper to-transparent opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
