import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiHeart } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { icon: SiLinkedin, href: social.linkedin, color: "hover:text-blue-500" },
    {
      icon: SiGithub,
      href: social.github,
      color: "hover:text-gray-200 dark:hover:text-white",
    },
    {
      icon: HiMail,
      href: `mailto:${social.email}`,
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-10 sm:py-12">
      <div className="container-max">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-10 items-center text-center md:text-left">
          
          {/* ✅ Brand Section */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{personal.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{personal.title}</p>
          </div>

          {/* ✅ Social Links Section */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-5 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with{" "}
              <HiHeart className="text-red-500 w-4 h-4 animate-pulse-slow" /> by{" "}
              <span className="font-medium text-white">Umar Farooq</span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* ✅ Divider Line for Mobile */}
        <div className="block md:hidden mt-8 border-t border-gray-700 opacity-50"></div>

        {/* ✅ Bottom Note for Small Screens */}
        <div className="mt-6 md:hidden text-center text-gray-500 text-xs">
          Connect with me on LinkedIn or GitHub 👨‍💻
        </div>
      </div>
    </footer>
  );
};

export default Footer;
