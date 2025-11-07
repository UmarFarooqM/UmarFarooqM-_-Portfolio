// import { useState, useEffect } from 'react';
// import { HiSun, HiMoon } from 'react-icons/hi';

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem('theme');
//     if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     } else {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     }
//     setIsDark(!isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         <HiSun className="w-5 h-5 text-yellow-500" />
//       ) : (
//         <HiMoon className="w-5 h-5 text-gray-700" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;



// import { useState, useEffect } from "react";
// import { HiSun, HiMoon } from "react-icons/hi";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (
//       theme === "dark" ||
//       (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setIsDark(!isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         <HiSun className="w-5 h-5 text-yellow-500" />
//       ) : (
//         <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;



// import { useState, useEffect } from "react";
// import { HiSun, HiMoon } from "react-icons/hi";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (
//       theme === "dark" ||
//       (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDark) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }
//     setIsDark(!isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         <HiSun className="w-5 h-5 text-yellow-500" />
//       ) : (
//         <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;



import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // ✅ Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Toggle and save theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 sm:p-2.5 rounded-full
        bg-gray-200 dark:bg-gray-800
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary-500
      "
    >
      {isDark ? (
        <HiSun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 transition-transform duration-500 transform rotate-0 hover:rotate-45" />
      ) : (
        <HiMoon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 transition-transform duration-500 transform hover:rotate-45" />
      )}
    </button>
  );
};

export default ThemeToggle;
