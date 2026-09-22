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
// ─── Modal ────────────────────────────────────────────────────────────────────

export default function RoomModal({
  room,
  t,
  onClose
}: {
  room: Room;
  t: Theme;
  onClose: () => void;
}) {
  return <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.22
  }} onClick={onClose}>
      <div className="absolute inset-0 backdrop-blur-sm" style={{
      background: "rgba(0,0,0,0.65)"
    }} />
      <motion.div className="relative z-10 w-full sm:max-w-2xl max-h-[93vh] overflow-y-auto flex flex-col" style={{
      background: t.cardBg,
      borderRadius: 4,
      border: `1px solid ${t.amenityBorder}`
    }} initial={{
      opacity: 0,
      y: 56,
      scale: 0.97
    }} animate={{
      opacity: 1,
      y: 0,
      scale: 1
    }} exit={{
      opacity: 0,
      y: 36,
      scale: 0.97
    }} transition={{
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }} onClick={e => e.stopPropagation()}>
        {/* Hero */}
        <div className="relative overflow-hidden shrink-0" style={{
        height: 260
      }}>
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg,rgba(10,18,9,0) 40%,rgba(10,18,9,0.88) 100%)"
        }} />
          <button onClick={onClose} className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors" style={{
          background: "rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#ede8d8"
        }}>
            <X size={15} />
          </button>
          <div className="absolute bottom-5 left-6">
            <span className="block font-bold mb-1" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "#f2b138"
          }}>{room.index}</span>
            <h2 className="font-black leading-none italic" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 30,
            color: "#ede8d8"
          }}>{room.name}</h2>
            <p className="uppercase tracking-widest mt-1" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: "rgba(237,232,216,0.5)"
          }}>{room.type}</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-6">
          {/* Price row */}
          <div className="flex items-center justify-between pb-5" style={{
          borderBottom: `1px solid ${t.divider}`
        }}>
            <div className="flex items-baseline gap-2">
              <span className="font-bold" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 32,
              color: t.gold
            }}>${room.price}</span>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              color: t.muted
            }}>{t("per_night_slash")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end gap-0.5">
                <span className="uppercase tracking-widest" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 8,
                color: t.muted
              }}>{t("size")}</span>
                <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                color: t.heading
              }}>{room.size}</span>
              </div>
              <div className="w-px h-7" style={{
              background: t.divider
            }} />
              <div className="flex items-center gap-1.5">
                <Star size={11} fill={t.starColor} stroke="none" />
                <span className="font-bold" style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 14,
                color: t.starColor
              }}>4.9</span>
                <span className="uppercase tracking-widest" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 8,
                color: t.muted
              }}>{t("google")}</span>
              </div>
            </div>
          </div>

          <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 14,
          color: t.body,
          lineHeight: 1.7
        }}>{room.description}</p>

          {/* Amenities */}
          {"detailedAmenities" in room && room.detailedAmenities ? <div className="flex flex-col gap-5">
              <p className="uppercase tracking-widest" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: t.muted
          }}>{t("key_amenities")}</p>
              {(room.detailedAmenities as DetailedAmenityCategory[]).map(cat => <div key={cat.title}>
                  <p className="mb-2" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: t.heading
            }}>{cat.title}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map(item => <div key={item} className="flex items-center gap-2.5">
                        <Check size={10} color={t.green} strokeWidth={2.5} />
                        <span style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 13,
                  color: t.body
                }}>{item}</span>
                      </div>)}
                  </div>
                </div>)}
            </div> : <div>
              <p className="uppercase tracking-widest mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: t.muted
          }}>{t("amenities")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {room.amenities.map(item => <div key={item.label} className="flex items-center gap-2 px-3 py-2.5" style={{
              background: t.amenityBg,
              border: `1px solid ${t.amenityBorder}`,
              borderRadius: 3
            }}>
                    <AmenityIcon item={item} size={12} color={t.green} />
                    <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11,
                color: t.body
              }}>{item.label}</span>
                  </div>)}
              </div>
            </div>}

          {/* Highlights */}
          <div>
            <p className="uppercase tracking-widest mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: t.muted
          }}>{t("highlights")}</p>
            <div className="flex flex-wrap gap-2">
              {room.highlights.map(h => <div key={h} className="flex items-center gap-1.5 px-3 py-1.5" style={{
              background: t.highlightBg,
              border: `1px solid ${t.highlightBorder}`,
              borderRadius: 100
            }}>
                  <Check size={10} color={t.green} strokeWidth={2.5} />
                  <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11,
                color: t.body
              }}>{h}</span>
                </div>)}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-1">
            <motion.button className="flex-1 flex items-center justify-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(242,177,56,0.2)]" style={{
            background: "#f2b138"
          }} whileHover={{
            backgroundColor: "#d49a1f"
          }} whileTap={{
            scale: 0.98
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
            }}>{t("book_this_room")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button className="flex items-center justify-center px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0" style={{
            background: "transparent",
            border: `1px solid ${t.btnOutlineBorder}`,
            color: t.btnOutlineColor
          }} whileHover={{
            borderColor: t.btnOutlineHoverBorder,
            color: t.btnOutlineHoverColor
          }} whileTap={{
            scale: 0.98
          }} onClick={onClose}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("close")}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>;
}