import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Test() {
  const t = useTranslations("Test");

  return (
    <main style={{ padding: 24 }}>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div style={{ marginTop: 16 }}>
        <Link href='/zh'>中文</Link>
        {" | "}
        <Link href='/en'>English</Link>
      </div>
    </main>
  );
}
