"use client";

import { useState, useEffect } from "react";
import { Download, ArrowDown } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Projects", href: "#projects" },
  ];

  // More substantial blur effect when scrolled
  const blurIntensity =
    scrollPosition > 100
      ? "backdrop-blur-md bg-white/40"
      : "backdrop-blur-sm bg-white/30";

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] ${blurIntensity} z-50 transition-all duration-300 rounded-2xl border border-white/30 shadow-lg shadow-black/5 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm lg:text-base font-medium text-gray-800 hover:text-[#C17F59] transition-colors duration-300 group py-1.5 px-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C17F59] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/40 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Download Profile Button */}
            <a
              href="/company-profile.pdf"
              download
              className="group relative flex items-center px-4 py-2 overflow-hidden rounded-full bg-white/50 shadow-sm hover:shadow-md border border-[#C17F59]/20 hover:border-[#C17F59]/40 transition-all duration-300"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#C17F59]/10 to-[#C17F59]/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <Download className="w-4 h-4 mr-2 text-[#C17F59] group-hover:animate-bounce" />
              <span className="relative text-sm font-medium text-gray-800">
                Company Profile
              </span>
              <ArrowDown className="w-3 h-3 ml-1 text-[#C17F59] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="relative inline-flex items-center px-5 py-2 overflow-hidden rounded-full bg-[#C17F59] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 after:absolute after:inset-0 after:bg-white/20 after:opacity-0 after:hover:opacity-100 after:transition-opacity"
            >
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 rounded-xl transform transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0 shadow-xl"
              : "opacity-0 invisible -translate-y-4"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <nav className="flex flex-col py-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-6 py-3 text-gray-800 hover:bg-[#C17F59]/10 hover:text-[#C17F59] transition-colors duration-200 flex items-center ${
                  index !== 0 ? "border-t border-gray-100" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">{item.name}</span>
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="px-5 py-4 space-y-3 border-t border-gray-100 mt-1">
              {/* Download Profile Button (Mobile) */}
              <a
                href="/company-profile.pdf"
                download
                className="flex items-center justify-center w-full px-5 py-3 rounded-lg bg-white shadow-md border border-[#C17F59]/20 text-gray-800 transition-all duration-200 relative overflow-hidden group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#C17F59]/10 to-[#C17F59]/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C17F59]/10 rounded-full -mt-6 -mr-6 transform rotate-45 transition-transform group-hover:scale-150 duration-500"></div>
                <Download className="w-5 h-5 mr-2 text-[#C17F59]" />
                <span className="font-medium relative z-10">
                  Download Company Profile
                </span>
              </a>

              {/* Contact Button (Mobile) */}
              <a
                href="#contact"
                className="flex items-center justify-center w-full px-5 py-3 rounded-lg bg-[#C17F59] text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
