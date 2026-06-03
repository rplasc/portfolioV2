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
    title: "Capstone Project — Mobile App & Cloud Server",
    tagline: "Cross-platform file syncing experience built for a real client",
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
      "Sweep needed a way for its users to link multiple cloud storage accounts and move files to a dedicated server from a single mobile app. Our capstone team took the brief end-to-end: the backend orchestration, the OAuth plumbing to Google Drive and Dropbox, and the React Native client that tied it together. I led the engineering side of the build.",
    highlights: [
      "Led a four-person team and owned the technical roadmap through delivery.",
      "Built a Flask API that brokered Google Drive and Dropbox OAuth flows and file operations.",
      "Integrated Rclone so the server could move files reliably between providers without re-implementing each cloud's quirks.",
      "Worked in React Native to stabilize the Android client: fewer sync failures, clearer flows.",
      "Shipped ahead of the semester-end deadline with the client's feature list met.",
    ],
    outcome: "Delivered a production-ready build to Sweep before the deadline.",
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
      "Chopperbot is a Discord companion I built to give communities a personality-driven assistant running on my homelab. It holds conversations, remembers past interactions, and ships with a handful of utilities my friends actually use.",
    highlights: [
      "Serves 100+ users across multiple Discord communities.",
      "Fine-tuned a local LLM on a private homelab so conversations stay self-hosted and off per-token billing.",
      "SQLite-backed memory system keeps personality and context intact across sessions.",
      "Plugin surface includes a web-search proxy, image generation, and news summaries.",
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
      "I built the Songwriting Assistant to help with writing lyrics in English and Spanish. It gives real-time feedback on syllable counts and surfaces rhyme options as you type. The NLP work happens in Python, a NestJS API sits in the middle, and Next.js handles the frontend.",
    highlights: [
      "Provides real-time syllable tracking and rhyme suggestions in English and Spanish.",
      "Lets songwriters save drafts locally.",
    ],
    github: "https://github.com/rplasc/songwriting-assistant",
    demo: "",
  },
  "personality-matrix": {
    slug: "personality-matrix",
    title: "Personality Matrix",
    tagline:
      "Personality quiz that assigns you a narrative archetype, styled as a classified dossier",
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
      "Personality Matrix is a 28-question quiz that assigns you one of 19 narrative archetypes, styled as a classified document system. You answer questions, it scores your personality functions, and produces a dossier. Results are saved to a database and shareable by URL.",
    highlights: [
      "Scoring tracks eight personality functions (Plot Armor, Romantic Tension, Backstory Trauma, and others) across all 28 answers. Each answer shifts specific functions on a -2 to +2 scale, which normalize to 0-100 before feeding into eight matrix axes.",
      "Archetype matching runs in tiers: two rare types require 78+ or 82+ on their dominant functions. The other 17 match by dominant function average with a small matrix bonus. All scoring logic lives in src/lib/.",
      "Results are saved to PostgreSQL via Prisma and served at a unique URL, so users can share or return to their result.",
      "PostHog tracks quiz completions and archetype distribution across real users.",
    ],
    outcome: "Went from idea to live product in a weekend.",
    github: "https://github.com/rplasc/personality-matrix",
    demo: "https://personality-matrix.raulplascencia.dev",
  },
};
