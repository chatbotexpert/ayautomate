import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 pb-24 md:pb-32">
      {/* The White Box CTA */}
      <div className="relative overflow-hidden border border-foreground/10 bg-foreground text-background mb-24 md:mb-32">
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-0 [background:radial-gradient(700px_350px_at_70%_50%,rgba(128,130,193,0.25),transparent_70%)]"
        ></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 px-7 md:px-12 py-12 md:py-16 items-center">
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em]">
              Fix what&apos;s slowing you down.
            </h3>
            <p className="mt-5 text-base md:text-lg text-background/70 max-w-2xl leading-snug">
              Tell us the workflow that hurts. We embed an engineer, ship a whole
              product, refund the first month if it does not land.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-primary-purple px-8 py-4 text-base font-bold text-white shadow-[0_14px_40px_-12px_rgba(128,130,193,0.7)] ring-1 ring-inset ring-white/15 transition-all duration-200 hover:bg-primary-700 hover:-translate-y-0.5"
              href="https://cal.com/walidboulanouar/consultation"
            >
              <span
                aria-hidden={true}
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
              ></span>
              Book a 15-min call
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Standalone Book A Call Button */}
      <div className="flex justify-center">
        <a
          href="https://cal.com/walidboulanouar/consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          BOOK A CALL
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
