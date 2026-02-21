import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-12">
      <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">Projects</p>
      <h1 className="mt-3 text-4xl font-semibold">Portfolio Projeleri</h1>
      <p className="mt-4 max-w-3xl text-muted">
        Farkli is problemleri icin tasarladigim ve gelistirdigim urunlerden seckiler. Her projede problem, cozum,
        teknik secim ve etki odakli ilerliyorum.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
