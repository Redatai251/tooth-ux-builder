import { ArrowUpRight, Calendar } from "lucide-react";
import b1 from "@/assets/denture-blog-1.jpg";
import b2 from "@/assets/denture-blog-2.jpg";
import b3 from "@/assets/denture-blog-3.jpg";

const posts = [
  { img: b1, date: "September 23, 2025", title: "The Importance of Regular Dental Check-Ups Explained" },
  { img: b2, date: "September 23, 2025", title: "Top Benefit Modern Cosmetic Dentistry Treatments" },
  { img: b3, date: "September 23, 2025", title: "Best Oral Hygiene Practices for Children and Families" },
];

export function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand text-sm font-bold tracking-[0.25em]">— LATEST BLOGS</p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
            Stay informed with expert dental tips and advice
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-3xl overflow-hidden bg-brand-soft/40 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="size-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
                  <Calendar className="size-4 text-brand" /> {p.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{p.title}</h3>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-brand font-semibold text-sm">
                  Read More <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
