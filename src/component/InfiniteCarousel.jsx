import React from "react";

const soft = ["Java", "ReactJs", "Springboot", "Tailwind", "NextJs", "Nodejs", "JavaScript", "Typesript",  ];
const net = ["AWS", "Azure", "GCP", "Microsoft", "CISCO", "HPE", "Red Hat", "DELL", "AWS", "Azure", "GCP", "Microsoft", "CISCO", "HPE", "Red Hat", "DELL"];

const InfiniteCarousel = () => {
  return (
    <div className="dark:bg-[#192030]">
      <div className="containerCustom px-4 py-10 lg:py-[75px]">
        <div className="max-w-[1000px] mx-auto text-center ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0072B5] uppercase"
            style={{
                textShadow: `
                rgb(166 215 255 / 70%) 1px 1px 10px, 
                rgb(255 255 255 / 70%) -1px 1px 10px, 
                rgba(77, 111, 139, 0.7) 1px -1px 10px, 
                rgba(77, 111, 139, 0.7) -1px -1px 10px
                `
            }}>
                We Cover Your Tech Stack
          </h2>
          <p className="textColor text-center mb-12 leading-tight">
            We understand that today companies must develop custom software products to keep pace with the competitive market
          </p>
        </div>

        {/* MAIN SCROLL AREA */}
        <div style={{ overflow: "hidden", width: "100%", padding: "40px 0" }}>
          
          {/* FIRST ROW: Right → Left */}
          <div className="marquee">
            <div className="marquee-inner">
              {/* Track A */}
              {soft.map((item, i) => (
                <span key={i} className="textColor text-[30px] lg:text-[40px] font-bold mx-5">
                  {item}
                </span>
              ))}

              {/* Track B (duplicate) */}
              {soft.map((item, i) => (
                <span key={i + '-dup'} className="textColor text-[30px] lg:text-[40px] font-bold mx-5">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* SECOND ROW: Left → Right */}
          <div className="marquee mt-8">
            <div className="marquee-inner reverse">
              {net.map((item, i) => (
                <span key={i} className="textColor text-[30px] lg:text-[40px] font-bold mx-5">
                  {item}
                </span>
              ))}

              {net.map((item, i) => (
                <span key={i + '-dup'} className="textColor text-[30px] lg:text-[40px] font-bold mx-5">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
