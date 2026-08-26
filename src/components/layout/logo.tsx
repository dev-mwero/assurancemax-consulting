import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <ShieldCheck className="size-8 text-primary group-hover:text-secondary transition-colors" />
      <span className="text-xl font-bold text-primary tracking-tight">
        {siteConfig.shortName}
      </span>
    </Link>
  );
}
