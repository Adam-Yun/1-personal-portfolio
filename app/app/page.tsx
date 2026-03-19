// app/page.tsx
"use client"; // <-- Add this at the absolute top of the file

import React, { useState } from 'react'; // <-- Import useState
import Image from 'next/image';

// --- MOCK DATA ---
const DATA = {
  developer: {
    name: "Adam Yun",
    headline: "Lead Software Engineer",
    summary: "I build websites, web applications, and software powered by AI. My work focuses on the practical integration of large language models and computer vision into scalable web products.",
    github: "https://github.com/Adam-Yun",
    linkedin: "https://www.linkedin.com/in/naelyun/",
    email: "adamyunau@gmail.com",
    resume: "/resume.pdf",
    avatar: "/profile.JPG" // <-- Add your image path here
  },
  about: {
    background: "My background is in software engineering, with a focus on web development and applied artificial intelligence. I build responsive websites, full-stack web applications, and AI tools. My daily work involves writing clean code for the web and successfully integrating large language models and computer vision models into production environments.",
    interests: [
      "Fullstack Development", 
      "Scalable Architectures",  
      "Web Application & AI Development",
      "Large Language Models (LLMs)",
      "Computer Vision Models & Systems",
      "API Design & Integration",
    ],
    goals: "My goal is to build reliable, efficient software that solves actual problems. Whether it is a standard web application or an AI-powered tool, I focus on delivering functional, user-friendly products."
  },
  skills: {
    "Languages": ["TypeScript", "JavaScript", "Python", "Java"],
    "Frontend": ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind", "Expo"],
    "Backend": ["Node.js", "Express", "Django", "Flask", "Spring Boot"],
    "Databases": ["PostgreSQL", "MongoDB"],
    "Tools & DevOps": ["Git", "Docker", "AWS", "Ngrok", "Cloudflare", "CI/CD", "Linux", "Raspberry Pi 5", "Nvidia Jetson", "Natural Language Processing", "Computer Vision"]
  },
  projects: [
    {
      title: "License Plate Extraction",
      description: "A computer vision pipeline project designed to automate license plate data capture and streamline data entry.",
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
      images: ["license-image-6.png","/license-image-1.png", "/license-image-2.png","license-image-3.png","license-image-4.png","license-image-5.png"],
    },
    {
      title: "AI Chatbot & Analytics",
      description: "An analytics tool for large language model chatbots that captures domain specific data, including trends, sales, popular topics, and speech patterns, to continuously improve performance and business.",
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
      // Add paths to your actual images here
      images: ["/ua-image-1.png", "/ua-image-2.png", "ua-image-3.png", "ua-image-4.png"] 
    },
    {
      title: "WitAI Chatbot",
      description: "A large language model chatbot leveraging Meta\’s Wit.ai API for natural language processing, enabling human-like interactions and domain-specific responses while filtering out irrelevant queries.",
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
        "Domain-specific responses"
      ],
      contribution: "Lead Fullstack Developer",
      images: ["/unicon-image-1.png", "/unicon-image-2.png","unicon-image-3.png"],
      liveUrl: "https://www.ubts.academy/en/?gad_source=1&gad_campaignid=21303038567&gbraid=0AAAAA9u5AB7lxHzCyJnhrgS3_4xlNOrUT&gclid=CjwKCAjwpcTNBhA5EiwAdO1S9mURvqJS6nx7dX0UcdbB9-ZWq9Bt7gUJlqmw6UxF-y0I0kMosVpOVxoCn5EQAvD_BwE"
    },
    {
      title: "Kilaluan Cahaya Website",
      description: "A corporate website designed to showcase industrial sand supply and dredging services, highlight sustainable resource management, and provide a platform for client engagement and inquiries.",
      techStack: [
        "TypeScript",
        "React",
        "Next.Js",
        "CSS3",
        "Vercel",
      ],
      highlights: [
        "Professional website for an industrial services company", 
        "Responsive and user-friendly corporate website"
      ],
      contribution: "Fullstack Developer",
      images: ["/kilauan-image-1.png", "/kilauan-image-2.png", "/kilauan-image-3.png"],
      liveUrl: "https://15-kilauan-cahaya-landing-page.vercel.app/"
    },
  ],
  experience: [
    {
      company: "Natt World",
      role: "Lead Software Engineer",
      dates: "2025 - Present",
      achievements: [
        "Lead the design and development of AI-powered applications leveraging LLMs, fine-tuned models, and computer vision systems.",
        "Architect scalable backend systems, APIs, and CI/CD pipelines supporting reliable AI product deployment.",
        "Mentor engineers, set technical standards, and drive delivery of production AI solutions across the team."
      ]
    },
    {
      company: "Natt World",
      role: "Full Stack Software Engineer",
      dates: "2023 - 2025",
      achievements: [
        "Fine-tuned and deployed LLMs for chatbots and semantic search, and trained computer vision models for automated fly count detection.",
        "Built logistics automation systems for driver assignments and job scheduling, and integrated AI chatbots to improve customer inquiry handling.",
        "Deployed and maintained AI systems on Raspberry Pi devices, using Ngrok for tunneling and GitHub Actions for CI/CD automation."
      ]
    }
  ],
  contact: {
      subject: encodeURIComponent("Saying Hi from your portfolio 👋"),
      body: encodeURIComponent(
`Hi Adam,

I just came across your portfolio and wanted to say hi.

I'd love to connect and chat!

Best,
[Your Name]
`
)
  }
};

