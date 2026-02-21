import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Project Detail`,
    description: project.summary
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 pb-16 pt-12">
      <Link href="/projects" className="text-sm text-muted hover:text-text">
        ← Projects
      </Link>
      <div className="mt-6 rounded-2xl border border-white/10 bg-card p-7">
        <p className="text-xs uppercase tracking-[0.15em] text-accent">{project.category}</p>
        <h1 className="mt-2 text-4xl font-semibold">{project.name}</h1>
        <p className="mt-4 text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/10 px-3 py-1 text-muted">Yil: {project.year}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-muted">Rol: {project.role}</span>
        </div>
      </div>

      <section className="mt-8 grid gap-6">
        <article className="rounded-2xl border border-white/10 bg-card p-7">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 leading-7 text-muted">{project.problem}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-card p-7">
          <h2 className="text-2xl font-semibold">Cozum</h2>
          <p className="mt-3 leading-7 text-muted">{project.solution}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-card p-7">
          <h2 className="text-2xl font-semibold">Etki</h2>
          <p className="mt-3 leading-7 text-muted">{project.outcome}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-card p-7">
          <h2 className="text-2xl font-semibold">Teknoloji</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
