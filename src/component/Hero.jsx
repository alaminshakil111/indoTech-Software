import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


import heroImg from "../assets/images/solution1.jpg"; // choose a hero image

const Hero = () => {
  return (
    <div className="w-full h-[100vh] relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }} >
      {/* Overlay */}
      <div className=" w-full h-full absolute top-0 left-0" />

      {/* Text */}
      <div className="relative flex flex-col items-center  text-center text-white px-6 max-w-[1200px]">
        <h1 className="text-[30px] lg:text-[36px] 2xl:text-[48px] font-bold mb-4 lg:mb-8 drop-shadow-lg">
          Complete ICT solutions, empowering your technology from setup to support.
        </h1>
        <p className="md:text-[24px] drop-shadow-lg mb-8 lg:mb-12">
          We empower your business with smart ICT solutions.
        </p>
        <NavLink to="/solutions/solution-ict" className="w-fit btnGradient flex items-center gap-2 ">
          Learn More <HiOutlineArrowLongRight/>
        </NavLink>
      </div>
    </div>

  );
};

export default Hero;
