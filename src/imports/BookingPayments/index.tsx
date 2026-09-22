import i18n from "../../locales/i18n";
const t = i18n.t.bind(i18n);
import svgPaths from "./svg-uen9kikjva";
function Frame() {
  return <div className="bg-[#f2b138] content-stretch flex flex-col items-center justify-center relative rounded-[29px] shrink-0 size-[58px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Outfit:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[16.917px] text-white whitespace-nowrap">10%</p>
    </div>;
}
function Frame1() {
  return <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Fraunces:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#1c2420] text-[24px] whitespace-nowrap" style={{
      fontVariationSettings: '"SOFT" 0, "WONK" 1'
    }}>
        <span className="leading-[normal]">{`Save `}</span>
        <span className="leading-[normal] text-[#4c6e58]">10%</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#54625d] text-[14px] w-[min-content]" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("common.when_you_book_direct")}</p>
    </div>;
}
function Frame2() {
  return <div className="bg-[#4c6e58] relative rounded-[4px] shrink-0 w-full cursor-pointer" data-name="Frame" onClick={() => window.open('https://api.whatsapp.com/send?phone=50370917674', '_blank')}>
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[20px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white tracking-[1px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.book_your_stay")}</p>
        </div>
      </div>
    </div>;
}
function Icon() {
  return <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p30a86180} fill="#009CDE" id="Vector" opacity="0.9" />
          <path d={svgPaths.p2941ff00} fill="#012169" id="Vector_2" opacity="0.8" />
        </g>
      </svg>
    </div>;
}
function Text() {
  return <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21.6px] relative shrink-0 text-[#0c1a10] text-[14.4px] tracking-[-0.144px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.paypal")}</p>
      </div>
    </div>;
}
function Container() {
  return <div className="content-stretch flex gap-[5.6px] items-center relative shrink-0" data-name="Container">
      <Icon />
      <Text />
    </div>;
}
function MethodPayPal() {
  return <div className="bg-[#f2f4f3] h-[68px] relative rounded-[8px] shrink-0 w-full" data-name="Method PayPal">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Container />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.paypal")}</p>
        </div>
      </div>
    </div>;
}
function Frame3() {
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
  return <div className="bg-[#f2f4f3] h-[68px] relative rounded-[8px] shrink-0 w-full" data-name="Method Cash">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Frame3 />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.cash_usd")}</p>
        </div>
      </div>
    </div>;
}
function Text1() {
  return <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[10.8px] relative shrink-0 text-[7.2px] text-white tracking-[0.144px] whitespace-nowrap" style={{
        fontVariationSettings: '"opsz" 14'
      }}>{t("index.visa")}</p>
      </div>
    </div>;
}
function Container2() {
  return <div className="bg-[#1a1f71] h-[18px] relative rounded-[3px] shrink-0 w-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text1 />
      </div>
    </div>;
}
function Container3() {
  return <div className="absolute bg-[#eb001b] left-0 opacity-85 rounded-[11px] size-[22px] top-0" data-name="Container" />;
}
function ContainerMargin() {
  return <div className="h-[22px] relative shrink-0 w-[12px]" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
      </div>
    </div>;
}
function Container4() {
  return <div className="bg-[#f79e1b] opacity-85 relative rounded-[11px] shrink-0 size-[22px]" data-name="Container" />;
}
function Container1() {
  return <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <ContainerMargin />
      <Container4 />
    </div>;
}
function MethodVisa() {
  return <div className="bg-[#f2f4f3] h-[68px] relative rounded-[8px] shrink-0 w-full" data-name="Method Visa">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center p-[16px] relative size-full">
          <Container1 />
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#54625d] text-[9.6px] tracking-[0.96px] uppercase whitespace-nowrap" style={{
          fontVariationSettings: '"opsz" 14'
        }}>{t("index.cards_accepted")}</p>
        </div>
      </div>
    </div>;
}
function PaymentMethodsRow() {
  return <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Payment Methods Row">
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
  return <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Security Note">
      <LockSimple />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18271c] text-[10.88px] text-center tracking-[0.65px] w-[225px] whitespace-pre-wrap" style={{
      fontVariationSettings: '"opsz" 14'
    }}>
        {`Secure booking · No hidden fees · `}
        <br aria-hidden />{t("index.free_cancellation_within_48h")}</p>
    </div>;
}
function RightColumn() {
  return <div className="content-stretch flex flex-col gap-[20px] items-center justify-end relative shrink-0 w-full" data-name="Right Column">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[25.34px] relative shrink-0 text-[#1c2420] text-[14.08px] text-center w-full" style={{
      fontVariationSettings: '"opsz" 14'
    }}>{t("index.we_accept_various_ways")}</p>
      <PaymentMethodsRow />
      <SecurityNote />
    </div>;
}
export default function BookingPayments() {
  return <div className="bg-[#ede8d8] content-stretch flex flex-col gap-[20px] items-center justify-center p-[24px] relative size-full" data-name="Booking & Payments">
      <Frame />
      <Frame1 />
      <Frame2 />
      <RightColumn />
    </div>;
}
