import { Sparkles, Smile, Shield, Stethoscope, Activity, Bone } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Teeth Whitening", desc: "Brighten your smile with safe, professional whitening." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Veneers, bonding and smile makeovers." },
  { icon: Shield, title: "Preventive Care", desc: "Cleanings and checkups to protect your teeth." },
  { icon: Stethoscope, title: "Root Canals", desc: "Painless endodontic care from specialists." },
  { icon: Activity, title: "Orthodontics", desc: "Modern braces and clear aligners." },
  { icon: Bone, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement." },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium shadow-soft">
            <span className="size-1.5 rounded-full bg-accent-lime" /> Popular Categories
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Advanced Dental Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Comprehensive dental treatments tailored to your needs, delivered with
            expertise and care.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl bg-card p-7 shadow-soft border border-border/50 hover:-translate-y-1 hover:shadow-elegant transition"
            >
              <div className="size-14 rounded-2xl grid place-items-center text-brand-foreground"
                style={{ background: "var(--brand-gradient)" }}>
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-brand group-hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
