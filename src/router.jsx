import { createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/acerca-de-mi",
        element: <AboutMe />,
      },
      {
        path: "/experiencia",
        element: <Experience />,
      },
      {
        path: "/proyectos",
        element: <Projects />,
      },
      {
        path: "/sociales",
        element: <Socials />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
