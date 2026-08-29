import {
  BrainCircuit,
  Eye,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/sections/reveal";
import { SectionWrapper } from "@/components/sections/section-wrapper";

const steps = [
  {
    icon: FileText,
    title: "Accurate Records",
    description: "Clean, reliable financial data",
  },
  {
    icon: Eye,
    title: "Financial Visibility",
    description: "Clear view of your position",
  },
  {
    icon: BrainCircuit,
    title: "Better Decisions",
    description: "Data-driven choices",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Controls",
    description: "Reliable governance systems",
  },
  {
    icon: TrendingUp,
    title: "Compliance & Growth",
    description: "Sustainable organisational health",
  },
];

export function FinancialClarity() {
  return (
    <SectionWrapper className="bg-secondary/[0.04]">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            The Value of Financial Clarity
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why professional financial management matters
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            When your finances are in order, everything else follows. Here is
            the journey from accurate records to sustainable growth.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative">
                <div className="flex flex-col items-center text-center rounded-2xl glass gradient-border-top p-6 shadow-md h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 shadow-inner">
                    <Icon className="size-6 text-secondary" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 text-secondary/40 text-lg font-bold">
                    →
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
