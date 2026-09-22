import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
type FooterProps = {
  className?: string;
  style?: "dark" | "light";
  onLinkClick?: (link: string) => void;
};
const columns = [{
  heading: "Stay",
  links: ["Book Now"]
}, {
  heading: "Explore",
  links: ["Our Story", "FAQ", "Gallery"]
}, {
  heading: "Connect",
  links: ["Instagram", "WhatsApp"]
}];
export default function Footer({
  className,
  style = "light",
  onLinkClick
}: FooterProps) {
  const isDark = style === "dark";
  const bg = isDark ? "#0a1209" : "#ede8d8";
  const border = isDark ? "rgba(237,232,216,0.07)" : "rgba(28,36,32,0.09)";
  const logo = isDark ? "#3d9e72" : "#4c6e58";
  const tagline = isDark ? "rgba(237,232,216,0.55)" : "#54625d";
  const copyright = isDark ? "rgba(237,232,216,0.32)" : "#54625d";
  const colHeading = isDark ? "#3d9e72" : "#4c6e58";
  const linkColor = isDark ? "rgba(237,232,216,0.75)" : "#1c2420";
  return <footer className={className} style={{
    background: bg,
    borderTop: `1px solid ${border}`,
    paddingBottom: "env(safe-area-inset-bottom)"
  }}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-14 py-14 flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">

        {/* Left: brand block */}
        <div className="flex flex-col gap-4 max-w-[300px]">
          <p className="font-black italic" style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 22.4,
          color: logo,
          fontVariationSettings: '"SOFT" 0, "WONK" 1'
        }}>{t("hero.title")}</p>
          <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 13,
          color: tagline,
          lineHeight: 1.8,
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.your_refuge_on_the")}</p>
          <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 11,
          color: copyright,
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.2026_neskapolita_hostel")}</p>
        </div>

        {/* Right: link columns */}
        <div className="flex gap-10 sm:gap-16 flex-wrap">
          {columns.map(col => <div key={col.heading} className="flex flex-col gap-3 min-w-[100px]">
              <p className="uppercase font-bold" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11,
            letterSpacing: "2px",
            color: colHeading,
            fontVariationSettings: '"opsz" 14'
          }}>
                {col.heading}
              </p>
              {col.links.map(link => <p key={link} className="cursor-pointer transition-opacity hover:opacity-60" style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 13,
            color: linkColor,
            fontVariationSettings: '"opsz" 14'
          }} onClick={() => {
            if (onLinkClick) {
              onLinkClick(link);
            } else if (link === "Instagram") {
              window.open('https://www.instagram.com/neskapolitahostel', '_blank');
            } else if (link === "WhatsApp" || link === "Book Now") {
              window.open('https://api.whatsapp.com/send?phone=50370917674', '_blank');
            }
          }}>
                  {link}
                </p>)}
            </div>)}
        </div>

      </div>
    </footer>;
}
