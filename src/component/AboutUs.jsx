import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// import from local
import concept from "../assets/images/ourCencepts.avif";

const conceptData = {
  heading:
    "Fast, Reliable and Detail-Oriented — A Service Standard You Can Trust",
  paragraphs: [
    "We believe in fast decision-making and immediate action. Our philosophy is simple: respond quickly, act efficiently and never keep our customers waiting.",

    "When a challenge appears, we understand how important it is for you to receive a solution without delay. That’s why we deliver responsive, flexible and high-quality support designed to keep your business running smoothly and growing steadily.",

    "At the heart of our work is the value we place on human connections. We aim to create meaningful relationships and deliver services that bring satisfaction, confidence and long-term success to everyone we work with.",

    "With this commitment, we will continue to create new value, drive innovation and support your journey toward growth and lasting business happiness.",
  ],
};


const AboutUs = () => {


  return (
    <section className="w-full px-4 lg:px-0 py-10 lg:py-[75px] flex flex-col items-end ">
      <div className="relative w-[95%] md:w-[80%] h-[150px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-tl-[10px] rounded-bl-[10px] shadow-lg">
        <img
          src={concept}
          alt="Our Concept Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[10%] left-[5%] ">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg uppercase "
          style={{
            textShadow: `
              rgba(77, 111, 139, 0.7) 1px 1px 10px,
              rgba(77, 111, 139, 0.7) -1px 1px 10px,
              rgba(77, 111, 139, 0.7) 1px -1px 10px,
              rgba(77, 111, 139, 0.7) -1px -1px 10px
            `
          }}>
            About Us
          </h2>
        </div>
      </div>

      <div className=" -mt-20 w-[95%] md:w-[80%] self-start ">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-br-[10px] py-25 px-[15px] md:p-22 lg:p-30 border border-gray-200 dark:border-gray-700">

          <h3 className="textColor text-[26px] lg:text-[36px] font-bold mb-6">
              {conceptData.heading}
            </h3>

          <div className="space-y-5">
              {conceptData.paragraphs.map((p, idx) => (
                <p key={idx} className="textColor leading-relaxed text-[16px]">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#0072B5] mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                    <p className="textColor/80 leading-relaxed text-[16px]">
                      {p}
                    </p>
                  </div>
                </p>
              ))}
            </div>
            
            <div className="flex justify-end mt-5 " >
              <NavLink to="/about-us" className="w-fit btnGradient flex items-center gap-2 ">
              Learn More <HiOutlineArrowLongRight/>
            </NavLink>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
