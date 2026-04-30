import "./sobre.css";

import img1 from "../../assets/sobre.png";


import Header from "../../components/Header/header";


export default function Home() {
    return (
        <>
            <Header />
            <div className="sobre">
                <img src={img1} alt="Sobre mí" />

                <div className="book-text ">
                    <div className="section section-es">
                        <span className="lang-label">ES</span>
                        <p>
                            Hola :)<br />
                            Mi nombre es Nicole Carneiro, soy diseñadora gráfica, ilustradora y artista <br />
                            brasileña.<br />
                            Me gradué en Diseño Gráfico por la Universidade do Estado de Minas Gerais <br />
                            (UEMG),<br />
                            Brasil, en 2025. A través de mi curiosidad y mi pasión por la creatividad, construyo<br />
                            y cuento historias. Creo en la sensibilidad del trabajo hecho a mano y busco <br />
                            explorar <br />
                            distintos materiales y formas de integrar el arte, el diseño y las personas.
                        </p>
                    </div>
                    <div className="section section-pt">
                        <span className="lang-label pt">PT</span>
                        <p>
                            Oi :)<br />
                            Meu nome é Nicole Carneiro, sou designer gráfica, ilustradora e artista brasileira. Me formei em Design<br />
                            Gráfico<br />
                            pela Universidade do Estado de Minas Gerais (UEMG), Brasil, em 2025. Por meio da minha curiosidade e<br />
                            paixão<br />
                            pela criatividade, construo e conto histórias. Acredito na sensibilidade do trabalho feito à mão e busco<br />
                            explorar diferentes materiais e meios de integrar as artes, o design e as pessoas.
                        </p>
                    </div>
                    <div className="section section-en">
                        <span className="lang-label en">EN</span>
                        <p>
                            Hi :)<br />
                            My name is Nicole Carneiro. I’m a Brazilian graphic designer, illustrator and artist, and I graduated in <br />
                            Graphic<br />
                            Design from the Universidade do Estado de Minas Gerais (UEMG), Brazil, in 2025. Guided by curiosity and<br />
                            a passion for creativity, I create and tell stories through images. I value the sensitivity of hand-made work<br />
                            and enjoy exploring different materials and processes as a way to connect art, design and people.
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}