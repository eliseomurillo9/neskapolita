import i18n from "../../i18n";
const t = i18n.t.bind(i18n);
import imgVariation3FullBleedOverlay from "./4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
function Spacer() {
  return <div className="h-[100px] relative shrink-0 w-full" data-name="Spacer" />;
}
function RatingCenterGroup() {
  return <div className="content-stretch flex gap-[8px] items-center relative shrink-0 whitespace-nowrap" data-name="Rating-Center-Group">
      <p className="font-['Fraunces:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[#f2b138] text-[20px]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        ★ 4.9
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[#ede8d8] text-[10px] tracking-[1px] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_279")}</p>
    </div>;
}
function CenteredTextColumn() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 w-full" data-name="Centered-Text-Column">
      <RatingCenterGroup />
      <p className="font-['Fraunces:Black_Italic',sans-serif] font-black italic min-w-full relative shrink-0 text-[#f2b138] text-[38px] text-center w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero_title_2")}</p>
      <p className="font-['Fraunces:Black',sans-serif] font-black min-w-full relative shrink-0 text-[#ede8d8] text-[24px] text-center w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero_subtitle_2")}</p>
    </div>;
}
function Frame() {
  return <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="bg-[#f2b138] relative shrink-0 w-full" data-name="V1 / Primary Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex font-bold gap-[10px] items-center justify-center leading-[normal] px-[32px] py-[16px] relative size-full text-[#0c1a10] whitespace-nowrap">
            <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[11px] tracking-[3px] uppercase">{t("nav_explore_rooms_2")}</p>
            <p className="font-['Sora:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[14px]">→</p>
          </div>
        </div>
      </div>
      <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0 w-full" data-name="V2 / Primary Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[normal] px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("nav_our_story_2")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function BottomScrimPanel() {
  return <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(12,26,16,0)] gap-[24px] items-center pb-[40px] pt-[60px] px-[24px] relative shrink-0 to-[#0c1a10] via-[40%] via-[rgba(12,26,16,0.9)] w-full" data-name="Bottom-Scrim-Panel">
      <CenteredTextColumn />
      <Frame />
    </div>;
}
export default function Variation3FullBleedOverlay() {
  return <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[24px] size-full" data-name="Variation-3-Full-Bleed-Overlay">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgVariation3FullBleedOverlay} />
      <Spacer />
      <BottomScrimPanel />
    </div>;
}