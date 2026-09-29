import i18n from "../../locales/i18n";
import {motion} from "motion/react";
import {Check, Star, X} from "lucide-react";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
// Ruta de las Flores page assets
// Homepage assets
// Room number badge images (from Figma DesktopV1)
import {Theme} from '../theme';
import {AmenityIcon, Room} from '../data';

const t = i18n.t.bind(i18n);
// ─── Modal ────────────────────────────────────────────────────────────────────

export default function RoomModal({
  room,
  theme,
  onClose
}: {
  room: Room;
  theme: Theme;
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
      background: theme.cardBg,
      borderRadius: 4,
      border: `1px solid ${theme.amenityBorder}`
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
          borderBottom: `1px solid ${theme.divider}`
        }}>
            <div className="flex items-baseline gap-2">
              <span className="font-bold" style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 32,
              color: theme.gold
            }}>${room.price}</span>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              color: theme.muted
            }}>{t("common.per_night_slash")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end gap-0.5">
                <span className="uppercase tracking-widest" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 8,
                color: theme.muted
              }}>{t("common.size")}</span>
                <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                color: theme.heading
              }}>{room.size}</span>
              </div>
              <div className="w-px h-7" style={{
              background: theme.divider
            }} />
              <div className="flex items-center gap-1.5">
                <Star size={11} fill={theme.starColor} stroke="none" />
                <span className="font-bold" style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 14,
                color: theme.starColor
              }}>4.9</span>
                <span className="uppercase tracking-widest" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 8,
                color: theme.muted
              }}>{t("common.google")}</span>
              </div>
            </div>
          </div>

          <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 14,
          color: theme.body,
          lineHeight: 1.7
        }}>{room.description}</p>

          {/* Amenities */}
          {"detailedAmenities" in room && room.detailedAmenities ? <div className="flex flex-col gap-5">
              <p className="uppercase tracking-widest" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: theme.muted
          }}>{t("common.key_amenities")}</p>
              {(room.detailedAmenities as DetailedAmenityCategory[]).map(cat => <div key={cat.title}>
                  <p className="mb-2" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: theme.heading
            }}>{cat.title}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map(item => <div key={item} className="flex items-center gap-2.5">
                        <Check size={10} color={theme.green} strokeWidth={2.5} />
                        <span style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 13,
                  color: theme.body
                }}>{item}</span>
                      </div>)}
                  </div>
                </div>)}
            </div> : <div>
              <p className="uppercase tracking-widest mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: theme.muted
          }}>{t("common.amenities")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {room.amenities.map(item => <div key={item.label} className="flex items-center gap-2 px-3 py-2.5" style={{
              background: theme.amenityBg,
              border: `1px solid ${theme.amenityBorder}`,
              borderRadius: 3
            }}>
                    <AmenityIcon item={item} size={12} color={theme.green} />
                    <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11,
                color: theme.body
              }}>{item.label}</span>
                  </div>)}
              </div>
            </div>}

          {/* Highlights */}
          <div>
            <p className="uppercase tracking-widest mb-3" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 9,
            color: theme.muted
          }}>{t("common.highlights")}</p>
            <div className="flex flex-wrap gap-2">
              {room.highlights.map(h => <div key={h} className="flex items-center gap-1.5 px-3 py-1.5" style={{
              background: theme.highlightBg,
              border: `1px solid ${theme.highlightBorder}`,
              borderRadius: 100
            }}>
                  <Check size={10} color={theme.green} strokeWidth={2.5} />
                  <span style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11,
                color: theme.body
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
          }} onClick={() => window.open(`https://api.whatsapp.com/send?phone=50370917674&text=${encodeURIComponent(`Hello, I'm interested in ${room.name}.`)}`, '_blank')}>
              <span style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11.2,
              fontWeight: 700,
              letterSpacing: "1.34px",
              color: "#0c1a10",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              fontVariationSettings: '"opsz" 14'
            }}>{t("common.book_this_room")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button className="flex items-center justify-center px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0" style={{
            background: "transparent",
            border: `1px solid ${theme.btnOutlineBorder}`,
            color: theme.btnOutlineColor
          }} whileHover={{
            borderColor: theme.btnOutlineHoverBorder,
            color: theme.btnOutlineHoverColor
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
            }}>{t("common.close")}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>;
}
