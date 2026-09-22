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
import { Room, AmenityItem, AmenityIcon } from '../data';
import RoomModal from './RoomModal';
// ─── Room stack card ──────────────────────────────────────────────────────────

export default function RoomCard({
  room,
  t,
  index,
  onOpenModal
}: {
  room: Room;
  t: Theme;
  index: number;
  onOpenModal: (r: Room) => void;
}) {
  const imageRight = index % 2 !== 0;
  return <motion.div className="relative flex flex-col md:flex-row overflow-hidden" style={{
    borderBottom: `1px solid ${t.sectionBorder}`,
    minHeight: "min(520px, 72vw)"
  }} initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} viewport={{
    once: true,
    margin: "-80px"
  }} transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  }}>
      {/* Image half */}
      <motion.div className={`relative overflow-hidden md:w-1/2 shrink-0 ${imageRight ? "md:order-2" : ""}`} style={{
      minHeight: 300
    }} initial="rest" whileHover="hover" animate="rest">
        <motion.img src={room.image} alt={room.name} className="w-full h-full object-cover absolute inset-0" variants={{
        rest: {
          scale: 1
        },
        hover: {
          scale: 1.04
        }
      }} transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }} />
        {/* directional fade toward content */}
        <div className="absolute inset-0" style={{
        background: imageRight ? "linear-gradient(270deg,rgba(10,18,9,0) 55%,rgba(10,18,9,0.4) 100%)" : "linear-gradient(90deg,rgba(10,18,9,0) 55%,rgba(10,18,9,0.4) 100%)"
      }} />
        {/* room number watermark */}
        <span className="absolute bottom-4 right-5 font-black select-none pointer-events-none leading-none italic" style={{
        fontFamily: "'Fraunces',serif",
        fontSize: 88,
        color: t.watermark
      }}>
          {room.index}
        </span>
      </motion.div>

      {/* Content half */}
      <div className={`relative flex flex-col justify-center gap-6 px-10 md:px-14 py-12 md:w-1/2 ${imageRight ? "md:order-1" : ""}`} style={{
      background: t.cardBg
    }}>
        {/* Index + tag */}
        <div className="flex items-center gap-3">
          <span className="font-bold" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 12,
          letterSpacing: "0.12em",
          color: t.gold
        }}>{room.index}</span>
          {room.tag && <span className="px-2 py-0.5 uppercase tracking-widest" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 8,
          borderRadius: 2,
          background: t.tag.bg,
          border: `1px solid ${t.tag.border}`,
          color: t.tag.text
        }}>
              {room.tag}
            </span>}
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-1.5">
          <h2 className="font-black italic" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: "clamp(24px,3vw,32px)",
          lineHeight: 1.2,
          color: t.heading,
          fontVariationSettings: '"SOFT" 0,"WONK" 1'
        }}>
            {room.name}
          </h2>
          <p className="uppercase tracking-[0.22em]" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 10,
          color: t.green
        }}>{room.type}</p>
          {room.tagline && <p className="italic mt-0.5" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 13,
          color: t.muted
        }}>{room.tagline}</p>}
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="font-bold leading-none" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 24,
            color: t.gold
          }}>${room.price}</span>
            <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 10,
            color: t.muted
          }}>{t("per_night")}</span>
          </div>
        </div>

        {/* Description */}
        <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 15,
        color: t.body,
        lineHeight: 1.7,
        maxWidth: 400
      }}>
          {room.description}
        </p>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 4).map(item => <div key={item.label} className="flex items-center gap-1.5 px-2.5 py-1" style={{
          background: t.pillBg,
          border: `1px solid ${t.pillBorder}`,
          borderRadius: 100
        }}>
              <AmenityIcon item={item} size={10} color={t.green} />
              <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 10,
            color: t.body
          }}>{item.label}</span>
            </div>)}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 pt-2" style={{
        borderTop: `1px solid ${t.divider}`
      }}>
          <div className="flex gap-3">
            <motion.button className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]" style={{
            background: "#3d9e72"
          }} whileHover={{
            backgroundColor: "#2d8a60"
          }} whileTap={{
            scale: 0.97
          }} onClick={() => onOpenModal(room)}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "white",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("explore_card")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]" style={{
            background: "#f2b138"
          }} whileHover={{
            backgroundColor: "#d49a1f"
          }} whileTap={{
            scale: 0.97
          }}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "#0c1a10",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("book")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>;
}