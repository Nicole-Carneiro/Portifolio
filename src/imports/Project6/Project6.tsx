import svgPaths from "./svg-ocf2p1botg";
import img1Prancheta12 from "./d52aab16f5060b842d2884e3ca5cd38b41781c83.png";
import img2Prancheta21 from "./1a19a1bcc175e099ed3b46ac8b5549363c941a99.png";
import img3Prancheta141 from "./da46a340138ed39a8fd7a19b4f47c9a738791bda.png";
import img4Prancheta131 from "./214b9f4ae88f0b1cb114a46c56dcff3c6e5dd157.png";
import img5Prancheta31 from "./b3d1935bea783e980274ef453858a6c7ec4567a9.png";
import img6Prancheta41 from "./819ce4f37c9c648f9ddf7374bdbce639d1874c91.png";
import img7Prancheta71 from "./c0f94235479bd53614193d31eb1cdd02a3f4508f.png";
import img8Prancheta81 from "./7812fc286796c73597f87c29e600964e95f65c6c.png";
import img9Prancheta61 from "./44355e966196d69f26859301fbb5a34d4adb2d2f.png";
import img10Prancheta51 from "./581efba9e1083acb4abd9f7139d897b6c9aa67ec.png";
import img11Prancheta91 from "./e145211bbab75eec2ddf67b6cb174f0c24d34449.png";
import img12Prancheta111 from "./290d5ae4a99abf29e86d64fecfd2938c97de00ad.png";
import img13Prancheta101 from "./a0fccc50f26e72a1ce3b4dc8b216e7782f30acc4.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center leading-[normal] relative shrink-0 text-[24px] text-black whitespace-nowrap">
      <p className="font-['Rethink_Sans:Bold',sans-serif] font-bold relative shrink-0">proyectos</p>
      <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal relative shrink-0">sobre mí</p>
    </div>
  );
}

function NicoleCarneiroSite() {
  return (
    <div className="h-[94px] relative shrink-0 w-[534px]" data-name="NICOLE CARNEIRO SITE 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 534 94">
        <g clipPath="url(#clip0_1_331)" id="NICOLE CARNEIRO SITE 2">
          <path d={svgPaths.p3f5666f0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2750ee00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p282e1cc0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1e4bb900} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1c278500} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p17008f00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p9b4b800} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p30663b00} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_331">
            <rect fill="white" height="94" width="534" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[normal] not-italic opacity-0 relative shrink-0 text-[24px] text-black whitespace-nowrap">
      <p className="relative shrink-0">Meus projetos</p>
      <p className="relative shrink-0">Sobre mim</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip pb-[24px] pt-[56px] px-[32px] relative shrink-0 w-[1280px]">
      <Frame />
      <NicoleCarneiroSite />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 text-[#0f0f0f] text-[18px] w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium relative shrink-0 w-full">ES</p>
      <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full">Pinturas al óleo y acrílico sobre lienzo.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium relative shrink-0 w-full">PT</p>
      <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full">Pinturas a óleo e acrílica sobre tela.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium relative shrink-0 w-full">EN</p>
      <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full">Oil and acrylic paintings on canvas.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#817f7f] text-[14px] w-full">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] px-[180px] relative size-full">
        <Frame3 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="aspect-[536.3095703125/285.19378662109375] relative shrink-0 w-full" data-name="2 Prancheta 2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2Prancheta21} />
        </div>
      </div>
      <div className="aspect-[536.3095703125/265.920166015625] relative shrink-0 w-full" data-name="3 Prancheta 14 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3Prancheta141} />
        </div>
      </div>
      <div className="aspect-[536.3095703125/352.5118103027344] relative shrink-0 w-full" data-name="4 Prancheta 13 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img4Prancheta131} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="5 Prancheta 3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img5Prancheta31} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="6 Prancheta 4 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6Prancheta41} />
        </div>
      </div>
      <div className="aspect-[536.3095703125/326.8136291503906] relative shrink-0 w-full" data-name="7 Prancheta 7 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img7Prancheta71} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="8 Prancheta 8 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img8Prancheta81} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="9 Prancheta 6 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img9Prancheta61} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="10 Prancheta 5 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img10Prancheta51} />
        </div>
      </div>
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="11Prancheta 9 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img11Prancheta91} />
        </div>
      </div>
      <div className="aspect-[536.3095703125/253.0710906982422] relative shrink-0 w-full" data-name="12Prancheta 11 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img12Prancheta111} />
        </div>
      </div>
      <div className="aspect-[536/215.2374725341797] relative shrink-0 w-full" data-name="13Prancheta 10 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img13Prancheta101} />
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Project6">
      <Frame9 />
      <div className="aspect-[536.3093872070312/301.6740417480469] relative shrink-0 w-full" data-name="1 Prancheta 1 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1Prancheta12} />
        </div>
      </div>
      <Frame5 />
      <Frame10 />
    </div>
  );
}