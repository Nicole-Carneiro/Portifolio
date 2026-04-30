import "./project5.css";
import img1 from "../../assets/project5/img1.png";
import im2 from "../../assets/project5/img2.png";
import im3 from "../../assets/project5/img3.png";
import im4 from "../../assets/project5/img4.png";
import im5 from "../../assets/project5/img5.png";
import im6 from "../../assets/project5/img6.png";
import im7 from "../../assets/project5/img7.png";
import im8 from "../../assets/project5/img8.png";
import im9 from "../../assets/project5/img9.png";
import im10 from "../../assets/project5/img10.png";
import im11 from "../../assets/project5/img11.png";
import im12 from "../../assets/project5/img12.png";
import im13 from "../../assets/project5/img13.png";

import Header from "../../components/Header/header";


export default function Home() {
    return (
        <>
            <Header />
            <div className="project-5">
                <img className="full-image" src={img1} alt="Pinturas al óleo y acrílicas  " />
                <div className="second-row">
                    <div className="book-text-no-padding">
                        <div className="section section-es-white">
                            <span className="lang-label-white">ES</span>
                            <p>
                                Esta selección de proyectos personales explora, ante todo, la versatilidad del pastel al óleo. Las piezas <br /> investigan la creación de texturas complejas mediante el uso de técnicas mixtas, buscando soluciones <br /> visuales a través de la combinación de materiales como ceras, acrílicos, gouache y lápices de colores.
                            </p>
                        </div>
                        <div className="section section-pt-white">
                            <span className="lang-label-white pt">PT</span>
                            <p>
                                Essa seleção de projetos pessoais explora, principalmente, a versatilidade do giz pastel oleoso. As peças investigam também a criação <br /> de diferentes texturas por meio do mix de mídias, buscando diferentes soluções visuais e técnicas através da mescla giz de cera, giz  <br />  oleoso, tinta acrílica, tinta gouache e lápis de cor.
                            </p>
                        </div>
                        <div className="section section-en-white">
                            <span className="lang-label-white en">EN</span>
                            <p>
                                This curated selection of personal projects centers on the versatility of oil pastels. These pieces explore the creation of different textures <br /> through mixed media experimentation: blending crayons, acrylics, gouache, and colored pencils to discover unique visual and technical <br /> solutions.
                            </p>
                        </div>
                    </div>
                </div>
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
        </>
    );
}