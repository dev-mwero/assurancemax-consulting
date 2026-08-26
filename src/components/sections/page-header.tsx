import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
	label: string;
	href?: string;
};

type PageHeaderProps = {
	title: string;
	description?: string;
	breadcrumbs?: BreadcrumbItem[];
};

export function PageHeader({
	title,
	description,
	breadcrumbs,
}: PageHeaderProps) {
	return (
		<div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 border-b">
			{/* Background image */}
			<div className="absolute inset-0">
				<Image
					src="/images/page-header-bg.jpg"
					alt=""
					width={1600}
					height={600}
					className="w-full h-full object-cover opacity-10"
				/>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]" />
			<div className="absolute -top-20 -right-20 size-72 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" />
			<div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<nav aria-label="Breadcrumb" className="mb-5">
						<ol className="flex items-center gap-1.5 text-sm text-white/50">
							{breadcrumbs.map((crumb, i) => (
								<li key={crumb.label} className="flex items-center gap-1.5">
									{i > 0 && <ChevronRight className="size-3.5" />}
									{crumb.href ? (
										<Link
											href={crumb.href}
											className="hover:text-secondary transition-colors duration-200"
										>
											{crumb.label}
										</Link>
									) : (
										<span className="text-secondary font-medium">
											{crumb.label}
										</span>
									)}
								</li>
							))}
						</ol>
					</nav>
				)}
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
					{title}
				</h1>
				{description && (
					<p className="mt-4 max-w-2xl text-lg text-white/60 leading-relaxed">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
