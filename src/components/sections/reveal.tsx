"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	direction?: "up" | "left" | "right" | "scale";
	delay?: number;
	duration?: number;
};

export function Reveal({
	children,
	className,
	direction = "up",
	delay = 0,
	duration = 600,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(el);
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const animationClass = {
		up: "animate-fade-in-up",
		left: "animate-fade-in-left",
		right: "animate-fade-in-right",
		scale: "animate-scale-in",
	}[direction];

	return (
		<div
			ref={ref}
			className={cn(
				isVisible ? animationClass : "opacity-0",
				className,
			)}
			style={{
				animationDuration: `${duration}ms`,
				animationDelay: `${delay}ms`,
			}}
		>
			{children}
		</div>
	);
}
