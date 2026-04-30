import "./home-page.css";
import max from "../../assets/max-lado-lago.png";
import pé from "../../assets/pe-de-eugenia.png";
import pet from "../../assets/my-friends-pet.png";
import never from "../../assets/never-let-me-go.png";
import pinturas from "../../assets/pinturas-al-óleo-y-acrílicas.png";
import pastel from "../../assets/pastel-al-óleo.png";
import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />
      <div className="gallery">
        <Link to="/project1" className="item" >
          <img src={max} alt="Max e o Lado de Lá do Lago" />
          <div className="text">
            <span className="caption">Max e o Lado de Lá do Lago</span>
            <span className="subcaption">Álbum ilustrado</span>
          </div>
        </Link >
        <Link to="/project2" className="item">
          <img src={pé} alt="Pé de Eugênia" />
          <div className="text">
            <span className="caption">Pé de Eugênia</span>
            <span className="subcaption">Mural</span>
          </div>
        </Link >
        <Link to="/project3" className="item">
          <img src={pet} alt="My Friends Pets" />
          <div className="text">
            <span className="caption">My Friends Pets</span>
            <span className="subcaption">Diseño de packaging</span>
          </div>
        </Link >
        <Link to="/project4" className="item">
          <img src={never} alt="Never let me go" />
          <div className="text">
            <span className="caption">Never let me go</span>
            <span className="subcaption">Serigrafia experimental</span>
          </div>
        </Link >
        <Link to="/project5" className="item">
          <img src={pastel} alt="Pinturas al óleo y acrílicas" />
          <div className="text">
            <span className="caption">Pinturas al óleo y acrílicas</span>
          </div>
        </Link >
        <Link to="/project6" className="item">
          <img src={pinturas} alt="Pastel al óleo" />
          <div className="text">
            <span className="caption">Pastel al óleo</span>
            <span className="subcaption">Proyectos personales</span>
          </div>
        </Link >
      </div>
    </>
  );
}