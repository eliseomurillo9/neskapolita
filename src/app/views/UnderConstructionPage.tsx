import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Theme} from "../theme";
import logoImg from "@/imports/DesktopV1/7a4368b70120d47e02aec91da9b968e1f2acd65c.webp";

export default function UnderConstructionPage({
  theme,
  goHome
}: {
  theme: Theme;
  goHome: () => void;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center" style={{ background: theme.pageBg }}>
      <img src={logoImg} alt="Neskapolita logo" className="mb-8 w-[200px] sm:w-[250px]" style={{ objectFit: "contain" }} />
      <h1 className="font-black italic mb-4" style={{
        fontFamily: "'Fraunces',serif",
        fontSize: "clamp(32px, 5vw, 48px)",
        color: theme.heading,
        fontVariationSettings: '"SOFT" 0,"WONK" 1'
      }}>
        {t('page_messages.under_construction')} <span style={{ color: theme.green }}>{t('page_messages.construction')}</span>
      </h1>
      <p className="mb-10 max-w-lg" style={{
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 16,
        color: theme.body,
        lineHeight: 1.6
      }}>
        {t('page_messages.under_construction_desc')}
      </p>
      <button 
        onClick={goHome}
        className="flex items-center gap-[8px] px-[30px] py-[14px] rounded-[4px] cursor-pointer border-0 drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] transition-colors" 
        style={{ background: "#3d9e72" }} 
        onMouseEnter={e => e.currentTarget.style.background = "#2d8a60"} 
        onMouseLeave={e => e.currentTarget.style.background = "#3d9e72"}
      >
        <span style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 11.2,
          fontWeight: 700,
          letterSpacing: "1.34px",
          color: "white",
          textTransform: "uppercase",
          whiteSpace: "nowrap"
        }}>{t('page_messages.return_to_home')}</span>
      </button>
    </div>
  );
}
