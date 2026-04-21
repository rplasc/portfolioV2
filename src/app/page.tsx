import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { currentEmployer, previousEmployers } from "@/data/employers";
import { featuredProjects, otherProjects } from "@/data/projects";
import { contact } from "@/data/contact";
import { ProjectListItem } from "@/components/project-list-item";
import { FeaturedProjectCard } from "@/components/featured-project-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        {/* Identity + CTA — asymmetric on md+ */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <Avatar className="mx-auto size-32 shrink-0 md:mx-0 md:size-36">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQEoAWAOBVkGcg/profile-displayphoto-crop_800_800/B56Z15RtnxGoAI-/0/1775856180664?e=1778112000&v=beta&t=mWc6JIeNtasxHhNFW1FiV5TLMnHojvVtC7mwps_dz8E"
              alt="Raul Plascencia"
            />
            <AvatarFallback className="text-3xl">RP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl leading-[1.02] font-bold tracking-[-0.03em] text-white/95 md:text-6xl md:tracking-[-0.04em]">
                Raul Plascencia
              </h1>
              <p className="font-mono text-sm tracking-wide text-white/65">
                Full-stack Software Engineer
              </p>
              <p className="mt-2 text-sm text-white/65">
                Currently building Health Data Management Platforms at{" "}
                <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                  <Image
                    src={currentEmployer.logo}
                    alt=""
                    width={16}
                    height={16}
                    className="translate-y-0.5 rounded-sm"
                  />
                  <span className="text-white/85">{currentEmployer.name}</span>
                </span>
              </p>
            </div>

            <div className="flex justify-center gap-3 md:justify-start">
              <Button
                className="rounded-sm bg-white px-8 text-slate-950 hover:bg-white/90"
                asChild
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

        {/* Featured — big beat */}
        <section className="mt-28 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="shrink-0 font-mono text-xs font-semibold tracking-[0.2em] text-white/40 uppercase md:w-40 md:pt-1">
            Featured
          </h2>
          <div className="flex flex-1 flex-col gap-10">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.name}
                project={project}
                bordered={index !== 0}
              />
            ))}
          </div>
        </section>

        {/* More projects — tight beat, same act */}
        <section className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="shrink-0 font-mono text-xs font-semibold tracking-[0.2em] text-white/40 uppercase md:w-40 md:pt-1">
            More projects
          </h2>
          <ul className="flex flex-1 flex-col divide-y divide-white/10">
            {otherProjects.map((project) => (
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
            <a
              href={`mailto:${contact.email}`}
              className="focus-visible:ring-ring focus-visible:ring-offset-background -mx-1 w-fit rounded-sm px-1 text-base text-white underline underline-offset-2 decoration-white/35 transition-colors duration-200 ease-out hover:decoration-white/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
