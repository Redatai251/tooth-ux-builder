import { HeartPulse, Users, Headphones, Video, ArrowUpRight } from "lucide-react";
import smile from "@/assets/dental-smile.jpg";

const features = [
  { icon: HeartPulse, title: "Best Medical Service" },
  { icon: Users, title: "Expert Medical Team" },
  { icon: Headphones, title: "24/7 Instant Support" },
  { icon: Video, title: "Virtual Consultation" },
];

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={smile}
              alt="Healthy bright smile"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 size-12 rounded-full bg-white shadow-elegant grid place-items-center">
            <div className="size-3 rounded-full bg-brand" />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Expert Care for Every Tooth,
            <br />
            <span className="text-brand">Restore Your Confidence</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            From routine cleanings to advanced procedures, our expert team is
            dedicated to helping you achieve and maintain optimal dental health
            throughout your life.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-card p-5 shadow-soft hover:shadow-elegant transition border border-border/50"
              >
                <div className="size-10 rounded-xl bg-brand-soft grid place-items-center text-brand">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our expert team delivers trusted, compassionate care.
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground pl-6 pr-2 py-2.5 text-sm font-medium shadow-soft hover:shadow-elegant transition"
          >
            More About Us
            <span className="size-8 rounded-full bg-white/20 grid place-items-center">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
