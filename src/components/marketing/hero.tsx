import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            We help organisations gain clarity over their finances, strengthen
            governance, achieve compliance, and build the foundations for
            sustainable growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<Link href="/contact" />}
              size="lg"
              nativeButton={false}
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/services" />}
              variant="outline"
              size="lg"
              nativeButton={false}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Explore Our Services
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
