import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import { useState, useEffect } from "react";
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
  title: t("features.garden"),
  desc: "A lush, tranquil green oasis to unwind, read, or enjoy morning coffee."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p3075da00} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("features.kitchen"),
  desc: "Fully equipped space to cook, share recipes, and connect over food."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.p2794d100} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("features.lounge"),
  desc: "Cozy community space with deep couches, books, and vinyl records."
}, {
  icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path d={svgPaths.pa962300} stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
      </svg>,
  title: t("features.laundry"),
  desc: "24/7 washers and dryers so you can pack light and stay fresh."
}];
export default function HomePage({
  theme,
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
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const root = document.getElementById("root");
    if (root) root.scrollTop = 0;
  }, []);

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
        <div className="relative z-10 flex flex-col justify-center gap-8 lg:gap-10 px-6 md:px-14 lg:px-[90px] pt-24 md:pt-28 pb-20 md:pb-[112px] max-w-[1920px] mx-auto w-full" style={{
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
          }}>{t("hero.title")}</p>
            <p className="font-black leading-tight" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(20px,2.08vw,30px)",
            color: "#ffffff",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            maxWidth: 520
          }}>{t("hero.subtitle")}</p>
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
              }}>{t("nav.explore_rooms")}</span>
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
              }}>{t("nav.our_story")}</span>
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
            }}>{t("common.booking_rating_1")}</p>
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
            }}>{t("common.booking_rating_2")}</span>
            </div>
            <p className="font-black italic text-center w-full" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(32px, 8.5vw, 38px)",
            color: "#f2b138",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            lineHeight: 1.1
          }}>{t("hero.title")}</p>
            <p className="font-black text-center w-full" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(20px, 5.5vw, 24px)",
            color: "#ede8d8",
            fontVariationSettings: '"SOFT" 0,"WONK" 1',
            lineHeight: 1.25
          }}>{t("hero.subtitle")}</p>
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
            }}>{t("nav.explore_rooms")}</span>
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
            }}>{t("nav.our_story")}</span>
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
            }}>{t("story.title_1")}{" "}
                <br className="hidden md:block" />
                <em style={{
                color: "#3d9e72"
              }}>{t("story.title_2")}</em>
              </h2>

              {/* Subtext */}
              <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              color: "#131f16",
              maxWidth: 498,
              fontVariationSettings: '"opsz" 14'
            }}>{t("story.desc")}</p>
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
            }}>{t("story.cta")}</span>
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
          }}>{t("common.find_your")}<span style={{
              color: theme.green
            }}>{t("common.casa")}</span>
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
          }}>{t("common.everything_you_need")}</h2>
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
              }}>{t("common.traveler_community")}</p>
                <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 15,
                color: theme.body,
                lineHeight: 1.7
              }}>{t("common.traveler_desc")}</p>
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
