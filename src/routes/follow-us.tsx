import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/follow-us")({
  component: FollowUsPage,
  head: () => ({
    meta: [
      { title: "Follow Us — Finan Speciality Dental Clinic" },
      { name: "description", content: "Follow Finan Speciality Dental Clinic on TikTok, Facebook, Telegram and Instagram." },
      { property: "og:url", content: "https://tooth-ux-builder.lovable.app/follow-us" },
    ],
    links: [{ rel: "canonical", href: "https://tooth-ux-builder.lovable.app/follow-us" }],
  }),
});

const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-2p_JtJE4Dqjg_XYiR1F3oFo-hvfU3yXng&s" },
  { name: "Facebook", href: "https://www.facebook.com/", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cqDx9x6VtbRAoV3FmDZO_a1NptCiP-aKxg&s" },
  { name: "Telegram", href: "https://t.me/abenezerzewedu", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS752LSPxuBReTCceiXUE7OElxgb5QwWskVpQ&s" },
  { name: "Instagram", href: "https://www.instagram.com/", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" },
];

function FollowUsPage() {
  return (
    <Layout>
      <section className="py-14 sm:py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl">Follow Us</h1>
          <p className="mt-4 text-muted-foreground">
            Stay connected for tips, before-and-after stories and clinic news.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl bg-white border border-border p-6 text-center hover:shadow-md transition">
              <div className="mx-auto size-16 rounded-2xl overflow-hidden bg-secondary grid place-items-center">
                <img src={s.icon} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-4 text-base">{s.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-brand">Open →</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
