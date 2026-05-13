import { ArrowRight, Check, Star } from "lucide-react";
import why from "@/assets/denture-clinic.jpg";
import discount from "@/assets/denture-discount.jpg";
import a1 from "@/assets/denture-team-1.png";
import a2 from "@/assets/denture-team-2.png";
import a3 from "@/assets/denture-team-3.png";

const features = [
  "Friendly Environment",
  "Experienced Dental",
  "Personalized Patient care",
  "Pain-Free Dentistry",
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        {/* left visual stack */}
        <div className="space-y-5">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={why} alt="Excellence" className="w-full h-[420px] object-cover" loading="lazy" />
            <div className="absolute top-5 left-5 rounded-full bg-white/95 backdrop-blur px-4 py-2 inline-flex items-center gap-1 text-xs font-bold">
              <Star className="size-3 fill-brand text-brand" /> 15+ Years Excellence ✶ 15+ Years Excellence
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3">
                <div className="flex -space-x-2">
                  {[a1, a2, a3].map((s, i) => (
                    <img key={i} src={s} alt="" className="size-8 rounded-full ring-2 ring-white object-cover bg-white" />
                  ))}
                </div>
                <p className="text-xs">Trusted by our happy<br />patient care</p>
              </div>
              <div className="rounded-2xl bg-brand text-white p-3 text-center w-20">
                <div className="text-xl font-bold">27%</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-dark text-white p-6 flex items-center gap-5 overflow-hidden relative">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-brand-glow">Special Offer</p>
              <h4 className="mt-2 text-xl font-semibold">Bigger Discounts, Brighter Smiles - 25% Off Now!</h4>
            </div>
            <img src={discount} alt="" className="size-24 rounded-2xl object-cover" loading="lazy" />
          </div>
        </div>

        {/* right copy */}
        <div>
          <p className="text-brand text-sm font-bold tracking-[0.25em]">— WHY CHOOSE US ?</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.08]">
            Your trusted dental partner for every family member
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            We provide comprehensive dental care for patients of all ages, ensuring healthy, confident smiles for every member of your family.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-2xl border border-border p-4">
                <span className="size-9 rounded-full bg-brand-soft grid place-items-center text-brand">
                  <Check className="size-5" />
                </span>
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="#"
              className="rounded-full bg-brand text-white pl-6 pr-1.5 py-1.5 text-sm font-semibold inline-flex items-center gap-3 hover:opacity-90 transition"
            >
              Book An Appointment
              <span className="size-9 rounded-full bg-white text-brand grid place-items-center">
                <ArrowRight className="size-4" />
              </span>
            </a>
            <div className="font-cursive italic text-2xl text-brand">Dr. Signature</div>
          </div>
        </div>
      </div>
    </section>
  );
}
