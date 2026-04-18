import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { currentEmployer, previousEmployers } from "@/data/employers";
import { projects } from "@/data/projects";
import { contact } from "@/data/contact";
import { ProjectListItem } from "@/components/project-list-item";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        {/* Identity + CTA — asymmetric on md+ */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <Avatar className="mx-auto size-32 shrink-0 md:mx-0">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQEoAWAOBVkGcg/profile-displayphoto-crop_800_800/B56Z15RtnxGoAI-/0/1775856180664?e=1778112000&v=beta&t=mWc6JIeNtasxHhNFW1FiV5TLMnHojvVtC7mwps_dz8E"
              alt="Raul Plascencia"
            />
            <AvatarFallback className="text-3xl">RP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl leading-[1.05] font-semibold tracking-[-0.02em] text-white/95 md:text-5xl">
                Raul Plascencia
              </h1>
              <p className="font-mono text-sm tracking-wide text-white/65">
                Full-stack Software Engineer
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-white/65 md:justify-start">
                Currently building Health Data Management Platforms with{" "}
                {currentEmployer.name}
                <Image
                  src={currentEmployer.logo}
                  alt={currentEmployer.name}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              </p>
            </div>

            <div className="flex justify-center gap-3 md:justify-start">
              <Button
                className="rounded-sm px-8"
                asChild
                variant="default"
                size="lg"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Social proof — inline row, no bordered strip */}
        <section className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
          <h2 className="shrink-0 font-mono text-xs font-semibold tracking-[0.2em] text-white/40 uppercase md:w-40">
            Previously at
          </h2>
          <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3">
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

        {/* Projects */}
        <section className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="shrink-0 font-mono text-xs font-semibold tracking-[0.2em] text-white/40 uppercase md:w-40 md:pt-1">
            Projects
          </h2>
          <ul className="flex flex-1 flex-col divide-y divide-white/10">
            {projects.map((project) => (
              <ProjectListItem key={project.name} project={project} />
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-28 flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
          <h2 className="shrink-0 font-mono text-xs font-semibold tracking-[0.2em] text-white/40 uppercase md:w-40">
            Contact
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/65">
              Open to new roles and interesting problems.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-sm text-white/75 transition-colors hover:text-white/95"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
