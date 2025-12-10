import React from "react";
import { Link, NavLink } from "react-router-dom";

// Local imports
import bgShape from "../assets/images/bgsec.png";

import { solutionsData } from "../Data/SolutionsData";


const SolutionsAll = () => {
  return (
    <>
        <div className="solutionsSection relative bg-no-repeat " 
            style={{
            backgroundImage: `url(${bgShape})`,
            backgroundPosition: "top left",
            backgroundSize: "auto"
            }}>
            <div className="containerCustom px-4 py-10 lg:py-[75px]">
                <div className="max-w-[1000px] m-auto " >
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-center text-[#0072B5] mb-3"> Our Solutions </h2>
                    <h4 className="textColor text-[20px] lg:text-[24px] font-regular text-center mb-12 leading-tight "> Strategic solutions that optimize workflow efficiency and empower teams to achieve more. </h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutionsData.map((solution, index) => (
                    <div
                    key={index}
                    className="rounded-[10px] shadow-md hover:shadow-[0px_0px_9px_0px_#b37070] transition duration-300 bg-transparent dark:bg-[#192030] flex flex-col h-full ">
                    <img
                        src={solution.img}
                        alt={solution.title}
                        className="w-full h-[220px] object-cover rounded-tl-[10px] rounded-tr-[10px]"
                    />

                    {/* This div will stretch to fill remaining space */}
                    <div className="px-3 pb-3 flex flex-col grow">
                        <h4 className="textColor text-[20px] lg:text-[24px] font-semibold mt-1">
                        {solution.title}
                        </h4>

                        <p className="textColor text-[15px] mt-1 grow line-clamp-5">
                        {solution.subtitle}
                        </p>

                        <div className="mt-5 flex justify-between gap-2">
                            {/* <button className="cardButton min-w-[110px] ">
                                <a href="tel:+880123456789"> Call Now </a>
                            </button> */}
                            
                            <NavLink
                                key={solution.id}
                                to={`/solutions/${solution.id}`}
                                className="cardButton min-w-[110px] ">
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
