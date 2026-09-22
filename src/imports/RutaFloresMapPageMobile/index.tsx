import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import imgMap from "./a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import imgImg28131 from "./850dde4affad5f2560eb4e5d70ef9add7b7d9ff3.png";
import imgImage from "./dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import imgImage1 from "./f23c47939fd00eae014ff37746cb0058f242c565.png";
import imgImage2 from "./fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
import imgImage3 from "./828973c65dab400d9481607663e04c1e6267bbca.png";
import imgImage4 from "./f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import imgImage5 from "./a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
function RightMapPanel() {
  return <div className="bg-white h-[225px] relative rounded-[7.772px] shrink-0 w-full" data-name="Right Map Panel">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Map">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap} />
        </div>
        <div className="h-[792.725px] relative shrink-0 w-[1160.429px]" data-name="IMG_2813 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[31.74%] max-w-none size-[34.35%] top-[30.17%]" src={imgImg28131} />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d5dad7] border-[0.486px] border-solid inset-0 pointer-events-none rounded-[7.772px]" />
    </div>;
}
function HeroCopy() {
  return <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Hero copy">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[0] min-w-full relative shrink-0 text-[#1c2420] text-[0px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[normal] text-[32px]">{`A Cozy Refuge on the `}</span>
        <span className="leading-[normal] text-[#398e68] text-[32px]">{t("common.ruta_de_las_flores")}</span>
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.set_in_the_heart")}</p>
      <div className="bg-[#398e68] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0" data-name="See all rooms">
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("common.see_all_rooms_1")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function MapHero() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[24px] py-[48px] relative shrink-0 w-[390px]" data-name="Map hero">
      <RightMapPanel />
      <HeroCopy />
    </div>;
}
function GuideIntroduction() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] overflow-clip relative shrink-0 text-center w-full" data-name="Guide introduction">
      <p className="font-['Fraunces:Black',sans-serif] font-black relative shrink-0 text-[#1c2420] text-[36px] w-full" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("common.explore_ruta")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d] text-[15px] w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.discover_the_best_of")}</p>
    </div>;
}
function RouteMetadata() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_1")}</p>
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
function DestinationDetails() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.juay_a")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Food Festival & Waterfalls`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_1")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination() {
  return <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      </div>
      <DestinationDetails />
    </div>;
}
function RouteMetadata1() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_2")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.8_km_north")}</p>
    </div>;
}
function DestinationDetails1() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata1 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("common.apaneca")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Coffee Farms & Adventure`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_2")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination1() {
  return <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
      </div>
      <DestinationDetails1 />
    </div>;
}
function RouteMetadata2() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_3")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.12_km_north")}</p>
    </div>;
}
function DestinationDetails2() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata2 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("common.ataco")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Street Art & Handcrafts`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_3")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination2() {
  return <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
      </div>
      <DestinationDetails2 />
    </div>;
}
function RouteMetadata3() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_4")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.5_km_south")}</p>
    </div>;
}
function DestinationDetails3() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata3 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.salcoatit_n")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Art Galleries & Yucca Cuisine`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_4")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination3() {
  return <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
      </div>
      <DestinationDetails3 />
    </div>;
}
function RouteMetadata4() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_5")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.15_km_south")}</p>
    </div>;
}
function DestinationDetails4() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata4 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.nahuizalco")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.candlelit_night_market")}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_5")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination4() {
  return <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
      </div>
      <DestinationDetails4 />
    </div>;
}
function RouteMetadata5() {
  return <div className="[word-break:break-word] content-center flex flex-wrap gap-[8px] items-center leading-[normal] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Route metadata">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stop_6")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#54625d]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        •
      </p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f2b138]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.25_km_south")}</p>
    </div>;
}
function DestinationDetails5() {
  return <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Destination details">
      <RouteMetadata5 />
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[32px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.sonsonate")}</p>
      <p className="[word-break:break-word] font-['Fraunces:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{`Colonial Gateway & Thermal Pools`}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#54625d] text-[15px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.desc_6")}</p>
      <div className="relative rounded-[100px] shrink-0" data-name="Route directions">
        <div aria-hidden className="absolute border-2 border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-[#3d9e72] whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("index.get_route_directions")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Destination5() {
  return <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Destination">
      <div className="h-[260px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
      </div>
      <DestinationDetails5 />
    </div>;
}
function CuratedTrail() {
  return <div className="bg-white content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[24px] py-[48px] relative shrink-0 w-full" data-name="Curated trail">
      <GuideIntroduction />
      <Destination />
      <Destination1 />
      <Destination2 />
      <Destination3 />
      <Destination4 />
      <Destination5 />
    </div>;
}
function ExplorationCallout() {
  return <div className="bg-[#ede8d8] content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip p-[32px] relative shrink-0 w-full" data-name="Exploration callout">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] min-w-full relative shrink-0 text-[#1c2420] text-[36px] w-[min-content]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("common.ready_to_explore")}</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full opacity-80 relative shrink-0 text-[#1c2420] text-[16px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.book_your_stay_at")}</p>
      <div className="bg-[#398e68] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0" data-name="See all rooms">
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['Nunito:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[14px] tracking-[0.5px]">{t("common.see_all_rooms_1")}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function QuestionHeader() {
  return <div className="content-stretch flex gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[18px] w-full" data-name="Question header">
      <p className="flex-[1_0_0] font-['Fraunces:Black',sans-serif] font-black min-w-px relative text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.how_many_days_do")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function Question() {
  return <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <QuestionHeader />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.we_recommend_2_to")}</p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>;
}
function QuestionHeader1() {
  return <div className="content-stretch flex gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[18px] w-full" data-name="Question header">
      <p className="flex-[1_0_0] font-['Fraunces:Black',sans-serif] font-black min-w-px relative text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.what_is_the_best")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function Question1() {
  return <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <QuestionHeader1 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.juay_a_is_the")}</p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>;
}
function QuestionHeader2() {
  return <div className="content-stretch flex gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[18px] w-full" data-name="Question header">
      <p className="flex-[1_0_0] font-['Fraunces:Black',sans-serif] font-black min-w-px relative text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.can_you_visit_ruta")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function Question2() {
  return <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <QuestionHeader2 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{`Yes! Colorful local buses (called 'chicken buses') run constantly between all towns for just a few cents, and tuk-tuks are easy to hail.`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>;
}
function QuestionHeader3() {
  return <div className="content-stretch flex gap-[12px] items-start leading-[normal] overflow-clip relative shrink-0 text-[18px] w-full" data-name="Question header">
      <p className="flex-[1_0_0] font-['Fraunces:Black',sans-serif] font-black min-w-px relative text-[#1c2420]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.what_is_the_best_1")}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        ↓
      </p>
    </div>;
}
function Question3() {
  return <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Question">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <QuestionHeader3 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#54625d] text-[14px] w-full" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.the_dry_season_from")}</p>
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>;
}
function Questions() {
  return <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Questions">
      <Question />
      <Question1 />
      <Question2 />
      <Question3 />
    </div>;
}
function RutaQuickTips() {
  return <div className="bg-[#f2f4f3] relative shrink-0 w-full" data-name="Ruta quick tips">
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[24px] py-[48px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#1c2420] text-[36px] text-center w-full" style={{
        fontVariationSettings: '"SOFT" 0, "WONK" 1'
      }}>{t("common.ruta_quick_tips")}</p>
        <Questions />
      </div>
      <div aria-hidden className="absolute border-[#d5dad7] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>;
}
function HostelInformation() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Hostel information">
      <p className="font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[normal] relative shrink-0 text-[#4c6e58] text-[24px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero.title")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.your_tropical_refuge_in")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#54625d] text-[12px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.calle_merceditas_caceres_1")}</p>
    </div>;
}
function LinkColumn() {
  return <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[150px]" data-name="Link column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] text-[11px] tracking-[2px] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("common.explore")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.town_guide")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.los_chorros")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.food_festival")}</p>
    </div>;
}
function LinkColumn1() {
  return <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[150px]" data-name="Link column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] text-[11px] tracking-[2px] uppercase" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.hostel")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.our_rooms")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.the_garden")}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1c2420] text-[13px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.shared_kitchen")}</p>
    </div>;
}
function FooterLinks() {
  return <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Footer links">
      <LinkColumn />
      <LinkColumn1 />
    </div>;
}
function BottomRow() {
  return <div className="relative shrink-0 w-full" data-name="Bottom row">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] overflow-clip pt-[24px] relative rounded-[inherit] size-full text-[12px]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#54625d] w-[min-content]" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.2026_neskapolita_hostel_handcrafted")}</p>
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#4c6e58] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.designed_for_adventure")}</p>
      </div>
      <div aria-hidden className="absolute border-[#d5dad7] border-solid border-t inset-0 pointer-events-none" />
    </div>;
}
function Footer() {
  return <div className="bg-[#ede8d8] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[24px] py-[48px] relative shrink-0 w-full" data-name="Footer">
      <HostelInformation />
      <FooterLinks />
      <BottomRow />
    </div>;
}
export default function RutaFloresMapPageMobile() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start relative size-full" data-name="ruta-flores-map-page-mobile">
      <MapHero />
      <CuratedTrail />
      <ExplorationCallout />
      <RutaQuickTips />
      <Footer />
    </div>;
}
