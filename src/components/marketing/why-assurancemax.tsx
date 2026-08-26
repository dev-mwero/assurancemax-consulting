import {
  ClipboardCheck,
  Handshake,
  Lightbulb,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";

const reasons = [
  {
    icon: Lightbulb,
    title: "Expertise",
    description:
      "Professional knowledge in financial management, governance, and compliance applied to your specific situation.",
  },
  {
    icon: ClipboardCheck,
    title: "Practical Solutions",
    description:
      "Advice that can actually be implemented within your organisation's capacity and resources.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "A strong focus on responsible organisational management and measurable outcomes.",
  },
  {
    icon: LockKeyhole,
    title: "Confidentiality",
    description:
      "Respectful handling of sensitive financial and organisational information with full discretion.",
  },
  {
    icon: Handshake,
    title: "Client Focus",
    description:
      "Solutions aligned to each client's objectives, delivered as a partner rather than just a service provider.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Perspective",
    description:
      "Focus on sustainable organisational improvement rather than quick fixes that don't last.",
  },
];

export function WhyAssuranceMax() {
  return (
    <SectionWrapper className="bg-muted/30">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Why AssuranceMax
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A partner you can rely on
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Organisations choose AssuranceMax for our practical approach,
          professional standards, and genuine commitment to their success.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
