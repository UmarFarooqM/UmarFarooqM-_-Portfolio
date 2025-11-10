import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Detect scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scrolling for section navigation
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // ✅ Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? "bg-[#f5f5dc] dark:bg-gray-900 shadow-md"
          : isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo */}
          <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white tracking-wide">
            Umar Farooq Mandi
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* ✅ Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4 z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-72 bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Navigation
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <HiX className="w-7 h-7" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start px-6 py-6 space-y-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="w-full text-left text-lg text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Footer Note */}
        <div className="absolute bottom-6 left-6 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Umar Farooq
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
