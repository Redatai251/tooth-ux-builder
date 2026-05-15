import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Patient Stories — Finan Speciality Dental Clinic" },
      { name: "description", content: "Real patients, real smiles. See what our community says about Finan Speciality Dental Clinic." },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/testimonials" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <Layout>
      <section className="py-14" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Patient Stories</h1>
          <p className="mt-4 text-muted-foreground">
            Real feedback from patients we have cared for.
          </p>
        </div>
      </section>
      <TestimonialsSection />
    </Layout>
  );
}
