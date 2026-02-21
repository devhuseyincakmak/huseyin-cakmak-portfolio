import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-text">
            <span>FOUNDER</span>
            <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-amber-200">
              dev.huseyin cakmak
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-text">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-accent/50 bg-accentSoft px-4 py-2 text-xs font-medium text-text transition hover:border-accent"
          >
            Hire / Collaborate
          </Link>
        </div>
        <nav className="mt-3 flex gap-4 overflow-x-auto pb-1 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap text-sm text-muted transition hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
