export default function TheModelSection() {
  const steps = [
    {
      id: "01",
      title: "Ship a whole product",
      desc: "Not a feature. Not a demo. A working system in your repo by month-end.",
      img: "https://www.ayautomate.com/_next/image?url=%2Fship-product.webp&w=640&q=75"
    },
    {
      id: "02",
      title: "Month one fully refundable",
      desc: "If month one does not land, you get it back. No conversation needed.",
      img: "https://www.ayautomate.com/_next/image?url=%2Fmoney-refund.webp&w=640&q=75"
    },
    {
      id: "03",
      title: "One human, many agents",
      desc: "Co-engineer with a bench of subagents. The multiplier is the stack, not the seniority.",
      img: "https://www.ayautomate.com/_next/image?url=%2Fmany-agents-v2.webp&w=640&q=75"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 py-24 md:py-32 border-t border-border-subtle">
      <p className="text-[11px] uppercase tracking-[0.18em] text-text-soft font-semibold mb-10">
        The model &middot; No exceptions
      </p>
      <ul className="divide-y divide-border-strong border-y border-border-strong">
        {steps.map((step) => (
          <li key={step.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-8 md:py-10 items-center">
            <span className="lg:col-span-1 text-2xl md:text-3xl font-extrabold tabular-nums text-text-soft tracking-tight leading-none">
              {step.id}
            </span>
            <div className="lg:col-span-8">
              <h4 className="text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-[-0.02em]">
                {step.title}
              </h4>
              <p className="mt-3 text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <div className="relative w-full max-w-[260px] md:max-w-[300px] lg:max-w-none aspect-square shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={step.title}
                  loading="lazy"
                  className="object-contain absolute inset-0 w-full h-full"
                  src={step.img}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
