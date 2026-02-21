const steps = [
  {
    title: "Kesif",
    text: "Problem, hedef kitle ve basari metrigini netlestiririm."
  },
  {
    title: "MVP Plani",
    text: "En hizli deger uretecek surumu tanimlarim."
  },
  {
    title: "Gelistirme",
    text: "Moduler mimari, temiz kod ve hizli iterasyon uygularim."
  },
  {
    title: "Yayinlama",
    text: "Stabil dagitim ve temel olcumlemeyle canliya alirim."
  },
  {
    title: "Iyilestirme",
    text: "Veri ve geri bildirimle urunu surekli optimize ederim."
  }
];

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-12">
      <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">Process</p>
      <h1 className="mt-3 text-4xl font-semibold">Nasil Calisiyorum?</h1>
      <div className="mt-10 space-y-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-2xl border border-white/10 bg-card p-6">
            <p className="font-[var(--font-plex-mono)] text-xs text-accent">0{index + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-muted">{step.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
