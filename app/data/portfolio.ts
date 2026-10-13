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
    "I build websites, web applications, and software powered by AI. My work focuses on the practical integration of large language models and computer vision into scalable web products.",
  github: "https://github.com/Adam-Yun",
  linkedin: "https://www.linkedin.com/in/naelyun/",
  email: "adamyunau@gmail.com",
  avatar: "/profile.JPG",
} as const;

export const about = {
  background:
    "My background is in software engineering, with a focus on web development and applied artificial intelligence. I build responsive websites, full-stack web applications, and AI tools. My daily work involves writing clean code for the web and successfully integrating large language models and computer vision models into production environments.",
  interests: [
    "Fullstack Development",
    "Scalable Architectures",
    "Web Application & AI Development",
    "Large Language Models (LLMs)",
    "Computer Vision Models & Systems",
    "API Design & Integration",
  ],
  goals:
    "My goal is to build reliable, efficient software that solves actual problems. Whether it is a standard web application or an AI-powered tool, I focus on delivering functional, user-friendly products.",
};

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java"],
  Frontend: ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind", "Expo"],
  Backend: ["Node.js", "Express", "Django", "Flask", "Spring Boot"],
  Databases: ["PostgreSQL", "MongoDB"],
  "Tools & DevOps": [
    "Git",
    "Docker",
    "AWS",
    "Ngrok",
    "Cloudflare",
    "CI/CD",
    "Linux",
    "Raspberry Pi 5",
    "Nvidia Jetson",
    "Natural Language Processing",
    "Computer Vision",
  ],
};

export const projects: Project[] = [
  {
    title: "License Plate Extraction",
    description:
      "A computer vision pipeline project designed to automate license plate data capture and streamline data entry.",
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
      "An analytics tool for large language model chatbots that captures domain specific data, including trends, sales, popular topics, and speech patterns, to continuously improve performance and business.",
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
      "A large language model chatbot leveraging Meta's Wit.ai API for natural language processing, enabling human-like interactions and domain-specific responses while filtering out irrelevant queries.",
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
      "A corporate website designed to showcase industrial sand supply and dredging services, highlight sustainable resource management, and provide a platform for client engagement and inquiries.",
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
    role: "Lead Software Engineer",
    dates: "2025 - Present",
    achievements: [
      "Lead the design and development of AI-powered applications leveraging LLMs, fine-tuned models, and computer vision systems.",
      "Architect scalable backend systems, APIs, and CI/CD pipelines supporting reliable AI product deployment.",
      "Mentor engineers, set technical standards, and drive delivery of production AI solutions across the team.",
    ],
  },
  {
    company: "Natt World",
    role: "Full Stack Software Engineer",
    dates: "2023 - 2025",
    achievements: [
      "Fine-tuned and deployed LLMs for chatbots and semantic search, and trained computer vision models for automated fly count detection.",
      "Built logistics automation systems for driver assignments and job scheduling, and integrated AI chatbots to improve customer inquiry handling.",
      "Deployed and maintained AI systems on Raspberry Pi devices, using Ngrok for tunneling and GitHub Actions for CI/CD automation.",
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
