import React from "react";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <section className="section h-full relative px-10 container mx-auto w-full">
      <div className="flex flex-col justify-center w-full items-center h-full ">
        {/* text */}
        <div className="w-full pt-36 lb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1 text-center">
            Desarrollador Web <br /> & Programador Analista
          </h1>
          <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">
            Santiago de Chile
          </p>
          <Link to={"/contacto"} className="btn mb-30">
            Contáctame!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
