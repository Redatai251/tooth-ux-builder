import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Send, Calendar as CalIcon } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import clinic2 from "@/assets/clinic-interior-2.jpg";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/book")({
  component: BookPage,
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book Appointment — Finan Speciality Dental Clinic" },
      {
        name: "description",
        content:
          "Book your dental appointment at Finan Speciality Dental Clinic in Addis Ababa. Send your request via WhatsApp or Telegram.",
      },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/book" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/book" }],
  }),
});

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  age: z.coerce.number().int().min(1).max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(25),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  timeHour: z.coerce.number().int().min(1).max(12),
  timeMinute: z.coerce.number().int().min(0).max(59),
  timePeriod: z.enum(["AM", "PM"]),
  notes: z.string().max(500).optional().or(z.literal("")),
});

function BookPage() {
  const { service: presetService } = useSearch({ from: "/book" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = formSchema.safeParse(raw);
    if (!parsed.success) {
      const out: Record<string, string> = {};
      for (const issue of parsed.error.issues) out[issue.path[0] as string] = issue.message;
      setErrors(out);
      return;
    }
    const v = parsed.data;
    const serviceLabel = SERVICES.find((s) => s.slug === v.service)?.title ?? v.service;
    const time = `${v.timeHour}:${String(v.timeMinute).padStart(2, "0")} ${v.timePeriod}`;
    const message = `🦷 New Appointment Request — ${SITE.name}

Name: ${v.fullName}
Age: ${v.age}
Phone: ${v.phone}
Service: ${serviceLabel}
Preferred Date: ${v.date}
Preferred Time: ${time}
Notes: ${v.notes || "—"}`;

    setPendingMessage(message);
  }

  function sendVia(channel: "whatsapp" | "telegram") {
    if (!pendingMessage) return;
    const encoded = encodeURIComponent(pendingMessage);
    const url =
      channel === "whatsapp"
        ? `https://wa.me/${SITE.whatsapp}?text=${encoded}`
        : `https://t.me/share/url?url=${encodeURIComponent(SITE.domain)}&text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Layout>
      <section className="pt-36 sm:pt-44 pb-12" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Book Your Appointment</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Fill the form — choose WhatsApp or Telegram to send your details to our reception.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl bg-white border border-border p-6 sm:p-8 space-y-5"
          >
            <Field label="Full Name" name="fullName" error={errors.fullName} />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Age" name="age" type="number" min={1} max={120} error={errors.age} />
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+251 ..."
                error={errors.phone}
              />
            </div>

            <div>
              <Label>Service</Label>
              <select
                name="service"
                defaultValue={presetService ?? ""}
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label>Preferred Date</Label>
                <div className="relative mt-1.5">
                  <CalIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    min={new Date().toISOString().slice(0, 10)}
                    className="w-full rounded-lg border border-input bg-white pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
              </div>
              <div>
                <Label>Preferred Time (12h)</Label>
                <div className="mt-1.5 flex items-center gap-2">
                  <select
                    name="timeHour"
                    defaultValue="9"
                    className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                  <span>:</span>
                  <select
                    name="timeMinute"
                    defaultValue="0"
                    className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm"
                  >
                    {[0, 15, 30, 45].map((m) => (
                      <option key={m} value={m}>
                        {String(m).padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  <select
                    name="timePeriod"
                    defaultValue="AM"
                    className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <Label>Additional Notes (optional)</Label>
              <textarea
                name="notes"
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
                placeholder="Anything we should know?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark text-white px-7 py-3 text-sm hover:bg-brand"
            >
              <Send className="size-4" /> Send Request
            </button>

            {pendingMessage && (
              <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                <p className="text-sm font-medium">Choose how to send your request:</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => sendVia("whatsapp")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm hover:opacity-90"
                  >
                    <MessageCircle className="size-4" /> Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => sendVia("telegram")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white px-5 py-2.5 text-sm hover:opacity-90"
                  >
                    <Send className="size-4" /> Send via Telegram
                  </button>
                </div>
              </div>
            )}
          </form>

          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-white border border-border p-6">
              <h3 className="text-lg flex items-center gap-2">
                <Phone className="size-4 text-brand" /> Call us directly
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {SITE.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src={SITE.clinicPhotos[0]}
                alt="Clinic interior"
                loading="lazy"
                className="rounded-2xl aspect-square object-cover border border-border"
              />
              <img
                src={clinic2}
                alt="Treatment room"
                loading="lazy"
                className="rounded-2xl aspect-square object-cover border border-border"
              />
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
