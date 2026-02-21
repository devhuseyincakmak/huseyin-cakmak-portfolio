import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>Build fast. Ship smart. Improve continuously.</p>
        <div className="flex items-center gap-4">
          <Link href={profile.github} className="hover:text-text">
            GitHub
          </Link>
          <Link href={profile.linkedin} className="hover:text-text">
            LinkedIn
          </Link>
          <p>{new Date().getFullYear()} Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
