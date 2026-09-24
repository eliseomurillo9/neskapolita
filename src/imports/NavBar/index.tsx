import i18n from "../../locales/i18n";
import {useState} from "react";
import svgPaths from "./svg-9yr61w7rzh";
import menuSvgPaths from "@/imports/NeskapolitaMenuV2Bright-1/svg-d640mmtgs0";
import {GOOGLE_MAPS_URL} from "@/app/hooks/useAppNavigation";

const t = i18n.t.bind(i18n);
type NavBarProps = {
  className?: string;
  style?: "dark" | "light";
  lang?: "EN" | "ES";
  currentPage?: string;
  onToggleMode?: () => void;
  onToggleLang?: () => void;
  onBookNow?: () => void;
  onMenuChange?: (open: boolean) => void;
  onLogoClick?: () => void;
  onNavLink?: (link: string) => void;
};
const desktopLinks = ["Rooms", "Story", "Find Us"];
const NAV_LINKS = [{
  label: t("index.rooms"),
  page: "rooms"
}, {
  label: t("nav.our_story"),
  page: "home"
}, {
  label: t("index.find_us"),
  page: "home"
}];
export default function NavBar({
  className,
  style = "light",
  lang = "EN",
  currentPage = "home",
  onToggleMode,
  onToggleLang,
  onBookNow,
  onMenuChange,
  onLogoClick,
  onNavLink
}: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (open: boolean) => {
    setMenuOpen(open);
    onMenuChange?.(open);
  };
  const isDark = style === "dark";
  const textColor = isDark ? "#ede8d8" : "#1c2420";
  const mutedColor = isDark ? "rgba(237,232,216,0.5)" : "rgba(28,36,32,0.5)";
  const toggleBorder = isDark ? "#d5dad7" : "#3d9e72";
  const menuBg = isDark ? "#0d1f13" : "#f2f4f3";
  const activeLabel = currentPage === "rooms" ? "Rooms" : "Our Story";
  return <>
      {/* ── Nav bar strip ── */}
      <div className={className || "w-full relative"}>
        <div className="flex items-center justify-between w-full h-[72px] px-5 md:px-14 max-w-[1920px] mx-auto">

          {/* Desktop left: nav links */}
          <div className="hidden md:flex gap-10 flex-1 items-center">
            {desktopLinks.map(l => <button key={l} className="font-bold uppercase whitespace-nowrap cursor-pointer bg-transparent border-0 p-0" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11.52,
            letterSpacing: "1.38px",
            color: textColor,
            fontVariationSettings: '"opsz" 14'
          }} onClick={() => {
            if (onNavLink) {
              onNavLink(l);
            } else if (l === "Find Us") {
              window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
            }
          }}>
                {l}
              </button>)}
          </div>

          {/* Mobile left: hamburger */}
          <button className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 cursor-pointer bg-transparent border-0 p-0" onClick={() => toggleMenu(true)} aria-label="Open menu">
            <span className="block h-[1.5px] w-6 rounded-full" style={{
            background: textColor
          }} />
            <span className="block h-[1.5px] w-6 rounded-full" style={{
            background: textColor
          }} />
            <span className="block h-[1.5px] w-6 rounded-full" style={{
            background: textColor
          }} />
          </button>

          {/* Center: logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <p className="font-black italic whitespace-nowrap" style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 22.4,
            letterSpacing: "-0.22px",
            color: isDark ? "#ede8d8" : "#4c6e58",
            fontVariationSettings: '"SOFT" 0, "WONK" 1',
            lineHeight: "33.6px",
            cursor: onLogoClick ? "pointer" : "default"
          }} onClick={onLogoClick}>{t("hero.title")}</p>
          </div>

          {/* Right: desktop toggles + Book Now */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            {/* Lang toggle — desktop only */}
            <button onClick={onToggleLang} className="hidden md:flex items-center gap-[5px] h-[36px] cursor-pointer rounded-[4px] px-[14px] shrink-0 transition-colors" style={{
            background: isDark ? "rgba(237,232,216,0.06)" : "rgba(28,36,32,0.05)",
            border: `1px solid ${toggleBorder}`
          }} aria-label="Switch language">
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: lang === "EN" ? "#3d9e72" : textColor,
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.en")}</span>
              <span style={{
              color: mutedColor,
              fontSize: 10
            }}>/</span>
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: lang === "ES" ? "#3d9e72" : textColor,
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.es")}</span>
            </button>

            {/* Mode toggle — desktop only */}
            <button onClick={onToggleMode} className="hidden md:flex items-center gap-[6px] h-[36px] cursor-pointer rounded-[4px] px-[14px] shrink-0 transition-colors" style={{
            background: isDark ? "rgba(237,232,216,0.06)" : "rgba(28,36,32,0.05)",
            border: `1px solid ${toggleBorder}`
          }} aria-label="Toggle light/dark mode">
              <div className="relative shrink-0" style={{
              width: 14,
              height: 14
            }}>
                {isDark ? <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_0_7)">
                      <path d={svgPaths.p26d0d400} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 1.66767V3.33433" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 16.6677V18.3343" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p19117880} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2185d900} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M1.66617 10H3.33283" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M16.6662 10H18.3328" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p31d9a900} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p21543000} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs><clipPath id="clip0_0_7"><rect fill="white" height="20" width="20" /></clipPath></defs>
                  </svg> : <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p79b8680} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>}
              </div>
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: textColor,
              fontVariationSettings: '"opsz" 14'
            }}>
                {isDark ? "Light" : "Dark"}
              </span>
            </button>

            {/* Book Now */}
            <div onClick={onBookNow} className="flex items-center gap-[7px] h-[36px] cursor-pointer rounded-[4px] shrink-0 transition-colors px-4" style={{
            background: "#3d9e72"
          }} onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}>
              <div className="relative shrink-0" style={{
              width: 17,
              height: 17
            }}>
                <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 22.5 21.7742">
                  <path d={svgPaths.p3098df00} fill="white" />
                </svg>
              </div>
              <p className="font-bold uppercase whitespace-nowrap hidden sm:block" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: "white",
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.book_now")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Menu overlay ── */}
      <div className="absolute top-0 left-0 w-full z-50 flex flex-col md:hidden shadow-lg" style={{
      background: menuBg,
          borderBottom: isDark ? "1px solid rgba(237,232,216,0.07)" : "1px solid rgba(28,36,32,0.10)",
      opacity: menuOpen ? 1 : 0,
      visibility: menuOpen ? "visible" : "hidden",
      transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
          pointerEvents: menuOpen ? "auto" : "none"
    }}>
        {/* Safe-area spacer */}
        <div className="shrink-0" style={{
        height: "env(safe-area-inset-top)"
      }} />

          {/* Header inside overlay */}
        <div className="flex items-center justify-between shrink-0 px-6" style={{
        height: 72
      }}>
            {/* Left: Logo */}
            <p className="font-black italic whitespace-nowrap cursor-pointer z-10" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 22,
          color: isDark ? "#ede8d8" : "#4c6e58",
          fontVariationSettings: '"SOFT" 0,"WONK" 1'
        }} onClick={() => {
          onLogoClick?.();
          toggleMenu(false);
        }}>{t("hero.title")}</p>

            {/* Right: Close button */}
            <button onClick={() => toggleMenu(false)}
                    className="flex items-center justify-center cursor-pointer border-0 bg-transparent p-2 rounded-full -mr-2 z-10"
                    aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip_xcircle)">
                <path d={menuSvgPaths.p30a06080} stroke={isDark ? "#ede8d8" : "#0C1A10"} strokeLinecap="round" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="clip_xcircle"><rect fill="white" width="20" height="20" /></clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
          <div className="flex flex-col items-center flex-1 gap-4 pt-6 pb-6 px-6 overflow-y-auto">
          {NAV_LINKS.map(({
          label,
          page
        }) => {
          const isActive = label === activeLabel;
          if (isActive) {
            return <div key={label} className="flex items-center justify-center px-7 py-2 rounded-full cursor-pointer" style={{
              background: isDark ? "rgba(61,158,114,0.18)" : "rgba(61,158,114,0.14)"
            }} onClick={() => {
              if (page) {
                onNavLink?.(label);
                toggleMenu(false);
              }
            }}>
                  <span className="font-bold text-center whitespace-nowrap" style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 22,
                color: "#3d9e72",
                fontVariationSettings: '"opsz" 14'
              }}>
                    {label}
                  </span>
                </div>;
          }
          return <button key={label} className="bg-transparent border-0 text-center whitespace-nowrap cursor-pointer active:opacity-60" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: isDark ? "#ede8d8" : "#0c1a10",
            fontVariationSettings: '"opsz" 14',
            opacity: page ? 1 : 0.45
          }} onClick={() => {
            if (onNavLink) {
              onNavLink(label);
            } else if (label === t("index.find_us") || label === "Find Us") {
              window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
            }
            toggleMenu(false);
          }}>
                {label}
              </button>;
        })}
        </div>

        {/* CTA section */}
        <div className="flex flex-col gap-5 px-6 pt-6 pb-3 shrink-0">
          {/* Toggles row */}
          <div className="flex gap-3 items-center justify-center">
            <button onClick={onToggleLang} className="flex items-center gap-[5px] h-[36px] cursor-pointer rounded-[4px] px-[14px] shrink-0" style={{
            background: isDark ? "rgba(237,232,216,0.06)" : "rgba(28,36,32,0.05)",
            border: `1px solid ${toggleBorder}`
          }}>
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: lang === "EN" ? "#3d9e72" : textColor,
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.en")}</span>
              <span style={{
              color: mutedColor,
              fontSize: 10
            }}>/</span>
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: lang === "ES" ? "#3d9e72" : textColor,
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.es")}</span>
            </button>

            <button onClick={onToggleMode} className="flex items-center gap-[6px] h-[36px] cursor-pointer rounded-[4px] px-[14px] shrink-0" style={{
            background: isDark ? "rgba(237,232,216,0.06)" : "rgba(28,36,32,0.05)",
            border: `1px solid ${toggleBorder}`
          }}>
              <div className="relative shrink-0" style={{
              width: 14,
              height: 14
            }}>
                {isDark ? <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip_fs_sun)">
                      <path d={svgPaths.p26d0d400} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 1.66767V3.33433" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 16.6677V18.3343" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p19117880} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2185d900} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M1.66617 10H3.33283" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M16.6662 10H18.3328" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p31d9a900} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p21543000} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs><clipPath id="clip_fs_sun"><rect fill="white" height="20" width="20" /></clipPath></defs>
                  </svg> : <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p79b8680} stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>}
              </div>
              <span className="font-bold" style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 11,
              letterSpacing: "1px",
              color: textColor,
              fontVariationSettings: '"opsz" 14'
            }}>
                {isDark ? "Light" : "Dark"}
              </span>
            </button>
          </div>

          {/* Book via WhatsApp */}
          <button onClick={() => {
          onBookNow?.();
          toggleMenu(false);
        }} className="w-full flex items-center justify-center gap-[10px] cursor-pointer rounded-[4px] border-0" style={{
          background: "#3d9e72",
          padding: "14px 24px",
          boxShadow: "0px 8px 8px rgba(61,158,114,0.2)"
        }}>
            <div className="relative shrink-0" style={{
            width: 17,
            height: 17
          }}>
              <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 17 17">
                <path d={menuSvgPaths.p27731300} fill="white" />
              </svg>
            </div>
            <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "1px",
            color: "white",
            textTransform: "uppercase",
            fontVariationSettings: '"opsz" 14'
          }}>{t("index.book_via_whatsapp")}</span>
          </button>
        </div>

        {/* Home indicator */}
        <div className="flex items-end justify-center shrink-0" style={{
        height: 34,
        paddingBottom: 8
      }}>
          <div className="rounded-full" style={{
          width: 140,
          height: 5,
          background: isDark ? "#ede8d8" : "#0c1a10",
          opacity: 0.2
        }} />
        </div>
      </div>
    </>;
}
