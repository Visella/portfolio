export const profile = {
  name: "Visella",
  title: "Software Laboratory Assistant",
  summary: "Passionate about web, mobile, and desktop development",
  location: "Jakarta, Indonesia",
  email: "sellavisella@gmail.com",
  phone: "(+62) 895 3822 14190",
  linkedin: "https://linkedin.com/in/visellaa",
  github: "https://github.com/visella",
  education: [
    {
      school: "BINUS University",
      location: "Alam Sutera, Tangerang Selatan",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.96",
      date: "Sep 2023 – Expected Mar 2027",
    },
  ],
  experience: [
    {
      org: "BINUS University",
      role: "Full-Time Software Laboratory Assistant",
      location: "Alam Sutera, Tangerang Selatan",
      date: "Aug 2024 – Now",
      bullets: [
        "Taught 200+ students each semester across OOP, Deep Learning, Distributed Cloud Computing, NLP, Business Application Development, and more.",
        "Prepared practicum exam cases and evaluated results.",
        "Achieved 77% qualifications across CS, Cyber Security, and IS subjects.",
      ],
    },
    {
      org: "HIMTI BINUS University",
      role: "Vice Coordinator TECHNO PBP",
      location: "Alam Sutera, Tangerang Selatan",
      date: "March 2024",
      bullets: [
        "Assisted in coordinating Pengenalan Bahasa Pemrograman (PBP).",
      ],
    },
    {
      org: "KMBD BINUS University",
      role: "Public Relation DV Teach",
      location: "Alam Sutera, Tangerang Selatan",
      date: "August 2024",
      bullets: [
        "Part of PR team for DV Teach (volunteer teaching program).",
        "Responsible for outreach with temples.",
      ],
    },
    {
      org: "Apple Developer Academy @ BINUS",
      role: "iOS Foundation Cohort 20",
      location: "Alam Sutera, Tangerang Selatan",
      date: "Aug – Sep 2023",
      bullets: [
        "Short-term intensive program for iOS development and prototyping.",
        "Hands-on Swift, UI/UX, teamwork, and Apple ecosystem.",
      ],
    },
  ],
  skills: {
    languages:
      "JavaScript, TypeScript, Python, Go, Rust, C, C#, Java, Kotlin, Bash",
    frontend: "React, Svelte, Next.js, Tauri, Laravel, Tailwind CSS",
    backend: "Gin (Go), Flask, Next.js, REST APIs, Laravel, Express.js",
    ai: "Regression, DCNN",
    databases: "PostgreSQL, MySQL, Redis, Firebase",
    tools: "Git, Android Studio, Unity, Visual Paradigm, Figma",
  },
  projects: [
    {
      title: "VorteKia",
      tech: ["React", "Rust (Tauri)", "Tailwind", "Firebase"],
      image: "/vortekia.png",
      description:
        "Desktop app optimizing amusement park operations with role-based access, real-time notifications, and UIs for staff, customers, and management to handle queues, orders, and logistics.",
      link: "https://github.com/Visella/vortekia",
      features: [
        "Role-based dashboards for staff, customers, and management",
        "Real-time queue updates and order tracking",
        "Offline-ready desktop build via Tauri",
      ],
      contribution:
        "Led the UI architecture, designed Tauri integration, and implemented real-time updates.",
      screenshots: ["/vortekia.png"],
    },

    {
      title: "AY.com",
      tech: ["Svelte", "CSS", "Go", "PostgreSQL", "Redis", "Flask", "Supabase"],
      image: "/aycom.png",
      description:
        "Web social platform for thread-based conversations with Go microservices (gRPC), PostgreSQL, and Flask-powered sentiment analysis.",
      link: "https://github.com/Visella/aycom",
      features: [
        "Threaded discussions",
        "Realtime likes and replies",
        "Trending topics",
      ],
      contribution:
        "Built Svelte front-end and integrated Flask sentiment microservice.",
      screenshots: ["/aycom.png"],
    },
    {
      title: "RogueHH",
      tech: ["Unity", "C#"],
      image: "/roguehh.png",
      description:
        "Roguelike with procedural dungeons, tile-based combat with A* pathfinding, upgradable skills, and polished visuals using Scriptable Objects.",
      link: "",
      features: ["Procedural dungeons", "A* pathfinding", "Upgradeable skills"],
      contribution: "Implemented dungeon generation and combat systems.",
      screenshots: ["/roguehh.png", "/roguehh (1).png", "/roguehh (2).png", "/roguehh (3).png"],
    },
    {
      title: "EcoAI",
      tech: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
      image: "/ecoai (1).png",
      description:
        "AI-powered eco-diary that tracks habits, scans waste, monitors footprint, and features social challenges and progress dashboards.",
      link: "https://github.com/Visella/ecoai",
      features: ["Waste scanner", "Green challenges", "Progress dashboards"],
      contribution:
        "Led the ML integration and designed the habit tracking UX.",
      screenshots: ["/ecoai (1).png", "/ecoai (2).png", "/ecoai.png"],
    },
    {
      title: "ListIt",
      tech: ["Android Studio", "Kotlin", "Express", "Firebase"],
      image: "/listit.png",
      description:
        "Mobile app for smart grocery lists with AI-powered recipe recommendations using NLP to improve shopping efficiency and reduce waste.",
      link: "https://github.com/Visella/listit",
      features: [
        "Smart list suggestions",
        "Recipe recommendations",
        "Cross-device sync",
      ],
      contribution:
        "Implemented Compose UI and NLP recipe recommendation workflow.",
      screenshots: ["/listit.png"],
    },
  ],
  achievements: [
    {
      title: "Top 10 Grand Finalist - SOCS Hackathon 2024 x Microsoft",
      place: "Jakarta",
      date: "June 2024",
      detail:
        "Built Speech Spark, an accessibility-focused speech therapy web app with speech recognition, user-centered design, and business planning.",
      image: "/sikat.png",
    },
  ],
};

export const projects = (profile as any).projects;
