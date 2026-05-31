import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Dental Services — Finan Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Preventive care, cosmetic dentistry, implants, braces, pediatric care, oral surgery and root canal therapy in Addis Ababa.",
      },
      { property: "og:title", content: "Dental Services — Finan Speciality Dental Clinic" },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/services" }],
  }),
});

function ServicesPage() {
  return (
    <Layout>
      <section className="pt-36 sm:pt-44 pb-4 bg-gradient-to-b from-brand-soft/40 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Our Dental Services</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Modern, evidence-based treatments delivered by an experienced specialist team.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </Layout>
  );
}
