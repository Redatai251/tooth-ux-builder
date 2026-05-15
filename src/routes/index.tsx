import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

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
      <WhyChoose />
      <Steps />
      <TestimonialsSection limit={4} />
    </Layout>
  );
}
