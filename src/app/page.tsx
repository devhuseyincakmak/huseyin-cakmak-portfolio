import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-12">
      <section className="animate-fade-up">
        <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">AI-Native Builder</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-text md:text-6xl">
          Fikirden ürüne hızlı çıkan teknoloji geliştiricisi.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Kurucu bakış açısıyla, Gemini, Antigravity, Codex ve Claude ekosistemi gibi AI araçlarını modern yazılım
          pratikleriyle birleştiriyorum.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900">
            Projelerimi İncele
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm text-text">
            İletişime Geç
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          "Ürün odaklı geliştirme",
          "AI-assisted yazılım üretimi",
          "Uçtan uca teslim ve iterasyon"
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-card px-5 py-6 text-sm text-muted">
            {item}
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Work</p>
            <h2 className="mt-2 text-3xl font-semibold">One Cikan Projeler</h2>
          </div>
          <Link href="/projects" className="text-sm text-muted hover:text-text">
            Tumunu Gor
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
