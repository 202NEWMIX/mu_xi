import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactSection from "@/src/components/ContactSection";
import { getLocale } from "next-intl/server";

export default async function ContactPage() {
  const locale = await getLocale();
  const zh = locale === "zh";
  const nav = [
    { label: zh ? "企业内容" : "Enterprise", href: `/${locale}#enterprise` },
    { label: zh ? "关于我们" : "About", href: `/${locale}#about` },
    { label: zh ? "联系我们" : "Contact", href: `/${locale}#contact` },
  ];

  return (
    <main>
      <Header nav={nav} />
      <ContactSection locale={locale} zh={zh} />
      <Footer copyright="© 2025 Hangzhou Mu Xi" links={nav} />
    </main>
  );
}