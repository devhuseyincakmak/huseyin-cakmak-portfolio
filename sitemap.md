# Portfolio Sitemap & Page Structure

## 1) Route Plan
- `/` -> Home
- `/about` -> About
- `/projects` -> Projects (listing)
- `/projects/[slug]` -> Project Detail (v2)
- `/tools` -> Tech Stack & AI Tools
- `/process` -> Working Process
- `/contact` -> Contact

## 2) Global Layout
- Header
  - Logo/Name
  - Navigation: Home, About, Projects, Tools, Process, Contact
  - CTA: Contact
- Main Content
- Footer
  - Kısa slogan
  - Sosyal linkler
  - Copyright

## 3) Home Page IA (`/`)
1. Hero
2. Value Proposition (3 sütun)
3. Featured Projects (3 kart)
4. Process Summary (5 adım kısa)
5. Tools Highlight (AI + stack)
6. Contact CTA band

## 4) About Page IA (`/about`)
1. Kısa bio
2. Uzun bio
3. Yetkinlik etiketleri
4. Çalışma yaklaşımı
5. Mini CTA (Projects / Contact)

## 5) Projects Page IA (`/projects`)
1. Page intro
2. Filter bar (kategori, teknoloji) [opsiyonel]
3. Featured projects
4. Other projects
5. Project card CTA (detay veya github)

## 6) Project Detail IA (`/projects/[slug]`) [v2]
1. Hero: proje adı + kısa özet
2. Problem tanımı
3. Çözüm yaklaşımı
4. Teknik mimari / stack
5. Sonuçlar ve metrikler
6. Galeri / ekran görüntüleri
7. Linkler: Live, Repo
8. Next project navigation

## 7) Tools Page IA (`/tools`)
1. Intro
2. Programming Languages
3. Frameworks & Libraries
4. Dev Workflow
5. AI Tools
6. Kısa prensip: "output-first tooling"

## 8) Process Page IA (`/process`)
1. Intro
2. 5 adım süreç timeline
3. Her adım için çıktı örneği
4. Sık iş birliği modeli (opsiyonel)
5. CTA: proje başlat

## 9) Contact Page IA (`/contact`)
1. Kısa giriş metni
2. İletişim linkleri
3. Form
4. Beklenen dönüş süresi notu

## 10) Navigation Rules
- Header sticky olabilir
- Aktif menü öğesi belirgin olmalı
- Mobilde hamburger menü
- Tüm sayfalarda Contact erişimi 1 tık uzakta olmalı

## 11) URL & Slug Rules
- Kısa, okunabilir, küçük harf URL
- Proje slug örneği: `/projects/ai-dashboard-optimizer`
- Türkçe karakter yerine ASCII slug

## 12) SEO & Metadata Mapping
- Home: genel brand positioning
- About: kişisel hikaye + uzmanlık
- Projects: portfolio index
- Project detail: long-tail proje başlıkları
- Contact: hizmet/iş birliği odaklı metadata

## 13) Analytics Event Plan
- `cta_hero_projects_click`
- `cta_hero_contact_click`
- `project_card_click`
- `github_click`
- `linkedin_click`
- `contact_form_submit`

## 14) MVP Sitemap Scope
- Dahil: `/`, `/about`, `/projects`, `/contact`
- Sonra: `/tools`, `/process`, `/projects/[slug]`
