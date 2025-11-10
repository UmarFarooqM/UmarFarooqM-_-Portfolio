
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




