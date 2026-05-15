export const SITE = {
  name: "Finan Speciality Dental Clinic",
  shortName: "Finan Dental",
  domain: "https://tooth-ux-builder.lovable.app",
  phones: ["+251 91 105 5655", "+251 94 803 3831", "+251 98 447 0444"],
  whatsapp: "251911055655",
  telegramUser: "abenezerzewedu",
  email: "info@finandental.com",
  address: {
    line1: "Abrams Building, Cameroon St, Addis Ababa",
    line2: "Behind Bole Medhanialem Church",
    line3: "5th floor",
  },
  hours: [
    { d: "Monday", h: "8:30 AM – 5:30 PM" },
    { d: "Tuesday", h: "8:30 AM – 5:30 PM" },
    { d: "Wednesday", h: "8:30 AM – 5:30 PM" },
    { d: "Thursday", h: "8:30 AM – 5:30 PM" },
    { d: "Friday", h: "8:30 AM – 5:30 PM" },
    { d: "Saturday", h: "8:30 AM – 5:30 PM" },
    { d: "Sunday", h: "8:30 AM – 2:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.7315076907453!2d38.78735057352809!3d8.996542089499247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c5636c2e6b%3A0x4273780dbb8b7952!2sFinan%20Speciality%20Dental%20Clinic!5e1!3m2!1sen!2set!4v1778861799430!5m2!1sen!2set",
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "preventive-care",
    title: "Preventive Care",
    desc: "Routine cleanings, exams, sealants, and fluoride to protect your smile and stop problems before they start.",
    image: "https://dfaesthetics.com/wp-content/uploads/2021/04/Why-is-Preventative-Dental-Care-Important.jpg",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, and smile makeovers crafted for a natural, confident, brighter look.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDT9fqMysrLvDcTw9HmfzJ9wy9BPszGV4Bg&s",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacement using premium titanium implants.",
    image: "https://www.nycdentalimplantscenter.com/wp-content/uploads/2024/08/front-tooth-dental-implants-before-after-images-16.jpg",
  },
  {
    slug: "braces",
    title: "Braces",
    desc: "Metal and ceramic braces fitted by specialists to gently straighten teeth and correct your bite.",
    image: "https://cdicsmiles.com/wp-content/uploads/2021/12/Orthodontic-Braces-Treatment.jpg",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    desc: "Gentle, kid-friendly dental care that builds healthy habits from an early age.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_n_GE9TorLzOPQiNYQw-XDDbYo4rdKUthg&s",
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    desc: "Wisdom tooth removal, extractions, and minor surgical procedures with expert hands.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGr07WY9wSnJLsvbCKiub_bUH5Z3mRMbiKRQ&s",
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    desc: "Pain-free endodontic treatment to save your natural tooth and stop infection.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIhiC-4H6n-4yMXhlGPMnpv1w0awwZsCk9A&s",
  },
];
