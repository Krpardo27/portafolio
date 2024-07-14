import { createBrowserRouter, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
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
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
