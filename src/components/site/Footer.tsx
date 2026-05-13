export function Footer() {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold">
            Dent<span className="text-brand-glow">Cure</span>
          </h3>
          <p className="mt-3 text-sm opacity-70">
            Gentle, modern dentistry for the whole family.
          </p>
        </div>
        {[
          { t: "Services", l: ["Whitening", "Implants", "Braces", "Cleaning"] },
          { t: "Company", l: ["About", "Doctors", "Careers", "Contact"] },
          { t: "Contact", l: ["+1 (555) 010-2030", "hello@dentcure.com", "12 Smile Ave, NY"] },
        ].map((col) => (
          <div key={col.t}>
            <h4 className="font-semibold">{col.t}</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-70">
              {col.l.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-white/10 text-xs opacity-60">
        © {new Date().getFullYear()} DentCure. All rights reserved.
      </div>
    </footer>
  );
}
