// import { motion } from 'framer-motion';
// import { portfolioData } from '../data/portfolioData';

// const About = () => {
//   const { personal } = portfolioData;

//   return (
//     <section id="about" className="section-padding bg-white dark:bg-gray-900">
//       <div className="container-max">
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Profile Image */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <div className="relative">
//               <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="About me"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
            
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 Electronics & Communication Engineer
//               </h3>
//               <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
//                 {personal.about}
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
//                 <p className="text-gray-600 dark:text-gray-400">{personal.location}</p>
//               </div>
//               <div className="space-y-2">
//                 <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
//                 <p className="text-gray-600 dark:text-gray-400">{personal.email}</p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-lg font-medium">
//                 Problem Solving
//               </div>
//               <div className="bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 px-4 py-2 rounded-lg font-medium">
//                 Hard Worker
//               </div>
//               <div className="bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 px-4 py-2 rounded-lg font-medium">
//                 Continuous Learning
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";

// const About = () => {
//   const { personal } = portfolioData;

//   return (
//     <section
//       id="about"
//       className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
//     >
//       <div className="container-max max-w-5xl mx-auto px-6 text-center">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
//             Get to know who I am, my background, and what drives me as a developer.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-10 md:p-14"
//         >
//           <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//             Electronics & Communication Engineer
//           </h3>
//           <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
//             {personal.about}
//           </p>

//           {/* Info Cards */}
//           <div className="grid sm:grid-cols-2 gap-6 mt-10">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
//             >
//               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
//                 Location
//               </h4>
//               <p className="text-gray-900 dark:text-gray-100 text-base">
//                 {personal.location}
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="rounded-2xl bg-gradient-to-r from-secondary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
//             >
//               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
//                 Email
//               </h4>
//               <p className="text-gray-900 dark:text-gray-100 text-base">
//                 {personal.email}
//               </p>
//             </motion.div>
//           </div>

//           {/* Skills / Traits */}
//           <div className="flex flex-wrap justify-center gap-4 mt-10">
//             {[
//               "Problem Solving",
//               "Team Collaboration",
//               "Creative Thinking",
//               "Continuous Learning",
//             ].map((trait, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.08 }}
//                 className="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 text-primary-700 dark:text-primary-300 rounded-xl font-medium shadow-sm transition-transform"
//               >
//                 {trait}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;




// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";
// import Tech_Programmer from "../assets/Tech_Programmer.png"

// const About = () => {
//   const { personal } = portfolioData;
//   return (
//     <section
//       id="about"
//       className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
//     >
//       <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//             Get to know who I am, my background, and what drives me as a developer.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 md:p-14 text-center md:text-left"
//         >
//           {/* Responsive Layout */}
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            
//             {/* Left: Profile Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex justify-center md:justify-start w-full md:w-1/2"
//             >
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
//                 {/* <img
//                   src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="About me"
//                   className="w-full h-full object-cover"
//                 /> */}

//                 <img
//                   src={Tech_Programmer}
//                   alt={aboutmeImage}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* <Tech_Programmer> */}
//               </div>
//             </motion.div>

//             {/* Right: About Content */}
//             <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
//                   Electronics & Communication Engineer
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
//                   {personal.about}
//                 </p>
//               </div>

//               {/* Info Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 p-5 shadow-sm"
//                 >
//                   <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
//                     Location
//                   </h4>
//                   <p className="text-gray-900 dark:text-gray-100 text-base sm:text-lg">
//                     {personal.location}
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="rounded-2xl bg-gradient-to-r from-secondary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 p-5 shadow-sm"
//                 >
//                   <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
//                     Email
//                   </h4>
//                   <p className="text-gray-900 dark:text-gray-100 text-base sm:text-lg break-words">
//                     {personal.email}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Skills / Traits */}
//               <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-8">
//                 {[
//                   "Problem Solving",
//                   "Team Collaboration",
//                   "Creative Thinking",
//                   "Continuous Learning",
//                 ].map((trait, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.08 }}
//                     className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 text-primary-700 dark:text-primary-300 rounded-xl font-medium text-sm sm:text-base shadow-sm transition-transform"
//                   >
//                     {trait}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";
// import Tech_Programmer from "../assets/Tech_Programmer.png"; // ✅ include extension

