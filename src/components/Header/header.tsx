import logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <Link to="/" className="link">
                    <h1 className="proyectos">proyectos</h1>
                </Link>
                <Link to="/sobre" className="link" >
                    <h2 className="sobre-link">sobre mí</h2> </Link>
            </div>
            <Link to="/">
                <img className="logo" src={logo} />
            </Link>
        </header>
    );
}