import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      {/* Floating decorative blobs */}
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-secondary/10 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 size-[500px] rounded-full bg-accent/8 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 size-64 rounded-full bg-secondary/5 blur-2xl animate-pulse-glow" />
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-widest text-secondary">
              {siteConfig.name}
            </p>
            <h1
              className="animate-fade-in-up mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              {siteConfig.slogan}
            </h1>
            <p
              className="animate-fade-in-up mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              We help businesses across Kenya take control of their finances,
              meet compliance requirements, and build strong foundations for
              growth.
            </p>
            <div
              className="animate-fade-in-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                render={<Link href="/contact" />}
                size="lg"
                nativeButton={false}
                className="bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/services" />}
                variant="outline"
                size="lg"
                nativeButton={false}
                className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="animate-fade-in-up hidden lg:block"
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
              <Image
                src="/images/hero-consulting.jpg"
                alt="AssuranceMax consulting team in a modern office"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
