import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

const amharicServices: Record<string, { title: string; desc: string }> = {
  "preventive-care": {
    title: "የመከላከያ እንክብካቤ",
    desc: "ፈገግታዎን ጤናማ ለማቆየት እና የጥርስ ችግሮችን ከመጀመራቸው በፊት ለመከላከል መደበኛ የጥርስ ጽዳት፣ ምርመራ እና የፍሎራይድ ሕክምና የሚሰጥ እንክብካቤ።",
  },
  "cosmetic-dentistry": {
    title: "የኮስሞቲክስ የጥርስ ህክምና",
    desc: "ነጭ ማድረግ፣ ቬኒየሮችን መቀባት እና ፈገግታን መቀየር ተፈጥሯዊ፣ በራስ መተማመን እና ብሩህ መልክ እንዲኖረው ተደርጎ የተሰራ።",
  },
  "dental-implants": {
    title: "የጥርስ ተከላዎች",
    desc: "ፕሪሚየም ቲታኒየም ኢምፕላንት በመጠቀም ዘላቂ፣ ተፈጥሯዊ የሚመስል የጥርስ መተካት።",
  },
  "orthodontic-treatment": {
    title: "የኦርቶዶንቲክስ ሕክምና",
    desc: "ጥርስዎን በቀስታ ለማቅናት እና ንክሻዎን ለማስተካከል በልዩ ባለሙያዎች የተገጠሙ የብረት እና የሴራሚክ ማሰሪያዎች እና ግልጽ የሆኑ አላይነሮች።",
  },
  "pediatric-dentistry": {
    title: "የሕፃናት የጥርስ ህክምና",
    desc: "ከልጅነት ጀምሮ ጤናማ ልምዶችን የሚያዳብር፣ ለህጻናት ተስማሚ የሆነ የጥርስ እንክብካቤ።",
  },
  "oral-surgery": {
    title: "የጥርስ ቀዶ ህክምና",
    desc: "የተጎዱ ወይም የተሰበሩ ጥርሶችን ማውጣት፣ የድድ እና የአፍ ሕክምናዎችን ማከናወን፣ እንዲሁም በባለሙያ ሐኪሞች የሚሰጡ ደህንነታቸው የተጠበቁ የቀዶ ጥገና ሂደቶች።",
  },
  "endodontic-treatment": {
    title: "የኢንዶዶንቲክ ሕክምና",
    desc: "በጥርስ ውስጥ ያለውን ኢንፌክሽን ለማስወገድ እና ተፈጥሯዊ ፈገግታዎን ለማዳን የላቀ የስር ቦይ ህክምና — ህመም የሌለበት እና ትክክለኛ።",
  },
  prosthodontics: {
    title: "ፕሮስቶዶንቲክስ",
    desc: "ተፈጥሯዊ እና ዘላቂ ውጤት ለማግኘት ዘውዶችን፣ ድልድዮችን፣ ዚርኮኒያን እና የሴራሚክ እድሳትን በመጠቀም ሙሉ ፈገግታ ሕክምና።",
  },
  "periodontic-treatment": {
    title: "የድድ ህክምና",
    desc: "ጥርስዎን ለመጠበቅ እና ድድዎን ጤናማ ለማድረግ የድድ በሽታ እና የፔሮዶንታል በሽታዎች ልዩ እንክብካቤ።",
  },
};

function AnimatedCard({
  s,
  i,
  isAmharic,
}: {
  s: (typeof SERVICES)[0];
  i: number;
  isAmharic: boolean;
}) {
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
        <h3 className={`text-lg ${isAmharic ? "notranslate" : ""}`}>
          {title}
        </h3>
        <p className={`mt-2 text-sm text-muted-foreground flex-1 ${isAmharic ? "notranslate" : ""}`}>
          {desc}
        </p>
        <Link
          to="/book"
          search={{ service: s.slug }}
          className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-brand text-white px-4 py-2 text-xs hover:opacity-90 hover:scale-105 transition-all"
        >
          <span className={isAmharic ? "notranslate" : ""}>
            {isAmharic ? "ቀጠሮ ያስይዙ" : "Book Appointment"}
          </span>
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

export function ServicesGrid() {
  const [isAmharic, setIsAmharic] = useState(
    () => localStorage.getItem("lang") === "am"
  );

  useEffect(() => {
    const handler = () =>
      setIsAmharic(localStorage.getItem("lang") === "am");
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className={`text-brand text-xs tracking-[0.25em] uppercase ${isAmharic ? "notranslate" : ""}`}>
            — {isAmharic ? "አገልግሎቶቻችን" : "Our Services"}
          </p>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl ${isAmharic ? "notranslate" : ""}`}>
            {isAmharic
              ? "ለእያንዳንዱ ቤተሰብ ፈገግታ የጥርስ አገልግሎቶች"
              : "Comprehensive dental services for every family smile"}
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
