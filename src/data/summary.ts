import { faLaptopCode, faFolderOpen, faRocket } from "@fortawesome/free-solid-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface SummaryCategory {
  icon: IconDefinition
  iconColor: string
  label: string
  description: string
}

export const summaryCategories: SummaryCategory[] = [
  {
    icon: faLaptopCode,
    iconColor: "text-amber-400",
    label: "Tech Stack",
    description: "React, Angular, Flask, .NET, Python",
  },
  {
    icon: faFolderOpen,
    iconColor: "text-emerald-400",
    label: "Projects",
    description: " Cloud Sync app, image editor, AI Discord bot",
  },
  {
    icon: faRocket,
    iconColor: "text-pink-400",
    label: "Goals",
    description: "Create forward-thinking user experiences",
  },
]
