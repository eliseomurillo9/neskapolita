import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import svgPaths from "./svg-lhxd6z9emk";
import imgMap011 from "./a59195a9e27cccf80d5295fb9bf15ac226f28f11.png";
import imgSonsonateIlustration22 from "./a846ec44cc9d1a94bdbcbeb391dfc00b91a5018a.png";
import imgNahuzalcoIllustratyion22 from "./f5b5961e54952719ffe5e43d303abb6cd7bd7565.png";
import imgJuayua22 from "./dbb8d5036dc30326df8b5297904a5b53b0cfb5f8.png";
import imgSalcoatitanIlustration22 from "./828973c65dab400d9481607663e04c1e6267bbca.png";
import imgApanecaIlustration2 from "./f23c47939fd00eae014ff37746cb0058f242c565.png";
import imgAtacoIlustration2 from "./fce5276ce245dee3f5c2fdfd286db078a60800e0.png";
function ArrowRight() {
  return <div className="relative shrink-0 size-[20.093px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.093" preserveAspectRatio="none" viewBox="0 0 20.093 20.093" width="20.093">
        <g id="arrow-right">
          <path d={svgPaths.p1daee500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="3.34884" />
        </g>
      </svg>
    </div>;
}
function ActionButton() {
  return <div className="absolute bg-[#3d9e72] content-stretch drop-shadow-[0px_6.698px_10.047px_rgba(76,110,88,0.05)] flex gap-[13.395px] items-center left-[900px] px-[50.233px] py-[23.442px] rounded-[6.698px] top-[44px]" data-name="Action Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18.753px] text-white tracking-[2.2437px] uppercase whitespace-nowrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.explore_ruta_de_las")}</p>
      <ArrowRight />
    </div>;
}
export default function RutaDeLasFloresLight() {
  return <div className="relative size-full" data-name="ruta-de-las-flores-light">
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
      <ActionButton />
    </div>;
}
