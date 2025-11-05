
import { HiDownload, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import UmarFarooqImage from "../assets/Umar_Farooq_M.jpg";

const Hero = () => {
  const { personal } = portfolioData;
  const resumeUrl = "/Umar_Farooq_Mandi__Resume.pdf";

  const handleResumeClick = () => {
    const newTab = window.open(resumeUrl, "_blank", "noopener,noreferrer");

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Umar_Farooq_Mandi__Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (newTab) newTab.focus();
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left max-w-lg"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Umar Farooq Mandi
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold"
              >
                {personal.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {personal.intro}
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Hire Me Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <HiMail className="w-5 h-5" />
                Hire Me
              </button>

             
              {/* Resume Button */}
        <motion.button
          onClick={handleResumeClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-2 shadow-md text-sm sm:text-base"
        >
          <HiDownload className="w-5 h-5" />
          Resume
        </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={UmarFarooqImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-white font-bold text-sm">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
