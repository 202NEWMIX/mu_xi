import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/animated/ScrollReveal";
import TiltCard from "@/src/components/animated/TiltCard";
import path from "path";
import fs from "fs";
import { getLocale } from "next-intl/server";

function readCasesFromPublic(): { src: string; title: string; description?: string }[] {
  const casesDir = path.join(process.cwd(), "public", "mx-main");
  const allowed = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"]);
  const items: { src: string; title: string; description?: string }[] = [];

  const safeTitle = (name: string) => name.replace(/[-_]+/g, " ").replace(/\.[^/.]+$/, "");

  const walk = (dir: string, webBase: string, depth = 0) => {
    if (depth > 2) return;
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const web = `${webBase}/${e.name}`.replace(/\\/g, "/");
      if (e.isDirectory()) {
        walk(full, web, depth + 1);
      } else {
        const ext = path.extname(e.name).toLowerCase();
        if (allowed.has(ext)) {
          items.push({ src: web, title: safeTitle(e.name), description: "来自 mx-main" });
        }
      }
    }
  };

  walk(casesDir, "/mx-main", 0);
  return items;
}

export default async function CasesPage() {
  const locale = await getLocale();
  const nav = [
    { label: "Home", href: `/${locale}` },
    { label: "Test", href: `/${locale}/test` },
    { label: "Cases", href: `/${locale}/cases` },
  ];

  const cases = readCasesFromPublic();

  return (
    <main>
      <Header nav={nav} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <h1 className="mb-8 text-3xl md:text-4xl font-bold text-foreground">案例展示</h1>
        </ScrollReveal>
        {cases.length === 0 ? (
          <div className="text-muted-foreground">尚未发现资源，请将图片或徽标放入 <code>/public/mx-main</code>。</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <ScrollReveal key={c.src} delay={(i % 6) * 0.05}>
                <TiltCard title={c.title} description={c.description ?? ""} image={c.src} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}