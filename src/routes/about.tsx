import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Award, Heart, Users, ArrowRight, Sparkles, GraduationCap, Stethoscope } from "lucide-react";
import doctor from "@/assets/dr-selamawit.jpg";
import abenezer from "@/assets/dr-abenezer.png";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Dr. Selamawit Abraham Mesfin — Finan Dental" },
      { name: "description", content: "Meet Dr. Selamawit Abraham Mesfin, founder of Finan Speciality Dental Clinic — 10+ years of experience in modern dentistry in Addis Ababa." },
      { property: "og:title", content: "About Dr. Selamawit Abraham Mesfin" },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/about" }],
  }),
});

function AboutPage() {
  return (
    <Layout>
      {/* Dark hero like image-1 */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(110,231,255,0.25) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-36 sm:pt-44 pb-14 sm:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs border border-white/20">
              <Sparkles className="size-3.5 text-brand-glow" /> About Finan Dental
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Your trusted dental <span className="text-brand-glow">family in Addis</span>
            </h1>
            <p className="mt-5 text-white/75 max-w-xl">
              Founded by Dr. Selamawit Abraham Mesfin (HO, MPH, DDM), Finan Speciality Dental
              Clinic delivers modern, gentle and affordable dental care — built around comfort
              and long-term oral health.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm hover:bg-brand-glow hover:text-brand-dark">
                Book Appointment <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white px-6 py-3 text-sm border border-white/20 hover:bg-white/20">
                Our Services
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full">
            <img src={doctor} alt="Dr. Selamawit Abraham Mesfin" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand text-xs tracking-[0.25em] uppercase">— Our Doctors</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Meet the team behind your smile</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Dr. Selamawit Abraham Mesfin",
                role: "Founder · HO, MPH, DDM · 5+ years",
                img: doctor,
                desc: "Founder of Finan Speciality Dental Clinic, Dr. Selamawit leads a warm, specialist-driven team committed to modern, gentle and affordable dentistry for every family in Addis Ababa.",
                icon: Stethoscope,
              },
              {
                name: "Dr. Abenezer Dagnachew",
                role: "General Dentist · BDS",
                img: abenezer,
                desc: "Dr. Abenezer brings a calm, patient-first approach to general dentistry — from routine check-ups and fillings to cosmetic work — focused on long-term oral health and a comfortable experience for every patient.",
                icon: GraduationCap,
              },
            ].map((d) => (
              <article key={d.name} className="rounded-3xl bg-white border border-border overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-secondary/40 overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="inline-flex items-center gap-2 text-xs text-brand">
                    <d.icon className="size-3.5" /> {d.role}
                  </span>
                  <h3 className="mt-2 text-2xl">{d.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stat cards */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-3 gap-5">
          {[
            { icon: Award, t: "10+ Years Experience", d: "A decade of clinical excellence and continuous training in modern dentistry." },
            { icon: Users, t: "Specialist Team", d: "Specialists across orthodontics, surgery, pediatrics and cosmetic care." },
            { icon: Heart, t: "Patient-First Care", d: "Every plan is personalized — we listen first, treat gently, and follow up." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-white border border-border p-6">
              <span className="size-12 rounded-full bg-brand-soft text-brand grid place-items-center">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinic photos */}
      <section className="pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 gap-4">
          {SITE.clinicPhotos.map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-border aspect-[4/3]">
              <img src={src} alt={`Clinic ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl">Care that feels like family</h2>
          <p className="mt-5 text-muted-foreground">
            From the moment you walk in, our team takes the time to understand your concerns and
            comfort. Dr. Selamawit and her colleagues focus on preventive education, transparent
            treatment options and pain-free procedures — so every visit feels easy and every
            patient leaves smiling.
          </p>
        </div>
      </section>
    </Layout>
  );
}
