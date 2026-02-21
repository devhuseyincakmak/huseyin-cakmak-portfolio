import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { profile } from "@/data/profile";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description:
    "Kurucu bakış açısıyla AI araçları ve modern yazılım pratiğini birleştirerek ürünler geliştiren teknoloji geliştiricisi portföyü."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${grotesk.variable} ${plexMono.variable} font-[var(--font-grotesk)] antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
