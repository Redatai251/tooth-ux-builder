import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { InfoStrip } from "@/components/site/InfoStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Features } from "@/components/site/Features";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Denture — Healthy Teeth, Happy Life Starts Here" },
      { name: "description", content: "Gentle, advanced and affordable dental care for the whole family. Book your appointment today." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <InfoStrip />
      <About />
      <Services />
      <WhyChoose />
      <Steps />
      <CaseStudies />
      <Features />
      <Doctors />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
