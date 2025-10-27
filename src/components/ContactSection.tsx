import React from "react";
import Card from "@/src/components/Card";
import CTA from "@/src/components/CTA";

type ContactSectionProps = {
  locale: string;
  zh: boolean;
  withAnchor?: boolean; // add id="contact" when used on Home
  className?: string;
};

export default function ContactSection({ locale, zh, withAnchor = false, className = "" }: ContactSectionProps) {
  return (
    <section id={withAnchor ? "contact" : undefined} className={`mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 ${className}`}>
      <h2 className="text-2xl md:text-4xl font-bold text-foreground">{zh ? "联系我们" : "Contact Us"}</h2>
      <p className="mt-3 text-muted-foreground">
        {zh ? "欢迎合作与咨询，可通过以下方式与我们取得联系。" : "We welcome collaboration and inquiries via the channels below."}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title={zh ? "电子邮箱" : "Email"} description={zh ? "发送邮件至：2719477616@qq.com" : "Send an email to: 2719477616@qq.com"} />
        <Card title={zh ? "手机号" : "Phone"} description={zh ? "联系电话：15657140566" : "Call or message: 15657140566"} />
        <Card title={zh ? "商务合作" : "Business"} description={zh ? "品牌活动与小游戏合作，欢迎详谈。" : "Brand activations and mini-game collaborations welcome."} />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <CTA href={`/${locale}#enterprise`} label={zh ? "了解企业内容" : "Explore Enterprise"} variant="secondary" />
        <CTA href={`/${locale}#works`} label={zh ? "查看作品" : "View Works"} variant="primary" />
      </div>
    </section>
  );
}