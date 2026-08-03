export type ProjectCategory = "Web Apps" | "Games" | "3D Modeling" | "Mobile";

// Fixed taxonomy, rendered in this order. Categories can be empty — the filter
// still shows every chip so the site's scope stays legible as projects are added.
export const projectCategories: ProjectCategory[] = [
  "Web Apps",
  "Games",
  "3D Modeling",
  "Mobile",
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
    name: "Capstone Project — Mobile App & Cloud Server",
    slug: "sweep",
    category: "Mobile",
    description:
      "Cross-platform file syncing experience built for a real client",
    stack: ["React Native", "Flask", "Rclone"],
    details:
      "Shipped a cross-platform file syncing app for Sweep that made it easier for users to connect cloud storage accounts and move files between devices. Led the full-stack build, including the Flask API, Google and Dropbox OAuth flows, and Android improvements in React Native.",
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
      "Built a songwriting assistant for writing lyrics in English and Spanish. It tracks syllable counts and surfaces rhyme suggestions as you type. Python handles the NLP, NestJS is the API layer, and Next.js handles the frontend.",
    github: "https://github.com/rplasc/songwriting-assistant",
    demo: "",
    featured: true,
  },
  {
    name: "Chopperbot",
    slug: "chopperbot",
    category: "Web Apps",
    description:
      "Self-hosted Discord assistant with persistent conversational memory",
    stack: ["Python", "Discord.py", "OpenAI", "KoboldCPP"],
    details:
      "Built a Discord bot that gave communities a self-hosted assistant for dynamic, personality-driven conversations that could remember prior context. Implemented it in Python with ChatGPT and local LLM support, plus a configurable memory system for longer-running interactions.",
    github: "https://github.com/rplasc/ChopperBot",
    demo: "",
    featured: false,
  },
  {
    name: "Image Editor",
    slug: "",
    category: "Web Apps",
    description: "Desktop image editor for fast everyday photo adjustments",
    stack: ["C++", "Qt Framework"],
    details:
      "Delivered a desktop image editor that let users handle common photo edits like cropping, resizing, rotation, and color correction in one focused interface. Built the editing workflows and custom UI in C++ with Qt.",
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
      "Built a retro birthday greeting site where users write messages for friends. Next.js with CSS animations for the nostalgic aesthetic.",
    github: "https://github.com/rplasc/birthday-site",
    demo: "https://birthday.raulplascencia.dev",
    featured: false,
  },
  {
    name: "Personality Matrix",
    slug: "personality-matrix",
    category: "Web Apps",
    description:
      "28-question personality quiz that assigns you a narrative archetype, built over a weekend",
    stack: ["React", "PostgreSQL", "Prisma"],
    details:
      "Built a personality quiz that scores responses and generates a profile. React handles the frontend; PostgreSQL and Prisma manage quiz data and results on the backend.",
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
      "Built a Vampire Survivors-inspired roguelike in Godot. Implemented player movement, enemy spawning, and upgrades with GDScript.",
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
      "Recreated a Vampire Survivors-inspired roguelike using Unity. Implemented same features as the Godot version, but with added performance optimizations and Unity-specific enhancements.",
    github: "https://github.com/rplasc/survivor-clone-unity",
    demo: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
