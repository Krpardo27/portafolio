import React, { useState } from "react";
// icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-pretty xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-4xl absolute z-10 right-4 top-5 text-pretty cursor-pointer"
      >
        <CgMenuRight className="text-black" />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icons */}
        <div onClick={() => setOpenMenu(false)} className="">
          <IoMdClose className="text-4xl absolute z-30 right-4 top-5 text-pretty cursor-pointer" />
        </div>
        {/* menu list */}
        <ul className="flex flex-col items-center w-full justify-center text-black gap-y-5 h-full  font-semibold text-xl">
          <li>
            <Link to="/" className="transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/acerca-de-mi"} className="transition">
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link to={"/experiencia"} className="transition">
              Experiencia
            </Link>
          </li>
          <li>
            <Link to={"/proyectos"} className="transition">
              Proyectos
            </Link>
          </li>

          <li>
            <Link to={"contacto"} className="transition">
              Contacto
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
