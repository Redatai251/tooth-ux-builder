import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const amharicServices: Record<string, { title: string; desc: string }> = {
  "preventive-care": {
    title: "ፕሪቬንቲቭ ኬር",
    desc: "መደበኛ የጥርስ ምርመራ፣ ጥርስ ጽዳት፣ ፍሎራይድ ህክምና እና ሙሌት በማድረግ ጥርሶትን ጤናማ ለማቆየት እና ፈገግታዎን ለመጠበቅ።",
  },
  "cosmetic-dentistry": {
    title: "የኮስሞቲክ የጥርስ ህክምና",
    desc: "ቪኒር፣ ጥርስን ነጭ ማድረግ እና የፈገግታ ማሻሻያ ህክምናዎች በተፈጥሯዊ እና ብሩህ ፈገግታ እንዲኖርዎት የሚያግዙ።",
  },
  "dental-implants": {
    title: "የጥርስ ተከላ",
    desc: "የጠፉ ጥርሶችን በተፈጥሯዊ መልክ እና በቋሚነት የሚተኩ ዘመናዊ የጥርስ ተከላ ህክምናዎች።",
  },
  "orthodontic-treatment": {
    title: "ኦርቶዶንቲክ ህክምና",
    desc: "ብሬስ እና የማይታይ አላይነር በመጠቀም ጥርሶችን ለማስተካከል፣ ንክሻን ለማሻሻል እና የተስተካከለ ፈገግታ ለመፍጠር።",
  },
  "pediatric-dentistry": {
    title: "የህጻናት የጥርስ ህክምና",
    desc: "ለህጻናት በልዩ ሁኔታ የተዘጋጀ የጥርስ እንክብካቤ፣ ጤናማ ጥርስ እና ጥሩ ልምዶች እንዲኖራቸው የሚያግዝ።",
  },
  "oral-surgery": {
    title: "ኦራል ሰርጀሪ",
    desc: "የጥርስ ማውጣት፣ ጥርስ ማስወገድ እና ሌሎች ቀላል የአፍ ቀዶ ህክምናዎች በሙያተኛ እጅ በደህና የሚከናወኑ።",
  },
  "endodontic-treatment": {
    title: "ኤንዶዶንቲክ ትሪትመንት",
    desc: "በጥርስ ውስጥ ያለውን ኢንፌክሽን በማስወገድ ህመምን የሚቀንስ እና የተፈጥሮ ጥርስዎን የሚያድን ዘመናዊ ህክምና።",
  },
  "prosthodontics": {
    title: "ፕሮስቶዶንቲክስ",
    desc: "ክራውን፣ ብሪጅ፣ ዚርኮኒያ እና ሴራሚክ በመጠቀም የተጎዱ ወይም የጠፉ ጥርሶችን በተፈጥሯዊ መልክ ለመተካት።",
  },
  "periodontic-treatment": {
    title: "ፔሪዮዶንቲክ ትሪትመንት",
    desc: "የድድ በሽታን ለማከም እና ጥርሶችን ከመፍታት ለመከላከል የሚሰጥ ልዩ የድድ እንክብካቤ እና ህክምና።",
  },
};

function AnimatedCard({ s, i, isAmharic }: { s: typeof SERVICES[0]; i: number; isAmharic: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), i * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [i]);

  const am = amharicServices[s.slug];
  const title = isAmharic && am ? am.title : s.title;
  const desc = isAmharic && am ? am.desc : s.desc;

  return (
    <article
      ref={ref}
      className="group rounded-2xl bg-white border border-border overflow-hidden flex flex-col hover:shadow-xl transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
        <Link
          to="/book"
          search={{ service: s.slug }}
          className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-brand text-white px-4 py-2 text-xs hover:opacity-90 hover:scale-105 transition-all"
        >
          {isAmharic ? "ቀጠሮ ያስይዙ" : "Book Appointment"} <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

export function ServicesGrid() {
  const [isAmharic, setIsAmharic] = useState(false);

  useEffect(() => {
    const check = () => {
      const cookie = document.cookie;
      setIsAmharic(cookie.includes("googtrans=/en/am"));
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-brand text-xs tracking-[0.25em] uppercase">— Our Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
            {isAmharic ? "ለእያንዳንዱ ቤተሰብ ፈገግታ የጥርስ አገልግሎቶች" : "Comprehensive dental services for every family smile"}
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimatedCard key={s.slug} s={s} i={i} isAmharic={isAmharic} />
          ))}
        </div>
      </div>
    </section>
  );
}
