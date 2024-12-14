"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const navigationLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Cloud Solutions", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-nahj-copper/10 rounded-full 
                      blur-3xl opacity-30 -translate-x-1/2"
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-nahj-copper/10 rounded-full 
                      blur-3xl opacity-30 translate-x-1/2"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo with Shadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-12 w-32 drop-shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-nahj-copper/20 to-transparent 
                            blur-lg -z-10 transform scale-110"
              />
              <Image
                src="/Untitled-3.png"
                alt="NAHJ Logo"
                fill
                className="object-contain filter drop-shadow-lg"
              />
            </motion.div>

            {/* Company Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-sm"
            >
              Empowering businesses through innovative digital solutions and
              cutting-edge technology.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-nahj-copper" />
                <span>info@nahj.tech</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-nahj-copper" />
                <span>+1 77444980</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-nahj-copper" />
                <span>Al-Buraimi, Oman</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {navigationLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-nahj-copper hover:translate-x-1 
                                 transition-all duration-300 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 
                                               group-hover:ml-2 transition-all duration-300"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Stay Updated
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 
                         focus:border-nahj-copper focus:ring-2 focus:ring-nahj-copper/20 
                         outline-none transition-all duration-300"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 
                               bg-nahj-copper text-white p-2 rounded-lg
                               hover:bg-nahj-copper/90 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg
                           border border-gray-100 hover:border-nahj-copper/30
                           transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-nahj-copper" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex justify-center items-center">
            <p className="text-gray-600 text-sm flex items-center">
              © {currentYear} NAHJ. Made with
              <Heart className="w-4 h-4 text-nahj-copper mx-1" />
              in Oman
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
