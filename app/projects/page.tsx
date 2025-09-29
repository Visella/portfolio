import { Navbar } from "@/components/navbar"
import { BackgroundGrid } from "@/components/background-grid"
import { profile } from "@/data/profile"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <main className="min-h-[100dvh]">
      <BackgroundGrid />
      <Navbar />
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24">
        {/* Center title */}
        <h1 className="text-center text-3xl font-semibold text-primary">Projects</h1>
        <p className="mt-2 text-center text-muted-foreground">
          A selection of recent work across web, mobile, and desktop.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.projects.map((p) => (
            <ProjectCard key={p.title} p={p as any} />
          ))}
        </div>
      </section>
    </main>
  )
}
