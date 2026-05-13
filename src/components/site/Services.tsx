import { Smile, Stethoscope, Activity, Sparkles, Crown, Bone } from "lucide-react";

const services = [
  { icon: Smile, title: "Dental Implants", bg: "bg-accent-yellow/60" },
  { icon: Stethoscope, title: "Emergency Dentistry", bg: "bg-accent-green/60" },
  { icon: Activity, title: "Root Canal Treatment", bg: "bg-brand-soft" },
  { icon: Sparkles, title: "Bonding", bg: "bg-brand-soft" },
  { icon: Smile, title: "Whitening", bg: "bg-accent-yellow/60" },
  { icon: Crown, title: "Crowns", bg: "bg-accent-green/60" },
  { icon: Bone, title: "Implants", bg: "bg-accent-pink/60" },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            You Can Get The Highest Quality Service Here
          </h2>
          <p className="text-muted-foreground self-end">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s) => (
            <div key={s.title} className={`rounded-3xl p-7 ${s.bg}`}>
              <div className="size-12 rounded-full bg-brand grid place-items-center text-brand-foreground">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Cras Dapibus The live element always save. Aenean vulputate
                eleifend tellus, aenean leo ligula.
              </p>
              <button className="mt-5 rounded-full bg-brand text-brand-foreground text-xs px-4 py-2 hover:opacity-90 transition">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
