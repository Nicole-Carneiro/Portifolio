import { createHashRouter } from "react-router-dom";
import Home from "../pages/home-page/home-page";
import Project1 from "../pages/project-1/project1";
import Project2 from "../pages/project-2/project2";
import Project3 from "../pages/project-3/project3";
import Project4 from "../pages/project-4/project4";
import Project5 from "../pages/project-5/project5";
import Project6 from "../pages/project-6/project6";
import Sobre from "../pages/sobre/sobre";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project1",
    Component: Project1,
  },
  {
    path: "/project2",
    Component: Project2,
  },
  {
    path: "/project3",
    Component: Project3,
  },
  {
    path: "/project4",
    Component: Project4,
  },
  {
    path: "/project5",
    Component: Project5,
  },
  {
    path: "/project6",
    Component: Project6,
  },
  {
    path: "/sobre",
    Component: Sobre,
  },
]);