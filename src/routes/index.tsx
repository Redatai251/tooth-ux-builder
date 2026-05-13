import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Doctors } from "@/components/site/Doctors";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DentCure — Modern Dental Care for a Brighter Smile" },
      {
        name: "description",
        content:
          "Gentle, personalized dental care from cleanings to advanced cosmetic treatments. Book your appointment with DentCure today.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Doctors />
      <CTA />
      <Footer />
    </main>
  );
}
