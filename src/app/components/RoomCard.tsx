import i18n from "../../locales/i18n";
import {motion} from "motion/react";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
// Ruta de las Flores page assets
// Homepage assets
// Room number badge images (from Figma DesktopV1)
import {Theme} from '../theme';
import {AmenityIcon, Room} from '../data';

const t = i18n.t.bind(i18n);
// ─── Room stack card ──────────────────────────────────────────────────────────

export default function RoomCard({
  room,
  theme,
  index,
  onOpenModal
}: {
  room: Room;
  theme: Theme;
  index: number;
  onOpenModal: (r: Room) => void;
}) {
  const imageRight = index % 2 !== 0;
  return <motion.div className="relative flex flex-col md:flex-row overflow-hidden" style={{
    borderBottom: `1px solid ${theme.sectionBorder}`,
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
        color: theme.watermark
      }}>
          {room.index}
        </span>
      </motion.div>

      {/* Content half */}
      <div className={`relative flex flex-col justify-center gap-6 px-10 md:px-14 py-12 md:w-1/2 ${imageRight ? "md:order-1" : ""}`} style={{
      background: theme.cardBg
    }}>
        {/* Index + tag */}
        <div className="flex items-center gap-3">
          <span className="font-bold" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 12,
          letterSpacing: "0.12em",
          color: theme.gold
        }}>{room.index}</span>
          {room.tag && <span className="px-2 py-0.5 uppercase tracking-widest" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 8,
          borderRadius: 2,
          background: theme.tag.bg,
          border: `1px solid ${theme.tag.border}`,
          color: theme.tag.text
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
          color: theme.heading,
          fontVariationSettings: '"SOFT" 0,"WONK" 1'
        }}>
            {room.name}
          </h2>
          <p className="uppercase tracking-[0.22em]" style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 10,
          color: theme.green
        }}>{room.type}</p>
          {room.tagline && <p className="italic mt-0.5" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 13,
          color: theme.muted
        }}>{room.tagline}</p>}
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="font-bold leading-none" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 24,
            color: theme.gold
          }}>${room.price}</span>
            <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 10,
            color: theme.muted
          }}>{t("common.per_night")}</span>
          </div>
        </div>

        {/* Description */}
        <p style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 15,
        color: theme.body,
        lineHeight: 1.7,
        maxWidth: 400
      }}>
          {room.description}
        </p>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 4).map(item => <div key={item.label} className="flex items-center gap-1.5 px-2.5 py-1" style={{
          background: theme.pillBg,
          border: `1px solid ${theme.pillBorder}`,
          borderRadius: 100
        }}>
              <AmenityIcon item={item} size={10} color={theme.green} />
              <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 10,
            color: theme.body
          }}>{item.label}</span>
            </div>)}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 pt-2" style={{
        borderTop: `1px solid ${theme.divider}`
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
            }}>{t("common.explore")}</span>
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
            }}>{t("common.book")}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.4996 6H9.5004M6 9.5004L9.5004 6L6 2.4996" stroke="#0c1a10" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>;
}
