// 


// import { motion } from 'framer-motion';
// import { 
//   SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs,
//   SiGithub, SiExpress
// } from 'react-icons/si';
// import { FaMicrosoft } from 'react-icons/fa';
// import { HiCode } from 'react-icons/hi';
// import { portfolioData } from '../data/portfolioData';

// const Skills = () => {
//   const { skills } = portfolioData;

//   // Map skill names to icons
//   const skillIcons = {
//     'JavaScript': SiJavascript,
//     'Python': SiPython,
//     'HTML': SiHtml5,
//     'CSS': SiCss3,
//     'React.js': SiReact,
//     'Node.js': SiNodedotjs,
//     'Express': SiExpress,
//     'Express.js': SiExpress, // Added for .js variant
//     'GitHub': SiGithub,
//     'MS Office': FaMicrosoft,
//     'Data Structures & Algorithms': HiCode
//   };

//   // Skill categories
//   const skillCategories = [
//     { title: 'Programming Languages', skills: skills.programming, color: 'primary' },
//     { title: 'Web Technologies', skills: skills.web, color: 'secondary' },
//     { title: 'Tools & Technologies', skills: skills.tools, color: 'accent' },
//     { title: 'Core Concepts', skills: skills.other, color: 'primary' }
//   ];

//   // Tailwind color classes
//   const getColorClasses = (color) => {
//     const colors = {
//       primary: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400',
//       secondary: 'bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400',
//       accent: 'bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 text-accent-600 dark:text-accent-400'
//     };
//     return colors[color];
//   };

//   return (
//     <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
//       <div className="container-max max-w-6xl mx-auto px-6">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A comprehensive overview of my technical skills and the technologies I work with
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div 
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
//             >
//               {/* Category Header */}
//               <div className="text-center mb-6">
//                 <div className={`inline-flex p-3 rounded-full mb-4 ${getColorClasses(category.color)}`}>
//                   <HiCode className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {category.title}
//                 </h3>
//               </div>

