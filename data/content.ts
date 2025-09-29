export type TimelineItem = {
  title: string
  org?: string
  location?: string
  period: string
  bullets?: string[]
  logo?: string
}

export type Project = {
  title: string
  stack: string[]
  description: string
  contribution: string
  features: string[]
  screenshots: string[]
  repo?: string
  link?: string
}

export type Achievement = {
  title: string
  date: string
  image: string
  summary?: string
}

export const education: TimelineItem[] = [
  {
    title: "B.Sc. in Computer Science (GPA 3.96)",
    org: "BINUS University",
    location: "Alam Sutera, Tangerang Selatan",
    period: "Sep 2023 – Expected Mar 2027",
    bullets: [],
    logo: "/binus-university-logo.jpg",
  },
]

export const experience: TimelineItem[] = [
  {
    title: "Full-Time Software Laboratory Assistant",
    org: "BINUS University",
    location: "Alam Sutera, Tangerang Selatan",
    period: "Aug 2024 – Now",
    bullets: [
      "Taught 200+ students per semester (OOP, DL, Cloud, NLP, Business App Dev, etc.)",
      "Prepared practicum exam cases and evaluated results",
      "77% qualifications in CS, Cyber Security, and Information Systems subjects",
    ],
    logo: "/binus.png",
  },
  {
    title: "Vice Coordinator TECHNO PBP",
    org: "HIMTI BINUS University",
    period: "Mar 2024",
    bullets: ["Assisted coordinating Pengenalan Bahasa Pemrograman (PBP)"],
    logo: "/himti.png",
  },
  {
    title: "Public Relation DV Teach",
    org: "KMBD BINUS University",
    period: "Aug 2024",
    bullets: ["PR team for DV Teach volunteer program; coordinated outreach with temples"],
    logo: "/kmbd.png",
  },
  {
    title: "iOS Foundation Cohort 20",
    org: "Apple Developer Academy @ BINUS",
    period: "Aug – Sep 2023",
    bullets: [
      "Short-term intensive on iOS dev, prototyping, and challenge-based learning",
      "Hands-on Swift, UI/UX, and teamwork with Apple's ecosystem",
    ],
    logo: "/apple-developer-academy.jpg",
  },
]

export const projects: Project[] = [
  {
    title: "VorteKia",
    stack: ["React", "Rust (Tauri)", "Tailwind", "Firebase"],
    description: "Desktop app to optimize amusement park operations: queues, orders, and logistics.",
    contribution: "Led UI architecture, implemented role-based access, and wired real-time notifications.",
    features: [
      "Role-based access (staff, customers, management)",
      "Real-time notifications",
      "Queues for rides and restaurant orders",
      "Admin dashboards",
    ],
    screenshots: ["/vortekia.png"],
    repo: "https://github.com/Visella/Vortekia",
  },
  {
    title: "ListIt",
    stack: ["Android", "Kotlin", "Express", "Firebase"],
    description: "Smart grocery lists with AI-powered recipe suggestions using NLP.",
    contribution: "Built Jetpack Compose UI; implemented recipe recommendation service and sync.",
    features: ["Dynamic list creation", "AI/NLP recipe recommendations", "Sync across devices"],
    screenshots: ["/listit-home.jpg", "/listit-recipe-ai.jpg"],
    repo: "https://github.com/Visella/ListIt",
  },
  {
    title: "AY.com",
    stack: ["Svelte", "CSS", "Go", "PostgreSQL", "Redis", "Flask", "Supabase"],
    description: "Thread-based social platform with likes/replies and trending topics.",
    contribution: "Implemented Go microservices with gRPC and Flask sentiment analysis pipeline.",
    features: ["Responsive pure CSS UI", "Microservices with gRPC", "AI sentiment analysis for messages"],
    screenshots: ["/aycom.png", "/ay-com-thread.jpg"],
    repo: "https://github.com/Visella/aycom",
  },
  {
    title: "RogueHH",
    stack: ["Unity", "C#"],
    description: "Roguelike with procedural dungeons, A* combat, and upgradable skills.",
    contribution: "Designed combat systems and performance tuning with Scriptable Objects.",
    features: ["Procedural generation", "A* pathfinding", "Post-processing VFX"],
    screenshots: ["/roguehh.png", "/roguehh-dungeon.jpg"],
  },
  {
    title: "EcoAI",
    stack: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    description: "Eco-diary for sustainable habits, waste scan/categorize, carbon tracking.",
    contribution: "Built habit tracking and analytics; integrated social features and challenges.",
    features: [
      "Waste scanning and categorization",
      "Carbon footprint dashboards",
      "Green challenges and social sharing",
    ],
    screenshots: ["/ecoai-dashboard.jpg", "/ecoai-scanner.jpg"],
  },
]

export const achievements: Achievement[] = [
  {
    title: "Top 10 Grand Finalist - SOCS Hackathon 2024 x Microsoft",
    date: "Jakarta, June 2024",
    image: "/socs-hackathon-grand-finalist.jpg",
    summary: "Built Speech Spark, an AI web app to support speech therapy accessibility.",
  },
]
