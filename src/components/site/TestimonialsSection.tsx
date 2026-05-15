import { TESTIMONIALS } from "@/lib/testimonials";

export function TestimonialsSection({ limit }: { limit?: number }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <section className="py-16 sm:py-20" style={{ background: "linear-gradient(180deg, oklch(0.97 0.02 30) 0%, oklch(0.96 0.03 200) 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— Testimonials</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Don't take our words for granted</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {items.map((t) => (
            <article key={t.name} className="rounded-2xl bg-white p-6 sm:p-7 border border-border shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`size-11 rounded-full grid place-items-center text-sm ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-foreground/80 leading-relaxed">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
