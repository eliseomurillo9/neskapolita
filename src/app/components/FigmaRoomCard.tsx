import i18n from "../../locales/i18n";
import {useState} from "react";
// Ruta de las Flores — 4 variants (desktop/mobile × light/dark)
// Ruta de las Flores page assets
// Homepage assets
// Room number badge images (from Figma DesktopV1)
import {Theme} from '../theme';
import {AmenityIcon, Room} from '../data';

const t = i18n.t.bind(i18n);
// ─── Figma-style room card with hover state ───────────────────────────────────

export default function FigmaRoomCard({
  room,
  theme,
  isDark,
  onExplore
}: {
  room: Room;
  theme: Theme;
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
  return <div className="relative overflow-hidden flex flex-col" style={{
    background: cardBg,
    border: `1px solid ${border}`,
    height: 442,
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
        }}>{t("common.most_popular")}</p>
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
          }}>{t("common.per_night_short")}</p>
          </div>
        </div>

        {/* Description / amenity icons (hover) / full-width button */}
        <div className="flex flex-col gap-3 w-full flex-1">
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

          {/* Explore button — perfectly static at the bottom */}
          <button className="absolute bottom-[10px] left-[12px] right-[12px] flex items-center justify-center gap-[8px] cursor-pointer border-0 rounded-[4px] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]" style={{
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
          }}>{t("common.explore")}</span>
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
