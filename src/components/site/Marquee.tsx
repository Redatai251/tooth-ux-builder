const items = ["Cleaning", "Whitening", "Braces", "Implants", "Veneers", "Checkup"];

export function Marquee() {
  return (
    <section className="py-12 bg-background border-y border-border/40 overflow-hidden">
      <div className="flex items-center gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        {[...items, ...items].map((w, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span
              className={`text-5xl md:text-7xl font-bold tracking-tight ${
                i % 2 === 0 ? "text-brand" : "text-brand/30"
              }`}
            >
              {w}
            </span>
            <span className="text-brand text-3xl">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
