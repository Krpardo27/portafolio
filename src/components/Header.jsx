import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="h-[80px] bg-black w-full fixed z-30 flex items-center">
      <div className="flex flex-col lg:flex-row lg:h-[80px] lg:items-center w-full justify-between">
        {/* Logo */}
        <Link className="flex items-center">
          <img src="" alt="logo" className="w-[80px]" />
          <h1 className="text-white text-2xl text-bold">Kevin Dev</h1>
        </Link>
        {/* nav init hidden - show on desktop */}
        <div className="hidden lg:flex gap-x-12 font-semibold">
          <NavBar />
        </div>
        <div className="">Sociales</div>
      </div>
    </header>
  );
};

export default Header;
