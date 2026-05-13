import { ArrowRight } from "lucide-react";
import doctor from "@/assets/denture-hero.png";
import a1 from "@/assets/denture-team-1.png";
import a2 from "@/assets/denture-team-2.png";
import a3 from "@/assets/denture-team-3.png";
import a4 from "@/assets/denture-team-4.png";

const avatars = [a1, a2, a3, a4];

function Avatars({ n = 4 }: { n?: number }) {
  return (
    <div className="flex -space-x-3">
      {avatars.slice(0, n).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="size-9 rounded-full ring-2 ring-white object-cover bg-white"
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden text-white"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[640px]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/15">
            <Avatars n={4} />
            <span className="text-sm font-medium">15k Satisficed Patients</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Healthy teeth happy<br />life start here
          </h1>

          <p className="mt-6 text-white/75 max-w-md">
            Experience gentle, advanced, and affordable dental care designed to
            keep your smile bright and your life healthier.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="rounded-full bg-white text-brand-dark pl-6 pr-1.5 py-1.5 text-sm font-semibold inline-flex items-center gap-3 hover:bg-brand-soft transition"
            >
              Get Started Today
              <span className="size-9 rounded-full bg-brand text-white grid place-items-center">
                <ArrowRight className="size-4" />
              </span>
            </a>
            <div className="flex items-center gap-3">
              <Avatars n={3} />
              <p className="text-sm leading-tight">
                Our <span className="font-bold">5</span>k+ Patient<br />Worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-6 rounded-[3rem] bg-white/5 ring-1 ring-white/10" />
            <img
              src={doctor}
              alt="Friendly dentist holding teeth model"
              className="relative w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
