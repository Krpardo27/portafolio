import React from "react";
import { Link } from "react-router-dom";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Box, Container } from "@mui/material";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-full bg-pink-100">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="tex-sm uppercase font-semibold mb-4 text-black tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-2">Hola, me llamo Kevin Pardo</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Programador Analista
            </p>
            {/* buttons */}
            <div>
              <Link to={"/contacto"}>
                <Button variant="outlined" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Link>
            </div>
          </div>
          {/* img */}
          <div className="hidden xl:flex relative">image</div>
        </Box>
        {/* icon */}
        <div className="hidden md:flex absolte left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-black" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
