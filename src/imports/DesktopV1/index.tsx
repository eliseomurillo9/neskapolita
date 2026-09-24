import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import svgPaths from "./svg-a56cgiz6y";
import imgImg31101 from "./cd9987bb22832d1a86f78c1d38d1f0d14103c288.png";
import img131 from "./eb290942dfbad176b90058fe91a081b43e64d89e.png";
import img1422 from "./2490928644bd15ca355922524c962e0c0e7be7e2.png";
import imgImage from "./851cd36c23ad4da155b6cf0f50ec6693c5ab0088.png";
import img171 from "./1a3d1e56d1305cc21af19544fb8fab9094a03110.png";
import imgImage1 from "./6f13b43bff73692f3535ad9ee71e65d34379edcf.png";
import img161 from "./146d43f51e15479edc5b6567ca17c752c93c098a.png";
import imgImage2 from "./2cbaef43d2ebac70a3bdec47dfc3e0e8b7f8a628.png";
import img021 from "./5df5da27dcee43241fc35f4a3e842b4708328f40.png";
import imgImage3 from "./1a87c5d486772503401990064608c4940c7da7fc.png";
import imgImage4 from "./6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import img011 from "./c06fcb3e51191a325985054ce1370bf867d176ef.png";
import imgImageLushTropicalFlowersAndForestOfElSalvador from "./4ee5ecf8eb8baa6d95d45aecc608f95006973ad4.png";
import imgBgLight1 from "./302c2113c9e9de6558ff52e0df271ec24307bdf2.png";
import imgBgSimpleFlowers1 from "./0b3cdd2aed1034c1d0964bb9eb901d692e980bec.png";
import imgLogoNeskaPolita1 from "./7a4368b70120d47e02aec91da9b968e1f2acd65c.png";
import imgMap011 from "./a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import imgSonsonateIlustration22 from "./a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
import imgNahuzalcoIllustratyion22 from "./f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import imgJuayua22 from "./dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import imgSalcoatitanIlustration22 from "./828973c65dab400d9481607663e04c1e6267bbca.png";
import imgApanecaIlustration2 from "./f23c47939fd00eae014ff37746cb0058f242c565.png";
import imgAtacoIlustration2 from "./fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
type CardCommunityProps = {
  className?: string;
  property1?: "Default";
};
function CardCommunity({
  className,
  property1 = "Default"
}: CardCommunityProps) {
  return <div className={className || "bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] w-[740px]"}>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[32px] relative size-full">
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="Icon-Wrapper">
            <div className="relative shrink-0 size-[28px]" data-name="globe">
              <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
                <g id="globe">
                  <path d={svgPaths.p1cb142c0} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Card-Community-Text">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c2420] text-[18px] whitespace-nowrap" style={{
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.traveler_community")}</p>
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
            fontVariationSettings: '"opsz" 14'
          }}>{t("common.traveler_desc")}</p>
          </div>
        </div>
      </div>
    </div>;
}
function CardLaundry({
  className
}: {
  className?: string;
}) {
  return <div className={className || "bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] w-[358px]"} data-name="Card-Laundry">
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon-Wrapper">
          <div className="relative shrink-0 size-[24px]" data-name="washing-machine">
            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
              <g id="washing-machine">
                <path d={svgPaths.pa962300} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c2420] text-[18px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("features.laundry")}</p>
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.24_7_washers_and")}</p>
      </div>
    </div>;
}
type CardLoungeProps = {
  className?: string;
  property1?: "Default" | "hover";
};
function CardLounge({
  className,
  property1 = "Default"
}: CardLoungeProps) {
  return <div className={className || "bg-white h-[191px] relative rounded-[12px] w-[358px]"}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute content-stretch flex flex-col items-center justify-center left-[32px] overflow-clip size-[28px] top-[32px]" data-name="Icon-Wrapper">
          <div className="relative shrink-0 size-[24px]" data-name="sofa">
            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
              <g id="sofa">
                <path d={svgPaths.p2794d100} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32px] text-[#1c2420] text-[18px] top-[76px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("features.lounge")}</p>
        <p className="[word-break:break-word] absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[32px] right-[32px] text-[#54625d] text-[14px] top-[115px]" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.cozy_community_space_with")}</p>
        {property1 === "hover" && <div className="absolute h-[495px] left-[-151px] top-[-171px] w-[660px]" data-name="IMG_3110 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg31101} />
          </div>}
      </div>
      <div aria-hidden className="absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(76,110,88,0.05)]" />
    </div>;
}
type CardKitchenProps = {
  className?: string;
  property1?: "Default" | "hover";
};
function CardKitchen({
  className,
  property1 = "Default"
}: CardKitchenProps) {
  const isDefault = property1 === "Default";
  const isHover = property1 === "hover";
  return <div className={className || `bg-white relative rounded-[12px] w-[358px] ${isHover ? "h-[191px]" : "drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]"}`}>
      <div aria-hidden={isDefault ? true : undefined} className={isHover ? "overflow-clip relative rounded-[inherit] size-full" : "absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]"}>
        {isHover && <>
            <div className="absolute content-stretch flex flex-col items-center justify-center left-[32px] overflow-clip size-[28px] top-[32px]" data-name="Icon-Wrapper">
              <div className="relative shrink-0 size-[24px]" data-name="cooking-pot">
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <g id="cooking-pot">
                    <path d={svgPaths.p3075da00} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32px] text-[#1c2420] text-[18px] top-[76px] whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("features.kitchen")}</p>
            <p className="[word-break:break-word] absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[32px] right-[32px] text-[#54625d] text-[14px] top-[115px]" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.fully_equipped_space_to")}</p>
            <div className="absolute h-[508px] left-[-23px] top-[-139px] w-[381px]" data-name="13 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img131} />
            </div>
          </>}
      </div>
      <div aria-hidden={isHover ? true : undefined} className={isHover ? "absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(76,110,88,0.05)]" : "content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full"}>
        {isDefault && <>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon-Wrapper">
              <div className="relative shrink-0 size-[24px]" data-name="cooking-pot">
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <g id="cooking-pot">
                    <path d={svgPaths.p3075da00} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c2420] text-[18px] whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("features.kitchen")}</p>
            <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.fully_equipped_space_to")}</p>
          </>}
      </div>
    </div>;
}
type CardGardenProps = {
  className?: string;
  property1?: "Default" | "hover";
};
function CardGarden({
  className,
  property1 = "Default"
}: CardGardenProps) {
  const isDefault = property1 === "Default";
  const isHover = property1 === "hover";
  return <div className={className || `bg-white relative rounded-[12px] w-[358px] ${isHover ? "h-[191px]" : "drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)]"}`}>
      <div aria-hidden={isDefault ? true : undefined} className={isHover ? "overflow-clip relative rounded-[inherit] size-full" : "absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px]"}>
        {isHover && <>
            <div className="absolute content-stretch flex flex-col items-center justify-center left-[32px] overflow-clip size-[28px] top-[32px]" data-name="Icon-Wrapper">
              <div className="relative shrink-0 size-[24px]" data-name="leaf">
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <g id="leaf">
                    <path d={svgPaths.p1f220c80} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32px] text-[#1c2420] text-[18px] top-[76px] whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("features.garden")}</p>
            <p className="[word-break:break-word] absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[32px] right-[32px] text-[#54625d] text-[14px] top-[115px]" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.a_lush_tranquil_green")}</p>
            <div className="absolute h-[703px] left-[-108px] top-[-426px] w-[527px]" data-name="14 (2) 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1422} />
            </div>
          </>}
      </div>
      <div aria-hidden={isHover ? true : undefined} className={isHover ? "absolute border border-[#d5dad7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(76,110,88,0.05)]" : "content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full"}>
        {isDefault && <>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="Icon-Wrapper">
              <div className="relative shrink-0 size-[24px]" data-name="leaf">
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <g id="leaf">
                    <path d={svgPaths.p1f220c80} id="Vector" stroke="#F2B138" strokeLinecap="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c2420] text-[18px] whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("features.garden")}</p>
            <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.a_lush_tranquil_green")}</p>
          </>}
      </div>
    </div>;
}
type Room3Props = {
  className?: string;
  status?: "hover" | "Default";
  style?: "light";
};
function Room3({
  className,
  status = "Default",
  style = "light"
}: Room3Props) {
  const isDefault = status === "Default";
  const isHover = status === "hover";
  return <div className={className || "bg-white h-[416px] relative w-[300px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.716px] relative size-full">
          <div className={`bg-white relative shrink-0 w-full ${isHover ? "h-[216px]" : "h-[302.14px]"}`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute h-[341.877px] left-[-92.36px] top-[-10.74px] w-[455.836px]" data-name="image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
              <div className="absolute bg-[rgba(12,26,16,0.4)] h-[312px] left-[0.01px] mix-blend-multiply top-[-0.12px] w-[299px]" data-name="shadow" />
              <div className="absolute h-[52.266px] left-[14.32px] top-[14.32px] w-[53.107px]" data-name="17 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img171} />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
            <div aria-hidden className="absolute border-[rgba(61,158,114,0.1)] border-solid border-t-[0.716px] inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[10.716px] px-[12px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  {isDefault && <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0a1209] text-[12.601px] whitespace-nowrap" style={{
                              fontVariationSettings: '"SOFT" 0, "WONK" 1'
                            }}>{t("index.casa_nieves")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="relative shrink-0 w-full" data-name="Paragraph">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                              <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0c1a10] text-[17.183px] text-right whitespace-nowrap" style={{
                            fontVariationSettings: '"SOFT" 0, "WONK" 1'
                          }}>
                                $45
                              </p>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                              <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                                <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[#0a1209] text-[6.873px] text-right whitespace-nowrap" style={{
                              fontVariationSettings: '"opsz" 9'
                            }}>{t("common.per_night_short")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  <div className={`content-stretch flex relative shrink-0 ${isHover ? "flex-col gap-[12px] items-start w-full" : "items-center justify-between w-[275px]"}`}>
                    {isDefault && <>
                        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0a1209] text-[9.308px] w-[113.84px]" style={{
                      fontVariationSettings: '"opsz" 14'
                    }}>{t("index.chambre_twin_avec_salle")}</p>
                        <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[116px]" data-name="V2 / Primary Button">
                          <div className="flex flex-row items-center size-full">
                            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{`Explore `}</p>
                              <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                            </div>
                          </div>
                        </div>
                      </>}
                    {isHover && <>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                            <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                      <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0c1a10] text-[12.601px] whitespace-nowrap" style={{
                                    fontVariationSettings: '"SOFT" 0, "WONK" 1'
                                  }}>{t("index.casa_nieves")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="relative shrink-0 w-full" data-name="Paragraph">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                                    <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0c1a10] text-[17.183px] text-right whitespace-nowrap" style={{
                                  fontVariationSettings: '"SOFT" 0, "WONK" 1'
                                }}>
                                      $45
                                    </p>
                                  </div>
                                </div>
                                <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                                    <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                                      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[#0c1a10] text-[6.873px] text-right whitespace-nowrap" style={{
                                    fontVariationSettings: '"opsz" 9'
                                  }}>{t("common.per_night_short")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0c1a10] text-[9.308px] w-full" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("index.chambre_twin_avec_salle")}</p>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0c1a10] text-[9.308px] text-center w-full" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.discover_amenities")}</p>
                        </div>
                      </>}
                  </div>
                  {isHover && <>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Services Row">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="relative shrink-0 size-[24px]" data-name="Icon Frame">
                            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                              <g id="Icon Frame">
                                <rect fill="#3D9E72" fillOpacity="0.2" height="24" rx="6" width="24" />
                                <path d={svgPaths.p17a34d00} fill="#3D9E72" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("rooms.flores.size")}</p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                            <div className="relative shrink-0 size-[16.643px]" data-name="Mountains">
                              <svg className="absolute block inset-0 size-full" fill="none" height="16.6426" preserveAspectRatio="none" viewBox="0 0 16.6426 16.6426" width="16.6426">
                                <g clipPath="url(#clip0_0_208)" id="Mountains">
                                  <path d={svgPaths.p25eecaf0} fill="#3D9E72" id="Vector" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_0_208">
                                    <rect fill="white" height="16.6426" width="16.6426" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.mountain_view")}</p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="relative shrink-0 size-[24px]" data-name="Icon Frame">
                            <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                              <g id="Icon Frame">
                                <rect fill="#3D9E72" fillOpacity="0.2" height="24" rx="6" width="24" />
                                <path d={svgPaths.p183483e0} fill="#3D9E72" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.courtyard")}</p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                            <div className="relative shrink-0 size-[15.154px]" data-name="Shower">
                              <svg className="absolute block inset-0 size-full" fill="none" height="15.1543" preserveAspectRatio="none" viewBox="0 0 15.1543 15.1543" width="15.1543">
                                <g clipPath="url(#clip0_0_206)" id="Shower">
                                  <path d={svgPaths.p83e8080} fill="#3D9E72" id="Vector" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_0_206">
                                    <rect fill="white" height="15.1543" width="15.1543" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.bath")}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action Row">
                        <div className="opacity-0 relative shrink-0 size-px" data-name="Frame" />
                        <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[274px]" data-name="V2 / Primary Button">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{`Explore `}</p>
                              <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.716px] border-[rgba(61,158,114,0.12)] border-solid inset-0 pointer-events-none" />
    </div>;
}
type Room2Props = {
  className?: string;
  status?: "Default" | "hover";
  style?: "light";
};
function Room2({
  className,
  status = "Default",
  style = "light"
}: Room2Props) {
  const isDefault = status === "Default";
  const isHover = status === "hover";
  return <div className={className || "bg-white h-[416px] relative w-[300px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.716px] relative size-full">
          <div className={`bg-white relative shrink-0 w-full ${isHover ? "h-[217px]" : "h-[306.436px]"}`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute h-[413px] left-[-10.99px] top-[-36.12px] w-[310px]" data-name="image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
              </div>
              <div className="absolute bg-[rgba(12,26,16,0.4)] h-[312px] left-[0.01px] mix-blend-multiply top-[-0.12px] w-[299px]" data-name="shadow" />
              <div className="absolute h-[53.045px] left-[14.32px] top-[14.32px] w-[53.698px]" data-name="16 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img161} />
              </div>
            </div>
          </div>
          <div className={`relative ${isHover ? "h-[198.568px] shrink-0 w-[298.568px]" : "flex-[1_0_0] min-h-px w-full"}`} data-name="Container">
            <div aria-hidden className="absolute border-[rgba(61,158,114,0.1)] border-solid border-t-[0.716px] inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[10.716px] px-[12px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  {isDefault && <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0c1a10] text-[12.601px] whitespace-nowrap" style={{
                              fontVariationSettings: '"SOFT" 0, "WONK" 1'
                            }}>{t("index.casa_nieves")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="relative shrink-0 w-full" data-name="Paragraph">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                              <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0c1a10] text-[17.183px] text-right whitespace-nowrap" style={{
                            fontVariationSettings: '"SOFT" 0, "WONK" 1'
                          }}>
                                $45
                              </p>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                              <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                                <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[#0c1a10] text-[6.873px] text-right whitespace-nowrap" style={{
                              fontVariationSettings: '"opsz" 9'
                            }}>{t("common.per_night_short")}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  <div className={`content-stretch flex relative shrink-0 ${isHover ? "flex-col gap-[12px] items-start w-full" : "items-center justify-between w-[275px]"}`}>
                    {isDefault && <>
                        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0c1a10] text-[9.308px] w-[113.84px]" style={{
                      fontVariationSettings: '"opsz" 14'
                    }}>{t("index.chambre_twin_avec_salle")}</p>
                        <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[116px]" data-name="V2 / Primary Button">
                          <div className="flex flex-row items-center size-full">
                            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{`Explore `}</p>
                              <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                            </div>
                          </div>
                        </div>
                      </>}
                    {isHover && <>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                            <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                                      <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0c1a10] text-[12.601px] whitespace-nowrap" style={{
                                    fontVariationSettings: '"SOFT" 0, "WONK" 1'
                                  }}>{t("index.casa_nieves")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                <div className="relative shrink-0 w-full" data-name="Paragraph">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                                    <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0c1a10] text-[17.183px] text-right whitespace-nowrap" style={{
                                  fontVariationSettings: '"SOFT" 0, "WONK" 1'
                                }}>
                                      $45
                                    </p>
                                  </div>
                                </div>
                                <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                                    <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                                      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[#0c1a10] text-[6.873px] text-right whitespace-nowrap" style={{
                                    fontVariationSettings: '"opsz" 9'
                                  }}>{t("common.per_night_short")}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0c1a10] text-[9.308px] w-full" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("index.chambre_twin_avec_salle")}</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[9.308px] text-center text-white w-full" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.discover_amenities")}</p>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Services Row">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                              <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                                <div className="relative shrink-0 size-[24px]" data-name="Square">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                                    <g id="Square">
                                      <path d={svgPaths.p19aa6f00} fill="#3D9E72" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{t("rooms.flores.size")}</p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                              <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                                <div className="relative shrink-0 size-[18.846px]" data-name="Eye">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="18.8457" preserveAspectRatio="none" viewBox="0 0 18.8457 18.8457" width="18.8457">
                                    <g clipPath="url(#clip0_0_199)" id="Eye">
                                      <path d={svgPaths.p3a99c600} fill="#3D9E72" id="Vector" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_0_199">
                                        <rect fill="white" height="18.8457" width="18.8457" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{t("amenities.garden_view")}</p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                              <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                                <div className="relative shrink-0 size-[20.643px]" data-name="PottedPlant">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="20.6426" preserveAspectRatio="none" viewBox="0 0 20.6426 20.6426" width="20.6426">
                                    <g id="PottedPlant">
                                      <path d={svgPaths.p76b4680} fill="#3D9E72" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{t("amenities.patio")}</p>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                              <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                                <div className="relative shrink-0 size-[15.154px]" data-name="Shower">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15.1543" preserveAspectRatio="none" viewBox="0 0 15.1543 15.1543" width="15.1543">
                                    <g clipPath="url(#clip0_0_206)" id="Shower">
                                      <path d={svgPaths.p83e8080} fill="#3D9E72" id="Vector" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_0_206">
                                        <rect fill="white" height="15.1543" width="15.1543" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                            fontVariationSettings: '"opsz" 14'
                          }}>{t("amenities.bath")}</p>
                            </div>
                          </div>
                        </div>
                      </>}
                  </div>
                  {isHover && <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action Row">
                      <div className="opacity-0 relative shrink-0 size-px" data-name="Frame" />
                      <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[274px]" data-name="V2 / Primary Button">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{`Explore `}</p>
                            <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.716px] border-[rgba(61,158,114,0.12)] border-solid inset-0 pointer-events-none" />
    </div>;
}
type Room1Props = {
  className?: string;
  status?: "hover" | "Default";
  style?: "light";
};
function Room1({
  className,
  status = "Default",
  style = "light"
}: Room1Props) {
  const isHover = status === "hover";
  return <div className={className || "bg-white h-[416px] relative w-[300px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.716px] relative size-full">
          <div className={`bg-white relative shrink-0 w-full ${isHover ? "h-[217px]" : "h-[306.436px]"}`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute h-[418px] left-[-7.99px] top-[-5.12px] w-[313px]" data-name="image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="absolute bg-[rgba(12,26,16,0.4)] h-[331px] left-[0.01px] mix-blend-multiply top-[-19.12px] w-[305px]" data-name="shadow" />
              <div className="absolute h-[56.344px] left-[9.31px] top-[10.74px] w-[53.698px]" data-name="02 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img021} />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
            <div aria-hidden className="absolute border-[rgba(61,158,114,0.1)] border-solid border-t-[0.716px] inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[10.716px] px-[12px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                              <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0a1209] text-[12.601px] whitespace-nowrap" style={{
                              fontVariationSettings: '"SOFT" 0, "WONK" 1'
                            }}>
                                {isHover ? "Casa mochila" : "Casa nieves"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="relative shrink-0 w-full" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                            <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0a1209] text-[17.183px] text-right whitespace-nowrap" style={{
                            fontVariationSettings: '"SOFT" 0, "WONK" 1'
                          }}>
                              $45
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                            <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                              <p className={`[word-break:break-word] font-["DM_Sans:9pt_Regular",sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[6.873px] text-right whitespace-nowrap ${isHover ? "text-[#ede8d8]" : "text-[#0a1209]"}`} style={{
                              fontVariationSettings: '"opsz" 9'
                            }}>{t("common.per_night_short")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`content-stretch flex relative shrink-0 ${isHover ? "flex-col gap-[12px] items-start w-full" : "items-center justify-between w-[275px]"}`}>
                    <p className={`[word-break:break-word] font-["DM_Sans:Regular",sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0a1209] text-[9.308px] ${isHover ? "w-full" : "w-[113.84px]"}`} style={{
                    fontVariationSettings: '"opsz" 14'
                  }}>
                      {isHover ? "Mixed Dormitory Room" : "Chambre Twin avec salle de bain privée"}
                    </p>
                    {status === "Default" && <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[116px]" data-name="V2 / Primary Button">
                        <div className="flex flex-row items-center size-full">
                          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{`Explore `}</p>
                            <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                          </div>
                        </div>
                      </div>}
                    {isHover && <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Services Row">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                            <div className="relative shrink-0 size-[24px]" data-name="Square">
                              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                                <g id="Square">
                                  <path d={svgPaths.p19aa6f00} fill="#3D9E72" id="Vector" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("rooms.mochila.size")}</p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                            <div className="relative shrink-0 size-[18.846px]" data-name="Bed">
                              <svg className="absolute block inset-0 size-full" fill="none" height="18.8457" preserveAspectRatio="none" viewBox="0 0 18.8457 18.8457" width="18.8457">
                                <g clipPath="url(#clip0_0_181)" id="Bed">
                                  <path d={svgPaths.pfbef580} fill="#3D9E72" id="Vector" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_0_181">
                                    <rect fill="white" height="18.8457" width="18.8457" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.1bed")}</p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                          <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                            <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex flex-col h-[24px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Icon Frame">
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                <div className="col-1 h-[9.989px] ml-0 mt-[6.94px] relative row-1 w-[13.621px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="9.98889" preserveAspectRatio="none" viewBox="0 0 13.6212 9.98889" width="13.6212">
                                    <g id="Frame 20">
                                      <path d={svgPaths.p1d5bb000} fill="#3D9E72" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="col-1 h-[9.989px] ml-0 mt-0 relative row-1 w-[13.621px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="9.98889" preserveAspectRatio="none" viewBox="0 0 13.6212 9.98889" width="13.6212">
                                    <g id="Frame 20">
                                      <path d={svgPaths.p1d5bb000} fill="#3D9E72" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{t("amenities.4bunks")}</p>
                        </div>
                      </div>}
                  </div>
                  {isHover && <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[274px]" data-name="V2 / Primary Button">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                        fontVariationSettings: '"opsz" 14'
                      }}>{`Explore `}</p>
                          <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                        </div>
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.716px] border-[rgba(61,158,114,0.12)] border-solid inset-0 pointer-events-none" />
    </div>;
}
type RoomProps = {
  className?: string;
  status?: "Default" | "hover";
  style?: "light";
};
function Room({
  className,
  status = "Default",
  style = "light"
}: RoomProps) {
  const isDefault = status === "Default";
  const isHover = status === "hover";
  return <div className={className || "bg-white h-[416px] relative w-[300px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.716px] relative size-full">
          <div className={`bg-white relative shrink-0 w-full ${isDefault ? "h-[306.436px]" : "h-[216px]"}`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className={`absolute h-[418px] w-[313px] ${isDefault ? "left-[-11.99px] top-[-70.12px]" : "left-[-6.72px] top-[-100.72px]"}`} data-name="image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={isDefault ? imgImage4 : imgImage3} />
              </div>
              {isHover && <div className="absolute h-[418px] left-[-13.72px] top-[-69.72px] w-[313px]" data-name="image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
                </div>}
              <div className="absolute bg-[rgba(12,26,16,0.4)] h-[312px] left-[0.01px] mix-blend-multiply top-[-0.12px] w-[307px]" data-name="shadow" />
              <div className={`absolute top-[-0.12px] ${isDefault ? "h-[22px] left-[228.01px] w-[71px]" : "h-[22.002px] left-[228px] w-[71.003px]"}`} data-name="tags">
                <div className="absolute bg-[#f2f2f2] border-[#d9d9d9] border-[0.716px] border-solid h-[21.479px] left-0 rounded-[2px] top-0 w-[71.597px]" data-name="Container">
                  <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[9.966px] left-[7.16px] text-[#595961] text-[6.64px] top-[5.01px] tracking-[0.928px] uppercase whitespace-nowrap" style={{
                  fontVariationSettings: '"opsz" 9'
                }}>{t("common.most_popular")}</p>
                </div>
              </div>
              <div className="absolute h-[56.538px] left-[11.46px] top-[10.74px] w-[53.721px]" data-name="01 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img011} />
              </div>
              {isHover && <div className="absolute h-[56.538px] left-[11.73px] top-[10.74px] w-[53.721px]" data-name="01 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img011} />
                </div>}
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
            <div aria-hidden className="absolute border-[rgba(61,158,114,0.1)] border-solid border-t-[0.716px] inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[10px] pt-[10.716px] px-[12px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="relative shrink-0 w-[109.415px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                              <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0c1a10] text-[12.601px] whitespace-nowrap" style={{
                              fontVariationSettings: '"SOFT" 0, "WONK" 1'
                            }}>
                                {isHover ? "Casa Nieves" : "Casa nieves"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-[32.28px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="relative shrink-0 w-full" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                            <p className={`[word-break:break-word] font-["Fraunces:Bold",sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[17.183px] text-right whitespace-nowrap ${isDefault ? "text-[#18271c]" : "text-[#0c1a10]"}`} style={{
                            fontVariationSettings: '"SOFT" 0, "WONK" 1'
                          }}>
                              $45
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
                            <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
                              <p className={`[word-break:break-word] font-["DM_Sans:9pt_Regular",sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[6.873px] text-right whitespace-nowrap ${isDefault ? "text-[#0c1a10]" : "text-[#ede8d8]"}`} style={{
                              fontVariationSettings: '"opsz" 9'
                            }}>{t("common.per_night_short")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`content-stretch flex relative shrink-0 ${isDefault ? "items-center justify-between w-[275px]" : "flex-col gap-[12px] items-start w-full"}`}>
                    <p className={`[word-break:break-word] font-["DM_Sans:Regular",sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[9.308px] ${isDefault ? "text-[#0a1209] w-[113.84px]" : "text-[#0c1a10] w-full"}`} style={{
                    fontVariationSettings: '"opsz" 14'
                  }}>
                      {isHover ? "Twin room with private bathroom and mountain views" : "Chambre Twin avec salle de bain privée"}
                    </p>
                    {isHover && <>
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Services Row">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                            <div className="relative shrink-0 size-[24px]" data-name="Icon Frame">
                              <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                                <g id="Icon Frame">
                                  <rect fill="#3D9E72" fillOpacity="0.2" height="24" rx="6" width="24" />
                                  <path d={svgPaths.p17a34d00} fill="#3D9E72" id="Vector" />
                                </g>
                              </svg>
                            </div>
                            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{t("rooms.nieves.size")}</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                            <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                              <div className="relative shrink-0 size-[24px]" data-name="Snowflake">
                                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                                  <g id="Snowflake">
                                    <path d={svgPaths.p20d98e00} fill="#3D9E72" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{t("amenities.ac")}</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                            <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                              <div className="relative shrink-0 size-[15.154px]" data-name="Shower">
                                <svg className="absolute block inset-0 size-full" fill="none" height="15.1543" preserveAspectRatio="none" viewBox="0 0 15.1543 15.1543" width="15.1543">
                                  <g clipPath="url(#clip0_0_206)" id="Shower">
                                    <path d={svgPaths.p83e8080} fill="#3D9E72" id="Vector" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_0_206">
                                      <rect fill="white" height="15.1543" width="15.1543" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{t("amenities.bath")}</p>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
                            <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
                              <div className="relative shrink-0 size-[20.074px]" data-name="Monitor">
                                <svg className="absolute block inset-0 size-full" fill="none" height="20.0742" preserveAspectRatio="none" viewBox="0 0 20.0742 20.0742" width="20.0742">
                                  <g id="Monitor">
                                    <path d={svgPaths.p21d64200} fill="#3D9E72" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{t("amenities.tv")}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action Row">
                          <div className="opacity-0 relative shrink-0 size-px" data-name="Frame" />
                          <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative shrink-0 w-[274px]" data-name="V2 / Primary Button">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                              fontVariationSettings: '"opsz" 14'
                            }}>{`Explore `}</p>
                                <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>}
                    {isDefault && <div className="bg-[#3d9e72] h-[36px] relative shrink-0 w-[116px]" data-name="V2 / Primary Button">
                        <div className="flex flex-row items-center size-full">
                          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
                            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{
                          fontVariationSettings: '"opsz" 14'
                        }}>{`Explore `}</p>
                            <p className="font-['Nunito:Bold','Noto_Sans_Symbols:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
                          </div>
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.716px] border-[rgba(61,158,114,0.12)] border-solid inset-0 pointer-events-none" />
    </div>;
}
function Button() {
  return <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.28px] relative shrink-0 text-[#1c2420] text-[11.52px] text-center tracking-[1.38px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.rooms")}</p>
    </div>;
}
function Button1() {
  return <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.28px] relative shrink-0 text-[#1c2420] text-[11.52px] text-center tracking-[1.38px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.story")}</p>
    </div>;
}
function Button2() {
  return <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[17.28px] relative shrink-0 text-[#1c2420] text-[11.52px] text-center tracking-[1.38px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.find_us")}</p>
    </div>;
}
function Container() {
  return <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[614.5px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>;
}
function Text() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] text-center tracking-[1px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.en")}</p>
    </div>;
}
function Text1() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#3d9e72] text-[10px] text-center tracking-[0.1172px] whitespace-nowrap">/</p>
    </div>;
}
function Text2() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#1c2420] text-[11px] text-center tracking-[1px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.es")}</p>
    </div>;
}
function ButtonSwitchLanguage() {
  const { i18n } = useTranslation();
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === "es" ? "en" : "es");

  return <div className="bg-[rgba(28,36,32,0.04)] border border-[#3d9e72] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative rounded-[16777200px] shrink-0" data-name="Button - Switch language" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
      <Text />
      <Text1 />
      <Text2 />
    </div>;
}
function Icon() {
  return <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p79b8680} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>;
}
function Container2() {
  return <div className="relative shrink-0 size-[20px]" data-name="Container">
      <Icon />
    </div>;
}
function ButtonToggleLightDarkMode() {
  return <div className="bg-[rgba(28,36,32,0.04)] border border-[#3d9e72] border-solid content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[43px]" data-name="Button - Toggle light/dark mode">
      <Container2 />
    </div>;
}
function Icon1() {
  return <div className="absolute left-0 size-[22px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g clipPath="url(#clip0_0_210)" id="Icon">
          <path d={svgPaths.p2a102800} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_210">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
function Container4() {
  return <div className="relative shrink-0 size-[22px]" data-name="Container">
      <Icon1 />
    </div>;
}
function Paragraph() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.8px] relative shrink-0 text-[11.2px] text-white tracking-[1.12px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.book_now")}</p>
    </div>;
}
function Container3() {
  return <div className="bg-[#3d9e72] content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[4px] shrink-0" data-name="Container">
      <Container4 />
      <Paragraph />
    </div>;
}
function Container1() {
  return <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[614.5px]" data-name="Container">
      <ButtonSwitchLanguage />
      <ButtonToggleLightDarkMode />
      <Container3 />
    </div>;
}
function Paragraph1() {
  return <div className="absolute content-stretch flex flex-col items-start left-[604.5px] top-[19px] w-[132px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[33.6px] relative shrink-0 text-[#4c6e58] text-[22.4px] tracking-[-0.22px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero.title")}</p>
    </div>;
}
function NavBar1() {
  return <div className="content-stretch flex h-[72px] items-center justify-between px-[56px] relative shrink-0 w-full" data-name="NavBar">
      <Container />
      <Container1 />
      <Paragraph1 />
    </div>;
}
function NavBar() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="nav-bar">
      <div aria-hidden className="absolute border-[rgba(28,36,32,0.09)] border-b border-solid inset-0 pointer-events-none" />
      <NavBar1 />
    </div>;
}
function ImageLushTropicalFlowersAndForestOfElSalvador() {
  return <div className="absolute h-[689px] left-0 opacity-80 top-0 w-[1440px]" data-name="Image (Lush tropical flowers and forest of El Salvador)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLushTropicalFlowersAndForestOfElSalvador} />
    </div>;
}
function ImageLushTropicalFlowersAndForestOfElSalvador1() {
  return <div className="absolute h-[689px] left-0 opacity-80 top-0 w-[1440px]" data-name="Image (Lush tropical flowers and forest of El Salvador)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLushTropicalFlowersAndForestOfElSalvador} />
    </div>;
}
function Container5() {
  return <div className="absolute h-[600px] left-0 top-0 w-[1440px]" style={{
    backgroundImage: "linear-gradient(181.764732956067deg, rgba(12, 26, 16, 0.21) 18.553%, rgba(12, 26, 16, 0.49) 71.936%, rgba(12, 26, 16, 0.665) 102.8%)"
  }} data-name="Container" />;
}
function NameAndPhrase() {
  return <div className="[word-break:break-word] content-stretch flex flex-col font-black gap-[20px] items-start relative shrink-0 whitespace-nowrap" data-name="name and phrase">
      <p className="font-['Fraunces:Black_Italic',sans-serif] italic leading-[67.015px] relative shrink-0 text-[#f2b138] text-[67.015px]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero.title")}</p>
      <p className="font-['Fraunces:Black',sans-serif] leading-[normal] relative shrink-0 text-[30px] text-white" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero.subtitle")}</p>
    </div>;
}
function Buttons() {
  return <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="buttons">
      <div className="bg-[#f2b138] relative shrink-0" data-name="V1 / Primary Button">
        <div className="flex flex-row items-center size-full">
          <div className="[word-break:break-word] content-stretch flex font-bold gap-[10px] items-center leading-[normal] px-[32px] py-[16px] relative size-full text-[#0c1a10] whitespace-nowrap">
            <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[11px] tracking-[3px] uppercase">{t("nav.explore_rooms")}</p>
            <p className="font-['Sora:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[14px]">→</p>
          </div>
        </div>
      </div>
      <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] relative shrink-0" data-name="V2 / Primary Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[17.28px] relative shrink-0 text-[#ede8d8] text-[11.52px] tracking-[1.3824px] uppercase whitespace-nowrap" style={{
            fontVariationSettings: '"opsz" 14'
          }}>{t("nav.our_story")}</p>
          </div>
        </div>
      </div>
    </div>;
}
function Paragraph2() {
  return <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Fraunces:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[33.6px] relative shrink-0 text-[#f2b138] text-[22.4px] whitespace-nowrap" style={{
        fontVariationSettings: '"SOFT" 0, "WONK" 1'
      }}>
          ★ 4.9
        </p>
      </div>
    </div>;
}
function Paragraph3() {
  return <div className="content-stretch flex flex-col items-start opacity-45 relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[14.4px] relative shrink-0 text-[9.6px] text-white tracking-[1.344px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 9'
    }}>{t("index.booking_raiting")}</p>
    </div>;
}
function ParagraphMargin() {
  return <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.2px] relative size-full">
        <Paragraph3 />
      </div>
    </div>;
}
function Container9() {
  return <div className="relative shrink-0 w-[81.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <ParagraphMargin />
      </div>
    </div>;
}
function KeyNumbers() {
  return <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="key numbers">
      <Container9 />
    </div>;
}
function Content() {
  return <div className="relative shrink-0" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[60px] items-start justify-center relative size-full">
        <Buttons />
        <KeyNumbers />
      </div>
    </div>;
}
function Container8() {
  return <div className="content-stretch flex h-[52.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>;
}
function Container7() {
  return <div className="relative shrink-0 w-full" data-name="container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start justify-center relative size-full">
        <NameAndPhrase />
        <Container8 />
      </div>
    </div>;
}
function Container6() {
  return <div className="absolute content-stretch flex flex-col h-[600px] items-start justify-center left-0 pb-[112px] px-[90px] top-0 w-[1440px]" data-name="Container">
      <Container7 />
    </div>;
}
function Section() {
  return <div className="bg-[#0c1a10] h-[600px] min-h-[600px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <ImageLushTropicalFlowersAndForestOfElSalvador />
      <ImageLushTropicalFlowersAndForestOfElSalvador1 />
      <Container5 />
      <Container6 />
    </div>;
}
function Background() {
  return <div className="absolute h-[350px] left-0 top-0 w-[1440px]" data-name="background">
      <div className="absolute bg-[#f13e3e] h-[365px] left-0 top-0 w-[1528px]" />
      <div className="absolute h-[761px] left-[-28px] top-[-332px] w-[1528px]" data-name="bg-light 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgLight1} />
      </div>
      <div className="absolute h-[721px] left-[-8px] top-[-254px] w-[1448px]" data-name="bg-simple-flowers 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBgSimpleFlowers1} />
      </div>
    </div>;
}
function Heading() {
  return <div className="content-stretch flex flex-col h-[107px] items-start pb-[24px] relative shrink-0 w-[843px]" data-name="Heading 2">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#ede8d8] text-[0px] text-center w-full whitespace-pre-wrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[36.291px] text-[#131f16] text-[32.992px]">{`Neskapolita:  The Story of th`}</span>
        <span className="leading-[36.291px] text-[#0c1a10] text-[32.992px]">e</span>
        <span className="leading-[36.291px] text-[32.992px]">
          <br aria-hidden />
        </span>
        <span className="font-['Fraunces:Black_Italic',sans-serif] italic leading-[36.291px] text-[#3d9e72] text-[32.992px]" style={{
        fontVariationSettings: '"SOFT" 0, "WONK" 1'
      }}>{`"Pretty Girl"`}</span>
      </p>
    </div>;
}
function Frame1() {
  return <div className="content-stretch flex items-center justify-center py-[20px] relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[29px] leading-[28.704px] relative shrink-0 text-[#131f16] text-[14.72px] w-[498px]" style={{
      fontVariationSettings: '"opsz" 9'
    }}>{t("story.desc")}</p>
    </div>;
}
function ParagraphMargin1() {
  return <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Paragraph:margin">
      <Frame1 />
    </div>;
}
function Text3() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="text">
      <Heading />
      <ParagraphMargin1 />
      <div className="relative rounded-[4px] shrink-0 w-[326px]" data-name="V3 / Secondary Button">
        <div aria-hidden className="absolute border border-[#4c6e58] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center justify-center leading-[normal] not-italic px-[24px] py-[14px] relative size-full whitespace-nowrap">
            <p className="font-['Space_Mono:Bold',sans-serif] relative shrink-0 text-[#4c6e58] text-[12px] tracking-[1.5px] uppercase">{t("story.cta")}</p>
            <p className="font-['Space_Mono:Regular',sans-serif] relative shrink-0 text-[#0c1a10] text-[14px]">→</p>
          </div>
        </div>
      </div>
    </div>;
}
function Logo() {
  return <div className="absolute content-stretch flex items-center justify-center left-[80px] top-[68px] w-[1280px]" data-name="logo">
      <div className="h-[209.688px] relative shadow-[0px_3.401px_3.401px_0px_rgba(0,0,0,0.25)] shrink-0 w-[250px]" data-name="logo-neska-polita 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoNeskaPolita1} />
      </div>
      <Text3 />
    </div>;
}
function Section1() {
  return <div className="h-[350px] overflow-clip relative shrink-0 w-[1440px]" data-name="Section">
      <Background />
      <Logo />
    </div>;
}
function HeaderGroup() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Header Group">
      <p className="font-['Fraunces:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#1c2420] text-[28px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[normal]">{`Find Your `}</span>
        <span className="leading-[normal] text-[#3d9e72]">{t("common.casa")}</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#54625d] text-[15px] text-center w-[720px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.from_shared_dorms_to")}</p>
    </div>;
}
function CardsContainer() {
  return <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Cards Container">
      <Room className="bg-white h-[416px] relative shrink-0 w-[300px]" />
      <Room1 className="bg-white h-[416px] relative shrink-0 w-[300px]" />
      <Room2 className="bg-white h-[416px] relative shrink-0 w-[300px]" />
      <Room3 className="bg-white h-[416px] relative shrink-0 w-[300px]" />
    </div>;
}
function RoomFinderRow() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col gap-[48px] items-start px-[56px] py-[80px] relative shrink-0 w-[1440px]" data-name="Room Finder Row">
      <HeaderGroup />
      <CardsContainer />
    </div>;
}
function BadgeCircle() {
  return <div className="bg-[#f2b138] content-stretch drop-shadow-[0px_5.375px_8.063px_rgba(76,110,88,0.05)] flex flex-col items-center justify-center relative rounded-[43px] shrink-0 size-[86px]" data-name="Badge Circle">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[24.188px] text-white whitespace-nowrap">10%</p>
    </div>;
}
function TitleAndPitch() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Title and Pitch">
      <p className="font-['Fraunces:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#1c2420] text-[28px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[34px]">{`Save `}</span>
        <span className="leading-[34px] text-[#0c1a10]">10%</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[26px] min-w-full relative shrink-0 text-[#0c1a10] text-[14.4px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("common.when_you_book_direct")}</p>
    </div>;
}
function ArrowRight() {
  return <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="arrow-right">
          <path d={svgPaths.p278a3600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>;
}
function ActionButton() {
  return <div className="bg-[#3d9e72] content-stretch drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] flex gap-[8px] items-center px-[30px] py-[14px] relative rounded-[4px] shrink-0" data-name="Action Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11.2px] text-white tracking-[1.34px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.book_your_stay")}</p>
      <ArrowRight />
    </div>;
}
function LeftColumn() {
  return <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[580px]" data-name="Left Column">
      <BadgeCircle />
      <TitleAndPitch />
      <ActionButton />
    </div>;
}
function Icon2() {
  return <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p30a86180} fill="#009CDE" id="Vector" opacity="0.9" />
          <path d={svgPaths.p2941ff00} fill="#012169" id="Vector_2" opacity="0.8" />
        </g>
      </svg>
    </div>;
}
function Text4() {
  return <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#0c1a10] text-[14.4px] tracking-[-0.144px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.paypal")}</p>
      </div>
    </div>;
}
function Container10() {
  return <div className="content-stretch flex gap-[5.6px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <Text4 />
    </div>;
}
function MethodPayPal() {
  return <div className="bg-[#f2f4f3] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Method PayPal">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Container10 />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.paypal")}</p>
        </div>
      </div>
    </div>;
}
function Frame() {
  return <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0 w-[42px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#3d9e72] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3d9e72] text-[14px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        $
      </p>
    </div>;
}
function MethodCash() {
  return <div className="bg-[#f2f4f3] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Method Cash">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Frame />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.cash_usd")}</p>
        </div>
      </div>
    </div>;
}
function Text5() {
  return <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[10.8px] relative shrink-0 text-[7.2px] text-white tracking-[0.144px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.visa")}</p>
      </div>
    </div>;
}
function Container12() {
  return <div className="bg-[#1a1f71] h-[18px] relative rounded-[3px] shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text5 />
      </div>
    </div>;
}
function Container13() {
  return <div className="absolute bg-[#eb001b] left-0 opacity-85 rounded-[11px] size-[22px] top-0" data-name="Container" />;
}
function ContainerMargin() {
  return <div className="h-[22px] relative shrink-0 w-[12px]" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
      </div>
    </div>;
}
function Container14() {
  return <div className="bg-[#f79e1b] opacity-85 relative rounded-[11px] shrink-0 size-[22px]" data-name="Container" />;
}
function Container11() {
  return <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="Container">
      <Container12 />
      <ContainerMargin />
      <Container14 />
    </div>;
}
function MethodVisa() {
  return <div className="bg-[#f2f4f3] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Method Visa">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Container11 />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.cards_accepted")}</p>
        </div>
      </div>
    </div>;
}
function PaymentMethodsRow() {
  return <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Payment Methods Row">
      <MethodPayPal />
      <MethodCash />
      <MethodVisa />
    </div>;
}
function LockSimple() {
  return <div className="relative shrink-0 size-[19px]" data-name="LockSimple">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="LockSimple">
          <path d={svgPaths.p1a665000} fill="#18271C" id="Vector" />
        </g>
      </svg>
    </div>;
}
function SecurityNote() {
  return <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Security Note">
      <LockSimple />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18271c] text-[10.88px] tracking-[0.65px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.secure_booking_no_hidden")}</p>
    </div>;
}
function RightColumn() {
  return <div className="content-stretch flex flex-col gap-[20px] items-center justify-end relative shrink-0 w-[580px]" data-name="Right Column">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[25.34px] min-w-full relative shrink-0 text-[#1c2420] text-[14.08px] text-center w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.we_accept_various_ways")}</p>
      <PaymentMethodsRow />
      <SecurityNote />
    </div>;
}
function ContentSplit() {
  return <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Content Split">
      <LeftColumn />
      <RightColumn />
    </div>;
}
function SavingsBannerSection() {
  return <div className="bg-[#ede8d8] relative shrink-0 w-full" data-name="Savings Banner Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[50px] relative size-full">
          <ContentSplit />
        </div>
      </div>
    </div>;
}
function V1LeftCol() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-[420px]" data-name="V1-Left-Col">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[56px] relative shrink-0 text-[#1c2420] text-[48px] w-full whitespace-pre-wrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        {`Everything `}
        <br aria-hidden />{t("index.you_need")}<br aria-hidden />{t("index.for_a_perfect_stay")}</p>
    </div>;
}
function V1GridRow() {
  return <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="V1-Grid-Row-1">
      <CardGarden className="bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] shrink-0 w-[358px]" />
      <CardKitchen className="bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] shrink-0 w-[358px]" />
    </div>;
}
function V1GridRow1() {
  return <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="V1-Grid-Row-2">
      <CardLounge className="bg-white h-[191px] relative rounded-[12px] shrink-0 w-[358px]" />
      <CardLaundry className="bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] shrink-0 w-[358px]" />
    </div>;
}
function V1RightCol() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="V1-Right-Col">
      <V1GridRow />
      <V1GridRow1 />
      <CardCommunity className="bg-white drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[12px] shrink-0 w-[740px]" />
    </div>;
}
function V1Columns() {
  return <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="V1-Columns">
      <V1LeftCol />
      <V1RightCol />
    </div>;
}
function AmenitiesSection() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start overflow-clip p-[100px] relative shrink-0 w-[1440px]" data-name="Amenities Section">
      <V1Columns />
    </div>;
}
function ArrowRight1() {
  return <div className="relative shrink-0 size-[20.093px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.093" preserveAspectRatio="none" viewBox="0 0 20.093 20.093" width="20.093">
        <g id="arrow-right">
          <path d={svgPaths.p1daee500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="3.34884" />
        </g>
      </svg>
    </div>;
}
function ActionButton1() {
  return <div className="absolute bg-[#3d9e72] content-stretch drop-shadow-[0px_6.698px_10.047px_rgba(76,110,88,0.05)] flex gap-[13.395px] items-center left-[900px] px-[50.233px] py-[23.442px] rounded-[6.698px] top-[44px]" data-name="Action Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18.753px] text-white tracking-[2.2437px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.explore_the_must_visit_1")}</p>
      <ArrowRight1 />
    </div>;
}
function RutaDeLasFloresLight() {
  return <div className="h-[717.202px] relative shrink-0 w-full" data-name="ruta-de-las-flores-light">
      <div className="absolute h-[717.183px] left-0 top-0 w-[1440.038px]" data-name="map-01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap011} />
      </div>
      <div className="absolute h-[194.858px] left-[1036.62px] top-[178.1px] w-[292.288px]" data-name="sonsonate-ilustration2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSonsonateIlustration22} />
      </div>
      <div className="absolute h-[194.858px] left-[1036.62px] top-[178.1px] w-[292.288px]" data-name="sonsonate-ilustration2 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSonsonateIlustration22} />
      </div>
      <div className="absolute h-[203.887px] left-[820.74px] top-[395.58px] w-[305.83px]" data-name="nahuzalco-illustratyion2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNahuzalcoIllustratyion22} />
      </div>
      <div className="absolute h-[199.156px] left-[637.45px] top-[173.9px] w-[298.734px]" data-name="juayua2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJuayua22} />
      </div>
      <div className="absolute h-[178.534px] left-[431.36px] top-[418.77px] w-[267.801px]" data-name="salcoatitan-ilustration2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSalcoatitanIlustration22} />
      </div>
      <div className="absolute h-[175.103px] left-[246.46px] top-[197.89px] w-[262.654px]" data-name="apaneca ilustration 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgApanecaIlustration2} />
      </div>
      <div className="absolute h-[192.693px] left-[42.98px] top-[395.58px] w-[289.039px]" data-name="ataco ilustration 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAtacoIlustration2} />
      </div>
      <ActionButton1 />
    </div>;
}
function Paragraph4() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Fraunces:Black_Italic',sans-serif] font-black italic leading-[33.6px] relative shrink-0 text-[#3d9e72] text-[22.4px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("hero.title")}</p>
    </div>;
}
function Paragraph5() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.4px] relative shrink-0 text-[#54625d] text-[13px] w-[300px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.your_refuge_on_the")}</p>
    </div>;
}
function Paragraph6() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#54625d] text-[11px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.2026_neskapolita_hostel")}</p>
    </div>;
}
function Container16() {
  return <div className="content-stretch flex flex-col gap-[16px] h-full items-start max-w-[300px] relative shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>;
}
function Paragraph7() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.stay")}</p>
    </div>;
}
function Paragraph8() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.book_now")}</p>
    </div>;
}
function Container18() {
  return <div className="content-stretch flex flex-col gap-[12px] h-full items-start min-w-[100px] relative shrink-0" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>;
}
function Paragraph9() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("common.explore")}</p>
    </div>;
}
function Paragraph10() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("nav.our_story")}</p>
    </div>;
}
function Paragraph11() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.faq")}</p>
    </div>;
}
function Paragraph12() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.gallery")}</p>
    </div>;
}
function Container19() {
  return <div className="content-stretch flex flex-col gap-[12px] h-full items-start min-w-[100px] relative shrink-0" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
    </div>;
}
function Paragraph13() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.connect")}</p>
    </div>;
}
function Paragraph14() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.instagram")}</p>
    </div>;
}
function Paragraph15() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#1c2420] text-[13px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.whatsapp")}</p>
    </div>;
}
function Container20() {
  return <div className="content-stretch flex flex-col gap-[12px] h-full items-start min-w-[100px] relative shrink-0" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
      <Paragraph15 />
    </div>;
}
function Container17() {
  return <div className="content-stretch flex gap-[64px] h-full items-start relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>;
}
function Container15() {
  return <div className="content-stretch flex h-[240.891px] items-start justify-between max-w-[1440px] p-[56px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>;
}
export default function DesktopV() {
  return <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start relative size-full" data-name="desktop-V1">
      <NavBar />
      <Section />
      <Section1 />
      <RoomFinderRow />
      <SavingsBannerSection />
      <AmenitiesSection />x
      <RutaDeLasFloresLight />
      <div className="bg-[#ede8d8] h-[240px] relative shrink-0 w-[1440px]" data-name="Nar-bar">
        <div aria-hidden className="absolute border-[rgba(28,36,32,0.09)] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start relative size-full">
          <Container15 />
        </div>
      </div>
    </div>;
}
