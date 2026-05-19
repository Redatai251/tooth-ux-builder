import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/payment-plans")({
  component: PaymentPlansPage,
  head: () => ({
    meta: [
      { title: "Payment Plans — Finan Speciality Dental Clinic" },
      { name: "description", content: "Flexible installments and student discounts. Care that fits your budget at Finan Speciality Dental Clinic." },
      { property: "og:title", content: "Payment Plans — Finan Dental" },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/payment-plans" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/payment-plans" }],
  }),
});

const plans = [
  {
    title: "Flexible Payment Plans",
    desc: "Split your treatment cost into easy installments — up to 3 times — with no hidden fees.",
    points: [
      "Pay in up to 3 installments",
      "No interest, no surprise fees",
      "Available on most treatments",
      "Quick approval at the clinic",
    ],
  },
  {
    title: "Student Discount",
    desc: "Are you a student? Show your valid student ID and get a special discount on your dental care.",
    points: [
      "Valid student ID required",
      "Applies to most services",
      "Stackable with seasonal offers",
      "Ask at reception when booking",
    ],
  },
];

function PaymentPlansPage() {
  return (
    <Layout>
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— Payment Plans</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Care that fits your budget</h1>
          <p className="mt-5 text-muted-foreground">
            We believe everyone deserves great dental care. Flexible installments and student
            discounts make it possible.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white border border-border p-7">
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm">
                    <span className="size-6 rounded-full bg-brand-soft text-brand grid place-items-center">
                      <Check className="size-3.5" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div
            className="rounded-3xl p-10 sm:p-14 text-center text-white shadow-lg"
            style={{ background: "var(--teal-gradient)" }}
          >
            <h2 className="text-3xl sm:text-4xl">Have questions about payment?</h2>
            <p className="mt-3 text-white/85">Our team is happy to help you find the right plan.</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-6 py-3 text-sm hover:bg-white/90"
            >
              Talk to us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
