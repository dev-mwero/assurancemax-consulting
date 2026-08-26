import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  FileText,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types/service";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  ChartNoAxesCombined,
  FileText,
  Users,
  ShieldCheck,
  BriefcaseBusiness,
  Scale,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Calculator;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
    >
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </Link>
  );
}
