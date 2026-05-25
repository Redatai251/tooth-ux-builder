import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useEffect, useRef, useState } from "react";
function AnimatedCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), i * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [i]);
  return (
    <article
      ref={ref}
      className="group rounded-2xl bg-white border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg">{s.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
        <Link
          to="/book"
          search={{ service: s.slug }}
          className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-brand text-white px-4 py-2 text-xs hover:opacity-90 hover:scale-105 transition-all"
        >
          Book Appointment <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— Our Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Comprehensive dental services for every family smile
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimatedCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
