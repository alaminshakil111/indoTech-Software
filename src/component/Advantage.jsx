import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const advantageData = {
  title: "Our Services",
  subTitle: "ICT Managed Services",
  description: `
    With the technology and experience cultivated in global business,
    our ICT services strategically incorporate our unique insights and 
    support into business processes through a sophisticated global 
    technology partner portfolio. As a partner of major manufacturers 
    such as CA Technologies, Cisco, Dell, F5, Fortinet, HP, IBM, Juniper, 
    NetApp, and VMware, we provide expertise in data center, communications, 
    collaboration, and managed services to approximately 50 companies worldwide.
  `,
  buttonText: "More",
  images: [
    "/images/ict-1.jpg",
    "/images/ict-2.jpg",
    "/images/ict-3.jpg",
    "/images/ict-4.jpg",
    "/images/ict-5.jpg",
  ],
};



const Advantage = () => {
  const { title, subTitle, description, buttonText, images } = advantageData;

  return (
    <div className="w-full pb-20 pt-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-[22px] font-bold text-blue-700 mb-4">{title}</h3>

          <h4 className="text-lg font-semibold mb-3">{subTitle}</h4>

          <p className="text-gray-600 leading-7 mb-6 whitespace-pre-line">
            {description}
          </p>

          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
            {buttonText} →
          </button>
        </div>

        {/* RIGHT SIDE - SWIPER */}
        <div className="lg:w-1/2 w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="Slide"
                  className="w-full h-80 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Advantage;
