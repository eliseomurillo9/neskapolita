import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X, Wifi, Wind, Star, Users, Bath, Mountain, ArrowRight, Check,
  Tv, ShieldCheck, UtensilsCrossed, AirVent, TreePine, BedDouble, Layers,
} from "lucide-react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import SavingsBannerSection from "@/imports/SavingsBannerSection";
import BookingPayments from "@/imports/BookingPayments";
import ButtonPrimary from "@/imports/ButtonPrimary";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
import rutaDesktopLight from "@/imports/ruta-de-las-flores-light-desktop-image-light.jpg";
import rutaDesktopDark  from "@/imports/ruta-de-las-flores-light-desktop-image-dark.jpg";
import rutaMobileLight  from "@/imports/ruta-de-las-flores-mobile-image-light.jpg";
import rutaMobileDark   from "@/imports/ruta-de-las-flores-mobile-image-dark.jpg";
import room1Img from "@/imports/Document/6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import room2Img from "@/imports/Document/2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.png";
import room3Img from "@/imports/Document/6f13b43bff73692f3535ad9ee71e65d34379edcf.png";
import room4Img from "@/imports/Document/851cd36c23ad4da155b6cf0f50ec6693c5ab0088.png";
// Ruta de las Flores page assets
import rutaMapImg      from "@/imports/RutaFloresMapPageDesktop/a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import rutaHeroPhoto   from "@/imports/RutaFloresMapPageDesktop/850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import rutaJuayua      from "@/imports/RutaFloresMapPageDesktop/dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import rutaApaneca     from "@/imports/RutaFloresMapPageDesktop/f23c47939fd00eae014ff37746cb0058f242c565.png";
import rutaAtaco       from "@/imports/RutaFloresMapPageDesktop/fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import rutaSalcoatitan from "@/imports/RutaFloresMapPageDesktop/828973c65dab400d9481607663e04c1e6267bbca.png";
import rutaNahuizalco  from "@/imports/RutaFloresMapPageDesktop/f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import rutaSonsonate   from "@/imports/RutaFloresMapPageDesktop/a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
// Homepage assets
import heroBg from "@/imports/DesktopV1/1a87c5d486772503401990064608c4940c7da7fc.png";
import storyPortrait from "@/imports/DesktopV1/c06fcb3e51191a325985054ce1370bf867d176ef.png";
import logoImg from "@/imports/DesktopV1/7a4368b70120d47e02aec91da9b968e1f2acd65c.png";
import heroForest from "@/imports/DesktopV1/4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
import heroMobile from "@/imports/Variation3FullBleedOverlay/4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
import bgLight from "@/imports/DesktopV1/302c2113c9e9de6558ff52e0df271ec24307bdf2.png";
import bgFlowers from "@/imports/DesktopV1/0b3cdd2aed1034c1d0964bb9eb901d692e980bec.png";
import svgPaths from "@/imports/DesktopV1/svg-a56cgiz6y";
// Room number badge images (from Figma DesktopV1)
import badge01 from "@/imports/DesktopV1/c06fcb3e51191a325985054ce1370bf867d176ef.png";
import badge02 from "@/imports/DesktopV1/5df5da27dcee43241fc35f4a3e842b4708328f40.png";
import badge16 from "@/imports/DesktopV1/146d43f51e15479edc5b6567ca17c752c93c098a.png";
import badge17 from "@/imports/DesktopV1/1a3d1e56d1305cc21af19544fb8fab9094a03110.png";


