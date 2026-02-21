export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
  links: {
    live?: string;
    github?: string;
  };
};

export const featuredProjects: Project[] = [
  {
    slug: "ai-workflow-orchestrator",
    name: "AI Workflow Orchestrator",
    category: "Automation",
    role: "Founder / Product Engineer",
    year: "2025",
    summary: "Tekrarlayan geliştirme adımlarını AI destekli otomasyon akışlarına dönüştüren bir araç.",
    problem: "Projelerde kod üretimi, review ve dokümantasyon adımları dağınık ilerliyordu.",
    solution: "Tek panelde görev akışları, prompt şablonları ve commit akışı birleştirildi.",
    stack: ["Next.js", "TypeScript", "Node.js", "OpenAI API"],
    outcome: "İç ekipte prototipleme süresi %40 kısaldı.",
    links: {
      github: "https://github.com"
    }
  },
  {
    slug: "founder-metrics-dashboard",
    name: "Founder Metrics Dashboard",
    category: "SaaS",
    role: "Full-Stack Developer",
    year: "2024",
    summary: "Erken aşama ürün metriklerini tek yerden izlemek için geliştirilen dashboard.",
    problem: "KPI verileri farklı kaynaklarda dağınıktı ve hızlı karar almayı zorlaştırıyordu.",
    solution: "Gelir, aktivasyon ve retention metrikleri tek görünümde toplandı.",
    stack: ["React", "TypeScript", "PostgreSQL", "Charting"],
    outcome: "Haftalık raporlama için harcanan süre 6 saatten 1 saate indi.",
    links: {
      github: "https://github.com"
    }
  },
  {
    slug: "rapid-mvp-kit",
    name: "Rapid MVP Kit",
    category: "Tooling",
    role: "Builder / Maintainer",
    year: "2026",
    summary: "Yeni ürün fikirlerini günler içinde doğrulamak için tekrar kullanılabilir başlangıç kiti.",
    problem: "Her MVP projesinde aynı altyapıyı baştan kurmak zaman kaybettiriyordu.",
    solution: "Auth, billing, analytics ve admin blokları modüler bir kitte toplandı.",
    stack: ["Next.js", "Tailwind", "Prisma", "Vercel"],
    outcome: "MVP geliştirme başlangıç süresi ortalamada %55 azaldı.",
    links: {
      github: "https://github.com"
    }
  }
];

export const allProjects = featuredProjects;

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
