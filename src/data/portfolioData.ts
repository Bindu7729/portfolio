import type { Project, SkillCategory, EducationItem, Certification, ExperienceItem } from '../types';

export const personalInfo = {
  name: "Penumala Bindu",
  role: "Full-Stack Developer",
  tagline: "Detail-oriented Computer Science undergraduate engineering scalable full-stack applications, interactive coding tools, and automated workflow solutions.",
  email: "pbibinduamb@gmail.com",
  phone: "+91 7729801179",
  location: "Vijayawada, Andhra Pradesh, India",
  github: "https://github.com/Bindu7729",
  linkedin: "https://linkedin.com/in/penumalabindu",
  leetcode: "https://leetcode.com/u/bin05/",
  codechef: "https://codechef.com/users/bindu_9",
  resumeUrl: "/Penumala Bindu - Resume.pdf",
};

export const skillsData: SkillCategory[] = [
  { category: "Languages", skills: ["Java (Advanced)", "Python", "JavaScript", "TypeScript"] },
  { category: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"] },
  { category: "Backend", skills: ["Spring Boot", "REST APIs", "Node.js", "Express.js (MERN)"] },
  { category: "Databases", skills: ["MySQL", "MongoDB"] },
  { category: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "ServiceNow (ATF & Flow Designer)"] },
  { category: "Core Computer Science", skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Software Engineering"] }
];

export const projectsData: Project[] = [
  {
    id: "codevista",
    title: "CodeVista — Program Visualizer",
    description: "Interactive Programming Visualization Platform supporting step-by-step trace animations of loops, variable scopes, and reference heaps.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Step-by-step trace animations of program execution states",
      "Visualizes loop variables, array indices, and heap objects",
      "Designed for student learning and DSA debugging"
    ],
    githubUrl: "https://github.com/Bindu7729/codeVista",
    liveUrl: "https://client-iota-olive-48.vercel.app/",
    image: "/projects/codevista.png"
  },
  {
    id: "prepsuite-ai",
    title: "PrepSuite AI — Placement Prep Platform",
    description: "Responsive full-stack candidate evaluation platform replicating enterprise recruitment pipelines with custom glassmorphism layouts, coding sandbox, aptitude arena, and AI mock booth.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Interactive Coding Sandbox Module with runtime evaluation",
      "Secure state-locking mechanisms within Aptitude Arena",
      "AI Mock Booth supporting continuous user response-tracking nodes"
    ],
    githubUrl: "https://github.com/Bindu7729/prepsuite-ai",
    liveUrl: "https://prepsuite-ai-byyu-eight.vercel.app/",
    image: "/projects/prepsuite_ai.png"
  },
  {
    id: "planmyjourney",
    title: "PlanMyJourney — Travel Planner",
    description: "Premium travel planning and logistics management platform for user itinerary tracking.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Interactive travel logs and mapping route guides",
      "Flexible itinerary planner with schedule configurations",
      "Clean, responsive multi-device log dashboard"
    ],
    githubUrl: "https://github.com/Bindu7729/-PlanMyJourney-",
    liveUrl: "https://frontend-beryl-tau-20.vercel.app",
    image: "/projects/planmyjourney.png"
  },
  {
    id: "my-coffee-website",
    title: "My Coffee Website — Storefront",
    description: "Modern Coffee Shop storefront web portal built with clean HTML, CSS, and vanilla JS.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Sleek custom CSS layouts with micro-interactions",
      "Fully responsive design for mobile and tablet browsing",
      "Modern menus showcase storefront UI/UX structures"
    ],
    githubUrl: "https://github.com/Bindu7729/my-cofffe-webiste",
    liveUrl: "https://my-cofffe-webiste.vercel.app",
    image: "/projects/coffee.png"
  },
  {
    id: "darshan",
    title: "Darshan — Temple Booking System",
    description: "Temple Darshan Booking and queue slot allocation management system.",
    technologies: ["React", "Node.js", "Express.js", "CSS3"],
    features: [
      "Queue slot allocation management modules",
      "Secure user booking pipelines with verification logs",
      "Responsive customer scheduling calendar views"
    ],
    githubUrl: "https://github.com/Bindu7729/darsan",
    liveUrl: "https://frontend-beryl-tau-20.vercel.app",
    image: "/projects/darshan.png"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Developer (MERN Stack) Intern",
    organization: "SmartBridge & APSCHE",
    period: "June 2026 – August 2026",
    details: [
      "Completed a 2-month (120 hours) short-term virtual internship program on Full Stack Web Development using MERN Stack.",
      "Built responsive, scalable web applications utilizing MongoDB, Express.js, React.js, and Node.js.",
      "Certificate ID: VIP-FSD-2026-1586."
    ]
  },
  {
    role: "ServiceNow Virtual Intern",
    organization: "SmartBridge & AICTE",
    period: "May 2026 – July 2026",
    details: [
      "Configured enterprise workflows utilizing ServiceNow Administration fundamentals, Flow Management, and system reporting infrastructure.",
      "Designed automated tests with Automated Test Framework (ATF) Essentials to optimize verification steps.",
      "Completed advanced training in Agentic AI and workflow automation."
    ]
  },
  {
    role: "Student Mentor & Core Team Member",
    organization: "Coding Club [Mohan Babu University]",
    period: "Sep 2024 – Present",
    details: [
      "Coached 50+ junior students in DSA, OOP, and programming fundamentals in Java and Python.",
      "Facilitated interactive coding workshops and debugging sessions to streamline logic development."
    ]
  }
];

export const educationData: EducationItem[] = [
  { degree: "B.Tech in Computer Science & Engineering", institution: "Mohan Babu University (AP)", period: "2023 – 2027", details: "8.72 CGPA" },
  { degree: "Intermediate (MPC)", institution: "Sri Chaitanya Junior College", period: "2021 – 2023", details: "72.0%" },
  { degree: "Secondary School Certificate (SSC)", institution: "Dr. KKR Gowtham Concept School", period: "2020 – 2021", details: "100%" }
];

export const certificationsData: Certification[] = [
  { title: "Full Stack Developer (MERN Stack) Virtual Internship", issuer: "SmartBridge & APSCHE", date: "August 2026" },
  { title: "ServiceNow Virtual Internship Certification", issuer: "SmartBridge & AICTE", date: "May 2026" },
  { title: "Generative AI", issuer: "Google Cloud" },
  { title: "Intro to Open GPT Models", issuer: "Infosys" },
  { title: "Data Science Foundations", issuer: "Oracle" }
];