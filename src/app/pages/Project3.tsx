import { Header } from "../components/Header";
import imgMtsPosters21 from "../../imports/Project3/7ed970ffbaaee7e01784995b77bbd1df05b96291.png";
import imgPilhaPapeis1 from "../../imports/Project3/a3a7e14dae7f339dd67df88a5ec9c94dff0309ea.png";
import imgVector from "../../imports/Project3/72441e19fca743db7502d8a8c73de6d530e39a08.png";

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header />
      <div className="aspect-[1280/735] relative shrink-0 w-full" data-name="mts posters 2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.77%] left-0 max-w-none top-[-10.88%] w-full" src={imgMtsPosters21} />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative rounded-[16px] shrink-0 text-[#0f0f0f] text-[18px] w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium min-w-full relative shrink-0 w-[min-content]">ES</p>
      <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal relative shrink-0 w-[941px]">
        Este es un proyecto experimental de carácter libre desarrollado en el taller de Serigrafía – Métodos Alternativos, de la Escuela Guignard (UEMG). El proceso se inició con dibujos manuales en grafito sobre papel transparente, seguidos por la grabación de la pantalla en mesa de luz. Se exploraron mezclas de pigmentos, transparencias
        <br aria-hidden="true" />y impresión sobre distintas superficies.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium relative shrink-0 w-full">PT</p>
      <p className="font-['Rethink_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full">
        Projeto experimental livre desenvolvido no Ateliê de Serigrafia - Métodos Alternativos, da Escola Guignard, UEMG. O processo teve início
        <br aria-hidden="true" />
        com desenho manual em grafite em papel transparente, em seguida foi feita a gravação da tela na mesa de luz. Foram exploradas
        <br aria-hidden="true" />
        misturas de pigmentos, de transparências e impressões em diferentes superfícies.
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 w-full">EN</p>
      <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal] mb-0">This is an open-ended experimental project developed in the Alternative Screen Printing Methods studio at Guignard School (UEMG).</p>
        <p className="leading-[normal]">
          The process starded with hand-drawn graphite illustrations on transparent paper, followed by screen exposure using a light table.
          <br aria-hidden="true" />
          The project explored pigment mixing, transparency, and printing on a variety of surfaces.
        </p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#817f7f] text-[14px] w-full">
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[180px] relative size-full">
        <Frame4 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 text-[#0f0f0f] text-[18px] w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium min-w-full relative shrink-0 w-[min-content]">ES</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 w-[1019px] whitespace-pre-wrap">{`En tipografía  hecha a mano, la letra de la canción “Never Let Me Go”, de la banda Florence and the Machine, compone la pieza.`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 w-full">PT</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 w-full">Em tipografia manual, a letra da música “Never Let Me Go”, da banda Florence and The Machine, compõe a peça.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[16px] shrink-0 w-full">
      <p className="font-['Outfit:Medium',sans-serif] font-medium relative shrink-0 w-full">EN</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal relative shrink-0 w-full">The lyrics from the song “Never Let Me Go” by Florence and the Machine are incorporated into the piece, in hand-drawn typography.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#817f7f] text-[14px] w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] px-[180px] relative size-full">
        <Frame9 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

export default function Project3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative size-full overflow-hidden" data-name="Project3">
      <Frame12 />
      <Frame2 />
      <div className="aspect-[392/263.4474182128906] relative shrink-0 w-full" data-name="PILHA PAPÉIS 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPilhaPapeis1} />
        </div>
      </div>
      <Frame14 />
      <div className="h-[5742.875px] relative shrink-0 w-[1280px]" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="5742.875" src={imgVector} width="1280" />
      </div>
    </div>
  );
}
