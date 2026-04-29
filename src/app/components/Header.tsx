import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/Homepage/svg-cy85099z6s";

export function Header() {
  const location = useLocation();
  const isSobreMi = location.pathname === "/sobre-mi";

  return (
    <div className="content-stretch flex items-start justify-between overflow-clip pb-[24px] pt-[56px] px-[32px] relative shrink-0 w-[1280px] bg-white z-50">
      <div className="content-stretch flex gap-[24px] items-center leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <Link to="/" className={`hover:opacity-70 transition-opacity ${!isSobreMi ? "font-['Rethink_Sans:Bold',sans-serif] font-bold" : "font-['Rethink_Sans:Regular',sans-serif] font-normal"} relative shrink-0`}>proyectos</Link>
        <Link to="/sobre-mi" className={`hover:opacity-70 transition-opacity ${isSobreMi ? "font-['Rethink_Sans:SemiBold',sans-serif] font-semibold" : "font-['Rethink_Sans:Regular',sans-serif] font-normal"} relative shrink-0`}>sobre mí</Link>
      </div>
      <Link to="/" className="h-[94px] relative shrink-0 w-[534px] hover:opacity-70 transition-opacity" data-name="NICOLE CARNEIRO SITE 2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 534 94">
          <g clipPath="url(#clip0_1_64)" id="NICOLE CARNEIRO SITE 2">
            <path d={svgPaths.p3f5666f0} fill="var(--fill-0, black)" id="Vector" />
            <path d={svgPaths.p2750ee00} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p282e1cc0} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p1e4bb900} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p1c278500} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p3b6ab70} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p9b4b800} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p30663b00} fill="var(--fill-0, black)" id="Vector_8" />
          </g>
          <defs>
            <clipPath id="clip0_1_64">
              <rect fill="white" height="94" width="534" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[normal] not-italic opacity-0 relative shrink-0 text-[24px] text-black whitespace-nowrap pointer-events-none">
        <p className="relative shrink-0">Meus projetos</p>
        <p className="relative shrink-0">Sobre mim</p>
      </div>
    </div>
  );
}
