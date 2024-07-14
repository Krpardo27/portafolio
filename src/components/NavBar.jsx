import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex items-center w-full justify-center text-white gap-5">
        <li>
          <Link to="/" spy={true} smooth={true} className="transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to={"/acerca-de-mi"}
            spy={true}
            smooth={true}
            className="transition"
          >
            Acerca de mí
          </Link>
        </li>
        <li>
          <Link
            to={"/experiencia"}
            spy={true}
            smooth={true}
            className="transition"
          >
            Experiencia
          </Link>
        </li>
        <li>
          <Link
            to={"/proyectos"}
            spy={true}
            smooth={true}
            className="transition"
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to={"/sociales"}
            spy={true}
            smooth={true}
            className="transition"
          >
            Sociales
          </Link>
        </li>
        <li>
          <Link to={"contacto"} spy={true} smooth={true} className="transition">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
