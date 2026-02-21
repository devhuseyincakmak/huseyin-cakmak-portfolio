import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.15em] text-accent">{project.category}</p>
        <p className="text-xs text-muted">{project.year}</p>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-text">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
      <p className="mt-2 text-xs text-muted">Rol: {project.role}</p>
      <p className="mt-4 text-sm text-text">
        <span className="font-medium">Sonuç:</span> {project.outcome}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
        <Link href={`/projects/${project.slug}`} className="text-accent hover:underline">
          Detay
        </Link>
        {project.links.live ? (
          <Link href={project.links.live} className="text-muted hover:text-text">
            Live
          </Link>
        ) : null}
        {project.links.github ? (
          <Link href={project.links.github} className="text-muted hover:text-text">
            GitHub
          </Link>
        ) : null}
      </div>
    </article>
  );
}
