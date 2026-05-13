import { Play, ChevronDown } from "lucide-react";
import woman from "@/assets/dental-woman.jpg";
import man from "@/assets/dental-man.jpg";
import kids from "@/assets/dental-kids.jpg";
import tooth from "@/assets/dental-tooth.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-brand text-3xl mb-6">✦</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Providing Digital Dentistry Services
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            A fresh approach to the dental lab is dandy. We were founded for a
            single reason.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-brand text-brand-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book An Appointment
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-brand text-brand px-6 py-3 text-sm font-medium hover:bg-brand-soft transition inline-flex items-center gap-2"
            >
              <Play className="size-4 fill-current" />
              Watch Video
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <img src={tooth} alt="" className="size-20 object-contain" />
              <div>
                <p className="text-sm font-medium">From safety and</p>
                <p className="text-sm font-medium">Regulatory Consulting</p>
                <p className="text-sm font-medium">to reverse</p>
                <div className="mt-2 h-0.5 w-24 bg-brand" />
              </div>
            </div>
            <div className="size-10 rounded-full bg-accent-yellow grid place-items-center text-foreground/80">
              <ChevronDown className="size-5" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "1500", l: "Online Appointment" },
              { n: "120K", l: "Recovered Patients" },
              { n: "96%", l: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-3xl font-bold">{s.n}</div>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right collage */}
        <div className="relative aspect-square max-w-xl mx-auto w-full">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 p-2">
            <div className="size-full rounded-full bg-accent-yellow overflow-hidden">
              <img src={woman} alt="Happy patient" className="size-full object-cover" loading="eager" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 p-2">
            <div className="size-full rounded-full bg-brand overflow-hidden">
              <img src={man} alt="Dentist" className="size-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2">
            <div className="size-full rounded-full bg-accent-green overflow-hidden grid place-items-center">
              <img src={kids} alt="Kids dental care" className="size-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-2">
            <div className="size-full rounded-full bg-brand-glow overflow-hidden">
              <img src={man} alt="Specialist" className="size-full object-cover" />
            </div>
          </div>
          <span className="absolute -top-4 right-1/2 text-brand text-2xl">✦</span>
          <span className="absolute -bottom-4 -right-4 text-accent-yellow text-3xl">✦</span>
        </div>
      </div>
    </section>
  );
}
