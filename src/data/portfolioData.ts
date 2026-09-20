import type { Project, SkillCategory, EducationItem, Certification, ExperienceItem } from '../types';

export const personalInfo = {
  name: "Penumala Bindu",
  role: "Full-Stack Developer",
  tagline: "Detail-oriented Computer Science undergraduate engineering scalable full-stack applications and automated workflow solutions.",
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
  { category: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript"] },
  { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", skills: ["Spring Boot", "FastAPI", "Node.js"] },
  { category: "Tools & DB", skills: ["Git / GitHub", "Docker", "MySQL / PostgreSQL", "MongoDB"] }
];

export const projectsData: Project[] = [
  {
    id: "ghostline",
    title: "Ghostline - Secure Communication Platform",
    description: "Full-stack real-time communication platform supporting instant messaging, media sharing, and peer-to-peer audio/video calling.",
    technologies: ["React", "TypeScript", "TanStack Start", "PostgreSQL", "Supabase", "WebRTC"],
    features: [
      "End-to-end encrypted message envelopes and disappearing conversations",
      "Real-time audio/video peer-to-peer calling via WebRTC"
    ],
    githubUrl: "https://github.com/Bindu7729/communation-main-",
    liveUrl: "https://communation-main.vercel.app/",
    image: "/projects/ghostline.png"
  },
  {
    id: "edurisk",
    title: "Student Dropout Risk Dashboard / EduRisk AI",
    description: "Full-stack analytics platform that predicts student dropout risk using academic, financial, and behavioral indicators.",
    technologies: ["Next.js", "React", "FastAPI", "MySQL", "Scikit-learn", "Docker"],
    features: [
      "Gradient Boosting model with SHAP explainability for predictions",
      "Role-based dashboards, intervention management, and automated alerts"
    ],
    githubUrl: "https://github.com/Bindu7729/student-dashboard",
    liveUrl: "https://edurisk-ai.vercel.app/",
    image: "/projects/edurisk.png"
  },
  {
    id: "codevista",
    title: "CodeVista - Program Visualizer",
    description: "Interactive Programming Visualization Platform supporting step-by-step trace animations of loops, variable scopes, and reference heaps.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Step-by-step trace animations of program execution states",
      "Visualizes loop variables, array indices, and heap objects"
    ],
    githubUrl: "https://github.com/Bindu7729/codeVista",
    liveUrl: "https://client-iota-olive-48.vercel.app/",
    image: "/projects/codevista.png"
  },
  {
    id: "prepsuite-ai",
    title: "PrepSuite AI - Placement Prep Platform",
    description: "Responsive full-stack candidate evaluation platform replicating enterprise recruitment pipelines with coding sandbox and aptitude arena.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Interactive Coding Sandbox Module with runtime evaluation",
      "AI Mock Booth supporting continuous user response-tracking nodes"
    ],
    githubUrl: "https://github.com/Bindu7729/prepsuite-ai",
    liveUrl: "https://prepsuite-ai-byyu-eight.vercel.app/",
    image: "/projects/prepsuite_ai.png"
  },
  {
    id: "planmyjourney",
    title: "PlanMyJourney - Travel Planner",
    description: "Premium travel planning and logistics management platform for user itinerary tracking.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Interactive travel logs and mapping route guides",
      "Flexible itinerary planner with schedule configurations"
    ],
    githubUrl: "https://github.com/Bindu7729/-PlanMyJourney-",
    liveUrl: "https://frontend-beryl-tau-20.vercel.app",
    image: "/projects/planmyjourney.png"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    organization: "SmartBridge & APSCHE",
    period: "Jun 2026 - Aug 2026",
    details: [
      "Completed a 2-month, 120-hour Full Stack Development internship focused on the MERN stack, gaining hands-on experience in frontend, backend, database, and web application development.",
      "Developed Darshan, a full-stack web application as part of the internship, applying MERN stack concepts to build and integrate responsive user interfaces with backend services and database operations.",
      "Implemented core full-stack development workflows including REST API integration, server-side logic, database connectivity, debugging, and application testing."
    ]
  },
  {
    role: "Student Mentor & Core Team Member",
    organization: "Coding Club [MBU]",
    period: "Sep 2024 - Present",
    details: [
      "Coached over 50+ junior students in core Data Structures & Algorithms, Object-Oriented Programming (OOP), and programming fundamentals in Java and Python.",
      "Facilitated interactive coding workshops and focused debugging sessions, significantly reducing peer development blocks and logic errors."
    ]
  }
];

export const educationData: EducationItem[] = [
  { degree: "B.Tech in Computer Science & Engineering", institution: "Mohan Babu University (AP)", period: "2023 - 2027", details: "8.89 CGPA" },
  { degree: "Intermediate (MPC)", institution: "Sri Chaitanya Junior College", period: "2021 - 2023", details: "72.0%" },
  { degree: "Secondary School Certificate (SSC)", institution: "Dr KKR Gowtham Concept School", period: "2020 - 2021", details: "100%" }
];

export const certificationsData: Certification[] = [
  { title: "ServiceNow Virtual Internship Certification", issuer: "SmartBridge & AICTE", date: "May 2026" },
  { title: "Generative AI", issuer: "Google Cloud", date: "" },
  { title: "Intro to Open GPT Models", issuer: "Infosys", date: "" },
  { title: "Data Science Foundations", issuer: "Oracle", date: "" }
];