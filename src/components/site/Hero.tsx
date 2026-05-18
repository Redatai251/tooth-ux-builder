import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* layered gradient like the reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(110,231,255,0.30) 0%, transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 40%)",
        }}
      />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-36 sm:pt-44 pb-16 sm:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs border border-white/20">
            <Sparkles className="size-3.5 text-brand-glow" />
            <span className="text-white/90">The #1 Speciality Dental Clinic in Addis Ababa</span>
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Transforming smiles{" "}
            <span className="text-brand-glow">with expert care</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto">
            Gentle, advanced and affordable dental care for the whole family at
            Finan Speciality Dental Clinic — Addis Ababa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-sm hover:bg-brand-glow hover:text-brand-dark transition"
            >
              Book Appointment <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white px-7 py-3.5 text-sm border border-white/20 hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Big landscape video — full viewport feel */}
        <div className="mt-14 sm:mt-20 mx-auto max-w-6xl">
          <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] bg-black h-[70vh] sm:h-[85vh] min-h-[420px]">
            <video
              src="/clinic-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