//               {/* Skills */}
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => {
//                   const IconComponent = skillIcons[skill] ?? HiCode;

//                   return (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
//                       viewport={{ once: true }}
//                       className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:shadow-md ${getColorClasses(category.color)}`}
//                     >
//                       <IconComponent className="w-5 h-5" />
//                       <span className="font-medium">{skill}</span>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { motion } from "framer-motion";
// import { 
//   SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs,
//   SiGithub, SiExpress
// } from "react-icons/si";
// import { FaMicrosoft } from "react-icons/fa";
// import { HiCode } from "react-icons/hi";
// import { portfolioData } from "../data/portfolioData";

// const Skills = () => {
//   const { skills } = portfolioData;

//   // Map skill names to icons
//   const skillIcons = {
//     "JavaScript": SiJavascript,
//     "Python": SiPython,
//     "HTML": SiHtml5,
//     "CSS": SiCss3,
//     "React.js": SiReact,
//     "Node.js": SiNodedotjs,
//     "Express": SiExpress,       
//     "Express.js": SiExpress,    
//     "GitHub": SiGithub,
//     "MS Office": FaMicrosoft,
//     "Data Structures & Algorithms": HiCode
//   };

//   // Skill categories
//   const skillCategories = [
//     { title: "Programming Languages", skills: skills.programming, color: "primary" },
//     { title: "Web Technologies", skills: skills.web, color: "secondary" },
//     { title: "Tools & Technologies", skills: skills.tools, color: "accent" },
//     { title: "Core Concepts", skills: skills.other, color: "primary" }
//   ];

//   // Tailwind color classes
//   const getColorClasses = (color) => {
//     const colors = {
//       primary: "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400",
//       secondary: "bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400",
//       accent: "bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 text-accent-600 dark:text-accent-400"
//     };
//     return colors[color];
//   };

//   return (
//     <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
//       <div className="container-max max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Skills & Technologies
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             A comprehensive overview of my technical skills and the technologies I work with
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
//             >
//               {/* Category Header */}
//               <div className="text-center mb-6">
//                 <div className={`inline-flex p-3 rounded-full mb-4 ${getColorClasses(category.color)}`}>
//                   <HiCode className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {category.title}
//                 </h3>
//               </div>

//               {/* Skills */}
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => {
//                   // Ensure Express icon shows correctly
//                   const skillKey = skill === "Express.js" || skill === "express" ? "Express" : skill;
//                   const IconComponent = skillIcons[skillKey] ?? HiCode;

//                   return (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 0.5,
//                         delay: categoryIndex * 0.1 + skillIndex * 0.05
//                       }}
//                       viewport={{ once: true }}
//                       className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:shadow-md ${getColorClasses(category.color)}`}
//                     >
//                       <IconComponent className="w-5 h-5" />
//                       <span className="font-medium">{skill}</span>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { motion } from "framer-motion";
// import {
//   SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs,
//   SiGithub, SiExpress
// } from "react-icons/si";
// import { FaMicrosoft } from "react-icons/fa";
// import { HiCode } from "react-icons/hi";
// import { portfolioData } from "../data/portfolioData";

// const Skills = () => {
//   const { skills } = portfolioData;

//   // Map skill names to icons
//   const skillIcons = {
//     JavaScript: SiJavascript,
//     Python: SiPython,
//     HTML: SiHtml5,
//     CSS: SiCss3,
//     "React.js": SiReact,
//     "Node.js": SiNodedotjs,
//     Express: SiExpress,
//     "Express.js": SiExpress,
//     GitHub: SiGithub,
//     "MS Office": FaMicrosoft,
//     "Data Structures & Algorithms": HiCode,
//   };

//   // Skill categories
//   const skillCategories = [
//     { title: "Programming Languages", skills: skills.programming, color: "primary" },
//     { title: "Web Technologies", skills: skills.web, color: "secondary" },
//     { title: "Tools & Technologies", skills: skills.tools, color: "accent" },
//     { title: "Core Concepts", skills: skills.other, color: "primary" },
//   ];

//   // Tailwind color palette mapping
//   const getColorClasses = (color) => {
//     const colors = {
//       primary: "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400",
//       secondary: "bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400",
//       accent: "bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 text-accent-600 dark:text-accent-400",
//     };
//     return colors[color];
//   };

//   return (
//     <section
//       id="skills"
//       className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
//     >
//       <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ===== Header ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
//             Skills & Technologies
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-5"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             A comprehensive overview of my technical expertise and tools I work with.
//           </p>
//         </motion.div>

//         {/* ===== Skill Categories ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-800/60 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
//             >
//               {/* Category Header */}
//               <div className="text-center mb-6">
//                 <div
//                   className={`inline-flex p-3 sm:p-4 rounded-full mb-4 ${getColorClasses(
//                     category.color
//                   )}`}
//                 >
//                   <HiCode className="w-6 h-6 sm:w-7 sm:h-7" />
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
//                   {category.title}
//                 </h3>
//               </div>

//               {/* Skills List */}
//               <div className="space-y-3 sm:space-y-4">
//                 {category.skills.map((skill, skillIndex) => {
//                   const skillKey =
//                     skill === "Express.js" || skill.toLowerCase() === "express"
//                       ? "Express"
//                       : skill;
//                   const IconComponent = skillIcons[skillKey] ?? HiCode;

//                   return (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{
//                         duration: 0.4,
//                         delay: categoryIndex * 0.1 + skillIndex * 0.05,
//                       }}
//                       viewport={{ once: true }}
//                       className={`flex items-center gap-3 p-3 rounded-xl border text-sm sm:text-base hover:shadow-md transition-all duration-300 ${getColorClasses(
//                         category.color
//                       )}`}
//                     >
//                       <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
//                       <span className="font-medium">{skill}</span>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  // Icon Mapping
  const skillIcons = {
    JavaScript: SiJavascript,
    Python: SiPython,
    HTML: SiHtml5,
    CSS: SiCss3,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    "Express.js": SiExpress,
    GitHub: SiGithub,
    "MS Office": FaMicrosoft,
    "Data Structures & Algorithms": HiCode,
  };

  // Skill Categories
  const skillCategories = [
    { title: "Programming Languages", skills: skills.programming, color: "primary" },
    { title: "Web Technologies", skills: skills.web, color: "secondary" },
    { title: "Tools & Technologies", skills: skills.tools, color: "accent" },
    { title: "Core Concepts", skills: skills.other, color: "primary" },
  ];

  // Tailwind Color Palette Mapping
  const getColorClasses = (color) => {
    const colors = {
      primary:
        "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300",
      secondary:
        "bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800 text-secondary-700 dark:text-secondary-300",
      accent:
        "bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300",
    };
    return colors[color];
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A comprehensive overview of my technical stack, languages, tools, and core concepts.
          </p>
        </motion.div>

        {/* ===== Skill Categories ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/60 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex p-3 sm:p-4 rounded-full mb-4 ${getColorClasses(
                    category.color
                  )}`}
                >
                  <HiCode className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey =
                    skill === "Express.js" || skill.toLowerCase() === "express"
                      ? "Express"
                      : skill;
                  const IconComponent = skillIcons[skillKey] ?? HiCode;

                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-sm sm:text-base font-medium hover:shadow-md transition-all duration-300 ${getColorClasses(
                        category.color
                      )}`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
