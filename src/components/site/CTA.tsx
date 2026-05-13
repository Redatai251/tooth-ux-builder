import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div
        className="mx-auto max-w-7xl px-10 py-16 rounded-3xl text-center text-brand-foreground shadow-elegant"
        style={{ background: "var(--brand-gradient)" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Ready for a Healthier, Brighter Smile?
        </h2>
        <p className="mt-4 max-w-xl mx-auto opacity-90">
          Book your consultation today and take the first step toward the smile
          you've always wanted.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand pl-6 pr-2 py-2.5 font-medium hover:scale-[1.02] transition"
        >
          Book Appointment
          <span className="size-8 rounded-full bg-brand text-white grid place-items-center">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
