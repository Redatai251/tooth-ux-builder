import { Ambulance, Star, Phone, Mail, Clock } from "lucide-react";
import clinic from "@/assets/denture-clinic.jpg";
import a1 from "@/assets/denture-team-1.png";
import a2 from "@/assets/denture-team-2.png";
import a3 from "@/assets/denture-team-3.png";

export function InfoStrip() {
  return (
    <section className="-mt-16 relative z-10">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* image card */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={clinic} alt="Clinic" className="size-full object-cover" loading="lazy" />
        </div>

        {/* emergency */}
        <div className="rounded-2xl bg-brand-soft p-6 flex flex-col justify-between aspect-[4/3]">
          <div className="size-12 rounded-full bg-white grid place-items-center text-brand">
            <Ambulance className="size-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Emergency Appointments Available</h3>
            <ul className="mt-3 space-y-1 text-sm text-foreground/70">
              <li className="flex items-center gap-2"><Phone className="size-3.5 text-brand" />+00-123-456-789</li>
              <li className="flex items-center gap-2"><Mail className="size-3.5 text-brand" />support@domain.com</li>
            </ul>
          </div>
        </div>

        {/* image card 2 */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
          <img src={clinic} alt="Hours" className="size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
          <div className="absolute bottom-0 p-5 text-white">
            <div className="flex items-center gap-2 text-sm"><Clock className="size-4" /> Working Hours</div>
            <p className="mt-1 text-sm">Monday to Saturday: 9AM to 9PM</p>
            <p className="text-sm opacity-80">Sunday: Closed</p>
          </div>
        </div>

        {/* rating */}
        <div className="rounded-2xl bg-brand-soft p-6 flex flex-col justify-between aspect-[4/3] relative">
          <div className="absolute top-5 right-5 size-12 rounded-full bg-brand grid place-items-center text-white">
            <Star className="size-5 fill-current" />
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 w-fit">
            <span className="text-xs font-semibold mr-1">Rating</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-brand text-brand" />
            ))}
          </div>
          <div>
            <p className="text-lg font-medium leading-snug">
              We comprehensive dental care for patients of all smiles.
            </p>
            <div className="flex -space-x-2 mt-3">
              {[a1, a2, a3].map((s, i) => (
                <img key={i} src={s} className="size-8 rounded-full ring-2 ring-brand-soft object-cover bg-white" alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
