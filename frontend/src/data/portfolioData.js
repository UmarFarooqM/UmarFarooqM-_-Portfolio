// Portfolio data for Umar Farooq Mandi
import Time_Capusules_Image from "../assets/Time_Capusules_Image.jpg"
import Crowd_Funding_Image from "../assets/Crowd_Funding_Image.jpg"


export const portfolioData = {
  personal: {
    name: "Umar Farooq Mandi",
    title: "Full Stack Web Developer",
    email: "m.umarfarooq1175@gmail.com",
    phone: "+91 6366908462",
    location: "Anantapur, Andhra Pradesh, India",
    i : "",
    profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    intro: "I'm a passionate web developer skilled in JavaScript, React, Node.js, and MongoDB. I build scalable, real-world applications and love solving problems.",
    about: "I am an Electronics and Communication Engineering graduate with hands-on knowledge of JavaScript along with strong problem-solving and communication skills. Committed to continuous learning, I am currently expanding my expertise in web development, with a focus on building modern, responsive, and real-world web applications. I am eager to contribute to a dynamic team environment and grow as a developer through practical, real-world experience."
  },
  
  skills: {
    programming: ["JavaScript", "Python"],
    web: ["HTML", "CSS", "ReactJs", "NodeJs", "ExpressJs"],
    tools: ["VS Code", "GitHub", "MS Office"],
    other: ["Data Structures & Algorithms"]
  },
  
  projects: [
    {
      id: 1,
      title: "Crowdfunding Platform",
      description: "A crowdfunding website is an online platform that allows individuals, startups, or organizations to raise money for a project, cause, or business idea by collecting small contributions from a large number of people (the crowd).",
      features: ["User Authentication", "create fundraising campaigns","Progress Tracking", "Project Display", "Set a target amount","Donation Analytics Dashboard", "Responsive Design","Funding Goal", "User Accounts & Profiles"],
      stack: ["JavaScript", "HTML", "CSS", "Firebase"],
      image: Crowd_Funding_Image,
      demoLink: "https://crowdf.netlify.app/",
      githubLink: "https://github.com/UmarFarooqM/CrowdFundingplatform/tree/main/project"
    },
   {
  id: 2,
  title: "Digital Time Capsule",
  description: "A secure platform to create and store personal messages, media, and memories, which can be unlocked on a chosen future date. Ideal for sending surprises, reminders, or confidential notes to yourself or others.",
  features: [
    "Create and Schedule Time-locked Messages",
    "Secure Authentication with Firebase",
    "Store Text, Images, and Personal Notes",
    "Real-time Unlock Notifications",
    "User-friendly Dashboard to Manage Capsules"
  ],
  stack: ["React.js", "JavaScript", "Firebase"],
  image: Time_Capusules_Image,
  demoLink: "https://digitaltimecapsule.netlify.app/",
  githubLink: "https://github.com/UmarFarooqM/DigitalTimeCapsuleValue"
}

  ],
  
  education: [
    {
      id: 1,
      degree: "Full Stack Web Development",
      institution: "Masai School",
      duration: "Feb 2025 - Oct 2025",
      status: "Enrolled"
    },
    {
      id: 2,
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Anantha Lakshmi Institute of Technology",
      duration: "2021 - 2025",
      status: "Completed"
    },
    {
      id: 3,
      degree: "Intermediate (MPC)",
      institution: "Government Junior College Penukonda",
      duration: "2019 - 2021",
      status: "Completed"
    }
  ],
  
  internships: [
    {
      id: 1,
      role: "Python Full Stack Intern",
      company: "APSCHE-IIDT with Blackbucks", 
      description: "Worked on Python full stack development projects and gained hands-on experience in web technologies."
    }
  ],
  
  achievements: [
    "3rd prize in secondary school final exams",
    "Merit Scholarship - Swadha Foundation (top 50 of 1000+ applicants)"
  ],
  
  certificates: [
    "MS Office - Mythri Ojas Academics",
    "LIngua skill - Cambridge English"
  ],
  
  social: {
    linkedin: "https://www.linkedin.com/in/umarfarooqm/",
    github: "https://github.com/UmarFarooqM",
    email: "m.umarfarooq1175@gmail.com"
  }
};