import { Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* soft glow */}
      <div className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(110,231,255,0.25) 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-14 sm:pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs border border-white/20">
            <Users className="size-3.5 text-brand-glow" />
            <span className="text-white/90">20,000+ Trusted Audience</span>
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Transforming smiles <span className="text-brand-glow">with expert care</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/75 max-w-2xl mx-auto">
            Gentle, advanced and affordable dental care for the whole family at
            Finan Speciality Dental Clinic — Addis Ababa.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm hover:bg-brand-glow hover:text-brand-dark transition"
            >
              Start Your Smile Journey <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white px-6 py-3 text-sm border border-white/20 hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Landscape video with curved border */}
        <div className="mt-12 sm:mt-14 mx-auto max-w-5xl">
          <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden ring-1 ring-white/15 shadow-2xl bg-black aspect-video">
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
