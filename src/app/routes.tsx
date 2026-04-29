import { createHashRouter } from "react-router-dom";
import { AppLayout } from "./components/Layout";
import Homepage from "./pages/Homepage";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import SobreMi from "./pages/SobreMi";

export const router = createHashRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "project/1", Component: Project1 },
      { path: "project/2", Component: Project2 },
      { path: "project/3", Component: Project3 },
      { path: "project/4", Component: Project4 },
      { path: "project/5", Component: Project5 },
      { path: "project/6", Component: Project6 },
      { path: "sobre-mi", Component: SobreMi },
    ],
  },
]);
