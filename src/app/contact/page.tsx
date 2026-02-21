import Link from "next/link";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-12">
      <p className="font-[var(--font-plex-mono)] text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold">Birlikte Uretelim</h1>
      <p className="mt-4 text-muted">Yeni bir urun fikrin varsa veya mevcut projeni hizlandirmak istiyorsan ulas.</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
        <Link href={`mailto:${profile.email}`} className="rounded-full border border-white/15 px-4 py-2 hover:text-text">
          {profile.email}
        </Link>
        <Link href={profile.github} className="rounded-full border border-white/15 px-4 py-2 hover:text-text">
          GitHub
        </Link>
        <Link href={profile.linkedin} className="rounded-full border border-white/15 px-4 py-2 hover:text-text">
          LinkedIn
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-card p-6">
        <form className="space-y-4" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Isim</span>
            <input className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3" placeholder="Ad Soyad" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-muted">E-posta</span>
            <input
              type="email"
              className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3"
              placeholder="ornek@email.com"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Proje Ozeti</span>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3"
              placeholder="Ne insa etmek istiyorsun?"
            />
          </label>
          <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900">
            Mesaj Gonder
          </button>
        </form>
      </div>
    </main>
  );
}
