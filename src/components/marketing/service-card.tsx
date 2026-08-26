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
import Image from "next/image";
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
			className="group block rounded-2xl glass gradient-border-top overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80"
		>
			{/* Service image */}
			<div className="relative h-40 overflow-hidden">
				<Image
					src={service.image}
					alt={service.title}
					width={600}
					height={400}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
				<div className="absolute top-3 right-3">
					<ArrowUpRight className="size-4 text-white/70 transition-all duration-300 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</div>
			</div>
			{/* Card content */}
			<div className="p-6">
				<div className="flex items-start justify-between">
					<div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 shadow-inner">
						<Icon className="size-4 text-primary" />
					</div>
				</div>
				<h3 className="mt-4 text-lg font-semibold text-foreground">
					{service.title}
				</h3>
				<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
					{service.description}
				</p>
			</div>
		</Link>
	);
}
