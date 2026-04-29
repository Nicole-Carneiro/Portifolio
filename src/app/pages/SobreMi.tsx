import { Header } from "../components/Header";
import svgPaths from "../../imports/SobreMi/svg-hk2w29o2u8";
import imgWhatsAppImage20260424At15024241 from "../../imports/SobreMi/005a8ad276a8e97582b873b2a66156d8cbe4659d.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 text-[#0f0f0f] text-[18px] w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">ES</p>
      <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal] mb-0">Hola :)</p>
        <p className="leading-[normal]">
          Mi nombre es Nicole Carneiro, soy diseñadora gráfica, ilustradora y artista brasileña.
          <br aria-hidden="true" />
          Me gradué en Diseño Gráfico por la Universidade do Estado de Minas Gerais (UEMG),
          <br aria-hidden="true" />
          Brasil, en 2025. A través de mi curiosidad y mi pasión por la creatividad, construyo
          <br aria-hidden="true" />y cuento historias. Creo en la sensibilidad del trabajo hecho a mano y busco explorar
          <br aria-hidden="true" />
          distintos materiales y formas de integrar el arte, el diseño y las personas.
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 text-[#817f7f] text-[14px] w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">PT</p>
      <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal] mb-0">Oi :)</p>
        <p className="leading-[normal]">
          Meu nome é Nicole Carneiro, sou designer gráfica, ilustradora e artista brasileira. Me formei em Design Gráfico
          <br aria-hidden="true" />
          pela Universidade do Estado de Minas Gerais (UEMG), Brasil, em 2025. Por meio da minha curiosidade e paixão
          <br aria-hidden="true" />
          pela criatividade, construo e conto histórias. Acredito na sensibilidade do trabalho feito à mão e busco explorar diferentes materiais e meios de integrar as artes, o design e as pessoas.
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 text-[#817f7f] text-[14px] w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">EN</p>
      <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal] mb-0">Hi :)</p>
        <p className="leading-[normal]">
          My name is Nicole Carneiro. I’m a Brazilian graphic designer, illustrator and artist, and I graduated in Graphic
          <br aria-hidden="true" />
          Design from the Universidade do Estado de Minas Gerais (UEMG), Brazil, in 2025. Guided by curiosity and
          <br aria-hidden="true" />
          a passion for creativity, I create and tell stories through images. I value the sensitivity of hand-made work
          <br aria-hidden="true" />
          and enjoy exploring different materials and processes as a way to connect art, design and people.
        </p>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="mail">
      <div className="absolute inset-[-3.89%_-15%_-15%_-3.89%] hover:opacity-70 transition-opacity cursor-pointer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.8 42.8">
          <g filter="url(#filter0_d_1_487)" id="mail">
            <rect fill="var(--fill-0, white)" height="36" rx="18" shapeRendering="crispEdges" width="36" x="1.4" y="1.4" />
            <rect height="35.5" rx="17.75" shapeRendering="crispEdges" stroke="var(--stroke-0, black)" strokeOpacity="0.16" strokeWidth="0.5" width="35.5" x="1.65" y="1.65" />
            <path d={svgPaths.p3b9e0100} fill="var(--fill-0, #817F7F)" id="mail_2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.8" id="filter0_d_1_487" width="42.8" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="2" />
              <feGaussianBlur stdDeviation="1.7" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_487" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_487" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[32px] relative size-full">
          <Frame4 />
          <Frame5 />
          <Frame7 />
          <a href="mailto:nicole.carneiro@example.com"><Mail /></a>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full mt-[32px]">
      <div className="h-[592px] relative shrink-0 w-[459px]" data-name="WhatsApp Image 2026-04-24 at 15.02.42 (4) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.46%] left-[-84.3%] max-w-none top-[-16.05%] w-[266%]" src={imgWhatsAppImage20260424At15024241} />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

export default function SobreMi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full overflow-hidden" data-name="Sobre mi">
      <Header />
      <Frame3 />
    </div>
  );
}
