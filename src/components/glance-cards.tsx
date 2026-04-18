"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { summaryCategories } from "@/data/summary"

export function GlanceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {summaryCategories.map((cat) => (
        <div
          key={cat.label}
          className="group relative isolate overflow-hidden rounded-2xl border border-white/14 bg-white/8 p-6 text-center shadow-[0_18px_45px_-24px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-white/12"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/16 via-white/4 to-transparent opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
          <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-white/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

          <div className="relative mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/10 shadow-inner shadow-white/10">
            <FontAwesomeIcon icon={cat.icon} className={`h-5 w-5 ${cat.iconColor}`} />
          </div>

          <div className="relative flex flex-col gap-1.5">
            <p className="text-base font-semibold tracking-tight text-white">{cat.label}</p>
            <p className="text-sm leading-relaxed text-white/72">{cat.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
