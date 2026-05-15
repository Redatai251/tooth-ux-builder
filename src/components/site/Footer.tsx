import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/finan-logo.png";
import { SITE } from "@/lib/site";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/payment-plans", label: "Payment Plans" },
  { to: "/contact", label: "Contact Us" },
  { to: "/book", label: "Book Appointment" },
] as const;

export function Footer() {
  return (
    <footer className="px-3 sm:px-6 pb-6 pt-16 bg-gradient-to-b from-brand-soft/40 to-secondary/40">
      <div className="mx-auto max-w-7xl">
        {/* Free consultation CTA */}
        <div
          className="rounded-3xl p-8 sm:p-12 text-center text-white mb-10 shadow-lg"
          style={{ background: "var(--teal-gradient)" }}
        >
          <h2 className="text-3xl sm:text-4xl">Ready for a healthier smile?</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Book a free consultation with our specialists today.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-6 py-3 text-sm hover:bg-white/90"
          >
            Free Consultation <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="rounded-3xl bg-white shadow-sm border border-border p-8 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Brand + newsletter */}
            <div className="lg:col-span-4">
              <img src={logo} alt={SITE.name} className="h-12 w-auto" />
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                Comprehensive dental care for every family — gentle, modern, and personal.
              </p>
              <h4 className="mt-6 text-sm">Sign up for healthy-smile tips.</h4>
              <form className="mt-3 flex items-center gap-1 rounded-full bg-secondary/60 p-1 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 text-sm placeholder:text-muted-foreground outline-none"
                />
                <button className="rounded-full bg-foreground text-white px-4 py-2 text-sm">Submit</button>
              </form>
            </div>

            {/* Pages */}
            <div className="lg:col-span-2">
              <h4 className="text-sm">Pages</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pages.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="hover:text-brand">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="lg:col-span-3">
              <h4 className="text-sm flex items-center gap-2"><Clock className="size-4 text-brand" /> Opening Hours</h4>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.d} className="flex justify-between gap-3">
                    <span>{h.d}</span><span className="text-foreground/80">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + map */}
            <div className="lg:col-span-3">
              <h4 className="text-sm flex items-center gap-2"><Phone className="size-4 text-brand" /> Contact</h4>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.phones.map((p) => (
                  <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">{p}</a></li>
                ))}
              </ul>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-brand mt-0.5 shrink-0" />
                <div>
                  {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}
                </div>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-border h-32">
                <iframe
                  src={SITE.mapEmbed}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic location"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground px-2">
          <p>Copyright © 2026 {SITE.name}. All rights reserved.</p>
          <p>
            Website Developed By{" "}
            <a
              href="https://bloomuptech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              BloomUp Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
