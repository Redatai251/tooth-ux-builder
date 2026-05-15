import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/home-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-xs text-brand-dark border border-white/60">
            <CheckCircle2 className="size-3.5 text-brand" /> 500+ patients treated
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
            Healthy teeth, happy life starts here
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Gentle, advanced and affordable dental care for the whole family at
            Finan Speciality Dental Clinic — Addis Ababa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm hover:opacity-90"
            >
              Book Appointment <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm border border-border hover:bg-secondary"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src={hero}
              alt="Friendly dentist at Finan Speciality Dental Clinic"
              className="w-full h-full object-cover"
              width={1280}
              height={1280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
