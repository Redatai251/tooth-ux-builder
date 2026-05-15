import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Send, Calendar as CalIcon } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import clinic1 from "@/assets/clinic-interior-1.jpg";
import clinic2 from "@/assets/clinic-interior-2.jpg";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/book")({
  component: BookPage,
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book Appointment — Finan Speciality Dental Clinic" },
      { name: "description", content: "Book your dental appointment at Finan Speciality Dental Clinic in Addis Ababa. We confirm via WhatsApp and Telegram." },
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
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    setSubmitting(true);
    const serviceLabel = SERVICES.find((s) => s.slug === v.service)?.title ?? v.service;
    const time = `${v.timeHour}:${String(v.timeMinute).padStart(2, "0")} ${v.timePeriod}`;
    const message =
`🦷 New Appointment Request — ${SITE.name}

Name: ${v.fullName}
Age: ${v.age}
Phone: ${v.phone}
Service: ${serviceLabel}
Preferred Date: ${v.date}
Preferred Time: ${time}
Notes: ${v.notes || "—"}`;

    const encoded = encodeURIComponent(message);
    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encoded}`, "_blank", "noopener,noreferrer");
    // Open Telegram share to forward to the user account
    window.open(`https://t.me/share/url?url=${encodeURIComponent(SITE.domain)}&text=${encoded}`, "_blank", "noopener,noreferrer");

    setDone(true);
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Layout>
      <section className="py-12" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Book Your Appointment</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Fill the form — we'll send your details directly to our reception via WhatsApp and Telegram.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl bg-white border border-border p-6 sm:p-8 space-y-5">
            <Field label="Full Name" name="fullName" error={errors.fullName} />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Age" name="age" type="number" min={1} max={120} error={errors.age} />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+251 ..." error={errors.phone} />
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
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label>Preferred Date</Label>
                <div className="relative mt-1.5">
                  <CalIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input type="date" name="date" min={new Date().toISOString().slice(0, 10)}
                    className="w-full rounded-lg border border-input bg-white pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand" />
                </div>
                {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
              </div>
              <div>
                <Label>Preferred Time (12h)</Label>
                <div className="mt-1.5 flex items-center gap-2">
                  <select name="timeHour" defaultValue="9" className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                  <span>:</span>
                  <select name="timeMinute" defaultValue="0" className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm">
                    {[0, 15, 30, 45].map((m) => <option key={m} value={m}>{String(m).padStart(2, "0")}</option>)}
                  </select>
                  <select name="timePeriod" defaultValue="AM" className="flex-1 rounded-lg border border-input bg-white px-2 py-2.5 text-sm">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <Label>Additional Notes (optional)</Label>
              <textarea name="notes" rows={4}
                className="mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
                placeholder="Anything we should know?" />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-7 py-3 text-sm hover:opacity-90 disabled:opacity-60"
            >
              <Send className="size-4" /> Send Request
            </button>

            {done && (
              <p className="text-sm text-brand">
                ✅ Request prepared! Please send the WhatsApp and Telegram messages we just opened to confirm your booking.
              </p>
            )}
          </form>

          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-white border border-border p-6">
              <h3 className="text-lg flex items-center gap-2"><Phone className="size-4 text-brand" /> Call us directly</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {SITE.phones.map((p) => (
                  <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">{p}</a></li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2 text-xs">
                  <MessageCircle className="size-3.5" /> WhatsApp
                </a>
                <a href={`https://t.me/${SITE.telegramUser}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white px-4 py-2 text-xs">
                  <Send className="size-3.5" /> Telegram
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img src={clinic1} alt="Clinic interior" loading="lazy" className="rounded-2xl aspect-square object-cover border border-border" />
              <img src={clinic2} alt="Treatment room" loading="lazy" className="rounded-2xl aspect-square object-cover border border-border" />
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-56">
              <iframe src={SITE.mapEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
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
  label, name, type = "text", error, ...rest
}: { label: string; name: string; type?: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
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
