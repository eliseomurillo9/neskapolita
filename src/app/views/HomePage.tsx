import i18n from "../../i18n";
const t = i18n.t.bind(i18n);
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Wifi, Wind, Star, Users, Bath, Mountain, ArrowRight, Check, Tv, ShieldCheck, UtensilsCrossed, AirVent, TreePine, BedDouble, Layers } from "lucide-react";
import NavBar from "@/imports/NavBar";
import Footer from "@/imports/Footer";
import MobileFooterLight from "@/imports/NarBar";
import MobileFooterDark from "@/imports/NarBar-1";
import SavingsBannerSection from "@/imports/SavingsBannerSection";
import BookingPayments from "@/imports/BookingPayments";
import ButtonPrimary from "@/imports/ButtonPrimary";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
import rutaDesktopLight from "@/imports/ruta-de-las-flores-light-desktop-image-light.jpg";
import rutaDesktopDark from "@/imports/ruta-de-las-flores-light-desktop-image-dark.jpg";
import rutaMobileLight from "@/imports/ruta-de-las-flores-mobile-image-light.jpg";
import rutaMobileDark from "@/imports/ruta-de-las-flores-mobile-image-dark.jpg";
import room1Img from "@/imports/Document/6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import room2Img from "@/imports/Document/2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.png";
import room3Img from "@/imports/Document/6f13b43bff73692f3535ad9ee71e65d34379edcf.png";
import room4Img from "@/imports/Document/851cd36c23ad4da155b6cf0f50ec6693c5ab0088.png";
// Ruta de las Flores page assets
import rutaMapImg from "@/imports/RutaFloresMapPageDesktop/a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import rutaHeroPhoto from "@/imports/RutaFloresMapPageDesktop/850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import rutaJuayua from "@/imports/RutaFloresMapPageDesktop/dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import rutaApaneca from "@/imports/RutaFloresMapPageDesktop/f23c47939fd00eae014ff37746cb0058f242c565.png";
import rutaAtaco from "@/imports/RutaFloresMapPageDesktop/fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import rutaSalcoatitan from "@/imports/RutaFloresMapPageDesktop/828973c65dab400d9481607663e04c1e6267bbca.png";
import rutaNahuizalco from "@/imports/RutaFloresMapPageDesktop/f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import rutaSonsonate from "@/imports/RutaFloresMapPageDesktop/a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
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
import { Theme } from '../theme';
import { Room, AmenityItem, features } from '../data';
import RoomCard from '../components/RoomCard';
import FigmaRoomCard from '../components/FigmaRoomCard';
// ─── Homepage ────────────────────────────────────────────────────────────────

