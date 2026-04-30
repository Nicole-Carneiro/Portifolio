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
                    <div className="book-text-no-padding">
                        <div className="section section-es">
                            <span className="lang-label">ES</span>
                            <p>
                                Pinturas al óleo y acrílico sobre lienzo.
                            </p>
                        </div>
                        <div className="section section-pt">
                            <span className="lang-label pt">PT</span>
                            <p>
                                Pinturas a óleo e acrílica sobre tela.
                            </p>
                        </div>
                        <div className="section section-en">
                            <span className="lang-label en">EN</span>
                            <p>
                                Oil and acrylic paintings on canvas.
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