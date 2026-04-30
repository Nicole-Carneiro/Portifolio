import "./project2.css";
import img1 from "../../assets/project2/img1.png";
import im2 from "../../assets/project2/img2.jpeg";
import im3 from "../../assets/project2/img3.jpeg";
import im4 from "../../assets/project2/img4.jpeg";
import im5 from "../../assets/project2/img5.jpeg";
import im6 from "../../assets/project2/img6.jpeg";
import im7 from "../../assets/project2/img7.jpeg";
import im8 from "../../assets/project2/img8.jpeg";
import im9 from "../../assets/project2/img9.jpeg";
import im10 from "../../assets/project2/img10.jpeg";
import im11 from "../../assets/project2/img11.png";
import im12 from "../../assets/project2/mural.jpeg";
import im13 from "../../assets/project2/img13.jpeg";
import im14 from "../../assets/project2/img14.png";
import im15 from "../../assets/project2/img15.jpeg";
import im16 from "../../assets/project2/img16.png";
import Header from "../../components/Header/header";
import { useState } from "react";
import { ScrollToTopButton } from "../../components/Scroll/scroll-to-top";

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="project-2">
                <img className="full-image" src={img1} alt="Pé de Eugênias" />
                <div className="second-row">
                    <div className="book-text-no-padding">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                El mural <strong>Pé de Eugênia</strong> fue creado para llevar arte y color a Ponte Nova, Minas Gerais. La idea surgió del deseo de incorporar un elemento emblemático de la ciudad: los encantadores árboles de jambo (conocidas en mi ciudad como eugênias) que crecen en las casas de las abuelas, en los patios de las escuelas y ahora también en las paredes del shopping Boulevard Colina.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                O mural <strong>Pé de Eugênia</strong> foi criado para levar arte e cor à  Ponte Nova, Minas Gerais. A ideia nasceu da busca por trazer um elemento significativo da cidade: as encantadoras árvores de eugênia (ou de jambo :) que crescem nas casas das avós, nos pátios das escolas e agora também nas paredes do shopping Boulevard Colina.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                The mural <strong>Pé de Eugênia</strong> was created to bring art and colour to the city Ponte Nova, Minas Gerais, Brazil. The idea emerged from a search to incorporate a meaningful element
                                <br />
                                of
                                the city: the captivating eugenia trees (mostly known as jambo trees) that grow in grandmothers’ homes, schoolyards, and now also on the walls of Boulevard Colina shopping center.
                            </p>
                        </div>
                    </div>
                </div>
                <img className="expanded-image" src={im2}></img>
                <div className="split-image">
                    <img className="expanded-image" src={im3}></img>
                    <img className="expanded-image" src={im4}></img>
                    <img className="expanded-image" src={im5}></img>
                    <img className="expanded-image" src={im6}></img>
                </div>
                <img className="expanded-image" src={im7}></img>
                <img className="expanded-image" src={im8}></img>
                <img className="expanded-image" src={im9}></img>
                <img className="expanded-image" src={im10}></img>
                <div className="three-image">
                    <img className="lateral-image" src={im11}></img>
                    <img className="center-image" src={im12}></img>
                    <img className="lateral-image" src={im13}></img>
                </div>
                <img className="expanded-image" src={im14}></img>
                <div className="container" onClick={() => setOpen(true)}>
                    {!open && (
                        <>
                            <img className="img15" src={im15} />
                            <div className="overlay"></div>
                            <div className="playIcon">
                                ▶
                            </div>
                            <img className="img16" src={im16} />
                        </>
                    )}
                    {open && (
                        <iframe
                            src="https://drive.google.com/file/d/15fcQGgqVt7FA2-qtr8mXG060d2XG5G8h/preview"
                            width="100%"
                            height="500"
                            allow="autoplay"
                        />
                    )}
                </div>
            </div>
            <ScrollToTopButton />
        </>
    );
}