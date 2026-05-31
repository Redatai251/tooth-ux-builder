import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Finan Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Visit Finan Speciality Dental Clinic at Abrams Building, Cameroon St, Addis Ababa. Call, WhatsApp or Telegram us today.",
      },
      { property: "og:title", content: "Contact Finan Dental Clinic" },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/contact" }],
  }),
});

function ContactPage() {
  function handleSend(channel: "whatsapp" | "telegram") {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const service = (document.getElementById("service") as HTMLSelectElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    if (!name || !phone || !service || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const text = `🦷 Contact Request — ${SITE.name}\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    const encoded = encodeURIComponent(text);
    const url =
      channel === "whatsapp"
        ? `https://wa.me/${SITE.whatsapp}?text=${encoded}`
        : `https://t.me/share/url?url=${encodeURIComponent(SITE.domain)}&text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Layout>
      <section className="pt-36 sm:pt-44 pb-14" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We're here to answer your questions and help you book the right care.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white border border-border p-6 sm:p-8 space-y-5">
            <h2 className="text-2xl">Send us a message</h2>
            <div>
              <label className="text-sm">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="text-sm">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="+251 ..."
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label className="text-sm">Service</label>
              <select
                id="service"
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleSend("whatsapp")}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Send via WhatsApp
              </button>
              <button
                onClick={() => handleSend("telegram")}
                className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white px-6 py-3 text-sm hover:opacity-90"
              >
                <Send className="size-4" /> Send via Telegram
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-white border border-border p-6">
              <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center">
                <Phone className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">Call us</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {SITE.phones.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-foreground/80 hover:text-brand"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6">
              <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center">
                <MapPin className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">Visit us</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.line3}
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6">
              <span className="size-11 rounded-full bg-brand-soft text-brand grid place-items-center">
                <Clock className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">Opening hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between gap-3">
                    <span>{h.d}</span>
                    <span className="text-foreground/80">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
