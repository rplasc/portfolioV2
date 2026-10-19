export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeframe: string;
  location?: string;
  stack: string[];
  overview: string;
  highlights: string[];
  outcome?: string;
  github: string;
  demo: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  sweep: {
    slug: "sweep",
    title: "Capstone Project: Mobile App and Cloud Server",
    tagline: "Cross-platform file syncing app built for a real client",
    role: "Technical Lead",
    timeframe: "Jan 2025 – May 2025",
    location: "Merced, CA",
    stack: [
      "React Native",
      "Flask",
      "Rclone",
      "Google Drive API",
      "Dropbox API",
    ],
    overview:
      "Sweep wanted users to link several cloud storage accounts and move files to a dedicated server from one mobile app. Our capstone team built all of it: the backend, the Google Drive and Dropbox OAuth integration, and the React Native client. I was the technical lead.",
    highlights: [
      "Led a four-person team and owned the technical roadmap through delivery.",
      "Built a Flask API that handles Google Drive and Dropbox OAuth and file operations.",
      "Used Rclone on the server to move files between providers, so we didn't have to handle each cloud's quirks ourselves.",
      "Fixed sync failures and confusing flows in the React Native Android client.",
      "Delivered before the semester deadline with every item on the client's feature list.",
    ],
    outcome: "Handed Sweep a production-ready build ahead of the deadline.",
    github: "",
    demo: "https://sweep-ai.com",
  },
  chopperbot: {
    slug: "chopperbot",
    title: "Chopperbot",
    tagline:
      "Self-hosted Discord assistant with persistent conversational memory",
    role: "Creator & Maintainer",
    timeframe: "2023 – Present",
    stack: ["Python", "Discord.py", "OpenAI", "KoboldCPP", "SQLite"],
    overview:
      "Chopperbot is a Discord assistant with its own personality, built for my friends' communities and run on my homelab. It holds conversations, remembers past interactions, and includes a few utilities people actually use.",
    highlights: [
      "Serves 100+ users across multiple Discord communities.",
      "Runs a fine-tuned local LLM on a private homelab, so conversations stay self-hosted and there's no per-token billing.",
      "A SQLite memory system keeps personality and context across sessions.",
      "Plugins include a web-search proxy, image generation, and news summaries.",
    ],
    github: "https://github.com/rplasc/ChopperBot",
    demo: "",
  },
  "songwriting-assistant": {
    slug: "songwriting-assistant",
    title: "Songwriting Assistant",
    tagline:
      "Bilingual songwriting tool with real-time syllable tracking and rhyme suggestions",
    role: "Creator & Maintainer",
    timeframe: "2025 – Present",
    stack: ["Python", "NestJS", "NextJS"],
    overview:
      "I built the Songwriting Assistant to help me write lyrics in English and Spanish. As you type, it counts syllables and suggests rhymes. Python handles the NLP, a NestJS API sits in the middle, and Next.js is the frontend.",
    highlights: [
      "Counts syllables and suggests rhymes in real time, in English and Spanish.",
      "Saves drafts locally.",
    ],
    github: "https://github.com/rplasc/songwriting-assistant",
    demo: "",
  },
  "personality-matrix": {
    slug: "personality-matrix",
    title: "Personality Matrix",
    tagline:
      "Personality quiz that assigns a narrative archetype, presented as a classified dossier",
    role: "Creator & Maintainer",
    timeframe: "2026 – Present",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "PostHog",
    ],
    overview:
      "Personality Matrix is a 28-question quiz that assigns you one of 19 narrative archetypes and presents the result as a classified dossier. Your answers are scored across a set of personality functions. Results are saved to a database and shareable by URL.",
    highlights: [
      "Scoring tracks eight personality functions, such as Plot Armor, Romantic Tension, and Backstory Trauma. Each answer shifts specific functions on a -2 to +2 scale. Totals are normalized to 0-100 and feed eight matrix axes.",
      "Archetype matching is tiered. Two rare types require 78+ or 82+ on their dominant functions. The other 17 match on dominant function average plus a small matrix bonus. All scoring logic is in src/lib/.",
      "Results are stored in PostgreSQL through Prisma and served at a unique URL, so users can share a result or come back to it.",
      "PostHog tracks quiz completions and archetype distribution across real users.",
    ],
    outcome: "Went from idea to live product in a weekend.",
    github: "https://github.com/rplasc/personality-matrix",
    demo: "https://personality-matrix.raulplascencia.dev",
  },
  "survivor-clone-unity": {
    slug: "survivor-clone-unity",
    title: "Vampire Survivors Clone (Unity)",
    tagline: "A top-down action roguelike inspired by Vampire Survivors",
    role: "Creator",
    timeframe: "2026 – Present",
    stack: ["Unity", "C#"],
    overview:
      "A top-down action roguelike built in Unity and C#, inspired by Vampire Survivors.",
    highlights: [
      "Wrote player movement, enemy spawning, and upgrades in C#.",
      "Recreated the core gameplay loop.",
      "Built the UI with Unity's built-in features.",
      "Optimized for higher frame rates and smoother play.",
    ],
    outcome:
      "A Vampire Survivors-inspired roguelike built in Unity and tuned for performance.",
    github: "https://github.com/rplasc/survivor-clone-unity",
    demo: "",
  },
  "group-personality-quiz": {
    slug: "group-personality-quiz",
    title: "Group Personality Quiz Platform",
    tagline: "A platform for analyzing personality in groups",
    role: "Creator",
    timeframe: "2026 – Present",
    stack: ["NextJS", "PostgreSQL", "Prisma", "NestJS"],
    overview:
      "Users take personality quizzes together and get a collective analysis.",
    highlights: [
      "Built the frontend in Next.js (React).",
      "Stored quiz data and results in PostgreSQL through Prisma.",
      "Built the backend API in NestJS.",
      "Group results are shareable by unique URL.",
    ],
    outcome: "Launched a platform for group personality analysis.",
    github: "",
    demo: "https://quiz.raulplascencia.dev",
  },
  mixlens: {
    slug: "mixlens",
    title: "MixLens",
    tagline: "A music production tool for analyzing mixes and masters",
    role: "Creator",
    timeframe: "2026 – Present",
    stack: ["Rust", "Tauri", "Angular"],
    overview:
      "MixLens is a music production tool with optional AI features that analyzes mixes and masters, providing insights into frequency balance, stereo imaging, and loudness.",
    highlights: [
      "Built a desktop app with Rust for performance, Tauri for the desktop wrapper, and Angular for the frontend.",
      "Analyzes audio files and provides visual feedback on frequency balance, stereo imaging, and loudness.",
      "Optional AI assistance suggests mix improvements based on analysis.",
    ],
    outcome: "Launched a desktop app for music production analysis.",
    github: "https://github.com/rplasc/mixlens",
    demo: "",
  },
};
