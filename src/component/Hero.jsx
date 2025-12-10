import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/images/hero3.jpg"; // choose a hero image

const Hero = () => {
  return (
    <div className="w-full h-[85vh] relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }} >
      {/* Overlay */}
      <div className="bg-black/50 w-full h-full absolute top-0 left-0" />

      {/* Text */}
      <div className="relative text-center text-white px-6 max-w-[1200px]">
        <h1 className="text-[30px] lg:text-[36px] 2xl:text-[48px] font-bold mb-4 lg:mb-8 drop-shadow-lg">
          End-to-end software development support, from design to maintenance.
        </h1>
        <p className="md:text-[24px] drop-shadow-lg mb-8 lg:mb-12">
          We help you grow your business with modern technology.
        </p>
        <NavLink to="/services/service-SoftwareDevelopment" className="w-fit btnGradient">
          Explore Details
        </NavLink>
      </div>
    </div>

  );
};

export default Hero;
