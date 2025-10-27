import Link from "next/link";

type CTAProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function CTA({ href, label, variant = "primary" }: CTAProps) {
  const base = "inline-flex items-center px-5 py-3 rounded-md font-medium transition-colors";
  const styles = {
    primary: "bg-primary text-on-primary hover:opacity-90",
    secondary: "bg-primary text-on-primary hover:opacity-90",
    ghost: "bg-transparent border border-primary text-primary hover:bg-primary/10",
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {label}
    </Link>
  );
}