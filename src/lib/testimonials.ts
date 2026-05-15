export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  color: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Selamawit Tadesse",
    role: "Cosmetic Dentistry",
    quote: "My veneers look completely natural. The team explained every step and I felt cared for the entire visit.",
    initials: "ST",
    color: "bg-brand-soft text-brand-dark",
  },
  {
    name: "Abenezer Bekele",
    role: "Dental Implant",
    quote: "I was nervous about implants, but the procedure was painless and the result is exactly like my own tooth.",
    initials: "AB",
    color: "bg-accent text-brand-dark",
  },
  {
    name: "Hanna Girma",
    role: "Braces",
    quote: "After a year with braces my smile is perfectly aligned. The orthodontist was patient and very professional.",
    initials: "HG",
    color: "bg-brand-soft text-brand-dark",
  },
  {
    name: "Yonas Alemu",
    role: "Root Canal Therapy",
    quote: "Truly pain-free root canal — I expected the worst, instead I left smiling and out of pain for the first time in weeks.",
    initials: "YA",
    color: "bg-accent text-brand-dark",
  },
  {
    name: "Meron Haile",
    role: "Pediatric Dentistry",
    quote: "My daughter actually looks forward to her dental visits now. They are amazing with kids.",
    initials: "MH",
    color: "bg-brand-soft text-brand-dark",
  },
  {
    name: "Dawit Mulugeta",
    role: "Preventive Care",
    quote: "Best cleaning I have had. The clinic is spotless and the team is friendly and on-time.",
    initials: "DM",
    color: "bg-accent text-brand-dark",
  },
];
