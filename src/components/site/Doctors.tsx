import { Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import t1 from "@/assets/denture-team-1.png";
import t2 from "@/assets/denture-team-2.png";
import t3 from "@/assets/denture-team-3.png";
import t4 from "@/assets/denture-team-4.png";

const team = [
  { img: t1, name: "Dr. Jane Roe", role: "Chief Dentist" },
  { img: t2, name: "Dr. Cameron Williamson", role: "Assistant Dentist" },
  { img: t3, name: "Dr. Marvin McKinney", role: "Dentist Specialist" },
  { img: t4, name: "Dr. Mary Moe", role: "Consultant Dentist" },
];

export function Doctors() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand text-sm font-bold tracking-[0.25em]">— OUR TEAM MEMBER</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Meet the experts behind your healthier smile
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((d) => (
            <div key={d.name} className="group rounded-3xl bg-brand-soft/50 overflow-hidden text-center pt-6">
              <div className="aspect-[3/4] flex items-end justify-center">
                <img src={d.img} alt={d.name} className="h-full object-contain" loading="lazy" />
              </div>
              <div className="bg-white p-5 relative">
                <h3 className="font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.role}</p>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  {[Facebook, Twitter, Instagram].map((I, i) => (
                    <span key={i} className="size-9 rounded-full bg-brand text-white grid place-items-center">
                      <I className="size-4" />
                    </span>
                  ))}
                </div>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-brand text-sm font-semibold">
                  View Profile <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
