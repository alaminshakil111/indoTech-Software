import React from "react";
import { Link, NavLink } from "react-router-dom";

// Local imports

import { solutionsData } from "../Data/SolutionsData";

const SolutionsAll = () => {

  return (
    <>
        <div className="bg-[#F7F8FA] relative bg-no-repeat " >
            <div className="containerCustom px-4 py-24 lg:py-[75px]">
                <div className="max-w-[1000px] m-auto " >
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-center text-[#0072B5] mb-3"> 
                        Our Solutions 
                    </h2>
                    <h4 className="textColor text-[20px] lg:text-[24px] font-regular text-center mb-12 
                                    leading-tight "> 
                        Strategic solutions that optimize workflow efficiency and empower teams to achieve more. 
                    </h4>
                </div>
                
                <div className="grid grid-cols-1  gap-8">
                    {solutionsData.map((solution, index) => (
                    <div
                        key={index}
                        className={`relative grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#192030] rounded-[10px] shadow-[0px_0px_9px_0px_#afafaf]
                        hover:shadow-[0px_0px_9px_0px_#8891dd] transition duration-300  h-full
                        ${index % 2 !== 0 
                            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" 
                            : ""
                        }
                    `}>
                    <img
                        src={solution.img}
                        alt={solution.title}
                        className={`w-full h-[100%] object-cover rounded-tl-[10px] rounded-tr-[10px]
                            ${index % 2 === 0
                                ? "lg:rounded-l-[10px] lg:rounded-r-none"
                                : "lg:rounded-r-[10px] lg:rounded-l-none"
                            }
                        `}/>

                    {/* This div will stretch to fill remaining space */}
                    <div className=" hidden  lg:block bg-white absolute h-[70%] w-[10%] left-[50%] top-[50%] 
                    transform -translate-x-1/2 -translate-y-1/2 "> </div>
                    
                    <div className=" p-5 lg:p-20 flex flex-col grow">
                        <h4 className="textColor text-[20px] lg:text-[24px] font-semibold mt-1">
                        {solution.title}
                        </h4>

                        <p className="textColor text-[15px] mt-1 grow line-clamp-5">
                        {solution.subtitle}
                        </p>
                        <div className="grid grid-cols-2 gap-2 pl-5 md:pl-4 lg:pl-[25px] pt-3 ">
                            {solution.links.map((link, i) => (
                                
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

                        <div className="mt-5 flex justify-between gap-2">
                            {/* <button className="cardButton min-w-[110px] ">
                                <a href="tel:+880123456789"> Call Now </a>
                            </button> */}
                            
                            <NavLink
                                key={solution.id}
                                to={`/solutions/${solution.id}`}
                                className="btnGradient min-w-[110px] ">
                                View Details
                            </NavLink>
                        
                        </div>
                    </div>

                    </div>

                    ))}
                </div>
            </div>
        </div>
    </>

    
  );
};

export default SolutionsAll;
