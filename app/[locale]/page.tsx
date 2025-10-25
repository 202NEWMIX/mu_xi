'use client';
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main style={{ padding: 24 }}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div style={{ marginTop: 16 }}>
        <Link href="/zh">中文</Link>
        {" | "}
        <Link href="/en">English</Link>
      </div>
    </main>
  );
}