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
      "Worked in React Native to stabilize and sharpen the Android client — fewer sync failures, clearer flows.",
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
      "Chopperbot is a Discord companion I built to give communities a personality-driven assistant that is running on my homelab. It holds conversations, remembers past interactions, and ships with a handful of utilities my friends actually use.",
    highlights: [
      "Serves 100+ users across multiple Discord communities.",
      "Fine-tuned a local LLM on a private homelab so conversations stay self-hosted and off per-token billing.",
      "SQLite-backed memory system keeps personality and context intact across sessions.",
      "Plugin surface includes a web-search proxy, image generation, and news summaries.",
    ],
    github: "https://github.com/rplasc/ChopperBot",
    demo: "",
  },
};
