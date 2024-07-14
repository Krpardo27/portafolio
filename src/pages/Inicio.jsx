import React from "react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "../components/Hero";
import { Container } from "@mui/material";

const Inicio = () => {
  return (
   
      <section className="section">
        <Hero />
        {/* <AboutMe /> */}
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </section>
  
  );
};

export default Inicio;
