import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiBadgeCheck } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, internships, achievements, certificates } = portfolioData;

  return (
    <section
      id="education"
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
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            My academic journey, internships, and certifications that helped me evolve as a developer.
          </p>
        </motion.div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          
          {/* === Left Column: Education + Internships === */}
          <div className="space-y-10">
            
            {/* Education Section */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3"
            >
              <HiAcademicCap className="text-primary-600" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shrink-0">
                      <HiAcademicCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <HiCalendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Completed'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Internship Section */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3 mt-12"
            >
              <HiBadgeCheck className="text-secondary-600" />
              Internships
            </motion.h3>

            <div className="space-y-6">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-full flex items-center justify-center shrink-0">
                      <HiBadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {internship.role}
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-2">
                        {internship.company}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {internship.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* === Right Column: Achievements + Certificates === */}
          <div className="space-y-10">
            
            {/* Achievements */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3"
            >
              <HiBadgeCheck className="text-accent-600" />
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 bg-white dark:bg-gray-800/60 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certificates */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-3 mt-12"
            >
              <HiAcademicCap className="text-primary-600" />
              Certificates
            </motion.h3>

            <div className="space-y-4">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 bg-white dark:bg-gray-800/60 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shrink-0">
                    <HiAcademicCap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                    {certificate}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
