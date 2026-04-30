import "./project4.css";
import img1 from "../../assets/project4/img1.jpg";
import im2 from "../../assets/project4/img2.jpg";
import im3 from "../../assets/project4/img3.jpg";
import im4 from "../../assets/project4/img4.jpg";
import im5 from "../../assets/project4/img5.jpg";
import im6 from "../../assets/project4/img6.jpg";
import im7 from "../../assets/project4/img7.jpg";
import im8 from "../../assets/project4/img8.jpg";
import im9 from "../../assets/project4/img9.jpg";
import Header from "../../components/Header/header";
import { ScrollToTopButton } from "../../components/Scroll/scroll-to-top";


export default function Home() {
    return (
        <>
            <Header />
            <div className="project-3">
                <img className="full-image" src={img1} alt="Never let me go" />
                <div className="second-row-small">
                    <div className="book-text-no-padding">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                Este es un proyecto experimental de carácter libre desarrollado en el taller de Serigrafía – Métodos Alternativos, <br /> de la Escuela Guignard (UEMG). El proceso se inició con dibujos manuales en grafito sobre papel transparente,  <br />seguidos por la grabación de la pantalla en mesa de luz. Se exploraron mezclas de pigmentos, transparencias <br /> y impresión sobre distintas superficies.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Projeto experimental livre desenvolvido no Ateliê de Serigrafia - Métodos Alternativos, da Escola Guignard, UEMG.
                                O processo teve início <br /> com desenho manual em grafite em papel transparente, em seguida foi feita a gravação da tela na mesa de luz. Foram exploradas <br /> misturas de pigmentos, de transparências e impressões em diferentes superfícies.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                This is an open-ended experimental project developed in the Alternative Screen Printing Methods studio at Guignard School (UEMG). <br />
                                The process starded with hand-drawn graphite illustrations on transparent paper, followed by screen exposure using a light table. <br /> The project explored pigment mixing, transparency, and printing on a variety of surfaces.
                            </p>
                        </div>
                    </div>
                </div>
                <img className="expanded-image" src={im2}></img>
                <div className="machine">
                    <div className="book-text-no-padding">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                En tipografía  hecha a mano, la letra de la canción “Never Let Me Go”, de la banda Florence and the Machine, compone la pieza.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Em tipografia manual, a letra da música “Never Let Me Go”, da banda Florence and The Machine, compõe a peça.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                The lyrics from the song “Never Let Me Go” by Florence and the Machine are incorporated into the piece, in hand-drawn typography.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="complete-image">
                    <img className="expanded-image" src={im6}></img>
                    <img className="expanded-image" src={im3}></img>
                    <img className="expanded-image" src={im4}></img>
                    <img className="expanded-image" src={im5}></img>
                    <img className="expanded-image" src={im7}></img>
                    <img className="expanded-image" src={im8}></img>
                    <img className="expanded-image" src={im9}></img>
                </div>

            </div>
            <ScrollToTopButton />
        </>
    );
}