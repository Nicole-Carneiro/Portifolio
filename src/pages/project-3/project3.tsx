import "./project3.css";
import img1 from "../../assets/project3/img1.png";
import im2 from "../../assets/project3/img2.png";
import im3 from "../../assets/project3/img3.png";
import im4 from "../../assets/project3/img4.png";
import im5 from "../../assets/project3/img5.png";
import im6 from "../../assets/project3/img6.png";
import im9 from "../../assets/project3/img9.png";
import Header from "../../components/Header/header";
import { ScrollToTopButton } from "../../components/Scroll/scroll-to-top";


export default function Home() {
    return (
        <>
            <Header />
            <div className="project-3">
                <div className="complete-image">
                    <img className="full-image" src={img1} alt="My friends pet cosmetics" />
                    <img className="full-image" src={im2} />
                </div>
                <div className="second-row-different">
                    <div className="book-text-no-padding">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                <strong>My Friends Pets</strong> es una marca que combina la calidad de sus productos naturales con la ligereza y el espíritu alegre de la vida con mascotas. Las ilustraciones, de carácter lúdico, transmiten cercanía y frescura, sin dejar de lado el respaldo clínico de productos enfocados en la salud y el bienestar animal. La línea incluye productos cosméticos y alimenticios, y su sistema visual permite la expansión de un catálogo en crecimiento.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                <strong>My Friends Pets</strong> é uma marca que representa a união da qualidade de seus produtos naturais e a leveza da vida pet. As ilustrações de caráter lúdico buscam evocar a descontração
                                <br />
                                da marca, sem deixar de lado a garantia clínica de produtos que priorizam a saúde e bem-estar animal. A linha
                                é composta por produtos cosméticos e alimentícios, e a composição
                                <br />
                                de elementos visuais permite o crescimento de seu catálogo em expansão.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                <strong>My Friends Pets</strong>  is a brand that unites the quality of its natural products with the lighthearted spirit of pet life. It’s playful illustrations help conveya sense of ease and approachability, while still reinforcing the clinical reliability of products designed to prioritize animal health and well-being.The product line includes both cosmetic and food items, and the composition of the visual elements was designed to support an expanding catalog.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="complete-image">
                    <img className="expanded-image" src={im3}></img>
                    <img className="expanded-image" src={im4}></img>
                    <img className="expanded-image" src={im5}></img>
                    <img className="expanded-image" src={im6}></img>
                    <img className="expanded-image" src={im9}></img>
                </div>
                <div className="identidade-visual">
                    <span className="component-title">Diseño de Packaging | Identidad Visual | Ilustración</span>
                    <div className="section section-pt">
                        <span className="lang-label pt">ES</span>
                        <p>
                            *Proyecto realizado durante mi etapa en Obah Design.
                        </p>
                    </div>
                    <div className="section section-pt">
                        <span className="lang-label pt">PT</span>
                        <p>
                            *Projeto realizado durante minha atuação na Obah Design.
                        </p>
                    </div>
                    <div className="section section-en">
                        <span className="lang-label en">EN</span>
                        <p>
                            *Project developed during my time at Obah Design.
                        </p>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </>
    );
}