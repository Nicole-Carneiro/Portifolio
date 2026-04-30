import "./project6.css";

import img1 from "../../assets/project6/img1.png";
import im2 from "../../assets/project6/img2.png";
import im3 from "../../assets/project6/img3.png";
import im4 from "../../assets/project6/img4.png";
import im5 from "../../assets/project6/img5.png";
import im6 from "../../assets/project6/img6.png";
import im7 from "../../assets/project6/img7.png";
import im8 from "../../assets/project6/img8.png";
import im9 from "../../assets/project6/img9.png";
import im10 from "../../assets/project6/img10.png";
import im11 from "../../assets/project6/img11.png";
import im12 from "../../assets/project6/img12.png";
import im13 from "../../assets/project6/img13.png";

import Header from "../../components/Header/header";


export default function Home() {
    return (
        <>
            <Header />
            <div className="project-6">
                <img className="full-image" src={img1} alt="Pastel al óleo" />
                <div className="second-row">
                    <div className="book-text ">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                Este es un proyecto experimental de carácter libre desarrollado en el taller de Serigrafía – Métodos Alternativos, de la Escuela Guignard (UEMG). El proceso se inició con dibujos manuales en grafito sobre papel transparente, seguidos por la grabación de la pantalla en mesa de luz. Se exploraron mezclas de pigmentos, transparenciasy impresión sobre distintas superficies.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Projeto experimental livre desenvolvido no Ateliê de Serigrafia - Métodos Alternativos, da Escola Guignard, UEMG.
                                O processo teve iníciocom desenho manual em grafite em papel transparente, em seguida foi feita a gravação da tela na mesa de luz. Foram exploradas misturas de pigmentos, de transparências e impressões em diferentes superfícies.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                This is an open-ended experimental project developed in the Alternative Screen Printing Methods studio at Guignard School (UEMG).
                                The process starded with hand-drawn graphite illustrations on transparent paper, followed by screen exposure using a light table. The project explored pigment mixing, transparency, and printing on a variety of surfaces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="complete-image">
                    <img className="expanded-image" src={im2}></img>
                    <img className="expanded-image" src={im3}></img>
                    <img className="expanded-image" src={im4}></img>
                    <img className="expanded-image" src={im5}></img>
                    <img className="expanded-image" src={im6}></img>
                    <img className="expanded-image" src={im7}></img>
                    <img className="expanded-image" src={im8}></img>
                    <img className="expanded-image" src={im9}></img>
                    <img className="expanded-image" src={im10}></img>
                    <img className="expanded-image" src={im11}></img>
                    <img className="expanded-image" src={im12}></img>
                    <img className="expanded-image" src={im13}></img>
                </div>

            </div>
        </>
    );
}