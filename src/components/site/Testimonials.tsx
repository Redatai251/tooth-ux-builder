import { Quote, Star } from "lucide-react";
import a1 from "@/assets/denture-team-1.png";
import a2 from "@/assets/denture-team-2.png";

const testimonials = [
  {
    img: a1,
    name: "Dr. Marvin McKinney",
    role: "Chief Dentist",
    quote: "The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better.",
    patients: "8k",
    cases: "2k",
  },
  {
    img: a2,
    name: "Dr. Ralph Edwards",
    role: "Consultant Dentist",
    quote: "The team is amazing! They made me feel comfortable and explained every step. My smile has never looked better.",
    patients: "10k",
    cases: "2.4k",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-12">
          <div>
            <p className="text-brand text-sm font-bold tracking-[0.25em]">— TESTIMONIALS</p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              What our happy patients say here
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Discover real stories from patients who trusted us with their smiles and left happier than ever.
            </p>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-brand text-brand" />)}
              <span className="font-bold ml-2">4.8/5</span>
              <span className="text-sm text-muted-foreground">Based on 250 review</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-3xl bg-white p-8 relative">
              <Quote className="absolute top-6 right-6 size-10 text-brand-soft fill-brand-soft" />
              <p className="text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={t.img} alt={t.name} className="size-14 rounded-full object-cover bg-brand-soft" loading="lazy" />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Dentist patients</p>
                  <p className="text-2xl font-bold text-brand">{t.patients}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Complete Cases</p>
                  <p className="text-2xl font-bold text-brand">{t.cases}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Your Smile Journey Starts Here, <a href="#" className="text-brand font-semibold">Join Now →</a>
        </p>
      </div>
    </section>
  );
}
