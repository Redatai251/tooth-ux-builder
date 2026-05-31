import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/7291deb9-6f00-4e49-bee1-f92bea4d0a39-removebg-preview.png";
import { setLang as storeLang } from "@/lib/translations";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/payment-plans", label: "Payment Plans" },
  { to: "/contact", label: "Contact Us" },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string,
        ) => void;
      };
    };
  }
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "am">(
    () => (localStorage.getItem("lang") as "en" | "am") || "en",
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,am", autoDisplay: false },
        "google_translate_element",
      );
    };
  }, []);

  const switchToAmharic = () => {
    storeLang("am");
    setLang("am");
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = "am";
      select.dispatchEvent(new Event("change"));
    }
  };

  const switchToEnglish = () => {
    storeLang("en");
    setLang("en");
    const domains = [
      window.location.hostname,
      "." + window.location.hostname,
      "finandentalclinic.com",
      ".finandentalclinic.com",
    ];
    domains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
    });
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = window.location.origin + window.location.pathname;
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <header className="absolute top-0 inset-x-0 z-40 pt-3 sm:pt-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-6 rounded-full bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,30,120,0.25)] ring-1 ring-black/5 pl-3 pr-3 sm:pl-5 sm:pr-2 py-2">
            <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
              <img
                src={logo}
                alt="Finan Speciality Dental Clinic"
                className="h-12 sm:h-14 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1 ml-auto">
              {nav.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="inline-flex items-center gap-1 px-4 py-2 text-[15px] text-foreground/70 hover:text-foreground transition"
                  activeProps={{
                    className:
                      "inline-flex items-center gap-1 px-4 py-2 text-[15px] text-foreground font-medium",
                  }}
                >
                  {l.label}
                  {l.label === "Services" || l.label === "Payment Plans" ? (
                    <ChevronDown className="size-3.5 opacity-50" />
                  ) : null}
                </Link>
              ))}
            </nav>

            <div className="notranslate flex items-center rounded-full border border-black/10 overflow-hidden text-xs sm:text-sm">
              <button
                onClick={switchToEnglish}
                className={`flex items-center gap-1.5 px-3 py-2 transition ${
                  lang === "en"
                    ? "bg-brand-dark text-white font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvK2zWExcm_vaQO3zHaekFC_az3LJI-60PQ&s"
                  className="w-4 h-4 rounded-full object-cover"
                  alt="English"
                />
                <span className="notranslate">ENG</span>
              </button>
              <span className="text-black/20 text-xs notranslate">|</span>
              <button
                onClick={switchToAmharic}
                className={`flex items-center gap-1.5 px-3 py-2 transition ${
                  lang === "am"
                    ? "bg-brand-dark text-white font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hF3XDG46Iv-08qdLTWH46QfhGSIBMJhPag&s"
                  className="w-4 h-4 rounded-full object-cover"
                  alt="Amharic"
                />
                <span className="notranslate">አማርኛ</span>
              </button>
            </div>

            <Link
              to="/book"
              className="hidden sm:inline-flex items-center rounded-full bg-brand-dark text-white px-5 lg:px-6 py-2.5 text-sm hover:bg-brand transition"
            >
              Book Appointment
            </Link>

            <button
              className="lg:hidden ml-auto sm:ml-0 p-2 rounded-full hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {open && (
            <nav className="lg:hidden mt-2 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-3 flex flex-col gap-1">
              {nav.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm hover:bg-secondary"
                  activeProps={{
                    className: "px-4 py-3 rounded-2xl text-sm bg-brand-dark text-white",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex justify-center rounded-full bg-brand-dark text-white px-5 py-3 text-sm"
              >
                Book Appointment
              </Link>
              <div className="notranslate mt-2 flex items-center justify-center rounded-full border border-black/10 overflow-hidden text-sm">
                <button
                  onClick={switchToEnglish}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-3 transition ${
                    lang === "en" ? "bg-brand-dark text-white font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  🇺🇸 <span className="notranslate">ENG</span>
                </button>
                <span className="text-black/20 text-xs notranslate">|</span>
                <button
                  onClick={switchToAmharic}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-3 transition ${
                    lang === "am" ? "bg-brand-dark text-white font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  🇪🇹 <span className="notranslate">አማርኛ</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
