import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { Award, Heart, Users, ArrowRight, Check, GraduationCap, Stethoscope } from "lucide-react";
import doctor from "@/assets/dr-selamawit.jpg";
import abenezer from "@/assets/dr-abenezer.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Finan Speciality Dental Clinic — Addis Ababa" },
      { name: "description", content: "Gentle, advanced and affordable dental care for the whole family at Finan Speciality Dental Clinic in Addis Ababa. Book your appointment today." },
      { property: "og:title", content: "Finan Speciality Dental Clinic — Addis Ababa" },
      { property: "og:description", content: "Comprehensive dental services — preventive care, implants, braces, cosmetic dentistry and more." },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/" }],
  }),
});

function Index() {
  return (
    <Layout>
      <Hero />
      <ServicesGrid limit={6} />

      {/* About preview */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden bg-white shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full">
            <img src={doctor} alt="Dr. Selamawit Abraham Mesfin" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-brand text-xs tracking-[0.25em] uppercase">— About Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Dr. Selamawit Abraham Mesfin</h2>
            <p className="mt-2 text-brand-dark">HO, MPH, DDM · 10+ years experience</p>
            <p className="mt-5 text-muted-foreground">
              Founder of Finan Speciality Dental Clinic. Dr. Selamawit leads a warm,
              specialist-driven team committed to modern, gentle and affordable dentistry
              for every family in Addis Ababa.
            </p>
            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Award, t: "10+ Years" },
                { icon: Users, t: "Specialist Team" },
                { icon: Heart, t: "Patient-First" },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-white border border-border p-4 flex items-center gap-3">
                  <span className="size-10 rounded-full bg-brand-soft text-brand grid place-items-center">
                    <c.icon className="size-4" />
                  </span>
                  <span className="text-sm">{c.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-6 py-3 text-sm hover:bg-brand">
                More About Us <ArrowRight className="size-4" />
              </Link>
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm border border-border hover:bg-secondary">
                Book Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <Steps />

      {/* Payment plans preview */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-brand text-xs tracking-[0.25em] uppercase">— Payment Plans</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Care that fits your budget</h2>
            <p className="mt-4 text-muted-foreground">
              Flexible installments and a student discount — great dental care should be accessible to everyone.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { t: "Flexible Payment Plans", pts: ["Up to 3 installments", "No interest, no hidden fees", "Available on most treatments"] },
              { t: "Student Discount", pts: ["Valid student ID required", "Applies to most services", "Ask at reception when booking"] },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-white border border-border p-6 sm:p-7">
                <h3 className="text-xl">{p.t}</h3>
                <ul className="mt-5 space-y-2.5">
                  {p.pts.map((x) => (
                    <li key={x} className="flex items-center gap-3 text-sm">
                      <span className="size-6 rounded-full bg-brand-soft text-brand grid place-items-center">
                        <Check className="size-3.5" />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/payment-plans" className="inline-flex items-center gap-2 rounded-full bg-foreground text-white px-6 py-3 text-sm hover:opacity-90">
              See all payment options <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
