import React from 'react';

import bgShape from "../assets/images/bgsec.png";

const features = [
  {
    icon: "🛡️",
    title: "Security First",
    description: "Advanced authentication and authorization systems ensure the highest level of security for your data and operations.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Optimized solutions that deliver exceptional performance and reliability for your business operations.",
  },
];


const AdvanceTech = () => {
    return (
        <div className=' dark:bg-[#192030] relative bg-no-repeat '
              style={{
              backgroundImage: `url(${bgShape})`,
              backgroundPosition: "top left",
              backgroundSize: "auto"
            }}>
            <div className="max-w-[900px] m-auto px-4 py-4 lg:py-[75px]">
                <div className="max-w-[900px] m-auto " >
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-center text-[#0072B5] mb-3 uppercase ">Advanced Technology</h2>
                    <p className="textColor text-center mb-12 leading-tight "> We leverage cutting-edge cloud computing and blockchain technology to ensure security and performance. </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                                relative bg-white dark:bg-[#101828] p-6 rounded-[10px]
                                shadow-[0_8px_20px_rgba(0,0,0,0.30)]
                                after:content-['']
                                after:absolute after:left-0 after:right-0 after:-bottom-2 after:-z-[9999]
                                after:h-[60px] after:w-[102.5%] after:rounded-b-[10px] after:bg-[#FF5650]  ">
                            {/* Icon */}
                            <div className="text-3xl mb-4">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h4 className="textColor text-[20px] lg:text-[24px] font-semibold mt-1">
                                {item.title}
                            </h4>

                            {/* Underline */}
                            <div className="w-12 h-[2px] bg-[#FF5650] mb-4"></div>

                            {/* Description */}
                            <p className="textColor text-[15px] mt-1 grow line-clamp-5">
                                {item.description}
                            </p>
                        </div>

                    ))}
                    </div>
                
            </div>
        </div>
    );
};

export default AdvanceTech;