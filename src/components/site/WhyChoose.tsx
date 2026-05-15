import { Check } from "lucide-react";
import clinic from "@/assets/clinic-interior-1.jpg";

const points = [
  "Friendly, calming environment",
  "Experienced specialist team",
  "Personalized patient care",
  "Pain-free dentistry",
];

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img src={clinic} alt="Finan dental clinic interior" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
        </div>
        <div>
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— Why Choose Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Your trusted dental partner for every family member
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            We provide comprehensive dental care for patients of all ages, ensuring healthy,
            confident smiles for every member of your family.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-border p-3.5">
                <span className="size-8 rounded-full bg-brand-soft grid place-items-center text-brand">
                  <Check className="size-4" />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
