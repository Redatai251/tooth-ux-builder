import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/finan-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/payment-plans", label: "Payment Plans" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Finan Speciality Dental Clinic" className="h-12 sm:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto rounded-full bg-secondary/60 p-1">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm rounded-full text-foreground/70 hover:text-foreground transition"
              activeProps={{ className: "px-4 py-2 text-sm rounded-full bg-white shadow-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/book"
          className="hidden sm:inline-flex items-center rounded-full bg-brand text-white px-5 py-2.5 text-sm hover:opacity-90 transition"
        >
          Book Appointment
        </Link>

        <button
          className="lg:hidden ml-auto sm:ml-0 p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-1">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm hover:bg-secondary"
              activeProps={{ className: "px-3 py-2.5 rounded-lg text-sm bg-brand-soft text-brand-dark" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full bg-brand text-white px-5 py-2.5 text-sm"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
