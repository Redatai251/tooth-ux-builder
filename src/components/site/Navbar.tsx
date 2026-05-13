import { Link } from "@tanstack/react-router";

const links = ["Home", "Services", "About Us", "Help"];

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Dental
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`hover:text-brand transition ${i === 0 ? "text-foreground underline underline-offset-8 decoration-2" : ""}`}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
