export type ProjectCategory =
  | "Web Apps"
  | "Games"
  | "3D Modeling"
  | "Mobile"
  | "Desktop";

// Fixed taxonomy, rendered in this order. Categories can be empty — the filter
// still shows every chip so the site's scope stays legible as projects are added.
export const projectCategories: ProjectCategory[] = [
  "Web Apps",
  "Games",
  "3D Modeling",
  "Mobile",
  "Desktop",
];

export interface Project {
  name: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  details: string;
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Capstone Project: Mobile App and Cloud Server",
    slug: "sweep",
    category: "Mobile",
    description: "Cross-platform file syncing app built for a real client",
    stack: ["React Native", "Flask", "Rclone"],
    details:
      "A cross-platform file syncing app for Sweep that lets users connect cloud storage accounts and move files between devices. I led the full-stack build: the Flask API, the Google and Dropbox OAuth flows, and Android fixes in React Native.",
    github: "",
    demo: "https://sweep-ai.com",
    featured: true,
  },
  {
    name: "Songwriting Assistant",
    slug: "songwriting-assistant",
    category: "Web Apps",
    description:
      "Bilingual songwriting tool with real-time syllable tracking and rhyme suggestions",
    stack: ["Python", "NestJS", "NextJS"],
    details:
      "A tool for writing lyrics in English and Spanish. As you type, it counts syllables and suggests rhymes. Python handles the NLP, NestJS is the API layer, and Next.js is the frontend.",
    github: "https://github.com/rplasc/songwriting-assistant",
    demo: "",
    featured: false,
  },
  {
    name: "Chopperbot",
    slug: "chopperbot",
    category: "Web Apps",
    description:
      "Self-hosted Discord assistant with persistent conversational memory",
    stack: ["Python", "Discord.py", "OpenAI", "KoboldCPP"],
    details:
      "A self-hosted Discord bot with its own personality that remembers earlier conversations. It's written in Python, works with ChatGPT or a local LLM, and has a configurable memory system for long-running chats.",
    github: "https://github.com/rplasc/ChopperBot",
    demo: "",
    featured: false,
  },
  {
    name: "Image Editor",
    slug: "",
    category: "Web Apps",
    description: "Desktop image editor for quick, everyday photo adjustments",
    stack: ["C++", "Qt Framework"],
    details:
      "A desktop image editor for common edits: cropping, resizing, rotation, and color correction. I built the editing workflows and the custom UI in C++ with Qt.",
    github: "https://github.com/rplasc/CSE165Project",
    demo: "",
    featured: false,
  },
  {
    name: "Birthday Site",
    slug: "",
    category: "Web Apps",
    description: "A retro-style website that lets users send birthday wishes",
    stack: ["NextJS", "CSS"],
    details:
      "A retro-style birthday site where users write messages for friends. Built with Next.js, with CSS animations for the retro look.",
    github: "https://github.com/rplasc/birthday-site",
    demo: "https://birthday.raulplascencia.dev",
    featured: false,
  },
  {
    name: "Personality Matrix",
    slug: "personality-matrix",
    category: "Web Apps",
    description:
      "28-question personality quiz that assigns a narrative archetype, built over a weekend",
    stack: ["React", "PostgreSQL", "Prisma"],
    details:
      "A personality quiz that scores your answers and generates a profile. React is the frontend, and PostgreSQL with Prisma stores quiz data and results.",
    github: "https://github.com/rplasc/personality-matrix",
    demo: "https://personality-matrix.raulplascencia.dev",
    featured: false,
  },
  {
    name: "Vampire Survivors Clone (Godot)",
    slug: "",
    category: "Games",
    description:
      "A Vampire Survivors-style roguelike, originally built in Godot",
    stack: ["Godot", "GDScript"],
    details:
      "A Vampire Survivors-inspired roguelike in Godot. I wrote player movement, enemy spawning, and upgrades in GDScript.",
    github: "https://github.com/rplasc/survivor-clone-godot",
    demo: "",
    featured: false,
  },
  {
    name: "Vampire Survivors Clone (Unity)",
    slug: "survivor-clone-unity",
    category: "Games",
    description: "The same roguelike, rebuilt in Unity for better performance",
    stack: ["Unity", "C#"],
    details:
      "The Godot roguelike rebuilt in Unity. It has the same features, plus performance optimizations and some Unity-specific improvements.",
    github: "https://github.com/rplasc/survivor-clone-unity",
    demo: "",
    featured: false,
  },
  {
    name: "Group Personality Quiz Platform",
    slug: "group-personality-quiz",
    category: "Web Apps",
    description: "A platform for analyzing personality in groups",
    stack: ["NextJS", "PostgreSQL", "Prisma", "NestJS"],
    details:
      "A platform where groups take personality quizzes together and get a collective analysis. Next.js (React) is the frontend, NestJS is the API, and PostgreSQL with Prisma stores quiz data and results.",
    github: "",
    demo: "https://quiz.raulplascencia.dev",
    featured: true,
  },
  {
    name: "MixLens",
    slug: "mixlens",
    category: "Desktop",
    description: "A music production tool for analyzing mixes and masters.",
    stack: ["Rust", "Tauri", "Angular"],
    details:
      "A desktop app for analyzing audio mixes and masters. It provides visual feedback on frequency balance, stereo imaging, and loudness. Built with Rust for performance, Tauri for the desktop wrapper, and Angular for the frontend. It also includes optional AI assistance for mix suggestions.",
    github: "https://github.com/rplasc/mixlens",
    demo: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
