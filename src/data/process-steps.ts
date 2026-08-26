import type { ProcessStep } from "@/types/process-step";

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "We begin by listening. We take time to understand your business, your challenges, and your objectives before suggesting any solution.",
    icon: "Search",
  },
  {
    id: "assess",
    number: "02",
    title: "Assess",
    description:
      "We analyse your current financial and operational position, identifying gaps, risks, and opportunities for improvement.",
    icon: "ClipboardCheck",
  },
  {
    id: "advise",
    number: "03",
    title: "Advise",
    description:
      "We provide clear, practical recommendations tailored to your specific situation and organisational capacity.",
    icon: "Lightbulb",
  },
  {
    id: "implement",
    number: "04",
    title: "Implement",
    description:
      "We work alongside your team to put recommendations into action, ensuring changes are practical and sustainable.",
    icon: "Rocket",
  },
  {
    id: "support",
    number: "05",
    title: "Support",
    description:
      "We remain available for ongoing guidance, helping you maintain improvements and adapt as your business evolves.",
    icon: "Headphones",
  },
];
