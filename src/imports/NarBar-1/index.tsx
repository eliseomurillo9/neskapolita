import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
type NarBarProps = {
  className?: string;
  format?: "mobile";
  style?: "dark";
};
function NarBar({
  className,
  format = "mobile",
  style = "dark"
}: NarBarProps) {
  return <div className={className || "bg-[#0c1a10] relative w-[393px]"}>
      <div aria-hidden className="absolute border-[rgba(28,36,32,0.09)] border-solid border-t-[0.522px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center max-w-[1440px] px-[24px] py-[56px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[33.6px] relative shrink-0 text-[#f2b138] text-[22.4px] whitespace-nowrap" style={{
              fontVariationSettings: '"SOFT" 0, "WONK" 1'
            }}>{t("hero.title")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.4px] relative shrink-0 text-[13px] text-center text-white w-[300px]" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.your_refuge_on_the")}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.stay")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap cursor-pointer" style={{
              fontVariationSettings: '"opsz" 14'
            }} onClick={() => window.open('https://api.whatsapp.com/send?phone=50370917674', '_blank')}>{t("index.book_now")}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("common.explore")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("nav.our_story")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.faq")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.gallery")}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.connect")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.instagram")}</p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{
              fontVariationSettings: '"opsz" 14'
            }}>{t("index.whatsapp")}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
            <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#ede8d8] text-[11px] whitespace-nowrap" style={{
            fontVariationSettings: '"opsz" 14'
          }}>{t("index.2026_neskapolita_hostel")}</p>
          </div>
        </div>
      </div>
    </div>;
}
export default function NarBar1() {
  return <NarBar className="bg-[#0c1a10] relative w-full" />;
}
