export interface Project {
  name: string;
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
    name: "Chopperbot",
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
    description: "Desktop image editor for fast everyday photo adjustments",
    stack: ["C++", "Qt Framework"],
    details:
      "Delivered a desktop image editor that let users handle common photo edits like cropping, resizing, rotation, and color correction in one focused interface. Built the editing workflows and custom UI in C++ with Qt.",
    github: "https://github.com/rplasc/CSE165Project",
    demo: "",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