const localFeatures = [{
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p1f220c80} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("feature_garden"),
  desc: "A lush, tranquil green oasis to unwind, read, or enjoy morning coffee."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p3075da00} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("feature_kitchen"),
  desc: "Fully equipped space to cook, share recipes, and connect over food."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p2794d100} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("feature_lounge"),
  desc: "Cozy community space with deep couches, books, and vinyl records."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.pa962300} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("feature_laundry"),
  desc: "24/7 washers and dryers so you can pack light and stay fresh."
}];
export default function HomePage({
  t,
  isDark,
  rooms,
  onExploreRooms,
  onOpenModal,
  onExploreRuta
}: {
  theme: Theme;
  isDark: boolean;
  rooms: Room[];
  onExploreRooms: () => void;
  onOpenModal: (r: Room) => void;
  onExploreRuta: () => void;
}) {
  return <div className="w-full">
      {/* ── Hero — Desktop ── */}
      <section className="hidden md:block relative w-full overflow-hidden" style={{
      background: "#0c1a10",
      minHeight: 600
    }}>
        <img src={heroForest} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{
        opacity: 0.8
      }} />
        <img src={heroForest} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{
        opacity: 0.8
      }} />
        <div className="absolute inset-0" style={{
        background: "linear-gradient(181.76deg, rgba(12,26,16,0.21) 18.55%, rgba(12,26,16,0.49) 71.94%, rgba(12,26,16,0.665) 102.8%)"
      }} />
        <div className="relative z-10 flex flex-col justify-center gap-8 lg:gap-10 px-6 md:px-14 lg:px-[90px] pt-16 md:pt-20 pb-20 md:pb-[112px] max-w-[1920px] mx-auto w-full" style={{
        minHeight: 600
      }}>
          <motion.div className="flex flex-col gap-5" initial={{
          opacity: 0,
          y: 28
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <p className="font-black italic leading-none whitespace-nowrap" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(42px,4.65vw,67px)",
            color: "#f2b138",
            fontVariationSettings: '"SOFT" 0,"WONK" 1'
          }}>{t("hero_title_2")}</p>
            <p className="font-black leading-tight" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(20px,2.08vw,30px)",
            color: "#ffffff",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            maxWidth: 520
          }}>{t("hero_subtitle_2")}</p>
          </motion.div>
          <motion.div className="flex flex-col gap-8 md:gap-[60px]" initial={{
          opacity: 0,
          y: 16
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <div className="flex flex-wrap gap-4 md:gap-5 items-center">
              <button onClick={onExploreRooms} className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)] transition-colors" style={{
              background: "#f2b138"
            }} onMouseEnter={e => e.currentTarget.style.background = "#d49a1f"} onMouseLeave={e => e.currentTarget.style.background = "#f2b138"}>
                <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11.2,
                fontWeight: 700,
                letterSpacing: "1.34px",
                color: "#0c1a10",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontVariationSettings: '"opsz" 14'
              }}>{t("nav_explore_rooms_2")}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
              <button className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors" style={{
              background: "#3d9e72"
            }} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
                <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11.2,
                fontWeight: 700,
                letterSpacing: "1.34px",
                color: "white",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                fontVariationSettings: '"opsz" 14'
              }}>{t("nav_our_story_2")}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold leading-none" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 22.4,
              color: "#f2b138",
              fontVariationSettings: '"SOFT" 0,"WONK" 1'
            }}>★ 4.9</p>
              <p className="uppercase tracking-widest" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 9.6,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "1.344px",
              fontVariationSettings: '"opsz" 9'
            }}>{t("booking_rating_1")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Hero — Mobile ── */}
      <div className="block md:hidden w-full overflow-hidden relative flex flex-col justify-between" style={{
      paddingTop: "calc(env(safe-area-inset-top) + 72px)",
      minHeight: 560
    }}>
        {/* Full-bleed photo */}
        <img src={heroMobile} alt="Neskapolita hostel entrance" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
        {/* Top spacer */}
        <div className="h-[40px] sm:h-[80px] relative shrink-0 w-full" />
        {/* Bottom scrim panel — gradient matches Figma exactly */}
        <motion.div className="relative shrink-0 flex flex-col gap-6 items-center w-full" style={{
        background: "linear-gradient(to bottom, rgba(12,26,16,0) 0%, rgba(12,26,16,0.9) 40%, #0c1a10 100%)",
        paddingTop: 50,
        paddingBottom: 36,
        paddingLeft: 20,
        paddingRight: 20
      }} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }}>
          {/* Rating + title + subtitle */}
          <div className="flex flex-col gap-2.5 items-center w-full">
            <div className="flex items-center gap-2">
              <span style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 19,
              fontWeight: 700,
              color: "#f2b138",
              fontVariationSettings: '"SOFT" 0,"WONK" 1'
            }}>★ 4.9</span>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 10,
              color: "#ede8d8",
              opacity: 0.8,
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontVariationSettings: '"opsz" 14'
            }}>{t("booking_rating_2")}</span>
            </div>
            <p className="font-black italic text-center w-full" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(32px, 8.5vw, 38px)",
            color: "#f2b138",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            lineHeight: 1.1
          }}>{t("hero_title_2")}</p>
            <p className="font-black text-center w-full" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(20px, 5.5vw, 24px)",
            color: "#ede8d8",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            lineHeight: 1.25
          }}>{t("hero_subtitle_2")}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[10px] w-full max-w-[400px]">
            <button onClick={onExploreRooms} className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]" style={{
            background: "#f2b138",
            padding: "14px 24px"
          }} onTouchStart={e => e.currentTarget.style.background = "#d49a1f"} onTouchEnd={e => e.currentTarget.style.background = "#f2b138"}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "#0c1a10",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("nav_explore_rooms_2")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <button className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]" style={{
            background: "#3d9e72",
            padding: "14px 24px"
          }} onTouchStart={e => e.currentTarget.style.background = "#2d8a60"} onTouchEnd={e => e.currentTarget.style.background = "#3d9e72"}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "white",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("nav_our_story_2")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Story ── */}
      <section className="relative overflow-hidden w-full" style={{
      minHeight: 350,
      background: "#f2f0eb"
    }}>
        {/* Background layers */}
        <div className="absolute inset-0" style={{
        background: "#f2f0eb"
      }} />
        <div className="absolute inset-0 max-w-[1920px] mx-auto w-full overflow-hidden pointer-events-none select-none">
          <img src={bgLight} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img src={bgFlowers} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content: logo left + text right */}
        <div className="relative z-10 max-w-[1920px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 md:px-14 lg:px-[80px] py-12 md:py-[68px]">
          {/* Logo */}
          <img src={logoImg} alt="Neskapolita logo" className="shrink-0 w-[180px] h-[150px] sm:w-[220px] sm:h-[185px] md:w-[250px] md:h-[210px]" style={{
          objectFit: "contain"
        }} />

          {/* Text */}
          <div className="flex flex-col items-center gap-5 flex-1 text-center">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {/* Heading — NOTE: Background is always cream (#f2f0eb), so text MUST be dark (#0c1a10) */}
              <h2 className="font-black" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(22px,2.8vw,32px)",
              lineHeight: 1.2,
              color: "#0c1a10",
              fontVariationSettings: '"SOFT" 0,"WONK" 1',
              maxWidth: 843
            }}>{t("story_title_1")}{" "}
                <br className="hidden md:block" />
                <em style={{
                color: "#3d9e72"
              }}>{t("story_title_2")}</em>
              </h2>

              {/* Subtext */}
              <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: "#131f16",
              maxWidth: 498,
              fontVariationSettings: '"opsz" 14'
            }}>{t("story_desc")}</p>
            </div>

            {/* Button */}
            <button className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors" style={{
            background: "#3d9e72"
          }} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "white",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("story_cta")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Find Your Casa ── */}
      <section className="py-16 md:py-20 px-6 md:px-14 w-full" style={{
      background: theme.pageBg
    }}>
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-black italic" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(24px,3vw,32px)",
            lineHeight: 1.2,
            color: theme.heading,
            fontVariationSettings: '"SOFT" 0,"WONK" 1'
          }}>{t("find_your")}<span style={{
              color: theme.green
            }}>{t("casa")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rooms.map(room => <FigmaRoomCard key={room.id} room={room} theme={theme} isDark={isDark} onExplore={onExploreRooms} />)}
          </div>
        </div>
      </section>

      {/* ── Save 10% ── */}
      <div className="hidden lg:block w-full">
        <SavingsBannerSection />
      </div>
      <div className="block lg:hidden w-full">
        <BookingPayments />
      </div>

      {/* ── Everything you need ── */}
      <section className="py-16 md:py-20 px-6 md:px-14 w-full" style={{
      background: theme.pageBg
    }}>
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-black italic mb-10 md:mb-12" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(24px,3vw,32px)",
            lineHeight: 1.2,
            color: theme.heading,
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            maxWidth: 420
          }}>{t("everything_you_need")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localFeatures.map(f => <div key={f.title} className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl" style={{
              background: theme.cardBg,
              border: `1px solid ${theme.amenityBorder}`
            }}>
                  <div className="shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <p className="font-bold mb-1" style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 16,
                  color: theme.heading
                }}>{f.title}</p>
                    <p style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 15,
                  color: theme.body,
                  lineHeight: 1.7
                }}>{f.desc}</p>
                  </div>
                </div>)}
            </div>
            {/* Traveler Community — full width */}
            <div className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl mt-4" style={{
            background: theme.cardBg,
            border: `1px solid ${theme.amenityBorder}`
          }}>
              <div className="shrink-0 mt-0.5">
                <svg fill="none" viewBox="0 0 28 28" width="28" height="28">
                  <path d={svgPaths.p1cb142c0} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="font-bold mb-1" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 16,
                color: theme.heading
              }}>{t("traveler_community")}</p>
                <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 15,
                color: theme.body,
                lineHeight: 1.7
              }}>{t("traveler_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ruta de las Flores map ── */}
      <section className="w-full overflow-hidden relative" style={{
      background: isDark ? "#0c1a10" : "#f2f4f3"
    }}>
        <div className="max-w-[1920px] mx-auto w-full relative">
          {/* Desktop image */}
          <img src={isDark ? rutaDesktopDark : rutaDesktopLight} alt="Ruta de las Flores map" className="hidden md:block w-full object-cover max-h-[850px]" />
          {/* Mobile image */}
          <img src={isDark ? rutaMobileDark : rutaMobileLight} alt="Ruta de las Flores map" className="block md:hidden w-full object-cover" />

          {/* Desktop CTA — bottom-right, relative to the centered 1920 container */}
          <div className="hidden md:block absolute bottom-8 md:bottom-[80px] right-8 md:right-[80px]">
            <ButtonPrimary onClick={onExploreRuta} />
          </div>

          {/* Mobile CTA — centered at the bottom of the image */}
          <div className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
            <ButtonPrimary onClick={onExploreRuta} />
          </div>
        </div>
      </section>
    </div>;
}

// ─── Ruta de las Flores page ──────────────────────────────────────────────────

const RUTA_STOPS = [{
  stop: "STOP 1",
  distance: "0 km — you're here!",
  imageLeft: true,
  city: "Juayúa",
  subtitle: "Food Festival & Waterfalls",
  description: t("ruta_desc_1"),
  image: rutaJuayua
}, {
  stop: "STOP 2",
  distance: "8 km north",
  imageLeft: false,
  city: "Apaneca",
  subtitle: "Coffee Farms & Adventure",
  description: t("ruta_desc_2"),
  image: rutaApaneca
}, {
  stop: "STOP 3",
  distance: "12 km north",
  imageLeft: true,
  city: "Ataco",
  subtitle: "Street Art & Handcrafts",
  description: t("ruta_desc_3"),
  image: rutaAtaco
}, {
  stop: "STOP 4",
  distance: "5 km south",
  imageLeft: false,
  city: "Salcoatitán",
  subtitle: "Art Galleries & Yucca Cuisine",
  description: t("ruta_desc_4"),
  image: rutaSalcoatitan
}, {
  stop: "STOP 5",
  distance: "15 km south",
  imageLeft: true,
  city: "Nahuizalco",
  subtitle: "Candlelit Night Market",
  description: t("ruta_desc_5"),
  image: rutaNahuizalco
}, {
  stop: "STOP 6",
  distance: "25 km south",
  imageLeft: false,
  city: "Sonsonate",
  subtitle: "Colonial Gateway & Thermal Pools",
  description: t("ruta_desc_6"),
  image: rutaSonsonate
}];
const RUTA_FAQS = [{
  q: "How many days do you need for Ruta de las Flores?",
  a: "We recommend 2 to 3 days to fully explore the food markets, hike to waterfalls, and tour coffee farms at a relaxed highland pace."
}, {
  q: "What is the best town to visit in Ruta de las Flores?",
  a: "Juayúa is the perfect culinary and adventure hub, while Ataco shines with its street art, and Apaneca offers high-altitude nature."
}, {
  q: "Can you visit Ruta de las Flores without a car?",
  a: "Yes! Colorful local buses (called 'chicken buses') run constantly between all towns for just a few cents, and tuk-tuks are easy to hail."
}, {
  q: "What is the best time of year to visit Ruta de las Flores?",
  a: "The dry season from November to April offers beautiful sunny weather, but the green season (May to October) makes waterfalls spectacular."
}];
const CITY_PLACES: Record<string, {
  name: string;
  desc: string;
  mapsUrl: string;
}[]> = {
  "Juayúa": [{
    name: t("place_1"),
    desc: "A series of stunning cascades fed by volcanic springs, ideal for swimming.",
    mapsUrl: "https://www.google.com/maps/search/Los+Chorros+Waterfalls+Juayua+El+Salvador"
  }, {
    name: t("place_2"),
    desc: "Open-air market every weekend overflowing with local pupusas, grilled meats, and fresh juices.",
    mapsUrl: "https://www.google.com/maps/search/Juayua+Food+Festival+El+Salvador"
  }, {
    name: t("place_3"),
    desc: "A peaceful volcanic lagoon surrounded by lush highland forest — perfect for sunrise hikes.",
    mapsUrl: "https://www.google.com/maps/search/Laguna+Las+Ninfas+El+Salvador"
  }],
  "Apaneca": [{
    name: t("place_4"),
    desc: "A striking emerald-green crater lake cradled inside an extinct volcanic caldera.",
    mapsUrl: "https://www.google.com/maps/search/Laguna+Verde+Apaneca+El+Salvador"
  }, {
    name: t("place_5"),
    desc: "High-altitude zip-line adventure through cloud-forest canopy with panoramic ridge views.",
    mapsUrl: "https://www.google.com/maps/search/Canopy+Apaneca+El+Salvador"
  }, {
    name: t("place_6"),
    desc: "Award-winning coffee farm offering guided tours from seed to cup.",
    mapsUrl: "https://www.google.com/maps/search/Finca+Santa+Leticia+Apaneca+El+Salvador"
  }],
  "Ataco": [{
    name: t("place_7"),
    desc: "Cobblestone streets lined with vivid pastel murals painted by local and international artists.",
    mapsUrl: "https://www.google.com/maps/search/Ataco+Mural+District+El+Salvador"
  }, {
    name: t("place_8"),
    desc: "A colorful artisan market selling handwoven textiles, ceramics, and woodwork.",
    mapsUrl: "https://www.google.com/maps/search/Mercado+Artesanias+Ataco+El+Salvador"
  }, {
    name: t("place_9"),
    desc: "Cloud forest reserve with rare wildlife, volcanic lookouts, and challenging trails nearby.",
    mapsUrl: "https://www.google.com/maps/search/El+Imposible+National+Park+El+Salvador"
  }],
  "Salcoatitán": [{
    name: t("place_10"),
    desc: "The tranquil central park framed by colonial architecture and flowering gardens.",
    mapsUrl: "https://www.google.com/maps/search/Parque+Central+Salcoatitan+El+Salvador"
  }, {
    name: t("place_11"),
    desc: "Open-air stalls serving the town's famous yucca wrapped in banana leaves with local curtido.",
    mapsUrl: "https://www.google.com/maps/search/Salcoatitan+yucca+market+El+Salvador"
  }, {
    name: t("place_12"),
    desc: "Family-run galleries showcasing intricate hand-carved furniture and traditional wooden crafts.",
    mapsUrl: "https://www.google.com/maps/search/Salcoatitan+artisan+wood+gallery+El+Salvador"
  }],
  "Nahuizalco": [{
    name: t("place_13"),
    desc: "El Salvador's only candlelit night market — warm pupusas, live marimba, and local craft stalls.",
    mapsUrl: "https://www.google.com/maps/search/Mercado+Nocturno+Nahuizalco+El+Salvador"
  }, {
    name: t("place_14"),
    desc: "Watch master artisans weave ancestral Nahua basketry and furniture using tule reed.",
    mapsUrl: "https://www.google.com/maps/search/Nahuizalco+wicker+workshop+El+Salvador"
  }, {
    name: t("place_15"),
    desc: "Colonial-era church with a distinctive white façade, central to the town's indigenous festivals.",
    mapsUrl: "https://www.google.com/maps/search/Iglesia+Nahuizalco+El+Salvador"
  }],
  "Sonsonate": [{
    name: t("place_16"),
    desc: "An imposing Baroque cathedral built in the 18th century with ornate gold-leaf altarpieces.",
    mapsUrl: "https://www.google.com/maps/search/Cathedral+Sonsonate+El+Salvador"
  }, {
    name: t("place_17"),
    desc: "Natural volcanic thermal pools with mineral-rich waters — a perfect post-hike recovery spot.",
    mapsUrl: "https://www.google.com/maps/search/thermal+hot+springs+Sonsonate+El+Salvador"
  }, {
    name: t("place_18"),
    desc: "A hidden multi-tiered waterfall deep in the Nahuaterique mountains, reached via jungle trail.",
    mapsUrl: "https://www.google.com/maps/search/Cascada+El+Escuco+Sonsonate+El+Salvador"
  }]
};
function CityPopIn({
  city,
  onClose
}: {
  city: string;
  onClose: () => void;
}) {
  const places = CITY_PLACES[city] || [];
  return <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.22
  }} onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0" style={{
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)"
    }} />

      {/* Panel */}
      <motion.div className="relative z-10 w-full sm:max-w-[448px] bg-white flex flex-col overflow-hidden rounded-t-[20px] sm:rounded-[16px] max-h-[90vh] sm:max-h-[85vh]" style={{
      boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)"
    }} initial={{
      opacity: 0,
      y: 60
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 40
    }} transition={{
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1]
    }} onClick={e => e.stopPropagation()}>
        {/* Drag handle — mobile only */}
        <div className="flex sm:hidden justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full" style={{
          background: "#d5dad7"
        }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 shrink-0" style={{
        borderBottom: "1px solid #d5dad7"
      }}>
          <div className="flex flex-col gap-0.5">
            <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "2px",
            color: "#3d9e72",
            textTransform: "uppercase",
            fontVariationSettings: '"opsz" 14'
          }}>{t("top_places")}</p>
            <p style={{
            fontFamily: "'Fraunces',serif",
            fontWeight: 900,
            fontSize: 22,
            lineHeight: "27.5px",
            color: "#1c2420",
            fontVariationSettings: '"SOFT" 0, "WONK" 1'
          }}>
              {city}
            </p>
          </div>
          <button onClick={onClose} className="flex items-center justify-center rounded-full shrink-0 transition-colors" style={{
          width: 32,
          height: 32,
          background: "transparent"
        }} onMouseEnter={e => e.currentTarget.style.background = "#f2f4f3"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <X size={16} color="#54625D" strokeWidth={1.33} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 pt-3 pb-4 overflow-y-auto">
          {/* Instruction */}
          <div className="flex items-center gap-3 justify-center px-6 py-1">
            <div className="flex items-center justify-center rounded-full shrink-0" style={{
            width: 28,
            height: 28,
            background: "rgba(61,158,114,0.09)"
          }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
              </svg>
            </div>
            <p style={{
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.5px",
            color: "#3d9e72",
            whiteSpace: "nowrap"
          }}>{t("tap_place")}</p>
          </div>

          {/* Places list */}
          <div className="flex flex-col">
            {places.map((place, i) => <a key={place.name} href={place.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start px-6 py-4 transition-colors cursor-pointer no-underline" style={{
            borderBottom: i < places.length - 1 ? "1px solid #f2f4f3" : "none"
          }} onMouseEnter={e => e.currentTarget.style.background = "#fafbfa"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <div className="shrink-0 pt-0.5">
                  <div className="flex items-center justify-center rounded-full" style={{
                width: 28,
                height: 28,
                background: "rgba(61,158,114,0.09)"
              }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.625 3.5 7.5 3.5 7.5S10 7.125 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.083" />
                      <circle cx="6.5" cy="4.5" r="1.3" stroke="#3D9E72" strokeWidth="1.083" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "21px",
                color: "#1c2420",
                fontVariationSettings: '"opsz" 14'
              }}>
                    {place.name}
                  </p>
                  <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "19.5px",
                color: "#54625d",
                fontVariationSettings: '"opsz" 14'
              }}>
                    {place.desc}
                  </p>
                </div>
              </a>)}
          </div>
        </div>
      </motion.div>
    </motion.div>;
}