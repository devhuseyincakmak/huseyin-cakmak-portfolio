type Tool = {
  name: string;
  logo: string;
};

const groups: Record<string, Tool[]> = {
  Languages: [
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" }
  ],
  Frontend: [
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" }
  ],
  Workflow: [
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" }
  ],
  "AI Tools": [
    { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
    { name: "Antigravity", logo: "/logos/antigravity.svg" },
    { name: "Codex", logo: "/logos/codex.mp4" },
    { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic/D97757" },
    { name: "Claude Code", logo: "https://cdn.simpleicons.org/anthropic/D97757" }
  ]
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-12">
      <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">Tools</p>
      <h1 className="mt-3 text-4xl font-semibold">Araclar ve Gelistirme Ekosistemi</h1>
      <p className="mt-4 max-w-3xl text-muted">Odak noktam teknoloji listesi degil, hizli ve kaliteli cikti uretmek.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {Object.entries(groups).map(([title, items]) => (
          <section key={title} className="rounded-3xl border border-white/10 bg-card/90 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <h2 className="text-xl font-semibold">{title}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/10 px-4 py-3 text-base text-muted transition hover:border-accent/40 hover:bg-black/20 hover:text-text"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/25">
                    {item.logo.endsWith(".mp4") ? (
                      <video
                        src={item.logo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-7 w-7 rounded object-cover"
                        aria-label={`${item.name} logo`}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt={`${item.name} logo`} width={28} height={28} />
                    )}
                  </span>
                  <span className="leading-none">{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
