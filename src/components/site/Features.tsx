import { ArrowRight, TrendingUp } from "lucide-react";
import f1 from "@/assets/denture-feature-1.jpg";
import f2 from "@/assets/denture-feature-2.jpg";
import f3 from "@/assets/denture-clinic.jpg";
import a1 from "@/assets/denture-team-1.png";
import a2 from "@/assets/denture-team-2.png";
import a3 from "@/assets/denture-team-3.png";

export function Features() {
  return (
    <section className="py-24 bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand text-sm font-bold tracking-[0.25em]">— CORE FEATURES</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Our core commitment to healthy, lasting smiles
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white p-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={f1} alt="Pediatric" className="size-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Pediatric Dentistry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our orthodontic treatments, including braces and clear aligners, gently straighten teeth.
            </p>
          </div>

          <div className="rounded-3xl bg-brand text-white p-6 flex flex-col">
            <h3 className="text-2xl font-semibold leading-snug">Personalized Treatment for Every Patient</h3>
            <div className="mt-auto rounded-2xl overflow-hidden aspect-video">
              <img src={f2} alt="Tools" className="size-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <div className="text-3xl font-bold">1.3</div>
              <div className="text-xs flex items-center gap-1 text-brand-glow">
                <TrendingUp className="size-3.5" /> +0.5 Points From Last Months
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={f3} alt="Care" className="size-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[a1, a2, a3].map((s, i) => (
                  <img key={i} src={s} alt="" className="size-9 rounded-full ring-2 ring-white object-cover bg-white" />
                ))}
              </div>
              <p className="text-sm">Join Our 30,000+ Happy Smiles Family</p>
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold text-sm">
              Book An Appointment Now <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
