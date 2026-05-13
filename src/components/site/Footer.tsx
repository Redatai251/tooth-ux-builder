import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-darker text-white pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-10 rounded-lg bg-brand text-white font-bold">D</span>
            <span className="text-2xl font-bold tracking-tight">Denture<span className="text-brand-glow">.</span></span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Comprehensive dental services, confident smiles through, personalized care.
          </p>
          <h4 className="mt-6 font-semibold">Subscribe Newsletter's</h4>
          <form className="mt-3 flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 p-1.5">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-3 text-sm placeholder:text-white/40 outline-none"
            />
            <button className="size-9 rounded-full bg-brand grid place-items-center" aria-label="Subscribe">
              <ArrowRight className="size-4" />
            </button>
          </form>
          <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="size-9 rounded-full bg-white/10 hover:bg-brand transition grid place-items-center">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {["Home", "About Us", "Services", "Appointment", "Blog", "Contact"].map((i) => (
              <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {["Cosmetic Dentistry", "Orthodontics", "Precision Dentures", "Restorative Dentistry", "Pediatric Care"].map((i) => (
              <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Working Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Mon To Fri: 9AM To 9PM</li>
            <li>Saturday: 9AM To 3PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <p className="mt-6 text-sm text-white/60">support@denture.com</p>
          <p className="text-sm text-white/60">+00-123-456-789</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/10 text-xs text-white/50 flex justify-between flex-wrap gap-2">
        <p>Copyright © {new Date().getFullYear()} Denture. All Rights Reserved.</p>
        <p>Designed with care for healthier smiles.</p>
      </div>
    </footer>
  );
}
