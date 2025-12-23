import React, { useRef, useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { NavLink } from "react-router-dom";

// import from local
import { ourPartnerData, ourPartnerLogoData } from "../Data/OurPartnerData";

import ourPartner from '../assets/images/ourPartner/OurtPartnerBanner.avif'


const OurPartner = () => {
    const productLineRefs = useRef({});

    const [activeProductLine, setActiveProductLine] = useState(null);

    const handlePartnerClick = (partnerId) => {
        productLineRefs.current[partnerId]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };



  return (
    <section className="bg-[#F7F8FA] dark:bg-[#0F172A] ">
        <div className=" relative w-full h-60 md:h-80 " >
            <img
                loading="lazy"
                src={ourPartner}
                className=" relative w-full h-full object-cover shadow"
                alt={ourPartner}
            />
            <div className=" absolute inset-0 flex flex-col top-[40%] left-[14%]   ">
                <h2 className="text-[24px] lg:text-[50px] text-white font-bold text-[#0072B5] 
                whitespace-pre-line text-shadow-[1px_1px_#000] ">
                    Product Line
                </h2>
                <div className=" bg-white w-[15%] md:w-[30%] h-[1px] mb-2 " ></div>
                <span className=" text-white text-[17px] " > Partners and Products List </span>
            </div>
        </div>
        
        <div className="containerCustom px-4 py-10 lg:py-[75px] ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {ourPartnerData.map((partner) => (
                    <ul>
                        <li>
                            <NavLink
                                onClick={() => handlePartnerClick(partner.id)} 
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
            
            <div className=" mt-10 lg:mt-15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 ">
                {ourPartnerLogoData.map((partner) => (
                    <ul>
                        <li>
                            <NavLink
                                onClick={() => handlePartnerClick(partner.id + 100)}
                                className="relative group bg-white dark:bg-[#192030] rounded-xl 
                                border-2 border-[#0072B5]/20
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
                                    src={partner.logobase}
                                    className="h-[90px] w-full object-cover mb-4 "
                                />
                            </NavLink>
                        </li>
                    </ul>
                ))}
                
            </div>

            <div className="ProductLine mt-24 scroll-mt-24">
                
                <h3 className="textColor text-[26px] lg:text-[36px] font-bold mb-6"> Product Line </h3>
                {ourPartnerData.map((partner) => (
                    <div
                    key={partner.id}
                    ref={(el) => (productLineRefs.current[partner.id] = el)}
                    className="mb-10"
                    >
                    <h3 className="text-center text-[28px] font-semibold italic mb-14">
                        {partner.company}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-b py-10">
                        {/* LEFT: Company */}
                        <div>
                        <h4 className="font-semibold text-[16px]">{partner.company}</h4>
                        <div className="w-20 h-[3px] bg-black mt-3"></div>
                        </div>

                        {/* RIGHT: Products */}
                        <div className="md:col-span-2 space-y-4">
                        {partner.products.map((product, index) => (
                            <div
                            key={index}
                            className="flex justify-between items-center border-b pb-3"
                            >
                            <span className="text-[15px]">{product}</span>
                            <BiArrowToBottom className="text-[#0072B5]" />
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}

                {ourPartnerLogoData.map((partner) => (
                    <div
                    key={partner.id + 100} // just to avoid duplicate keys
                    ref={(el) => (productLineRefs.current[partner.id + 100] = el)}
                    className="mb-10"
                    >
                    <h3 className="text-center text-[28px] font-semibold italic mb-14">
                        {partner.company}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-b py-10">
                        <div>
                        <h4 className="font-semibold text-[16px]">{partner.company}</h4>
                        <div className="w-20 h-[3px] bg-black mt-3"></div>
                        </div>

                        <div className="md:col-span-2 space-y-4">
                        {partner.products.map((product, index) => (
                            <div
                            key={index}
                            className="flex justify-between items-center border-b pb-3"
                            >
                            <span className="text-[15px]">{product}</span>
                            <BiArrowToBottom className="text-[#0072B5]" />
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
            </div>




        </div>

    </section>
  );
};

export default OurPartner;
