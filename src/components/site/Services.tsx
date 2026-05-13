import { ArrowUpRight, Stethoscope, Smile, Crown, Ambulance } from "lucide-react";

const services = [
  { tag: "General", icon: Stethoscope, title: "Comprehensive Dental Checkups" },
  { tag: "Orthodontics", icon: Smile, title: "Orthodontic Braces & Aligners" },
  { tag: "Surgery", icon: Crown, title: "Custom Crowns & Bridges" },
  { tag: "Emergency", icon: Ambulance, title: "Emergency Dental Services" },
];

export function Services() {
  return (
    <section className="py-24 bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-brand text-sm font-bold tracking-[0.25em]">— OUR SERVICES</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.08]">
              Comprehensive dental services for every family smile
            </h2>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-elegant ${
                i === 0 ? "bg-brand text-white" : "bg-white"
              }`}
            >
              <div className={`size-14 rounded-full grid place-items-center ${i === 0 ? "bg-white/20 text-white" : "bg-brand-soft text-brand"}`}>
                <s.icon className="size-6" />
              </div>
              <p className={`mt-8 text-xs font-semibold uppercase tracking-widest ${i === 0 ? "text-white/70" : "text-brand"}`}>
                {s.tag}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-snug">{s.title}</h3>
              <a
                href="#"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${i === 0 ? "text-white" : "text-brand"}`}
              >
                Learn more <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Join us and create smiles that truly inspire confidence.{" "}
          <a href="#" className="text-brand font-semibold inline-flex items-center gap-1">
            Contact Us <ArrowUpRight className="size-4" />
          </a>
        </p>
      </div>
    </section>
  );
}
