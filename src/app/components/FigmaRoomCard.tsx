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
// ─── Figma-style room card with hover state ───────────────────────────────────

export default function FigmaRoomCard({
  room,
  t,
  isDark,
  onExplore
}: {
  room: Room;
  t: Theme;
  isDark: boolean;
  onExplore: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const cardBg = isDark ? "#0d1b11" : "#ffffff";
  const nameFg = isDark ? "#ede8d8" : "#0c1a10";
  const priceFg = isDark ? "#ede8d8" : "#0c1a10";
  const bodyFg = isDark ? "rgba(237,232,216,0.62)" : "#0a1209";
  const iconBg = "rgba(61,158,114,0.2)";
  const border = isDark ? "rgba(61,158,114,0.14)" : "rgba(61,158,114,0.12)";
  return <div className="relative overflow-hidden" style={{
    background: cardBg,
    border: `1px solid ${border}`,
    minHeight: 416,
    cursor: "default"
  }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Image */}
      <div className="relative overflow-hidden shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{
      height: hovered ? 216 : 302
    }}>
        <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{
        transform: hovered ? "scale(1.05)" : "scale(1)"
      }} />
        <div className="absolute inset-0" style={{
        background: "rgba(12,26,16,0.4)",
        mixBlendMode: "multiply"
      }} />
        {/* Tag */}
        {room.tag && <div className="absolute top-0 right-0" style={{
        background: "#f2f2f2",
        border: "0.716px solid #d9d9d9",
        borderRadius: 2,
        padding: "5px 7px",
        margin: "0.12px 0.12px 0 0"
      }}>
            <p className="uppercase whitespace-nowrap" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 6.64,
          letterSpacing: "0.928px",
          color: "#595961",
          fontVariationSettings: '"opsz" 9'
        }}>{t("most_popular")}</p>
          </div>}
        {/* Room number badge image */}
        <img src={room.badge} alt={room.index} className="absolute pointer-events-none" style={{
        width: 54,
        height: 57,
        top: 11,
        left: 12,
        objectFit: "contain"
      }} />
      </div>

      {/* Divider */}
      <div style={{
      borderTop: "0.716px solid rgba(61,158,114,0.1)"
    }} />

      {/* Content */}
      <div className="flex flex-col px-3 pt-[10.716px] pb-[10px] gap-4 overflow-hidden" style={{
      flex: 1
    }}>
        {/* Name + Price */}
        <div className="flex items-start justify-between w-full">
          <p className="font-bold whitespace-nowrap" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 12.6,
          lineHeight: "18.9px",
          color: nameFg,
          fontVariationSettings: '"SOFT" 0,"WONK" 1'
        }}>
            {hovered ? room.name : room.name}
          </p>
          <div className="flex flex-col items-end shrink-0 ml-2">
            <p className="font-bold whitespace-nowrap" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 17.2,
            lineHeight: "17.2px",
            color: priceFg,
            fontVariationSettings: '"SOFT" 0,"WONK" 1'
          }}>
              ${room.price}
            </p>
            <p className="opacity-40 whitespace-nowrap" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 6.9,
            lineHeight: "10.3px",
            color: isDark ? "#ede8d8" : "#0c1a10",
            fontVariationSettings: '"opsz" 9'
          }}>{t("per_night_short")}</p>
          </div>
        </div>

        {/* Description / amenity icons (hover) / full-width button */}
        <div className="flex flex-col gap-3 w-full">
          {/* Description */}
          <p className="relative shrink-0" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 9.3,
          lineHeight: "14.3px",
          color: bodyFg,
          width: "100%",
          fontVariationSettings: '"opsz" 14',
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: hovered ? 4 : 2,
          WebkitBoxOrient: "vertical"
        } as React.CSSProperties}>
            {hovered ? room.hoverDescription : room.type}
          </p>

          {/* Amenity icons row — hover only */}
          {hovered && <div className="flex gap-2 items-start w-full">
              {room.amenities.slice(0, 4).map(item => <div key={item.label} className="flex flex-col gap-1 items-center flex-1 min-w-0">
                  <div className="flex items-center justify-center rounded-[6px] shrink-0" style={{
              width: 24,
              height: 24,
              background: iconBg
            }}>
                    <AmenityIcon item={item} size={13} color="#3D9E72" />
                  </div>
                  <p className="text-center font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 8,
              color: nameFg,
              fontVariationSettings: '"opsz" 14',
              lineHeight: "normal",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%"
            }}>
                    {item.label}
                  </p>
                </div>)}
            </div>}

          {/* Explore button — always full width */}
          <button className="w-full flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]" style={{
          background: "#3d9e72",
          padding: "14px 30px",
          transition: "background 0.2s"
        }} onClick={onExplore} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
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
          </button>
        </div>
      </div>

      {/* Outer border overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
      border: `1px solid ${border}`
    }} />
    </div>;
}