import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { currentEmployer, previousEmployers } from "@/data/employers"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-linear-to-t from-slate-500 from-40% to-slate-900 dark:bg-black">
      <main className="flex flex-col items-center gap-16 max-w-2xl mx-auto w-full px-6 py-20">
        <section className="flex flex-col items-center gap-6 text-center">
          <Avatar className="size-32 text-2xl shadow-lg">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQEoAWAOBVkGcg/profile-displayphoto-crop_800_800/B56Z15RtnxGoAI-/0/1775856180664?e=1778112000&v=beta&t=mWc6JIeNtasxHhNFW1FiV5TLMnHojvVtC7mwps_dz8E"
              alt="Raul"
            />
            <AvatarFallback className="text-2xl">RP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold text-white">Hi, I&apos;m Raul Plascencia</h1>
            <p className="text-2xl text-accent">Full-stack Software Engineer</p>
            <p className="flex items-center justify-center gap-2 text-sm text-slate-300 mt-1">
              Currently employed at:
              <Image
                src={currentEmployer.logo}
                alt={currentEmployer.name}
                width={20}
                height={20}
                className="rounded-sm"
              />
              {currentEmployer.name}
            </p>
            <section className="w-full flex flex-col items-center gap-6 my-3">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Previously worked with:</h2>
              <div className="flex flex-wrap justify-center items-center gap-10 border-t border-b border-slate-600 py-4 w-full">
                {previousEmployers.map((employer) => (
                  <div key={employer.name} className="flex items-center gap-2">
                    <Image
                      src={employer.logo}
                      alt={employer.name}
                      width={24}
                      height={24}
                    />
                    <span className="text-sm text-slate-300">{employer.name}</span>
                  </div>
                ))}
              </div>
            </section>            
          </div>
          <div className="flex gap-3 mt-2">
            <Button className="shadow-lg" asChild variant="default" size="lg">
              <a href="/resume.pdf" download>Resume</a>
            </Button>
            <Button className="shadow-sm" asChild variant="secondary" size="default">
              <Link href="/contact">Contact Info</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
