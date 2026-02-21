export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-16 pt-12">
      <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">About</p>
      <h1 className="mt-3 text-4xl font-semibold">Builder-Founder Profili</h1>
      <div className="mt-8 space-y-6 text-muted">
        <p>
          Teknoloji geliştiricisi ve ürün odaklı bir builder-founder olarak çalışıyorum. Modern yazılım geliştirme
          pratiklerini AI araçlarıyla birleştirerek fikirleri hızlıca çalışan ürünlere dönüştürüyorum.
        </p>
        <p>
          Kendimi sadece kod yazan biri olarak değil, problemi tanımlayan, MVP planlayan ve ölçümleyerek ürünü
          olgunlaştıran bir ekip arkadaşı olarak konumlandırıyorum. Hız, kalite ve kullanıcı değeri birlikte ilerlemeli.
        </p>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {[
          "Product Thinking",
          "AI-Assisted Development",
          "Rapid Prototyping",
          "GitHub Workflow",
          "Full-Stack Mindset"
        ].map((tag) => (
          <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-sm text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </main>
  );
}
