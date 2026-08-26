import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Terms of service for AssuranceMax Consulting Ltd.",
};

export default function TermsPage() {
	return (
		<>
			<PageHeader
				title="Terms of Service"
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Terms of Service" },
				]}
			/>
			<SectionWrapper>
				<div className="mx-auto max-w-3xl prose prose-sm">
					<p className="text-muted-foreground italic">
						[This is a placeholder terms of service document. Replace with
						actual legal content before launch. Consult with a legal
						professional to draft appropriate terms for your business.]
					</p>
					<h2 className="text-xl font-bold text-foreground mt-8">
						Acceptance of Terms
					</h2>
					<p className="text-muted-foreground">
						[To be replaced with actual terms of acceptance.]
					</p>
					<h2 className="text-xl font-bold text-foreground mt-8">
						Services
					</h2>
					<p className="text-muted-foreground">
						[To be replaced with actual service terms and conditions.]
					</p>
					<h2 className="text-xl font-bold text-foreground mt-8">
						Limitation of Liability
					</h2>
					<p className="text-muted-foreground">
						[To be replaced with actual limitation of liability clause.]
					</p>
					<h2 className="text-xl font-bold text-foreground mt-8">
						Contact
					</h2>
					<p className="text-muted-foreground">
						For questions about these terms, please contact us at [contact
						email placeholder].
					</p>
				</div>
			</SectionWrapper>
		</>
	);
}
