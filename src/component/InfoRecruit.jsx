import React from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// import from local

import infoBg from '../assets/images/infoBg.jpg';
import recruit from '../assets/images/recruit.jpg';


const InfoRecruit = () => {

    return (
        <section className="bg-[#E6F2FB] py-12"> {/* page light blue */}
            <div className=" containerCustom mx-auto px-4 py-10 lg:py-[75px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Left Card */}
                <div className="relative overflow-hidden rounded-xl shadow-md ">
                    <img
                    src={infoBg}
                    alt="Company buildings"
                    className="w-full h-auto object-cover"
                    
                    />

                    {/* dark gradient bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-[rgba(0,0,0,0.85)] to-[rgba(8,78,147,0.35)] flex items-end justify-end">
                        <NavLink to="/companyProfile" className="w-fit btnBorder bg-[#4992C1]/60! flex px-6! py-4! items-center gap-2  ">
                            Company Information Is Here <HiOutlineArrowLongRight/>
                        </NavLink>
                    </div>
                </div>

                {/* Right Card */}
                <div className="relative overflow-hidden rounded-xl shadow-md  bg-white">
                    <img
                    src={recruit}
                    alt="Recruit graphic"
                    className="w-full h-auto object-cover"
                    
                    />

                    {/* pill buttons bottom-left */}
                    <div className="absolute left-4 bottom-5 flex flex-wrap gap-3">
                    <NavLink to="/recruitment" className="w-fit btnGradient  flex  items-center gap-2  ">
                            Recruitment <HiOutlineArrowLongRight/>
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default InfoRecruit;