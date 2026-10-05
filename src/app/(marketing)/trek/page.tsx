import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import {
  Mountain,
  Waves,
  Trees,
  CalendarDays,
  Users,
  ShieldCheck,
  Leaf,
  Camera,
  Footprints,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-trek-display",
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-trek-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Greenery Trekking",
  description:
    "Walk with nature. Adventure with Greenery — hills, waterfalls, forests, lakes, and weekend getaways.",
  openGraph: {
    title: "Greenery Trekking",
    description: "Not just trekking… it's a journey within.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const WHATSAPP_NUMBER = "919148560010";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Greenery Trekking! I'd like to book a trek.",
)}`;

const destinations = [
  {
    title: "Hills & Mountains",
    subtitle: "Conquer new heights",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Waterfalls",
    subtitle: "Feel the freshness",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Forest Trails",
    subtitle: "Hike in nature's lap",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lakes & River Trails",
    subtitle: "Serenity in every step",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weekend Getaways",
    subtitle: "Cherish big memories",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const features = [
  { title: "Experienced Guides", icon: Users },
  { title: "Safe & Well Planned", icon: ShieldCheck },
  { title: "Eco-friendly Practices", icon: Leaf },
  { title: "Memorable Experiences", icon: Camera },
  { title: "Trekking For All Levels", icon: Footprints },
] as const;

export default function TrekPage() {
  return (
    <div
      className={`${display.variable} ${sans.variable}`}
      style={
        {
          "--gt-forest": "#1b4d2e",
          "--gt-leaf": "#2f7d4a",
          "--gt-moss": "#3f8f5a",
          "--gt-sun": "#e8c547",
          "--gt-cream": "#f4f7f0",
          "--gt-ink": "#13261a",
          fontFamily: "var(--font-trek-sans), system-ui, sans-serif",
          background: "var(--gt-cream)",
          color: "var(--gt-ink)",
        } as CSSProperties
      }
    >
      {/* HERO — full-bleed, brand first */}
      <section
        className="relative min-h-[100svh] overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(19,38,26,0.78) 0%, rgba(19,38,26,0.35) 48%, rgba(19,38,26,0.15) 100%), url(https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-6 pb-16 pt-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-trek-display), Georgia, serif",
                  color: "#8fd4a0",
                }}
              >
                GREENERY
                <span className="block text-lg tracking-[0.28em] text-white/90 sm:text-xl">
                  TREKKING
                </span>
              </p>
              <p className="mt-2 text-sm italic text-white/80 sm:text-base">
                Walk with nature, Adventure with Greenery
              </p>
            </div>
            <p
              className="hidden rounded-full px-4 py-2 text-sm font-medium sm:block"
              style={{ background: "var(--gt-leaf)", color: "var(--gt-sun)" }}
            >
              Explore the Unexplored
            </p>
          </div>

          <div className="mt-auto max-w-xl pb-8 pt-24">
            <h1
              className="text-4xl leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-trek-display), Georgia, serif" }}
            >
              Not just Trekking…
              <span className="mt-2 block" style={{ color: "var(--gt-sun)" }}>
                It&apos;s a Journey Within!
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
              Guided trails across hills, forests, waterfalls, and lakes —
              planned for every level of adventurer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="size-4" />
                Book on WhatsApp
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2
          className="text-center text-3xl sm:text-4xl"
          style={{
            fontFamily: "var(--font-trek-display), Georgia, serif",
            color: "var(--gt-forest)",
          }}
        >
          Our Trekking Destinations
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {destinations.map((d) => (
            <article key={d.title} className="group">
              <div
                className="aspect-[3/4] overflow-hidden rounded-2xl bg-cover bg-center shadow-md transition duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${d.image})` }}
              />
              <div className="mt-3 flex items-start gap-2">
                <d.icon
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: "var(--gt-leaf)" }}
                />
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "var(--gt-forest)" }}>
                    {d.title}
                  </h3>
                  <p className="text-xs text-black/55">{d.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="border-y"
        style={{ borderColor: "rgba(47,125,74,0.15)", background: "#fff" }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-2 text-center">
              <div
                className="flex size-12 items-center justify-center rounded-full"
                style={{ background: "rgba(47,125,74,0.1)", color: "var(--gt-leaf)" }}
              >
                <f.icon className="size-5" />
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--gt-forest)" }}>
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1b4d2e 0%, #2f7d4a 100%)" }}
      >
        <h2
          className="text-4xl sm:text-5xl"
          style={{ fontFamily: "var(--font-trek-display), Georgia, serif" }}
        >
          Adventure Awaits…
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/80">
          Tell us your dates and experience level — we&apos;ll plan a safe,
          memorable trail for you.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-[var(--gt-forest)] transition hover:brightness-105"
          style={{ background: "var(--gt-sun)" }}
        >
          Book Your Trip Now
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-10 text-white"
        style={{ background: "var(--gt-ink)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 text-sm text-white/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" style={{ color: "var(--gt-sun)" }} />
              No 34/56, 2nd Phase, BTM Layout, Bangalore, Karnataka — 560076
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" style={{ color: "var(--gt-sun)" }} />
              <a href="tel:+919148560010" className="hover:text-white">
                +91 91485 60010
              </a>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:self-auto"
            style={{ background: "#25D366" }}
          >
            <MessageCircle className="size-4" />
            WhatsApp us
          </a>
        </div>
      </footer>
    </div>
  );
}
