import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <header className="absolute top-0 inset-x-0 z-40 pt-3 sm:pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-6 rounded-full bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,30,120,0.25)] ring-1 ring-black/5 pl-3 pr-3 sm:pl-5 sm:pr-2 py-2">
          <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Finan Speciality Dental Clinic"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="inline-flex items-center gap-1 px-4 py-2 text-[15px] text-foreground/70 hover:text-foreground transition"
                activeProps={{ className: "inline-flex items-center gap-1 px-4 py-2 text-[15px] text-foreground font-medium" }}
              >
                {l.label}
                {l.label === "Services" || l.label === "Payment Plans" ? (
                  <ChevronDown className="size-3.5 opacity-50" />
                ) : null}
              </Link>
            ))}
          </nav>

          <Link
            to="/book"
            className="hidden sm:inline-flex items-center rounded-full bg-brand-dark text-white px-5 lg:px-6 py-2.5 text-sm hover:bg-brand transition ml-auto lg:ml-2"
          >
            Book Appointment
          </Link>

          <button
            className="lg:hidden ml-auto sm:ml-0 p-2 rounded-full hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden mt-2 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-3 flex flex-col gap-1">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm hover:bg-secondary"
                activeProps={{ className: "px-4 py-3 rounded-2xl text-sm bg-brand-dark text-white" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex justify-center rounded-full bg-brand-dark text-white px-5 py-3 text-sm"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
