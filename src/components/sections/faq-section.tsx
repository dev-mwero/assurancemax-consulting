import { SectionWrapper } from "@/components/sections/section-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/faqs";
import { faqJsonLd } from "@/lib/seo";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Answers to common questions about working with AssuranceMax
            Consulting Ltd.
          </p>
          <Accordion hiddenUntilFound className="mt-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </>
  );
}
