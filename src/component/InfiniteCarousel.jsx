import React from "react";

const soft = ["Java", "JavaScript", "Typsript", "Springboot", "Tailwind", "Nodejs", "ReactJs", "NextJs" ];
const net = ["AWS", "Azure", "GCP", "Microsoft", "CISCO", "HPE", "Red Hat", "DELL", "AWS", "Azure", "GCP", "Microsoft", "CISCO", "HPE", "Red Hat", "DELL",  ];

const InfiniteCarousel = () => {

  const loopItems = [...soft, ...soft];
  const netItems = [...net, ...net];

  return (
    <div className="dark:bg-[#192030] " >
        <div className="containerCustom px-4 py-10 lg:py-[75px]">
            <div className="max-w-[1000px] m-auto " >
                <h2 className="text-[24px] lg:text-[36px] font-bold text-center text-[#0072B5] mb-3 uppercase ">We Cover Your tech Stack</h2>
                <p className="textColor text-center mb-12 leading-tight "> We understand that today companies must develop custom software products to keep pace with the competitive market
                </p>
            </div>
            <div style={{ overflow: "hidden", width: "100%", padding: "40px 0",  }}>
                <div className="carousel-scroll">
                    {loopItems.map((item, index) => (
                    <div key={index} className=" textColor flex justify-center items-center text-[25px] md:text-[30px] lg:text-[40px] font-bold "
                    >
                        {item}
                    </div>
                    ))}
                </div>
                <div className="carouselNet-scrollnet mt-8 ">
                    {netItems.map((item, index) => (
                    <div key={index} className=" textColor flex justify-center items-center text-[25px] md:text-[30px] lg:text-[40px] font-bold "
                    >
                        {item}
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
  );
};
export default InfiniteCarousel;