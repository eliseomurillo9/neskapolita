import i18n from "../../i18n";
const t = i18n.t.bind(i18n);
import svgPaths from "./svg-sf0500q9i9";
function XCircle() {
  return <div className="relative shrink-0 size-[20px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_8)" id="x-circle">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#0C1A10" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
function MenuButton() {
  return <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="MenuButton">
      <XCircle />
    </div>;
}
function Header() {
  return <div className="content-stretch flex h-[72px] items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[normal] relative shrink-0 text-[#4c6e58] text-[22px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero_title_2")}</p>
      <MenuButton />
    </div>;
}
function ActivePill() {
  return <div className="bg-[rgba(61,158,114,0.14)] content-stretch flex items-start px-[28px] py-[8px] relative rounded-[100px] shrink-0" data-name="ActivePill">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3d9e72] text-[22px] text-center whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("nav_our_story_2")}</p>
    </div>;
}
function Frame() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0c1a10] text-[22px] text-center whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_168")}</p>
      <ActivePill />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0c1a10] text-[22px] text-center whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("amenities")}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0c1a10] text-[22px] text-center whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_169")}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0c1a10] text-[22px] text-center whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_170")}</p>
    </div>;
}
function NavigationContent() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px pb-[24px] pt-[48px] px-[24px] relative w-full" data-name="NavigationContent">
      <Frame />
    </div>;
}
function Text() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] text-center tracking-[1px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_171")}</p>
    </div>;
}
function Text1() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(28,36,32,0.5)] text-center tracking-[0.1172px] whitespace-nowrap">/</p>
    </div>;
}
function Text2() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#1c2420] text-[11px] text-center tracking-[1px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_172")}</p>
    </div>;
}
function ButtonSwitchLanguage() {
  return <div className="bg-[rgba(28,36,32,0.05)] border border-[#3d9e72] border-solid content-stretch flex gap-[5px] h-[36px] items-center px-[14px] relative rounded-[16777200px] shrink-0" data-name="Button - Switch language">
      <Text />
      <Text1 />
      <Text2 />
    </div>;
}
function Icon() {
  return <div className="absolute left-0 size-[14px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p1d5acd00} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>;
}
function Container() {
  return <div className="relative shrink-0 size-[14px]" data-name="Container">
      <Icon />
    </div>;
}
function Text3() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#1c2420] text-[11px] text-center tracking-[1px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_173")}</p>
    </div>;
}
function ButtonToggleLightDarkMode() {
  return <div className="bg-[rgba(28,36,32,0.05)] border border-[#3d9e72] border-solid content-stretch flex gap-[6px] h-[36px] items-center px-[14px] relative rounded-[16777200px] shrink-0" data-name="Button - Toggle light/dark mode">
      <Container />
      <Text3 />
    </div>;
}
function Toggles() {
  return <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Toggles">
      <ButtonSwitchLanguage />
      <ButtonToggleLightDarkMode />
    </div>;
}
function Frame1() {
  return <div className="relative shrink-0 size-[17px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="Frame">
          <path d={svgPaths.p27731300} fill="white" id="Vector" />
        </g>
      </svg>
    </div>;
}
function PlayfulCta() {
  return <div className="bg-[#3d9e72] content-stretch drop-shadow-[0px_8px_8px_rgba(61,158,114,0.2)] flex gap-[10px] items-center justify-center px-[24px] py-[14px] relative rounded-[4px] shrink-0 w-full" data-name="PlayfulCTA">
      <Frame1 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_174")}</p>
    </div>;
}
function CtaSection() {
  return <div className="content-stretch flex flex-col gap-[20px] items-start pb-[12px] pt-[24px] px-[24px] relative shrink-0 w-full" data-name="CTASection">
      <Toggles />
      <PlayfulCta />
    </div>;
}
function HomeIndicatorContainer() {
  return <div className="content-stretch flex flex-col h-[34px] items-center justify-end pb-[8px] relative shrink-0 w-full" data-name="HomeIndicatorContainer">
      <div className="bg-[#0c1a10] h-[5px] opacity-20 relative rounded-[100px] shrink-0 w-[140px]" data-name="Rectangle" />
    </div>;
}
export default function NeskapolitaMenuV2Bright() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start relative size-full" data-name="neskapolita-menu-v2-bright">
      <Header />
      <NavigationContent />
      <CtaSection />
      <HomeIndicatorContainer />
    </div>;
}