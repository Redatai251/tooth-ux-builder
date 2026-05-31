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
      {
        name: "description",
        content:
          "Gentle, advanced and affordable dental care for the whole family at Finan Speciality Dental Clinic in Addis Ababa. Book your appointment today.",
      },
      { property: "og:title", content: "Finan Speciality Dental Clinic — Addis Ababa" },
      {
        property: "og:description",
        content:
          "Comprehensive dental services — preventive care, implants, braces, cosmetic dentistry and more.",
      },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/" }],
  }),
});

function Index() {
  return (
    <Layout>
      <Hero />
      <ServicesGrid />

      {/* Our Doctors */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-brand text-xs tracking-[0.25em] uppercase">— Our Doctors</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Meet the team behind your smile
            </h2>
            <p className="mt-4 text-muted-foreground">
              A warm, specialist-driven team committed to modern, gentle and affordable dentistry.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Dr. Selamawit Abraham Mesfin",
                role: "Founder · HO, MPH, DDM · 5+ years",
                img: doctor,
                desc: "Founder of Finan Speciality Dental Clinic — leading every treatment plan with comfort, science and care.",
                icon: Stethoscope,
              },
              {
                name: "Dr. Abenezer Dagnachew",
                role: "General Dentist · BDS",
                img: abenezer,
                desc: "Calm, patient-first general dentistry — routine check-ups, fillings and cosmetic work focused on long-term oral health.",
                icon: GraduationCap,
              },
            ].map((d) => (
              <article
                key={d.name}
                className="rounded-3xl bg-white border border-border overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-secondary/40 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-2 text-xs text-brand">
                    <d.icon className="size-3.5" /> {d.role}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl">{d.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              { icon: Award, t: "5+ Years" },
              { icon: Users, t: "Specialist Team" },
              { icon: Heart, t: "Patient-First" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl bg-white border border-border p-4 flex items-center gap-3"
              >
                <span className="size-10 rounded-full bg-brand-soft text-brand grid place-items-center">
                  <c.icon className="size-4" />
                </span>
                <span className="text-sm">{c.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-6 py-3 text-sm hover:bg-brand"
            >
              More About Us <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm border border-border hover:bg-secondary"
            >
              Book Appointment
            </Link>
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
              Flexible installments and a student discount — great dental care should be accessible
              to everyone.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                t: "Flexible Payment Plans",
                pts: [
                  "Up to 3 installments",
                  "No interest, no hidden fees",
                  "Available on most treatments",
                ],
              },
              {
                t: "Student Discount",
                pts: [
                  "Valid student ID required",
                  "Applies to most services",
                  "Ask at reception when booking",
                ],
              },
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
            <Link
              to="/payment-plans"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-white px-6 py-3 text-sm hover:opacity-90"
            >
              See all payment options <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
