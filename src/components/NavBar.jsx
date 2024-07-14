import React from "react";
import { Link } from "react-router-dom";
import { links } from "../data/navlinks";


const NavBar = () => {


  return (
    <nav className="hidden xl:flex gap-x-8 items-center z-50">
      {links.map((link, index) => {
        return <Link key={index} to={link.path}>{link.name}</Link>
      })}
    </nav>
    // <nav className="">
    //   <ul className="flex items-center w-full justify-center text-black gap-5">
    //     <li>
    //       <Link to="/" className="transition">
    //         Inicio
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to={"/acerca-de-mi"} className="transition">
    //         Acerca de mí
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to={"/experiencia"} className="transition">
    //         Experiencia
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to={"/proyectos"} className="transition">
    //         Proyectos
    //       </Link>
    //     </li>

    //     <li>
    //       <Link to={"contacto"} className="transition">
    //         Contacto
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
