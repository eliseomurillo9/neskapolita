import i18n from "../../i18n";
const t = i18n.t.bind(i18n);
import imgMap from "./a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import imgImg28131 from "./850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import imgImage from "./dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import imgImage1 from "./f23c47939fd00eae014ff37746cb0058f242c565.png";
import imgImage2 from "./fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import imgImage3 from "./828973c65dab400d9481607663e04c1e6267bbca.png";
import imgImage4 from "./f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import imgImage5 from "./a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
function LeftPanel() {
  return <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[500px]" data-name="Left Panel">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[0] min-w-full relative shrink-0 text-[#1c2420] text-[48px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[54px]">{`A Cozy Refuge on the `}</span>
        <span className="leading-[54px] text-[#398e68]">{t("ruta_de_las_flores")}</span>
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_183")}</p>
      <div className="bg-[#398e68] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0" data-name="V2 / Primary Button">
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("see_all_rooms_2")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function RightMapPanel() {
  return <div className="bg-white h-[460px] relative rounded-[16px] shrink-0 w-[709px]" data-name="Right Map Panel">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Map">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap} />
        </div>
        <div className="h-[1632px] relative shrink-0 w-[2389px]" data-name="IMG_2813 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[31.74%] max-w-none size-[34.35%] top-[30.17%]" src={imgImg28131} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>;
}
function MapHero() {
  return <div className="bg-[#f2f4f3] content-stretch flex gap-[48px] items-center p-[80px] relative shrink-0 w-full" data-name="Map Hero">
      <LeftPanel />
      <RightMapPanel />
    </div>;
}
function Intro() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 w-full" data-name="Intro">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420] text-[36px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("explore_ruta")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d] text-[15px] text-center w-[600px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_184")}</p>
    </div>;
}
function Eyebrow() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_185")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{`0 km — you're here!`}</p>
    </div>;
}
function TextBlock() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_186")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Food Festival & Waterfalls`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_1")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_187")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowJuayua() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Juayúa">
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      </div>
      <TextBlock />
    </div>;
}
function Eyebrow1() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_188")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_189")}</p>
    </div>;
}
function TextBlock1() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow1 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_190")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Coffee Farms & Adventure`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_2")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_191")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowApaneca() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Apaneca">
      <TextBlock1 />
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      </div>
    </div>;
}
function Eyebrow2() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_192")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_193")}</p>
    </div>;
}
function TextBlock2() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow2 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_194")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Street Art & Handcrafts`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_3")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_195")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowAtaco() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Ataco">
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
      </div>
      <TextBlock2 />
    </div>;
}
function Eyebrow3() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_196")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_197")}</p>
    </div>;
}
function TextBlock3() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow3 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_198")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Art Galleries & Yucca Cuisine`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_4")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_199")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowSalcoatitan() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Salcoatitán">
      <TextBlock3 />
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
      </div>
    </div>;
}
function Eyebrow4() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_200")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_201")}</p>
    </div>;
}
function TextBlock4() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow4 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_202")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_203")}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_5")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_204")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowNahuizalco() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Nahuizalco">
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
      </div>
      <TextBlock4 />
    </div>;
}
function Eyebrow5() {
  return <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Eyebrow">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_205")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_206")}</p>
    </div>;
}
function TextBlock5() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Text Block">
      <Eyebrow5 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[32px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_207")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#54625d] text-[16px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Colonial Gateway & Thermal Pools`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta_desc_6")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="V2 / Secondary Button">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("text_208")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function AltRowSonsonate() {
  return <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="AltRow_Sonsonate">
      <TextBlock5 />
      <div className="h-[360px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
      </div>
    </div>;
}
function DestinationsAlternating() {
  return <div className="bg-white content-stretch flex flex-col gap-[80px] items-start px-[120px] py-[80px] relative shrink-0 w-full" data-name="Destinations Alternating">
      <Intro />
      <AltRowJuayua />
      <AltRowApaneca />
      <AltRowAtaco />
      <AltRowSalcoatitan />
      <AltRowNahuizalco />
      <AltRowSonsonate />
    </div>;
}
function Left() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#0c1a10] w-[700px]" data-name="Left">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[36px] w-full" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("ready_to_explore")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[16px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_209")}</p>
    </div>;
}
function CtaBanner() {
  return <div className="bg-[#ede8d8] content-stretch flex items-center justify-between p-[64px] relative shrink-0 w-full" data-name="CTA Banner">
      <Left />
      <div className="bg-[#398e68] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0" data-name="V2 / Primary Button">
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("see_all_rooms_2")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function HeaderRow() {
  return <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[18px] w-full whitespace-nowrap" data-name="Header Row">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_210")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function FaqItem() {
  return <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="FAQ_Item_0">
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <HeaderRow />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_211")}</p>
    </div>;
}
function HeaderRow1() {
  return <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[18px] w-full whitespace-nowrap" data-name="Header Row">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_212")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function FaqItem1() {
  return <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="FAQ_Item_1">
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <HeaderRow1 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_213")}</p>
    </div>;
}
function HeaderRow2() {
  return <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[18px] w-full whitespace-nowrap" data-name="Header Row">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_214")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function FaqItem2() {
  return <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="FAQ_Item_2">
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <HeaderRow2 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{`Yes! Colorful local buses (called 'chicken buses') run constantly between all towns for just a few cents, and tuk-tuks are easy to hail.`}</p>
    </div>;
}
function HeaderRow3() {
  return <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] relative shrink-0 text-[18px] w-full whitespace-nowrap" data-name="Header Row">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("text_215")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function FaqItem3() {
  return <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="FAQ_Item_3">
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <HeaderRow3 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("text_216")}</p>
    </div>;
}
function AccordionColumn() {
  return <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Accordion Column">
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
    </div>;
}
function GridFaQs() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col gap-[48px] items-start p-[80px] relative shrink-0 w-full" data-name="Grid FAQs">
      <div aria-hidden className="absolute border-[#d5dad7] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[36px] text-center w-full" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("ruta_quick_tips")}</p>
      <AccordionColumn />
    </div>;
}
export default function RutaFloresMapPageDesktop() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start relative size-full" data-name="ruta-flores-map-page-desktop">
      <MapHero />
      <DestinationsAlternating />
      <CtaBanner />
      <GridFaQs />
    </div>;
}