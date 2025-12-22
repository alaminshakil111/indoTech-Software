import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// import fom local
import { solutionsData } from "../Data/SolutionsData";



const Solutions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="solutionsSection relative bg-no-repeat flex flex-col gap-4 sm:flex-row sm:gap-4 items-end 
                pt-[20px] pb-[20px] pr-[20px] lg:pt-[60px] lg:pb-[60px] lg:pl-[55px]

                before:content-[''] 
                before:absolute 
                before:bottom-[20%] 
                before:right-0 
                before:w-[40%] 
                before:h-[20%] 
                before:bg-[url('/images/indotech_logo.png')] 
                before:bg-no-repeat 
                before:bg-cover "  
    >
      <div className="containerCustom relative z-10 px-4 py-10 lg:py-[75px] bg-white rounded-[10px] lg:px-20 ">
          <div className="max-w-[1000px] m-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0072B5] uppercase mb-3 " 
              style={{
                  textShadow: `
                    rgb(166 215 255 / 70%) 1px 1px 10px, 
                    rgb(255 255 255 / 70%) -1px 1px 10px, 
                    rgba(77, 111, 139, 0.7) 1px -1px 10px, 
                    rgba(77, 111, 139, 0.7) -1px -1px 10px
                  `
              }}> Our Solutions </h2>
              <p className="textColor leading-tight">
                  Strategic solutions that optimize workflow efficiency and empower teams to achieve more.
              </p>
          </div>

          {/* Wrapper grid for left-right layout */}
          <div className="textColor grid grid-cols-1 gap-1">
            {solutionsData.map((item, index) => (
                <div key={index} className={` border-b border-gray-300 py-4 cursor-pointer select-none `}>
                <div
                    className="flex items-start justify-between"
                    onClick={() => handleToggle(index)} >
                    <div>
                        <h5 className="text-[18px] lg:text-[20px] font-semibold">
                            {item.title}
                        </h5>
                        <p className="textColor text-[15px] mt-1">{item.subtitle}</p>
                    </div>

                    <span className="text-2xl font-bold">
                        {openIndex === index ? <CiCircleMinus className="text-[#FF5650]" /> : <CiCirclePlus className="text-[#336DBC]" />}
                    </span>
                </div>

                {openIndex === index && (
                    <div className="mt-4 space-y-2 pl-2">
                      {openIndex === index && (
                        <div className="grid grid-cols-2 gap-2 pl-3 md:pl-4 lg:pl-[25px] ">
                            {item.links.map((link, i) => (
                              
                                <li>
                                  <NavLink
                                    key={i}
                                    to={link.to}
                                    state={{ tabIndex: link.tabIndex }}
                                    className="block text-[#0072B5] hover:underline text-sm" >
                                    {link.label}
                                  </NavLink>
                                </li>
                              
                            ))}
                          </div>
                      )}

                    </div>
                    
                )}
                </div>
            ))}
          </div>
      </div>
      
      <NavLink to="/ourpartner" 
      className="w-fit btnGradient flex items-center gap-2 lg:mx-[50px]
      lg:px-[70px]! lg:py-[70px] xl:mx-[110px]
      xl:px-[90px]! xl:py-[85px] whitespace-nowrap ">
        Our Partner <HiOutlineArrowLongRight/>
      </NavLink>
    </div>

  );
};

export default Solutions;
