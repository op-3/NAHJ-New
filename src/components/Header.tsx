"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] bg-white/30 backdrop-blur-sm shadow-lg z-50 transition-all duration-300 rounded-xl ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-base font-medium text-gray-700 hover:text-[#C17F59] transition-colors duration-200 group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C17F59] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          <button className="hidden md:block px-5 py-2 bg-[#C17F59] text-white text-base rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            Contact Us
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute right-0 left-0 bg-white/95 backdrop-blur-sm mt-2 rounded-lg shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C17F59] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 py-3 border-t border-gray-100 mt-2">
              <button className="w-full px-5 py-2 bg-[#C17F59] text-white text-base rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                اتصل بنا
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