// const About = () => {
//   const { personal } = portfolioData;

//   return (
//     <section id="about" className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
//       <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//             Get to know who I am, my background, and what drives me as a developer.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 md:p-14 text-center md:text-left"
//         >
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            
//             {/* Left Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex justify-center md:justify-start w-full md:w-1/2"
//             >
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
//                 <img
//                   src={Tech_Programmer}
//                   alt="Tech Programmer Illustration"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Content */}
//             <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
//                   Electronics & Communication Engineer
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
//                   {personal.about}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";
// import Tech_Programmer from "../assets/Tech_Programmer.png"; // ✅ Make sure this path is correct

// const About = () => {
//   const { personal } = portfolioData;

//   return (
//     <section
//       id="about"
//       className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
//     >
//       <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
//             Get to know who I am, my background, and what drives me as a developer.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 md:p-14"
//         >
//           <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-14">

//             {/* Left Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex justify-center md:justify-start w-full md:w-1/2"
//             >
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
//                 <img
//                   src={Tech_Programmer}
//                   alt="Electronics & Communication Engineer"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left space-y-6"
//             >
//               <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
//                 Electronics & Communication Engineer
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
//                 I am an Electronics and Communication Engineering graduate with hands-on knowledge
//                 of JavaScript along with strong problem-solving and communication skills. Committed
//                 to continuous learning, I am currently expanding my expertise in web development,
//                 with a focus on building modern, responsive, and real-world web applications. I am
//                 eager to contribute to a dynamic team environment and grow as a developer through
//                 practical, real-world experience.
//               </p>
//             </motion.div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";
// import Tech_Programmer from "../assets/Tech_Programmer.png"; // ✅ Ensure this path is correct

// const About = () => {
//   const { personal } = portfolioData;

//   return (
//     <section
//       id="about"
//       className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
//     >
//       <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2">
//             Get to know who I am, my background, and what drives me as a developer.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 md:p-14"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
//             {/* Left Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex justify-center md:justify-start w-full md:w-1/2"
//             >
//               <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300">
//                 <img
//                   src={Tech_Programmer}
//                   alt="Electronics & Communication Engineer"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Right Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6"
//             >
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
//                 Electronics & Communication Engineer
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
//                 I am an Electronics and Communication Engineering graduate with hands-on experience
//                 in JavaScript and strong problem-solving and communication skills. I’m passionate
//                 about continuous learning and currently expanding my skills in web development —
//                 focusing on creating responsive, interactive, and user-focused applications.
//               </p>
//               <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
//                 I’m eager to contribute to a collaborative development environment, grow my
//                 expertise, and make meaningful impacts through technology and creativity.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Tech_Programmer from "../assets/Tech_Programmer.png"; // ✅ Make sure path is correct

const About = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="container-max max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ✅ Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto px-3">
            Get to know who I am, my background, and what drives me as a developer.
          </p>
        </motion.div>

        {/* ✅ About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-10 md:p-14"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">

            {/* ✅ Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start w-full md:w-1/2"
            >
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 transition-transform duration-300 hover:scale-[1.03]">
                <img
                  src={Tech_Programmer}
                  alt="Umar Farooq - Electronics & Communication Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* ✅ Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Electronics & Communication Engineer
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
                I am an Electronics and Communication Engineering graduate with a strong foundation
                in JavaScript and modern web development. My passion lies in building interactive,
                visually engaging, and user-focused digital experiences while maintaining high code
                quality and performance.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
                I believe in continuous learning, teamwork, and adapting to new technologies. I’m
                currently expanding my expertise in full-stack web development to deliver impactful
                real-world projects that combine creativity and functionality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;




