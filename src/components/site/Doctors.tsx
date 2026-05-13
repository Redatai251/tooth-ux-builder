import { ArrowRight } from "lucide-react";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";

const doctors = [
  { img: d2, name: "Dr. James Carter", role: "Dental Implant Specialist" },
  { img: d1, name: "Dr. Sarah Mitchell", role: "Dental Implant Specialist" },
  { img: d3, name: "Dr. Emily Stone", role: "Dental Implant Specialist" },
];

export function Doctors() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Meet Our Specialist
          </h2>
          <p className="text-muted-foreground self-end">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="rounded-3xl border border-border bg-card overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} className="size-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="hidden lg:grid absolute -right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-brand text-brand-foreground place-items-center shadow-soft">
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
