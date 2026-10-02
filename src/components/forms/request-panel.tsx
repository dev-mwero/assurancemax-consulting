"use client";

import { useState } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { InquiryForm } from "@/components/forms/inquiry-form";

const tabs = [
  {
    id: "message",
    label: "Send a message",
    hint: "General enquiries, questions, or a consultation request.",
  },
  {
    id: "quote",
    label: "Request a quote",
    hint: "Tell us the service you need and we will come back with pricing.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function RequestPanel() {
  const [active, setActive] = useState<TabId>("message");
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Contact request type"
        className="grid grid-cols-2 gap-2 rounded-xl border bg-muted/40 p-1"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{activeTab.hint}</p>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="mt-8"
      >
        {active === "message" ? <ContactForm /> : <InquiryForm />}
      </div>
    </div>
  );
}
