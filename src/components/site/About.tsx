import patient from "@/assets/dental-patient.jpg";

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3]">
          <img src={patient} alt="Smiling patient" className="size-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            You Have Lots Of Reasons To Choose Us
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Fresh approach on all dental treatment",
              "Our treatment is quick and easy",
              "Highest quality dental team",
              "State of the art dental services",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand" />
                {t}
              </li>
            ))}
          </ul>
          <button className="mt-8 rounded-full bg-brand text-brand-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
