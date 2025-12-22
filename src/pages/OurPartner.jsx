import React from "react";
import { BiArrowToBottom } from "react-icons/bi";

// import from local
import { ourPartnerData } from "../Data/OurPartnerData";

import ourPartner from '../assets/images/ourPartner/OurtPartnerBanner.avif'
import { NavLink } from "react-router-dom";


const OurPartner = () => {
  return (
    <section className="bg-[#F7F8FA] dark:bg-[#0F172A] ">
        <div className=" relative w-full h-60 md:h-80 " >
            <img
                loading="lazy"
                src={ourPartner}
                className=" relative w-full h-full object-cover shadow"
                alt={ourPartner}
            />
            <div className=" absolute inset-0 flex  top-[30%] left-[14%]   ">
                <h2 className="text-[24px] lg:text-[50px] text-white font-bold text-[#0072B5] 
                whitespace-pre-line text-shadow-[1px_1px_#000] ">
                    Partners and Products List
                </h2>
            </div>
        </div>
        
        <div className="containerCustom px-4 py-10 lg:py-[75px] ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {ourPartnerData.map((partner) => (
                    <ul>
                        <li>
                            <NavLink
                                key={partner.id}
                                className="relative group bg-white dark:bg-[#192030] rounded-xl 
                                border-4 border-[#0072B5]/20
                                transition-all duration-300 
                                flex flex-col items-center justify-center 
                                p-6 text-center overflow-hidden"
                                >
                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-[#0072B5]/30 
                                    flex items-center justify-center
                                    opacity-0 group-hover:opacity-100
                                    transition-all duration-300"
                                >
                                    <BiArrowToBottom className="text-white text-4xl animate-bounce bg-[#3683e7] rounded-full " />
                                </div>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-[120px] object-cover mb-4 "
                                />

                                <h4 className="text-[15px] font-semibold text-[#1F3C88]">
                                    {partner.name}
                                </h4>
                                </NavLink>

                        </li>
                    </ul>
                ))}

            </div>
            
            <div className=" mt-10 lg:mt-15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 ">
                {ourPartnerData.map((partner) => (
                    <ul>
                        <li>
                            <NavLink
                                key={partner.id}
                                className="relative group bg-white dark:bg-[#192030] rounded-xl 
                                border-1 border-[#0072B5]/20
                                transition-all duration-300 
                                flex flex-col items-center justify-center 
                                p-6 text-center overflow-hidden"
                                >
                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-[#0072B5]/30 
                                    flex items-center justify-center
                                    opacity-0 group-hover:opacity-100
                                    transition-all duration-300"
                                >
                                    <BiArrowToBottom className="text-white text-3xl animate-bounce bg-[#3683e7] rounded-full " />
                                </div>
                                <img
                                    src={partner.logoBase}
                                    className="h-[90px] object-cover mb-4 "
                                />
                            </NavLink>
                        </li>
                    </ul>
                ))}

                
            </div>


        </div>

    </section>
  );
};

export default OurPartner;