// --- COMPONENTS ---

export default function Portfolio() {

  // Add this state and function
  const [showBubble, setShowBubble] = useState(false);

  // --- NEW: Project Gallery State ---
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: any) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
  };

  const nextImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
    }
  };

  const handleImageClick = () => {
    // Don't trigger if it's already showing
    if (showBubble) return; 
    
    setShowBubble(true);
    
    // Hide it again after 2 seconds
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  return (
    <>
      <div className="container">
        {/* Navigation */}
        <nav>
          <strong>{DATA.developer.name}.</strong>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <main>
          {/* 1. Hero Section */}
          <section className="section" id="hero">
            <div className="hero-wrapper">
              <div className="hero-text">
                <h1>{DATA.developer.name}</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {DATA.developer.headline}
                </p>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }} className="hero-summary">
                  {DATA.developer.summary}
                </p>
                <div className="link-group" style={{ justifyContent: 'inherit' }}>
                  <a href={DATA.developer.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
                  <a href={DATA.developer.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
                </div>
              </div>
              
              <div className="hero-image">
                <div className="image-container" onClick={handleImageClick}>
                  {showBubble && <div className="speech-bubble">Hi! 👋</div>}
                  <Image 
                    src={DATA.developer.avatar} 
                    alt={`${DATA.developer.name} Profile Picture`} 
                    width={250} 
                    height={250} 
                    priority 
                    className="avatar" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. About Me Section */}
          <section className="section" id="about">
            <h2>About Me</h2>
            <div className="grid grid-2">
              <div>
                <p>{DATA.about.background}</p>
                <p>{DATA.about.goals}</p>
              </div>
              <div>
                <h3>Areas of Interest</h3>
                <ul style={{ marginTop: '1rem', listStyle: 'square', paddingLeft: '1.2rem' }}>
                  {DATA.about.interests.map((interest, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Projects Section */}
          <section className="section" id="projects">
            <h2>Featured Projects</h2>
            <div className="grid grid-2">
              {DATA.projects.map((project, idx) => (
                <article key={idx} className="card">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{project.description}</p>
                  </div>
                  
                  <div className="tags">
                    {project.techStack.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                    <strong>Role:</strong> {project.contribution}
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i} style={{ listStyleType: 'circle' }}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer link-group">
                    <a onClick={() => openGallery(project)} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                      Preview
                    </a>

                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                        Visit Website ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4. Skills Section */}
          <section className="section" id="skills">
            <h2>Technical Skills</h2>
            <div className="grid grid-3">
              {Object.entries(DATA.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3>{category}</h3>
                  <div className="tags" style={{ marginTop: '1rem' }}>
                    {skills.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Experience Section */}
          <section className="section" id="experience">
            <h2>Experience</h2>
            <div className="grid">
              {DATA.experience.map((job, idx) => (
                <div key={idx} className="card" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <div style={{ flex: '1 1 300px', marginBottom: '1rem' }}>
                    <h3>{job.role}</h3>
                    <p><strong>{job.company}</strong></p>
                    <p style={{ fontSize: '0.875rem' }}>{job.dates}</p>
                  </div>
                  <div style={{ flex: '2 1 400px' }}>
                    <ul style={{ listStyle: 'circle', paddingLeft: '1.2rem' }}>
                      {job.achievements.map((achievement, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Contact Section */}
          <section className="section" id="contact" style={{ textAlign: 'center' }}>
            <h2>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              I'm always looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a href={`mailto:${DATA.developer.email}?subject=${DATA.contact.subject}&body=${DATA.contact.body}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              Say Hello
            </a>
          </section>

        </main>

        {/* Footer */}
        <footer>
          <p>Designed and built by {DATA.developer.name}.</p>
          <div className="link-group" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <a href={DATA.developer.github}>GitHub</a>
            <span>/</span>
            <a href={DATA.developer.linkedin}>LinkedIn</a>
            <span>/</span>
            <a href={DATA.developer.resume}>Resume</a>
          </div>
        </footer>

        {/* Project Gallery Modal */}
        {activeProject && (
          <div className="modal-overlay" onClick={closeGallery}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeGallery}>✕</button>
              
              <h3 style={{ marginBottom: '1rem' }}>{activeProject.title}</h3>
              
              <div className="modal-image-container">
                {/* Using standard img tag here to easily handle any aspect ratio you upload */}
                <img 
                  src={activeProject.images[currentImageIndex]} 
                  alt={`${activeProject.title} preview ${currentImageIndex + 1}`} 
                  className="modal-image"
                />
              </div>

              <div className="modal-controls">
                <button className="btn" onClick={prevImage}>← Prev</button>
                <span style={{ fontSize: '0.875rem' }}>
                  {currentImageIndex + 1} / {activeProject.images.length}
                </span>
                <button className="btn" onClick={nextImage}>Next →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
