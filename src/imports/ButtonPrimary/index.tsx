import svgPaths from "./svg-864d05ehra";

export default function ButtonPrimary({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <div className={className || "bg-[#3d9e72] drop-shadow-[0px_4px_6px_rgba(76,110,88,0.05)] relative rounded-[4px] cursor-pointer"} data-name="Button-primary" onClick={onClick}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[14px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11.2px] text-white tracking-[1.34px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
            Explore the must-visit spots
          </p>
          <div className="relative shrink-0 size-[13px]" data-name="arrow-right">
            <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20.093 20.093">
              <g id="arrow-right">
                <path d={svgPaths.p1daee500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="3.34884" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}