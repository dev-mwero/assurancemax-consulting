import {
  ClipboardCheck,
  Handshake,
  Lightbulb,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/sections/reveal";
import { SectionWrapper } from "@/components/sections/section-wrapper";

const reasons = [
  {
    icon: Lightbulb,
    title: "Expertise",
    description:
      "Finance, governance, and compliance expertise applied to your exact situation.",
  },
  {
    icon: ClipboardCheck,
    title: "Practical Solutions",
    description:
      "Advice you can put into practice with the resources you have.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "We focus on responsible management and results you can measure.",
  },
  {
    icon: LockKeyhole,
    title: "Confidentiality",
    description: "We handle your sensitive data with full discretion.",
  },
  {
    icon: Handshake,
    title: "Client Focus",
    description: "We work as a partner, aligning solutions to your objectives.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Perspective",
    description: "We build lasting improvement, not short-term fixes.",
  },
];

export function WhyAssuranceMax() {
  return (
    <SectionWrapper className="bg-primary">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Why AssuranceMax
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A partner you can rely on
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Businesses choose us for practical advice, professional standards,
            and a real commitment to their results.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={i * 100}>
              <div className="flex gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-5 transition-all duration-300 hover:bg-white/15 hover:border-white/20">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary/20 shadow-inner">
                  <Icon className="size-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
