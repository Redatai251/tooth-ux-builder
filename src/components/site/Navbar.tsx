import { Link } from "@tanstack/react-router";
import { Search, ArrowUpRight } from "lucide-react";

const links = ["Home", "Doctors", "Patients", "Pharmacy", "Pages", "Admin"];

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-brand">
          Dent<span className="text-foreground">Cure</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-brand transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="size-9 rounded-full bg-white/70 backdrop-blur grid place-items-center hover:bg-white transition">
            <Search className="size-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-soft hover:shadow-elegant transition"
          >
            Book Appointment
            <span className="size-7 rounded-full bg-white/20 grid place-items-center">
              <ArrowUpRight className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
