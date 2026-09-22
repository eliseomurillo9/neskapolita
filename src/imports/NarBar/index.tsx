type NarBarProps = {
  className?: string;
  format?: "mobile";
  style?: "light";
};

function NarBar({ className, format = "mobile", style = "light" }: NarBarProps) {
  return (
    <div className={className || "bg-[#ede8d8] relative w-[393px]"}>
      <div aria-hidden className="absolute border-[rgba(28,36,32,0.09)] border-solid border-t-[0.522px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center max-w-[1440px] px-[24px] py-[56px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[33.6px] relative shrink-0 text-[#3d9e72] text-[22.4px] whitespace-nowrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                Neskapolita
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.4px] relative shrink-0 text-[#54625d] text-[13px] text-center w-[300px]" style={{ fontVariationSettings: '"opsz" 14' }}>
                Your refuge on the Ruta de las flores. Juayuá, El Salvador.
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#4c6e58] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Stay
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Book Now
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#4c6e58] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Explore
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Our Story
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                FAQ
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Gallery
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-center justify-center min-w-[100px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#4c6e58] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Connect
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                Instagram
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
              <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
                WhatsApp
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
            <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#54625d] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
              © 2026 Neskapolita Hostel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NarBar1() {
  return <NarBar className="bg-[#ede8d8] relative w-full" />;
}