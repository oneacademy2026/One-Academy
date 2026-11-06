import {
  Code2,
  Gamepad2,
  Boxes,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import {
  Course,
  StatItem,
  JourneyStep,
  ProjectItem,
  Testimonial,
  FaqItem,
} from "@/types";

export const STATS_DATA: StatItem[] = [
  {
    id: "stat-1",
    number: "96%",
    label: "Project Completion Rate",
    sublabel: "Students graduate with live portfolios",
  },
  {
    id: "stat-2",
    number: "500+",
    label: "Hands-on Projects",
    sublabel: "Games, 3D scenes & full-stack apps built",
  },
  {
    id: "stat-3",
    number: "1:1",
    label: "Expert Mentorship",
    sublabel: "Direct code & asset reviews",
  },
  {
    id: "stat-4",
    number: "4.9/5",
    label: "Student Rating",
    sublabel: "Across industry cohorts",
  },
];

export const COURSES_DATA: Course[] = [
  {
    id: "fullstack-dev",
    number: "01",
    title: "Fullstack Development",
    headline: "Next.js, Three.js, MongoDB, SQL, Prisma & Modern Libraries",
    description:
      "Build production-grade web applications with responsive React 19 / Next.js architecture, interactive 3D web graphics via Three.js, dual databases (MongoDB & SQL), and Prisma ORM.",
    category: "fullstack",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    studentsCount: 1420,
    tags: [
      "Next.js",
      "Three.js",
      "MongoDB",
      "SQL",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
    ],
    curriculumHighlights: [
      "Next.js App Router, Server Actions & SSR",
      "3D Web Experiences & Shaders with Three.js",
      "Database Design with PostgreSQL, MySQL & MongoDB",
      "Type-Safe Schemas & Queries using Prisma ORM",
    ],
    icon: Code2,
  },
  {
    id: "game-dev",
    number: "02",
    title: "Game Development",
    headline: "Unreal Engine 5 & Unity 6 with C++ and C#",
    description:
      "Master AAA game design, gameplay programming in Unreal Engine 5 using C++ and Blueprints, physics systems, and multiplatform game architecture in Unity with C#.",
    category: "gamedev",
    duration: "16 Weeks",
    level: "Hands-on Projects",
    rating: 4.9,
    studentsCount: 980,
    tags: [
      "Unreal Engine 5",
      "Unity 6",
      "C++",
      "C#",
      "Blueprints",
      "Gameplay Systems",
      "Physics",
    ],
    curriculumHighlights: [
      "Unreal Engine 5 Lumen Lighting & Nanite Meshes",
      "C++ Core Mechanics & Character Controller Systems",
      "Unity 6 Universal Render Pipeline (URP)",
      "Multiplayer Networking, AI Pathfinding & Optimization",
    ],
    icon: Gamepad2,
  },
  {
    id: "3d-animation",
    number: "03",
    title: "3D Animation",
    headline: "Blender & Autodesk Maya Production Pipeline",
    description:
      "Learn the end-to-end 3D production pipeline: organic modeling, hard-surface assets, UV unwrapping, texturing, character rigging, keyframe animation, lighting, and rendering.",
    category: "animation",
    duration: "14 Weeks",
    level: "Studio Grade",
    rating: 4.8,
    studentsCount: 850,
    tags: [
      "Blender",
      "Autodesk Maya",
      "3D Modeling",
      "Character Rigging",
      "Lighting",
      "Rendering",
    ],
    curriculumHighlights: [
      "Hard-Surface & Organic Character Modeling",
      "Bone Hierarchies, Inverse Kinematics & Facial Rigging",
      "Principles of Animation, Timing & Weight",
      "Photorealistic Shading, Cycles & Arnold Rendering",
    ],
    icon: Boxes,
  },
  {
    id: "core-programming",
    number: "04",
    title: "Core Programming: C++, Python & Java",
    headline: "Basic to Advanced with Real Hands-on Projects",
    description:
      "Develop deep algorithmic intuition and software engineering fundamentals. Master C++ (memory & pointers), Python (automation, OOP & scripting), and Java (enterprise systems).",
    category: "programming",
    duration: "18 Weeks",
    level: "Basic to Advance",
    rating: 4.9,
    studentsCount: 1650,
    tags: [
      "C++",
      "Python",
      "Java",
      "Data Structures",
      "Algorithms",
      "Memory Management",
      "OOP",
    ],
    curriculumHighlights: [
      "C++ Pointers, Dynamic Memory & Modern STL",
      "Python Object-Oriented Design & System Automation",
      "Java Multithreading, Streams & Enterprise Patterns",
      "LeetCode Problem Solving, Complexity & System Design",
    ],
    icon: Terminal,
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Cybersecurity & Defense",
    headline: "Ethical Hacking, Network Security & Threat Defense",
    description:
      "Gain real defensive and offensive security skills: penetration testing, network packet analysis, vulnerability scanning, security hardening, and ethical hacking protocols.",
    category: "cybersecurity",
    duration: "14 Weeks",
    level: "Intermediate",
    rating: 4.9,
    studentsCount: 790,
    tags: [
      "Ethical Hacking",
      "Penetration Testing",
      "Kali Linux",
      "Network Security",
      "OWASP",
      "Security Labs",
    ],
    curriculumHighlights: [
      "Network Protocols, Packet Inspection with Wireshark",
      "Web Application Pentesting & OWASP Top 10 Exploits",
      "Linux Security Hardening & Privilege Escalation",
      "Security Operations, Defense Architecture & Incident Response",
    ],
    icon: ShieldCheck,
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Select Your Craft",
    description:
      "Choose from Fullstack Web, Game Development, 3D Animation, Core Languages, or Cybersecurity with personalized roadmap advising.",
    highlight: "Focused Track",
  },
  {
    number: "02",
    title: "Core Fundamentals",
    description:
      "Grasp low-level mechanics, syntax, theory, and architecture with live mentor demonstrations and guided coding labs.",
    highlight: "Deep Knowledge",
  },
  {
    number: "03",
    title: "Build Production Projects",
    description:
      "Build real games, 3D cinematics, web portals, or security simulations that showcase your practical abilities.",
    highlight: "Portfolio Ready",
  },
  {
    number: "04",
    title: "Mastery & Career Launch",
    description:
      "Get your code and portfolio reviewed by industry professionals, practice technical interviews, and prepare for career opportunities.",
    highlight: "Career Growth",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    number: "01",
    title: "Interactive 3D Web Platform",
    description:
      "A high-performance modern web application featuring real-time Three.js 3D canvas visuals, Next.js server actions, Prisma database transactions, and MongoDB/PostgreSQL storage.",
    category: "Fullstack & 3D Web",
    technologies: ["Next.js", "Three.js", "MongoDB", "SQL", "Prisma", "TypeScript"],
    featured: true,
  },
  {
    id: "proj-2",
    number: "02",
    title: "Sci-Fi Action RPG Prototype",
    description:
      "An open-world third-person combat prototype built in Unreal Engine 5 using C++, featuring dynamic physics, state machine character animations, and Lumen global illumination.",
    category: "Game Development",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "Physics", "Lumen"],
    featured: true,
  },
  {
    id: "proj-3",
    number: "03",
    title: "Cinematic Character Animation Short",
    description:
      "A complete animated film sequence modeled, rigged, and animated using Autodesk Maya and Blender, featuring custom bipedal facial rigs and photorealistic Arnold rendering.",
    category: "3D Animation",
    technologies: ["Blender", "Autodesk Maya", "Rigging", "Cycles", "Arnold"],
  },
  {
    id: "proj-4",
    number: "04",
    title: "Multi-Threaded Engine & Algorithms Suite",
    description:
      "High-throughput concurrent systems written in C++ and Java with custom memory allocators, alongside Python automation workflows and algorithmic benchmarking.",
    category: "Core Languages",
    technologies: ["C++20", "Python", "Java", "Multithreading", "Data Structures"],
  },
  {
    id: "proj-5",
    number: "05",
    title: "Automated Pentesting & Vulnerability Lab",
    description:
      "An offensive and defensive security lab simulating enterprise infrastructure, automated vulnerability auditing, and real-time network attack containment.",
    category: "Cybersecurity",
    technologies: ["Kali Linux", "Python", "Wireshark", "Metasploit", "OWASP"],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Verma",
    role: "Fullstack 3D Developer",
    company: "Creative Studio",
    avatarBg: "bg-[#005A9C]",
    initials: "RV",
    rating: 5,
    content:
      "Learning Next.js and Three.js together opened entirely new doors for me. Integrating 3D canvas experiences with Prisma and SQL gave me a unique edge in the job market.",
    course: "Fullstack Development",
  },
  {
    id: "test-2",
    name: "Vikram Sengupta",
    role: "Gameplay Programmer",
    company: "Indie Game Studio",
    avatarBg: "bg-[#1B365D]",
    initials: "VS",
    rating: 5,
    content:
      "Going deep into Unreal Engine 5 with native C++ instead of just Blueprints changed everything. The hands-on project reviews gave me the exact skills game studios test for.",
    course: "Game Development",
  },
  {
    id: "test-3",
    name: "Pooja Nair",
    role: "3D Animator",
    company: "VFX Production House",
    avatarBg: "bg-[#60C1E5]",
    initials: "PN",
    rating: 5,
    content:
      "The rigging and animation modules in Blender and Maya were crystal clear. The mentor feedback on weight, timing, and cinematic cameras was invaluable for my reel.",
    course: "3D Animation",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Which course should I choose if I am a complete beginner?",
    answer:
      "If you are new to code, our 'Core Programming: C++, Python & Java' or 'Fullstack Development' tracks start from the ground up with guided foundational modules before advancing to complex projects. If you are passionate about visual arts, '3D Animation with Blender & Maya' is ideal.",
  },
  {
    id: "faq-2",
    question: "Do the courses include real hands-on projects?",
    answer:
      "Yes. Every course is 100% project-driven. In Fullstack, you build live deployed WebGL web apps. In Game Dev, you ship working Unreal and Unity games. In 3D Animation, you produce cinematic showreels.",
  },
  {
    id: "faq-3",
    question: "What software and hardware do I need?",
    answer:
      "All required tools (Blender, Unreal Engine, Unity, VS Code, Kali Linux, Python, Java, C++ compilers) are free to download and use. For Unreal Engine and 3D rendering, a computer with a dedicated graphics card is recommended.",
  },
  {
    id: "faq-4",
    question: "How does the 1:1 expert mentorship work?",
    answer:
      "You receive personalized code reviews, 3D asset feedback, and live Q&A sessions from practitioners working in software engineering, game studios, and cybersecurity firms.",
  },
  {
    id: "faq-5",
    question: "Will I receive a verified certificate upon completion?",
    answer:
      "Yes. Upon completing your capstone project and passing the final review, you receive a verified digital certificate detailing your completed curriculum and portfolio projects.",
  },
];
