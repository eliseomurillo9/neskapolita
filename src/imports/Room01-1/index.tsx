import svgPaths from "./svg-5vwvmv1zi0";
import imgImage from "./1a87c5d486772503401990064608c4940c7da7fc.png";
import imgImage1 from "./6c88d1ade3e7b7f98af20a56562688e565b1e477.png";
import img011 from "./c06fcb3e51191a325985054ce1370bf867d176ef.png";

function Container() {
  return (
    <div className="absolute bg-[#f2f2f2] border-[#d9d9d9] border-[0.716px] border-solid h-[21.479px] left-0 rounded-[2px] top-0 w-[71.597px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[9.966px] left-[7.16px] text-[#595961] text-[6.64px] top-[5.01px] tracking-[0.928px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        Most popular
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[117px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[418px] left-[-6.72px] top-[-100.72px] w-[313px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <div className="absolute h-[498px] left-[-13.72px] top-[-109.72px] w-[374px]" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
        <div className="absolute bg-[rgba(12,26,16,0.4)] h-[312px] left-[0.28px] mix-blend-multiply top-[0.28px] w-[359px]" data-name="shadow" />
        <div className="absolute h-[22.002px] left-[288.28px] top-[0.28px] w-[71.003px]" data-name="tags">
          <Container />
        </div>
        <div className="absolute h-[56.538px] left-[11.46px] top-[10.74px] w-[53.721px]" data-name="01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img011} />
        </div>
        <div className="absolute h-[56.538px] left-[11.73px] top-[10.74px] w-[53.721px]" data-name="01 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img011} />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[18.902px] relative shrink-0 text-[#0c1a10] text-[12.601px] whitespace-nowrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Casa Nieves
      </p>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.718px] pt-[3.437px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[109.415px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3Margin />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Fraunces:Bold',sans-serif] font-bold leading-[17.183px] relative shrink-0 text-[#0c1a10] text-[17.183px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
          $45
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-40 relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10.31px] relative shrink-0 text-[#ede8d8] text-[6.873px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        /night
      </p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[1.146px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[32.28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Icon Frame">
          <rect fill="#3D9E72" fillOpacity="0.2" height="24" rx="6" width="24" />
          <path d={svgPaths.p17a34d00} fill="#3D9E72" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ServiceItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
      <IconFrame />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        15 m²
      </p>
    </div>
  );
}

function Snowflake() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Snowflake">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Snowflake">
          <path d={svgPaths.p20d98e00} fill="#3D9E72" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
      <Snowflake />
    </div>
  );
}

function ServiceItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
      <IconFrame1 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        A/C
      </p>
    </div>
  );
}

function Shower() {
  return (
    <div className="relative shrink-0 size-[15.154px]" data-name="Shower">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.1543" preserveAspectRatio="none" viewBox="0 0 15.1543 15.1543" width="15.1543">
        <g clipPath="url(#clip0_0_10)" id="Shower">
          <path d={svgPaths.p83e8080} fill="#3D9E72" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="15.1543" width="15.1543" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
      <Shower />
    </div>
  );
}

function ServiceItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
      <IconFrame2 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Bath
      </p>
    </div>
  );
}

function Monitor() {
  return (
    <div className="relative shrink-0 size-[20.074px]" data-name="Monitor">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.0742" preserveAspectRatio="none" viewBox="0 0 20.0742 20.0742" width="20.0742">
        <g id="Monitor">
          <path d={svgPaths.p21d64200} fill="#3D9E72" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="bg-[rgba(61,158,114,0.2)] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Icon Frame">
      <Monitor />
    </div>
  );
}

function ServiceItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Service Item">
      <IconFrame3 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c1a10] text-[8px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        TV
      </p>
    </div>
  );
}

function ServicesRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Services Row">
      <ServiceItem />
      <ServiceItem1 />
      <ServiceItem2 />
      <ServiceItem3 />
    </div>
  );
}

function Frame() {
  return <div className="opacity-0 relative shrink-0 size-px" data-name="Frame" />;
}

function ActionRow() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Action Row">
      <Frame />
      <div className="bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(61,158,114,0.3)] h-[36px] relative rounded-[100px] shrink-0 w-[274px]" data-name="V2 / Primary Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative size-full text-white whitespace-nowrap">
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px]" style={{ fontVariationSettings: '"opsz" 14' }}>{`Explore `}</p>
            <p className="font-['Nunito:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px]">→</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[14.319px] relative shrink-0 text-[#0c1a10] text-[9.308px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Twin room with private bathroom and mountain views
      </p>
      <ServicesRow />
      <ActionRow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center relative size-full">
        <Container2 />
        <Frame2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(61,158,114,0.1)] border-solid border-t-[0.716px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[0.716px] px-[12px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function Room() {
  return (
    <div className="bg-white relative size-full" data-name="room01">
      <div className="content-stretch flex flex-col items-start p-[0.716px] relative size-full">
        <Frame1 />
        <Container1 />
      </div>
      <div aria-hidden className="absolute border-[0.716px] border-[rgba(61,158,114,0.12)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}