import { ArrowUpRight, Sparkles, Stethoscope } from "lucide-react";
import hero from "@/assets/dental-hero.jpg";

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium shadow-soft">
          <Sparkles className="size-3.5 text-brand" /> Professional Services
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          We Take Care of
          <br />
          <span className="inline-flex items-center gap-3">
            <span className="inline-grid place-items-center size-12 md:size-14 rounded-full bg-brand text-brand-foreground">
              <Stethoscope className="size-6" />
            </span>
            Your <span className="text-brand">Smile</span>
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-soft">
              <span className="size-2 rounded-full bg-accent-lime" />
              Advanced Treatments
            </span>
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
          Experience gentle, personalized dental care designed to keep your smile
          healthy and radiant. From routine checkups to advanced treatments,
          we're here to make every visit stress-free.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground pl-6 pr-2 py-2.5 text-sm font-medium shadow-elegant hover:scale-[1.02] transition"
        >
          View All Services
          <span className="size-8 rounded-full bg-white/20 grid place-items-center">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
      </div>

      {/* Tooth gallery */}
      <div className="mt-16 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] overflow-hidden bg-white shadow-soft"
              style={{
                clipPath:
                  "path('M50 0 C20 0 0 25 0 55 C0 85 20 110 30 140 C35 155 40 170 50 170 C60 170 65 155 70 140 C80 110 100 85 100 55 C100 25 80 0 50 0 Z')",
                WebkitClipPath:
                  "path('M50 0 C20 0 0 25 0 55 C0 85 20 110 30 140 C35 155 40 170 50 170 C60 170 65 155 70 140 C80 110 100 85 100 55 C100 25 80 0 50 0 Z')",
              }}
            >
              <img
                src={hero}
                alt="Dental care"
                className="size-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* decorative wavy line */}
      <div className="absolute inset-x-0 top-1/2 -z-0 h-px bg-accent-lime/60" />
    </section>
  );
}
