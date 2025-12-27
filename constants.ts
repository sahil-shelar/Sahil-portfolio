import { Experience, Project, Education, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Adesh Shelar",
  title: "Full Stack Developer",
  email: "adesh.shelar.in@gmail.com",
  phone: "+91-9511775471",
  location: "Pune, Maharashtra, India",
  linkedin: "linkedin.com/in/adesh-shelar",
  summary: [
      "Results-oriented Full Stack Developer with 2 years of experience designing and deploying scalable web solutions. Proficient in backend architecture using Node.js, Python, MongoDB, and Docker, complemented by strong expertise in frontend frameworks including Vue.js and React.js.",
      "Adept at Agile methodologies, system optimization, and delivering high-performance SaaS applications that drive operational efficiency."
    ]
  };

export const SKILLS: Skill[] = [
  // Backend [cite: 7]
  { name: "NodeJS", category: "code" },
  { name: "ExpressJS", category: "code" },
  { name: "SailsJS", category: "code" },
  { name: "Python", category: "code" },
  { name: "Java", category: "code" },
  // Frontend [cite: 6]
  { name: "ReactJS", category: "code" },
  { name: "VueJS", category: "code" },
  { name: "Redux", category: "code" },
  { name: "Vuex", category: "code" },
  { name: "HTML/CSS", category: "code" },
  { name: "Tailwind/Bootstrap", category: "code" },
  // Database [cite: 8]
  { name: "MongoDB", category: "data" },
  { name: "MySQL", category: "data" },
  { name: "ElasticSearch", category: "data" },
  // Tools & Others [cite: 10, 11]
  { name: "Docker", category: "tool" },
  { name: "Linux", category: "tool" },
  { name: "RabbitMQ", category: "tool" },
  { name: "Git/Github", category: "tool" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Software Developer", // 
    company: "Provakil Tech Services Pvt. Ltd.", // 
    location: "Pune, Maharashtra", // 
    period: "August 2024 - Present", // [cite: 28]
    description: [
      "Contributed to the development of responsive SaaS web applications using Node.js, MongoDB, and Vue.js.", // [cite: 29]
      "Spearheaded enhancements to the Calendar module, implementing nested sorting and reducing manual navigation effort by 50%.", // [cite: 31]
      "Built Python-based background workers with RabbitMQ, reducing processing time by 50% and offloading 50-60% of API workload.", // [cite: 32, 33]
      "Integrated Microsoft Graph API for email synchronization, increasing delivery consistency by 30%.", // [cite: 34]
      "Collaborated on Docker deployments and optimized backend performance, achieving a 20% reduction in API latency.", // [cite: 35]
      "Reduced bugs by 50% through code quality improvements and user feedback implementation." // [cite: 30]
    ]
  },
  {
    id: "exp-2",
    role: "Software Developer Intern", // 
    company: "Sarathi Dravate Technologies LLP", // 
    location: "Pune, Maharashtra", // 
    period: "Jan 2022 - Apr 2022", // [cite: 38]
    description: [
      "Developed an Attendance Management web application utilizing facial recognition technology.", // [cite: 39]
      "Attained a 95% accuracy rate during authentication processes for secure logins.", // [cite: 40]
      "Utilized Python, Flask, OpenCV, and Face-Recognition for implementation." // [cite: 41]
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc in Computer Science", // 
    school: "Nowrosjee Wadia College Pune", // 
    year: "2022-2024", // [cite: 14]
    details: ["specialization in Computer Science"] 
  },
  {
    degree: "B.Sc in Computer Science", // 
    school: "Nowrosjee Wadia College Pune", // [cite: 16]
    year: "2018-2022", // [cite: 16]
    details: ["Foundation in Computer Science"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Video Streaming Platform", // [cite: 43]
    category: "Full Stack",
    tech: ["JavaScript", "Nodejs", "Express", "MongoDB", "Cloudinary"], // [cite: 46]
    description: "Developed backend functionality for a comprehensive platform featuring user, video, playlist, and subscription management APIs." // [cite: 44, 45]
  }
];

export const CERTIFICATIONS = [
  { 
    name: "JavaScript (Intermediate) - HackerRank", 
    image: "/certificates/HackerRank_JavaScript.png" 
  }, //
  { 
    name: "Introduction to Data Analytics - IBM", 
    image: "/certificates/IBM_Data_Analytics.png" 
  }, //
  { 
    name: "100 Days of Code: The Complete Python Pro Bootcamp", 
    image: "/certificates/Udemy_Python_Bootcamp.png" 
  }, //
  { 
    name: "Python Mega Course: Go Beginner to Expert in Python3", 
    image: "/certificates/Udemy_Python_Mega_Course.png" 
  } //
];