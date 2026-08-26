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
			className="group block rounded-2xl glass gradient-border-top p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80"
		>
			<div className="flex items-start justify-between">
				<div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-inner">
					<Icon className="size-5 text-primary" />
				</div>
				<ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
			</div>
			<h3 className="mt-5 text-lg font-semibold text-foreground">
				{service.title}
			</h3>
			<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
				{service.description}
			</p>
		</Link>
	);
}
