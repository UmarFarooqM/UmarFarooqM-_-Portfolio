// import { useState, useEffect } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Education", href: "#education" },
//     { label: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16 relative">
//           {/* Logo */}
//           <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
//            Umar Farooq Mandi
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
//               >
//                 {item.label}
//               </button>
//             ))}
//             {/* Desktop Theme Toggle */}
//             <button
//               className="ml-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
//               aria-label="Toggle Theme"
//             >
//               🌙
//             </button>
//           </div>

//           {/* Mobile/Tablet Icons */}
//           <div className="md:hidden flex items-center space-x-4 z-50">
//             {/* Theme Toggle */}
//             <button
//               className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
//               aria-label="Toggle Theme"
//             >
//               🌙
//             </button>

//             {/* Hamburger */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile/Tablet Dropdown */}
//       <div
//         className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
//           isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
//         }`}
//       >
//         <div className="flex flex-col px-4 space-y-2">
//           {navItems.map((item) => (
//             <button
//               key={item.label}
//               onClick={() => scrollToSection(item.href)}
//               className="w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;



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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Close sidebar when clicking outside
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
          ? "bg-[#f5f5dc] dark:bg-gray-900 shadow-md" // beige when sidebar open
          : isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md backdrop-blur-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
            Umar Farooq Mandi
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Icons */}
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

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <HiX className="w-7 h-7" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
