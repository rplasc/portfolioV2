import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { currentEmployer, previousEmployers } from "@/data/employers"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-linear-to-t from-slate-500 from-40% to-slate-900">
      <main className="flex flex-col flex-1 gap-20 max-w-3xl mx-auto w-full px-6 py-20">

        {/* Identity + CTA — asymmetric on md+ */}
        <section className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
          <Avatar className="size-32 shrink-0 mx-auto md:mx-0">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQEoAWAOBVkGcg/profile-displayphoto-crop_800_800/B56Z15RtnxGoAI-/0/1775856180664?e=1778112000&v=beta&t=mWc6JIeNtasxHhNFW1FiV5TLMnHojvVtC7mwps_dz8E"
              alt="Raul Plascencia"
            />
            <AvatarFallback className="text-2xl">RP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-semibold text-white/95 tracking-[-0.02em] leading-[1.05]">
                Raul Plascencia
              </h1>
              <p className="font-mono text-sm tracking-wide text-white/65">
                Full-stack Software Engineer
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/65 mt-2">
                <Image
                  src={currentEmployer.logo}
                  alt={currentEmployer.name}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                {currentEmployer.name}
              </p>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button className="rounded-sm px-8" asChild variant="default" size="lg">
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
              <Button className="rounded-sm" asChild variant="secondary" size="lg">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social proof — inline row, no bordered strip */}
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/40 shrink-0">
            Previously at
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {previousEmployers.map((employer) => (
              <div key={employer.name} className="flex items-center gap-2">
                <Image
                  src={employer.logo}
                  alt={employer.name}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span className="text-sm text-white/65">{employer.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
