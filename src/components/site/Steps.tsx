import { CalendarCheck, Stethoscope, ClipboardList, Smile } from "lucide-react";

const steps = [
  { n: "01", icon: CalendarCheck, t: "Book Appointment", d: "Schedule your visit online or by phone at your convenience." },
  { n: "02", icon: Stethoscope, t: "Consultation & Checkup", d: "We assess your smile and listen to your concerns carefully." },
  { n: "03", icon: ClipboardList, t: "Personal Treatment Plan", d: "Tailored plan crafted for your goals, comfort and budget." },
  { n: "04", icon: Smile, t: "Enjoy a Bright Smile", d: "Walk out confident with results that last a lifetime." },
];

export function Steps() {
  return (
    <section className="py-24 bg-brand-darker text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-glow text-sm font-bold tracking-[0.25em]">— HOW IT WORKS</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Step-by-step care for healthy, confident smiles
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-7 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <span className="size-14 rounded-full bg-brand grid place-items-center">
                  <s.icon className="size-6" />
                </span>
                <span className="text-xs font-bold tracking-widest text-white/50">STEP {s.n}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60">{s.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/70">
          Let's make something great work together.{" "}
          <a href="#" className="text-brand-glow font-semibold">Get Free Quote →</a>
        </p>
      </div>
    </section>
  );
}
