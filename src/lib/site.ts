export const SITE = {
  name: "Finan Speciality Dental Clinic",
  shortName: "Finan Dental",
  domain: "https://tooth-ux-builder.lovable.app",
  phones: ["+251 91 105 5655", "+251 94 803 3831", "+251 98 447 0444"],
  whatsapp: "251911055655",
  telegramUser: "+251 91 105 5655",
  email: "info@finandental.com",
  address: {
    line1: "Abrams Building, Cameroon St, Addis Ababa",
    line2: "Near Bole Medhanialem Church",
    line3: "5th floor",
  },
  hours: [
    { d: "Monday", h: "8:30 AM – 8:00 PM" },
    { d: "Tuesday", h: "8:30 AM – 8:00 PM" },
    { d: "Wednesday", h: "8:30 AM – 8:00 PM" },
    { d: "Thursday", h: "8:30 AM – 8:00 PM" },
    { d: "Friday", h: "8:30 AM – 8:00 PM" },
    { d: "Saturday", h: "8:30 AM – 8:00 PM" },
    { d: "Sunday", h: "8:30 AM – 2:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.7315076907453!2d38.78735057352809!3d8.996542089499247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c5636c2e6b%3A0x4273780dbb8b7952!2sFinan%20Speciality%20Dental%20Clinic!5e1!3m2!1sen!2set!4v1778861799430!5m2!1sen!2set",
  socials: [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@finanspecialitydentalcl1/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-2p_JtJE4Dqjg_XYiR1F3oFo-hvfU3yXng&s",
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/p/Finan-Speciality-Dental-Clinic-61557142123469/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/finanspecialitydentalclinic/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejfd7ZJHBjjE1vLNxizkv3il_IbpJVzOQjg&s",
    },
    {
      name: "Telegram",
      href: "https://t.me/+251911055655",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cHB6VomfB1AuG5MfXObJ_9VhZvWJee_Qgg&s",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/251911055655",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAESYvvqOVbKqYxwK3HEzYNESOgCeDaaFlQ&s",
    },
  ],
  clinicPhotos: [
    "https://raw.githubusercontent.com/Redatai251/tooth-ux-builder/main/src/assets/clinic-interior.jpg",
    "https://raw.githubusercontent.com/Redatai251/tooth-ux-builder/main/src/assets/clinic-building.jpg",
  ],
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
    slug: "orthodontic-treatment",
    title: "Orthodontic Treatment",
    desc: "Metal and ceramic braces and clear aligners fitted by specialists to gently straighten teeth and correct your bite.",
    image: "https://www.smartdental.ie/wp-content/uploads/2019/06/Clear-Braces-Metal-Braces-Orthodontic-Treatment.webp",
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
    slug: "endodontic-treatment",
    title: "Endodontic Treatment (Root Canal)",
    desc: "Advanced root canal treatment to remove infection deep inside the tooth and save your natural smile — pain-free and precise.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zvMpYLvVeAvgiTXRwX7Wo2l_1oltVhmymA&s",
  },
  {
    slug: "prosthodontics",
    title: "Prosthodontics",
    desc: "Full smile restoration using crowns, bridges, zirconia, and ceramic restorations for a natural and durable result.",
    image: "https://cdn.shopify.com/s/files/1/0942/3178/9897/files/fixed_dental-bridge-illustration.jpg?v=1745104472",
  },
  {
    slug: "periodontic-treatment",
    title: "Periodontic Treatment",
    desc: "Specialist care for gum disease and periodontal conditions to protect your teeth and keep your gums healthy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw4KsfjvG0pO6owHhRcbcBoHk-7okGy0MTQ&s",
  },
];
