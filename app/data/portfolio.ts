export type Project = {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  contribution: string;
  images: string[];
  liveUrl?: string;
};

export type Job = {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
};

export const developer = {
  name: "Adam Yun",
  headline: "Lead Software Engineer",
  summary:
    "I build web apps and AI-powered software. Mostly putting language and vision models to work in products people actually use.",
  github: "https://github.com/Adam-Yun",
  linkedin: "https://www.linkedin.com/in/naelyun/",
  email: "adamyunau@gmail.com",
  avatar: "/profile.JPG",
} as const;

export const about = {
  background:
    "I'm a software engineer working across web development and applied AI. Day to day that means full-stack web apps, and getting language and vision models running in production.",
  interests: [
    "Fullstack Development",
    "Scalable Architectures",
    "Web Application & AI Development",
    "Large Language Models (LLMs)",
    "Computer Vision Models & Systems",
    "API Design & Integration",
  ],
  goals:
    "I care about software that solves a real problem and holds up once it ships. Web app or AI tool, the bar is the same.",
};

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java"],
  Frontend: ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind", "Expo"],
  Backend: ["Node.js", "Express", "Django", "Flask", "Spring Boot"],
  Databases: ["PostgreSQL", "MongoDB"],
  "AI & ML": [
    "Large Language Models",
    "Natural Language Processing",
    "Computer Vision",
    "Optical Character Recognition",
  ],
  "Tools & DevOps": [
    "Git",
    "Docker",
    "AWS",
    "Ngrok",
    "Cloudflare",
    "CI/CD",
    "Automation",
    "Linux",
  ],
  "Hardware & Edge": ["Raspberry Pi 5", "Nvidia Jetson"],
};

export const projects: Project[] = [
  {
    title: "License Plate Extraction",
    description:
      "A computer vision pipeline that reads license plates automatically, so nobody has to type them in.",
    techStack: [
      "Python",
      "Flask",
      "Model Pipeline",
      "Computer Vision",
      "Optical Character Recognition",
      "Nvidia Jetson",
    ],
    highlights: [
      "Automated license plate data logging",
      "Minimizes human error",
      "Boosts efficiency by 30% by eliminating paperwork and manual data entry",
    ],
    contribution: "Lead Backend Developer",
    images: [
      "/license-image-6.png",
      "/license-image-1.png",
      "/license-image-2.png",
      "/license-image-3.png",
      "/license-image-4.png",
      "/license-image-5.png",
    ],
  },
  {
    title: "AI Chatbot & Analytics",
    description:
      "Analytics for LLM chatbots. Tracks topics, trends, sales and speech patterns, then feeds that back into the models.",
    techStack: [
      "JavaScript",
      "React",
      "Next.js",
      "Python",
      "Flask",
      "MongoDB",
      "Cloudflare Tunnel",
      "Natural Language Processing",
      "Model Pipeline",
      "Raspberry Pi 5",
    ],
    highlights: [
      "Track trendlines for popular topics",
      "Analyze user demographics",
      "Collect training data to improve existing models",
      "Enhance understanding of human speech",
      "Evaluate model performance",
    ],
    contribution: "Lead Fullstack Developer",
    images: ["/ua-image-1.png", "/ua-image-2.png", "/ua-image-3.png", "/ua-image-4.png"],
  },
  {
    title: "WitAI Chatbot",
    description:
      "A chatbot built on Meta's Wit.ai. Answers in natural language, stays on topic, and filters out questions it has no business answering.",
    techStack: [
      "JavaScript",
      "CSS3",
      "HTML5",
      "Java",
      "Spring Boot",
      "MongoDB",
      "Meta WitAI API",
      "Cloudflare Tunnel",
      "Natural Language Processing",
      "Raspberry Pi 5",
    ],
    highlights: [
      "Natural, human-like speech",
      "Filtering irrelevant queries",
      "Domain-specific responses",
    ],
    contribution: "Lead Fullstack Developer",
    images: ["/unicon-image-1.png", "/unicon-image-2.png", "/unicon-image-3.png"],
    liveUrl: "https://www.ubts.academy/en/",
  },
  {
    title: "Kilaluan Cahaya Website",
    description:
      "A corporate site for an industrial sand supply and dredging company, built to bring in client enquiries.",
    techStack: ["TypeScript", "React", "Next.js", "CSS3", "Vercel"],
    highlights: [
      "Professional website for an industrial services company",
      "Responsive and user-friendly corporate website",
    ],
    contribution: "Fullstack Developer",
    images: ["/kilauan-image-1.png", "/kilauan-image-2.png", "/kilauan-image-3.png"],
    liveUrl: "https://15-kilauan-cahaya-landing-page.vercel.app/",
  },
];

export const experience: Job[] = [
  {
    company: "Natt World",
    role: "Lead Software Engineer | AI Engineering & Automation | Computer Vision",
    dates: "2025 - Present",
    achievements: [
      "Lead design and development of AI applications built on LLMs, fine-tuned models, and computer vision.",
      "Architect the backend systems, APIs, and CI/CD pipelines these products ship on.",
      "Mentor engineers, set technical standards, and drive delivery across the team.",
    ],
  },
  {
    company: "WSL Sdn Bhd",
    role: "Full Stack Engineer",
    dates: "Apr 2026 - Sep 2026",
    achievements: [
      "Built a sports reporting system end to end, frontend and backend.",
      "Built a game management system across the full stack.",
      "Built a people management system for assigning participants to sports, accommodation, and transport.",
    ],
  },
  {
    company: "Natt World",
    role: "Software Engineer | AI Engineering & Automation | Computer Vision",
    dates: "2023 - 2025",
    achievements: [
      "Fine-tuned and deployed LLMs for chatbots and semantic search, and trained vision models for automated fly count detection.",
      "Built logistics automation for driver assignment and job scheduling, plus AI chatbots for customer enquiries.",
      "Deployed and maintained AI systems on Raspberry Pi, with Ngrok tunneling and GitHub Actions for CI/CD.",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const mailto = (() => {
  const subject = encodeURIComponent("Saying Hi from your portfolio 👋");
  const body = encodeURIComponent(
    `Hi Adam,\n\nI just came across your portfolio and wanted to say hi.\n\nI'd love to connect and chat!\n\nBest,\n[Your Name]\n`,
  );
  return `mailto:${developer.email}?subject=${subject}&body=${body}`;
})();
