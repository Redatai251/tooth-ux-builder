import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Award, Heart, Users, ArrowRight } from "lucide-react";
import doctor from "@/assets/dr-selamawit.jpg";

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
      <section className="py-14 sm:py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden bg-white shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full">
            <img src={doctor} alt="Dr. Selamawit Abraham Mesfin" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-brand text-xs tracking-[0.25em] uppercase">— Meet The Founder</p>
            <h1 className="mt-3 text-4xl sm:text-5xl">Dr. Selamawit Abraham Mesfin</h1>
            <p className="mt-2 text-brand-dark">HO, MPH, DDM</p>
            <p className="mt-5 text-muted-foreground">
              Dr. Selamawit founded Finan Speciality Dental Clinic in 2016 with a clear mission:
              bring modern, gentle and affordable dentistry to families in Addis Ababa. With more
              than a decade of clinical experience, she leads a warm, specialist-driven team
              dedicated to long-term oral health.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm hover:opacity-90">
                Book Visit <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm border border-border hover:bg-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-3 gap-5">
          {[
            { icon: Award, t: "10+ Years Experience", d: "A decade of clinical excellence and continuous training in modern dentistry." },
            { icon: Users, t: "Specialist Team", d: "A handpicked team of specialists across orthodontics, surgery, pediatrics and cosmetic care." },
            { icon: Heart, t: "Patient-First Care", d: "Every treatment plan is personalized — we listen first, treat gently, and follow up." },
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