export default function RutaFloresPage({ onExploreRooms }: { onExploreRooms: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePopIn, setActivePopIn] = useState<string | null>(null);

  const YellowCTA = ({ label, onClick }: { label: string; onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)] transition-colors shrink-0"
      style={{ background: "#f2b138" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#d49a1f")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#f2b138")}
    >
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "#0c1a10", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>{label}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </button>
  );

  return (
    <div className="w-full" style={{ background: "#f2f4f3" }}>

      {/* ── Hero ── */}
      <section className="w-full" style={{ background: "#f2f4f3" }}>
        <div className="max-w-[1920px] mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px]">

          {/* Left: text */}
          <div className="flex flex-col gap-6 md:w-[500px] shrink-0">
            <h1
              className="font-black leading-tight"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.12, fontVariationSettings: '"SOFT" 0, "WONK" 1', color: "#1c2420" }}
            >
              A Cozy Refuge on the{" "}
              <em style={{ color: "#3d9e72", fontStyle: "italic" }}>Ruta de las Flores</em>
            </h1>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
              Set in the heart of Juayúa, Neskapolita makes exploring the region effortless.
            </p>
            <button
              onClick={onExploreRooms}
              className="self-start flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors"
              style={{ background: "#3d9e72" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
            >
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>See All Rooms</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Right: Juayúa photo */}
          <div
            className="w-full md:flex-1 rounded-2xl overflow-hidden"
            style={{ height: "clamp(220px, 40vw, 460px)", border: "1px solid #d5dad7" }}
          >
            <img src={rutaHeroPhoto} alt="Juayúa" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="w-full" style={{ background: "#ffffff" }}>
        <div className="max-w-[1920px] mx-auto w-full px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px] flex flex-col gap-12 md:gap-[80px]">

          {/* Intro */}
          <div className="text-center flex flex-col gap-3 items-center">
            <h2
              className="font-black"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Explore the Ruta de las Flores
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", maxWidth: 600, fontVariationSettings: '"opsz" 14' }}>
              Discover the best of Juayúa and neighboring mountain towns — from the famous weekend food festival and coffee farms to hidden waterfalls and colonial artisan markets.
            </p>
          </div>

          {/* Alternating stops */}
          {RUTA_STOPS.map((stop, i) => (
            <div
              key={stop.city}
              className={`flex flex-col ${stop.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-[64px] items-center`}
            >
              {/* Image */}
              <div
                className="w-full md:w-[560px] shrink-0 rounded-2xl overflow-hidden"
                style={{ height: "clamp(220px, 50vw, 360px)" }}
              >
                <img src={stop.image} alt={stop.city} className="w-full h-full object-cover" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span
                    className="font-bold uppercase"
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, letterSpacing: "1px", color: "#4c6e58", fontVariationSettings: '"opsz" 14' }}
                  >
                    {stop.stop}
                  </span>
                  <span style={{ color: "#54625d", fontSize: 10 }}>•</span>
                  <span
                    className="font-bold"
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#f2b138", fontVariationSettings: '"opsz" 14' }}
                  >
                    {stop.distance}
                  </span>
                </div>

                <h3
                  className="font-black"
                  style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,2.5vw,32px)", lineHeight: 1.15, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {stop.city}
                </h3>
                <p
                  className="italic"
                  style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: "#54625d", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                >
                  {stop.subtitle}
                </p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
                  {stop.description}
                </p>
                <YellowCTA label="Top Places" onClick={() => setActivePopIn(stop.city)} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full" style={{ background: "#ede8d8" }}>
        <div className="max-w-[1920px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:px-14 lg:px-[64px] md:py-[64px]">
          <div className="flex flex-col gap-3 md:max-w-[700px]">
            <h2
              className="font-black"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#0c1a10", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Ready to explore Ruta de las Flores?
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: "#0c1a10", opacity: 0.8, fontVariationSettings: '"opsz" 14' }}>
              Book your stay at Neskapolita in Juayúa — the perfect, central base for all your western mountain adventures.
            </p>
          </div>
          <button
            onClick={onExploreRooms}
            className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors shrink-0"
            style={{ background: "#3d9e72" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d8a60")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3d9e72")}
          >
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11.2, fontWeight: 700, letterSpacing: "1.34px", color: "white", textTransform: "uppercase", whiteSpace: "nowrap", fontVariationSettings: '"opsz" 14' }}>See All Rooms</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Quick Tips FAQ ── */}
      <section id="ruta-faq" className="w-full" style={{ background: "#f2f4f3", borderTop: "1px solid #d5dad7", borderBottom: "1px solid #d5dad7" }}>
        <div className="max-w-[1920px] mx-auto w-full px-6 py-12 md:px-14 lg:px-[80px] md:py-[80px] flex flex-col gap-10 md:gap-12">
          <h2
            className="font-black text-center"
            style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.2, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Ruta Quick Tips
          </h2>
          <div className="flex flex-col gap-4">
            {RUTA_FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{ background: "#ffffff", border: "1px solid #d5dad7" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between gap-4 p-6">
                  <p
                    className="font-black flex-1"
                    style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.3, color: "#1c2420", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                  >
                    {faq.q}
                  </p>
                  <span
                    className="shrink-0 font-bold transition-transform duration-300"
                    style={{
                      fontFamily: "'DM Sans',sans-serif", fontSize: 18, color: "#4c6e58",
                      display: "inline-block",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ↓
                  </span>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, lineHeight: 1.6, color: "#54625d", fontVariationSettings: '"opsz" 14' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* City pop-in modal */}
      <AnimatePresence>
        {activePopIn && (
          <CityPopIn city={activePopIn} onClose={() => setActivePopIn(null)} />
        )}
      </AnimatePresence>

    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

