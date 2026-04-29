import { Link } from "react-router";
import { Header } from "../components/Header";
import imgMtsPosters22 from "../../imports/Homepage/7ed970ffbaaee7e01784995b77bbd1df05b96291.png";
import imgWhatsAppImage20260424At20164832 from "../../imports/Homepage/2bb5067d99a0f986076545f408caf607b0178323.png";
import imgLivrosEmpilhadosFundoVerde2 from "../../imports/Homepage/52d33d6f24afee6606ac3c10ee7f9a71f6a9d930.png";
import imgCapa22 from "../../imports/Homepage/eefb9feacdec6845adb9810014d980da0e4b855d.png";
import img1Prancheta12 from "../../imports/Homepage/d52aab16f5060b842d2884e3ca5cd38b41781c83.png";
import imgD31 from "../../imports/Homepage/4b9558feb51bdf0e3bcf1421f868440cdb041fc3.png";

const PROJECTS = [
  {
    id: "project-2",
    title: "Max e o Lado de Lá do Lago",
    subtitle: "Álbum ilustrado",
    image: imgLivrosEmpilhadosFundoVerde2,
    link: "/project/2",
  },
  {
    id: "project-1",
    title: "Pé de Eugênia",
    subtitle: "Mural",
    image: imgWhatsAppImage20260424At20164832,
    link: "/project/1",
  },
  {
    id: "project-4",
    title: "My Friends Pets",
    subtitle: "Diseño de packaging",
    image: imgCapa22,
    link: "/project/4",
  },
  {
    id: "project-3",
    title: "Never let me go",
    subtitle: "Serigrafia experimental",
    image: imgMtsPosters22,
    link: "/project/3",
  },
  {
    id: "project-6",
    title: "Pinturas al óleo y acrílicas",
    subtitle: " ",
    image: img1Prancheta12,
    link: "/project/6",
  },
  {
    id: "project-5",
    title: "Pastel al óleo",
    subtitle: "Proyectos personales",
    image: imgD31,
    link: "/project/5",
  }
];

export default function Homepage() {
  return (
    <div className="bg-white flex flex-col w-full relative" data-name="Homepage">
      <Header />
      <div className="grid grid-cols-2 w-full mt-[-24px]">
        {PROJECTS.map((project) => (
          <Link to={project.link} key={project.id} className="relative group overflow-hidden block aspect-[640/400]">
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="font-['Rethink_Sans:Bold',sans-serif] font-bold text-[28px] tracking-[1.12px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h2>
              {project.subtitle && <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[20px] mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.subtitle}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
