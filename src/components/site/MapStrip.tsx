import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";

export function MapStrip() {
  return (
    <section className="px-3 sm:px-6 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-border shadow-md bg-white">
          <div className="flex items-center gap-2 px-5 sm:px-7 py-4 border-b border-border">
            <MapPin className="size-4 text-brand" />
            <p className="text-sm">
              {SITE.address.line1} — {SITE.address.line2}, {SITE.address.line3}
            </p>
          </div>
          <iframe
            src={SITE.mapEmbed}
            className="w-full h-[320px] sm:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Finan Speciality Dental Clinic location"
          />
        </div>
      </div>
    </section>
  );
}
