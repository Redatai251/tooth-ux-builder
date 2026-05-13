import { ArrowUpRight, Check } from "lucide-react";
import doctor from "@/assets/denture-doctor.png";
import about1 from "@/assets/denture-feature-1.jpg";
import about2 from "@/assets/denture-case-3.jpg";

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-brand text-sm font-bold tracking-[0.25em]">— ABOUT US</p>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl leading-[1.08]">
          Dedicated to creating healthier{" "}
          <span className="inline-block align-middle size-12 rounded-full overflow-hidden mx-1">
            <img src={about1} alt="" className="size-full object-cover" loading="lazy" />
          </span>{" "}
          smiles compassionate{" "}
          <span className="inline-block align-middle size-12 rounded-full overflow-hidden mx-1">
            <img src={about2} alt="" className="size-full object-cover" loading="lazy" />
          </span>{" "}
          care advanced technology a patient-first approach always
        </h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Why Families Count On Us For Dentistry</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { t: "Trusted Experts", d: "Backed by 15+ years of clinical excellence." },
                { t: "Gentle Care", d: "Pain-free approach with calming environment." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border p-6 hover:shadow-soft transition">
                  <div className="size-10 rounded-full bg-brand-soft grid place-items-center text-brand">
                    <Check className="size-5" />
                  </div>
                  <h4 className="mt-4 font-semibold">{c.t}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{c.d}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-brand-soft p-6 flex items-center gap-5">
              <div className="text-5xl font-bold text-brand">140+</div>
              <p className="text-sm text-foreground/70">
                Trusted by over 500 patients who left with healthier teeth, brighter smiles, and lasting confidence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-4">Personalized Dental Solutions</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Join us and create smiles that truly inspire confidence.{" "}
                <a href="#" className="text-brand font-semibold inline-flex items-center gap-1">
                  Contact Us <ArrowUpRight className="size-4" />
                </a>
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-brand-soft p-8 flex items-end justify-center min-h-[420px]">
            <img src={doctor} alt="Dentist" className="max-h-[480px] object-contain" loading="lazy" />
            <div className="absolute top-6 right-6 rounded-2xl bg-white p-4 shadow-soft">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-white border grid place-items-center text-xs font-bold">G</div>
                <div>
                  <div className="text-lg font-bold">4.8/5</div>
                  <p className="text-xs text-muted-foreground">520 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
