import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Finan Speciality Dental Clinic" },
      { name: "description", content: "Visit Finan Speciality Dental Clinic at Abrams Building, Cameroon St, Addis Ababa. Call, WhatsApp or Telegram us today." },
      { property: "og:title", content: "Contact Finan Dental Clinic" },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/contact" }],
  }),
});

function ContactPage() {
  return (
    <Layout>
      <section className="py-14" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We're here to answer your questions and help you book the right care.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white border border-border p-6">
            <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center"><Phone className="size-5" /></span>
            <h3 className="mt-5 text-lg">Call us</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {SITE.phones.map((p) => (
                <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="text-foreground/80 hover:text-brand">{p}</a></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6">
            <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center"><MapPin className="size-5" /></span>
            <h3 className="mt-5 text-lg">Visit us</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6">
            <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center"><Clock className="size-5" /></span>
            <h3 className="mt-5 text-lg">Opening hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {SITE.hours.map((h) => (
                <li key={h.d} className="flex justify-between gap-3"><span>{h.d}</span><span className="text-foreground/80">{h.h}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6 flex flex-wrap gap-3 justify-center">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm hover:opacity-90">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a href={`https://t.me/${SITE.telegramUser}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white px-6 py-3 text-sm hover:opacity-90">
            <Send className="size-4" /> Telegram
          </a>
        </div>
      </section>
    </Layout>
  );
}
