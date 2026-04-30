import "./project1.css";
import max from "../../assets/project1/max.png";
import bg from "../../assets/project1/Frame 8.png";
import im2 from "../../assets/project1/img2.png";
import im3 from "../../assets/project1/im3.png";
import im4 from "../../assets/project1/img4.png";
import im5 from "../../assets/project1/img5.png";
import im6 from "../../assets/project1/img6.png";
import im7 from "../../assets/project1/img7.png";
import im8 from "../../assets/project1/img8.png";
import im9 from "../../assets/project1/img9.png";
import im10 from "../../assets/project1/im10.png";
import im11 from "../../assets/project1/im11.png";
import im12 from "../../assets/project1/img12.png";
import im13 from "../../assets/project1/im13.png";
import im14 from "../../assets/project1/im14.png";
import im15 from "../../assets/project1/im15.png";
import im16 from "../../assets/project1/im16.png";

import Header from "../../components/Header/header";



export default function Home() {
    return (
        <>
            <Header />
            <div className="project-1">
                <img className="full-image" src={max} alt="Max e o Lado de Lá do Lago" />
                <div
                    className="book-container"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className="book-text-no-padding">
                        <div className="section section-es-small">
                            <span className="lang-label">ES</span>
                            <p className="first-paragraph">
                                El álbum ilustrado <strong>Max e o Lado de Lá do Lago</strong> (Max y El Otro Lado
                                del Lago) tiene su origen como Trabajo <br />de Fin de Grado en Diseño Gráfico. Nace del
                                deseo de recuperar recuerdos de una infancia en el interior<br /> de Minas Gerais, Brasil:
                                pasando días descalzos, cogiendo frutas de los árboles.
                            </p>
                            <p>
                                La historia sigue a Max durante un día de aventuras en el patio de su casa e invita
                                al lector a sumergirse <br /> en la magia y la imaginación de lo cotidiano, que tantas veces
                                pasan desapercibidas.
                            </p>
                        </div>
                        <div className="section section-pt-small">
                            <span className="lang-label pt">PT</span>
                            <p>
                                O álbum ilustrado <strong>Max e o Lado de Lá do Lago</strong> é fruto de um
                                Trabalho de Conclusão de Curso em Design Gráfico <br />. Nasceu do desejo de resgatar
                                memórias de uma infância no interior de Minas Gerais, Brasil – de pés descalços <br />
                                e de fruta no pé. A história acompanha Max em um dia de aventuras no quintal de
                                casa, e convida o leitor <br /> a mergulhar na magia e inventividade do dia a dia que
                                são muitas vezes esquecidas.
                            </p>
                        </div>
                        <div className="section section-en-small">
                            <span className="lang-label en">EN</span>
                            <p>
                                <strong>Max e o Lado de Lá do Lago</strong> (Max and the Far Side of the Lake)
                                is a picture book created as the final project <br /> for a Graphic Design degree. It was
                                inspired by a desire to reconnect with childhood memories from the <br /> countryside of
                                Minas Gerais, Brazil: of days spent barefoot, picking fruit straight from the trees <br />.
                                The story follows Max through a day of backyard adventures, inviting readers to dive
                                in the magic <br /> and the sense of wonder and imagination found in everyday moments, so
                                often overlooked.
                            </p>
                        </div>

                    </div>
                </div >
                <img className="expanded-image" src={im2}></img>
                <img className="expanded-image" src={im3}></img>
                <img className="expanded-image" src={im4}></img>
                <img className="expanded-image" src={im5}></img>
                <img className="expanded-image" src={im6}></img>
                <img className="expanded-image" src={im7}></img>
                <div className="second-row-max">
                    <div className="book-text-no-padding">
                        <div className="section section-es-small">
                            <span className="lang-label">ES</span>
                            <p>
                                Todas las ilustraciones de este proyecto fueron realizadas a mano, utilizando pintura gouache, pastel al óleo y lápices de colores.
                            </p>
                        </div>
                        <div className="section section-pt-small">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Todas as ilustrações desse projeto foram feitas à mão, utilizando tinta guache, giz pastel oleoso e lápis de cor.
                            </p>
                        </div>
                        <div className="section section-en-small">
                            <span className="lang-label en">EN</span>
                            <p>
                                All the illustrations in this project were created by hand, using gouache paint, oil pastels, and colored pencils.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="section2-container"
                    style={{ backgroundImage: `url(${im8})` }}
                >
                    <div className="section2-text">

                        <div className="section section-es-small">
                            <span className="lang-label">ES</span>
                            <p>
                                Mis vivencias se reflejan en cada rincón de este proyecto. Muchos de los <br />
                                elementos del libro , de los escenarios y de la narrativa, están inspirados <br />
                                en la casa de mi abuela, y el diseño de personajes se construye a partir <br />
                                de referencias de miembros de mi familia.
                            </p>
                        </div>

                        <div className="section section-pt-small">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Minhas vivências estão refletidas em cada esquina desse projeto. Diversos
                                elementos do livro <br />, do cenário e da narrativa, foram inspirados na casa da
                                minha avó, e o design de personagens <br /> foi desenvolvido a partir de referências
                                de membros da minha família.
                            </p>
                        </div>

                        <div className="section section-en-small">
                            <span className="lang-label en">EN</span>
                            <p>
                                My personal experiences are reflected in every corner of this project. Many
                                elements of the book <br />, from the settings to the narrative, are inspired by my
                                grandmother's house, and the character <br /> design draws from members of my own family.
                            </p>
                        </div>

                    </div>
                </div>
                <img className="expanded-image" src={im9}></img>
                <div className="complete-image">
                    <img src={im10}></img>
                    <img src={im11}></img>
                    <img src={im12}></img>
                    <img src={im13}></img>
                    <img src={im14}></img>
                    <img src={im15}></img>

                    <img src={im16}></img>

                </div>
                <div className='last-div'>
                    <p>Ilustración | Diseño Gráfico | Diseño Editorial | Diseño de Personajes</p>
                </div>
            </div >
        </>
    );
}