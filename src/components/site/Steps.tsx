import { CalendarCheck, Stethoscope, ClipboardList, Smile } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: CalendarCheck,
    t: "Book Appointment",
    d: "Schedule online or call us at your convenience.",
  },
  {
    n: "02",
    icon: Stethoscope,
    t: "Consultation & Checkup",
    d: "We assess your smile and listen to your concerns.",
  },
  {
    n: "03",
    icon: ClipboardList,
    t: "Personal Treatment Plan",
    d: "A tailored plan for your goals and budget.",
  },
  {
    n: "04",
    icon: Smile,
    t: "Enjoy a Bright Smile",
    d: "Walk out confident with results that last.",
  },
];

export function Steps() {
  return (
    <section className="py-16 sm:py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— How It Works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Step-by-step care for confident smiles
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white p-6 border border-border">
              <div className="flex items-center justify-between">
                <span className="size-12 rounded-full bg-brand-soft text-brand grid place-items-center">
                  <s.icon className="size-5" />
                </span>
                <span className="text-xs tracking-widest text-muted-foreground">STEP {s.n}</span>
              </div>
              <h3 className="mt-5 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
