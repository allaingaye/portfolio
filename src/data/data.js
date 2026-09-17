export const personalInfo = {
  name: "Allaingaye Lucien",
  title: "Software Engineer & Full-Stack Developer",
  tagline: "Building innovative digital solutions through code, engineering principles, and creative problem-solving.",
  location: "Kigali, Rwanda",
  email: "lucienallingaye@gmail.com",
  phone: "+250 791 349 542",
  github: "https://github.com/allaingaye",
  linkedin: "https://linkedin.com/in/lucien-allaingaye",
  yearsExperience: "1+",
  projectsCompleted: "7+",
  happyClients: "5+",
  about: "I'm a passionate Software Engineer with expertise in full-stack web development, AI integration, software architecture, and system design. I enjoy creating innovative solutions that solve real-world problems. With a background in Software Engineering and hands-on experience building AI-powered applications, I've worked on various projects ranging from resume analyzers to production traceability systems. My approach combines analytical thinking with creative problem-solving, ensuring that I deliver efficient, scalable, and user-friendly solutions. I'm constantly learning new technologies and methodologies to stay at the forefront of the industry."
};

export const services = [
  {
    icon: "Code2",
    title: "Web Development",
    description: "Custom web applications built with modern technologies, responsive design, and optimal performance.",
  },
  {
    icon: "Server",
    title: "Backend Development",
    description: "Robust server-side solutions, APIs, and database architecture for scalable applications.",
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Deployment, management, and optimization of cloud infrastructure and serverless architectures.",
  },
  {
    icon: "Briefcase",
    title: "Technical Consulting",
    description: "Consulting to help plan, architect, and optimize your digital products and strategy.",
  },
];

export const skills = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", percentage: 95, icon: "Code2" },
      { name: "CSS3", percentage: 90, icon: "Layers" },
      { name: "JavaScript", percentage: 95, icon: "FileJs" },
      { name: "React", percentage: 90, icon: "ReactLogo" },
      { name: "Tailwind CSS", percentage: 85, icon: "Palette" },
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Python", percentage: 88, icon: "Python" },
      { name: "FastAPI", percentage: 85, icon: "Server" },
      { name: "Django", percentage: 85, icon: "Server" },
      { name: "Java", percentage: 85, icon: "Coffee" },
      { name: "Spring Boot", percentage: 80, icon: "Leaf" },
      { name: "PHP", percentage: 80, icon: "Code2" },          // ✅ Added PHP
      { name: "Laravel", percentage: 75, icon: "Server" },     // ✅ Added Laravel
      { name: "Node.js", percentage: 75, icon: "Server" },
    ]
  },
  database: {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", percentage: 85, icon: "Database" },
      { name: "Redis", percentage: 80, icon: "Database" },
      { name: "Docker", percentage: 85, icon: "Container" },
      { name: "Git", percentage: 90, icon: "GitBranch" },
      { name: "AWS", percentage: 70, icon: "Cloud" },
    ]
  },
  ai: {
    title: "AI & Machine Learning",
    skills: [
      { name: "OpenRouter", percentage: 85, icon: "Brain" },
      { name: "OpenAI API", percentage: 80, icon: "Cpu" },
      { name: "Groq", percentage: 75, icon: "Brain" },
      { name: "Gemini", percentage: 70, icon: "Sparkles" },
    ]
  }
};

export const portfolioProjects = [
  {
    id: 1,
    title: "Resume Analyzer",
    category: "Web Apps",
    description: "AI-powered resume analysis platform with ATS compatibility evaluation, skill gap analysis, and automatic content generation.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker", "AI"],
    github: "https://github.com/allaingaye/resume-analyzer",
    liveDemo: "#",
    image: "/projects/resume-analyzer.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "SmartTask",
    category: "Web Apps",
    description: "AI-powered task management system with real-time collaboration, WebSocket notifications, and intelligent insights.",
    technologies: ["Django", "React", "WebSockets", "Redis", "OpenAI"],
    github: "https://github.com/allaingaye/smarttask",
    liveDemo: "https://smarttask-frontend-l1si.onrender.com",
    image: "/projects/smarttask.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "ProTrack",
    category: "Systems",
    description: "Production process automation and traceability system with QR/barcode tracking and quality control checkpoints.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
    github: "https://github.com/allaingaye/ProTrack-Production-Traceability--System",
    liveDemo: "#",
    image: "/projects/protrack.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "AUCA Library Management",
    category: "Systems",
    description: "Library management system with role-based access, membership tracking, and fine calculation.",
    technologies: ["Java", "Servlets", "JSP", "PostgreSQL"],
    github: "https://github.com/allaingaye/Library-Management-System",
    liveDemo: "#",
    image: "/projects/library.jpg",
    featured: false,
  },
  // ✅ Optional: Add a Laravel/PHP project if you have one
  // {
  //   id: 5,
  //   title: "Your Laravel Project",
  //   category: "Web Apps",
  //   description: "Description of your Laravel project.",
  //   technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
  //   github: "https://github.com/allaingaye/your-laravel-project",
  //   liveDemo: "#",
  //   image: "/projects/laravel-project.jpg",
  //   featured: false,
  // },
];

export const testimonials = [
  {
    id: 1,
    name: "Hassan Niyonkuru",
    role: "Project Manager",
    company: "Tech Solutions Ltd",
    content: "Lucien delivered an exceptional AI-powered platform that exceeded our expectations. His attention to detail and problem-solving skills are remarkable.",
    image: "/testimonials/hassan.jpg",
  },
  {
    id: 2,
    name: "Jean Claude",
    role: "CTO",
    company: "Innovate Africa",
    content: "Working with Lucien on the SmartTask project was a pleasure. His technical expertise and ability to understand complex requirements made the development process smooth.",
    image: "/testimonials/jean.jpg",
  },
  {
    id: 3,
    name: "Marie Claire Uwimana",
    role: "Software Engineer",
    company: "Global Tech",
    content: "Lucien's backend architecture for the Resume Analyzer was robust and scalable. He consistently delivered high-quality code and provided valuable insights.",
    image: "/testimonials/marie.jpg",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/allaingaye", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/lucien-allaingaye", icon: "Linkedin" },
  { name: "Email", url: "mailto:lucienallingaye@gmail.com", icon: "Mail" },
];