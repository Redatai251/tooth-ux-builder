import { ArrowUpRight } from "lucide-react";
import c1 from "@/assets/denture-case-1.jpg";
import c2 from "@/assets/denture-case-2.jpg";
import c3 from "@/assets/denture-case-3.jpg";

const cases = [
  { img: c1, tags: ["Braces", "Extractions", "Implants"], title: "From Hesitation to Happy Smiles A Dental Success Story" },
  { img: c2, tags: ["Braces", "Extractions"], title: "Transforming Patient Confidence at BrightCare Dental Clinic" },
  { img: c3, tags: ["Extractions"], title: "How Modern Dentistry Increased Patient Visits by 60%" },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-brand text-sm font-bold tracking-[0.25em]">— CASE STUDY</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.08]">
              Real patient stories, real smiles, real results
            </h2>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-3xl overflow-hidden bg-brand-soft/40 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="size-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white text-brand text-xs font-medium px-3 py-1">{t}</span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{c.title}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-brand text-sm font-semibold">
                  Read Case <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
