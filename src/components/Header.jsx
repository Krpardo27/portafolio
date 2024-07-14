import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import Socials from "./Socials";
import { Box, Container } from "@mui/material";

const Header = () => {
  return (
    <header className="p-4">
      <Container>
        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          Logo
        </div>
        <div className="flex items-center gap-x-6">
          {/* nav */}
          <NavBar />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
        </Box>
        
      </Container>
    </header>
    // <header className="h-[80px] w-full fixed z-30 px-[30px] flex items-center lg:px-[100px] shadow-lg ">
    //   <div className="flex flex-col lg:flex-row lg:h-[80px] lg:items-center w-full justify-between">
    //     {/* Logo */}
    //     <Link className="flex items-center max-w-[200px]">
    //       <img src="" alt="logo" className="w-[80px]" />
    //       <h1 className="text-white text-2xl text-bold">Kevin Dev</h1>
    //     </Link>
    //     {/* nav init hidden - show on desktop */}
    //     <div className="hidden xl:flex gap-x-12 font-semibold">
    //       <NavBar />
    //     </div>
    //     <div className="hidden xl:flex">
    //       <Socials />
    //     </div>
    //   </div>
    //   <MobileNav />
    // </header>
  );
};

export default Header;
