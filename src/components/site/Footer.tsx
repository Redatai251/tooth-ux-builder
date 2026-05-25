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
        <div className="rounded-3xl p-8 sm:p-12 text-center text-white mb-10 shadow-lg" style={{ background: "var(--teal-gradient)" }}>
          <h2 className="text-3xl sm:text-4xl">Ready for a healthier smile?</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">Book a free consultation with our specialists today.</p>
          <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-6 py-3 text-sm hover:bg-white/90">
            Free Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="rounded-3xl bg-white shadow-sm border border-border p-8 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <img src={logo} alt={SITE.name} className="h-20 sm:h-24 w-auto" />
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">Comprehensive dental care for every family — gentle, modern, and personal.</p>
              <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark text-white px-6 py-3 text-sm hover:bg-brand">
                Book Appointment <ArrowRight className="size-4" />
              </Link>
              <div className="mt-6">
                <p className="text-sm">Follow us</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {SITE.socials.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="size-11 rounded-full overflow-hidden bg-white border border-border shadow-sm hover:shadow-md transition grid place-items-center">
                      <img src={s.icon} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-sm">Pages</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pages.map((p) => (
                  <li key={p.to}><Link to={p.to} className="hover:text-brand">{p.label}</Link></li>
                ))}
              </ul>
            </div>
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
            <div className="lg:col-span-3">
              <h4 className="text-sm flex items-center gap-2"><Phone className="size-4 text-brand" /> Contact</h4>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.phones.map((p) => (
                  <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-brand">{p}</a></li>
                ))}
              </ul>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-brand mt-0.5 shrink-0" />
                <div>{SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground px-2">
          <p>Copyright © 2026 <span className="notranslate">Finan Speciality Dental Clinic</span>. All rights reserved.</p>
          <p>Website Developed By{" "}<a href="https://bloomuptech.com/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline notranslate">BloomUp Technologies</a></p>
        </div>
      </div>
    </footer>
  );
}
