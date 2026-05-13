import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", active: true, hasMenu: true },
  { label: "About Us" },
  { label: "Services" },
  { label: "Blog" },
  { label: "Pages", hasMenu: true },
  { label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="grid place-items-center size-10 rounded-lg bg-brand text-white font-bold">D</span>
          <span className="text-2xl font-bold tracking-tight">
            Denture<span className="text-brand-glow">.</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
          {links.map((l) => (
            <a
              key={l.label}
              href="#"
              className={`hover:text-white transition inline-flex items-center gap-1 ${l.active ? "text-brand-glow" : ""}`}
            >
              {l.label}
              {l.hasMenu && <ChevronDown className="size-3.5" />}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="rounded-full bg-white text-brand-dark pl-6 pr-1.5 py-1.5 text-sm font-semibold inline-flex items-center gap-3 hover:bg-brand-soft transition"
        >
          Make An Appointment
          <span className="size-9 rounded-full bg-brand text-white grid place-items-center">
            <ArrowRight className="size-4" />
          </span>
        </a>
      </div>
    </header>
  );
}
