import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import svgPaths from "./svg-ggyr51e18i";
function Paragraph() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[16.5px] relative shrink-0 text-[#3d9e72] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("common.top_places")}</p>
    </div>;
}
function Paragraph1() {
  return <div className="content-stretch flex flex-col h-[30px] items-start pt-[2px] relative shrink-0 w-[97px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Fraunces:Black',sans-serif] font-black leading-[27.5px] relative shrink-0 text-[#1c2420] text-[22px] w-[149px]" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>{t("index.salcoatit_n")}</p>
    </div>;
}
function Container1() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-[97px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>;
}
function Icon() {
  return <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="#54625D" strokeLinecap="round" strokeWidth="1.33" />
          <path d="M4 4L12 12" id="Vector_2" stroke="#54625D" strokeLinecap="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>;
}
function Button() {
  return <div className="content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <Icon />
    </div>;
}
function Container() {
  return <div className="border-[#d5dad7] border-b border-solid content-stretch flex items-center justify-between px-[24px] py-[20px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>;
}
function Icon1() {
  return <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p12f44a00} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>;
}
function Container2() {
  return <div className="bg-[rgba(61,158,114,0.09)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon1 />
    </div>;
}
function Instruction() {
  return <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="instruction">
      <Container2 />
      <p className="[word-break:break-word] font-['Nunito:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#3d9e72] text-[14px] tracking-[0.5px] whitespace-nowrap">{t("common.tap_place")}</p>
    </div>;
}
function Icon2() {
  return <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p12f44a00} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>;
}
function Container4() {
  return <div className="bg-[rgba(61,158,114,0.09)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon2 />
    </div>;
}
function ContainerMargin() {
  return <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Container:margin">
      <Container4 />
    </div>;
}
function Paragraph2() {
  return <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1c2420] text-[14px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.place_10")}</p>
    </div>;
}
function Paragraph3() {
  return <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#54625d] text-[13px] w-[356px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.the_tranquil_central_park")}</p>
    </div>;
}
function Container5() {
  return <div className="content-stretch flex flex-[356_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>;
}
function Link() {
  return <div className="border-[#f2f4f3] border-b border-solid content-stretch flex gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-[448px]" data-name="Link">
      <ContainerMargin />
      <Container5 />
    </div>;
}
function Icon3() {
  return <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p12f44a00} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>;
}
function Container6() {
  return <div className="bg-[rgba(61,158,114,0.09)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon3 />
    </div>;
}
function ContainerMargin1() {
  return <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Container:margin">
      <Container6 />
    </div>;
}
function Paragraph4() {
  return <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1c2420] text-[14px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.place_11")}</p>
    </div>;
}
function Paragraph5() {
  return <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#54625d] text-[13px] w-[356px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{`Open-air stalls serving the town's famous yucca wrapped in banana leaves with local curtido.`}</p>
    </div>;
}
function Container7() {
  return <div className="content-stretch flex flex-[356_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>;
}
function Link1() {
  return <div className="border-[#f2f4f3] border-b border-solid content-stretch flex gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-[448px]" data-name="Link">
      <ContainerMargin1 />
      <Container7 />
    </div>;
}
function Icon4() {
  return <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="Icon">
          <path d={svgPaths.p12f44a00} id="Vector" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p37a0d000} id="Vector_2" stroke="#3D9E72" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>;
}
function Container8() {
  return <div className="bg-[rgba(61,158,114,0.09)] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Container">
      <Icon4 />
    </div>;
}
function ContainerMargin2() {
  return <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Container:margin">
      <Container8 />
    </div>;
}
function Paragraph6() {
  return <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1c2420] text-[14px] whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("ruta.place_12")}</p>
    </div>;
}
function Paragraph7() {
  return <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#54625d] text-[13px] w-[356px]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.family_run_galleries_showcasing")}</p>
    </div>;
}
function Container9() {
  return <div className="content-stretch flex flex-[356_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>;
}
function Link2() {
  return <div className="content-stretch flex gap-[16px] items-start px-[24px] py-[16px] relative shrink-0 w-[448px]" data-name="Link">
      <ContainerMargin2 />
      <Container9 />
    </div>;
}
function Container3() {
  return <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>;
}
function Frame() {
  return <div className="content-stretch flex flex-col gap-[12px] items-center pt-[12px] relative shrink-0 w-full">
      <Instruction />
      <Container3 />
    </div>;
}
export default function SalcoatitanPopIn() {
  return <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Salcoatitán pop-in">
      <Container />
      <Frame />
    </div>;
}
