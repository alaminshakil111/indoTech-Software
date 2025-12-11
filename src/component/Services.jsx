import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";


import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

import ictManaged from "../assets/images/services/itmanaged/managed-services23.jpg";
import developerAi from "../assets/images/services/artifficial/developer-ai-349.png";
import softwareBanner from "../assets/images/services/softwareDev/softwareBanner.avif";

const slidesData = [
  {
    id: "service-IctManagedServices",
    title: "ICT Managed Services",
    description: `We aim to foster a stable, secure and scalable IT environment where your operations run smoothly, your teams stay productive and your technology continuously supports your business growth. Our managed services take full ownership of your IT ecosystem so you can stay focused on your core goals.`,
    image: ictManaged,
    moreLink: "/services/service-IctManagedServices",
  },
  {
    id: "service-SoftwareDevelopment",
    title: "Software Development",
    description: `We deliver professional, reliable and scalable software solutions powered by a clean Java based backend architecture and a modern React/Next.js frontend stack. Our development process includes automated testing, CI/CD pipelines and a predictable delivery workflow. We transform client requirements into production-ready applications supported by long-term maintenance and continuous improvement.`,
    image: softwareBanner,
    moreLink: "/services/service-SoftwareDevelopment",
  },
  {
    id: "service-AI&Automation",
    title: "AI & Automation",
    description: `We deliver intelligent, data-driven solutions that automate workflows, improve decision-making and enhance productivity. Our AI systems are built with strong backend engineering, scalable cloud architecture and modern machine learning frameworks. Whether you want predictive analytics, automated business processes or virtual assistants—we design solutions that create measurable value.`,
    image: developerAi,
    moreLink: "/services/service-AI&Automation",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Wait for buttons to render before enabling navigation
    setSwiperReady(true);
  }, []);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] ">Our Services</h2>

        <div className="relative">
          {/* Buttons OUTSIDE the Swiper */}
          <div className=" absolute bottom-[-60px] right-0  " >
            <button ref={prevRef} className="absolute bottom-4 right-10 z-10 bg-[#4992C1] p-3 rounded-full text-white">
            <FaChevronLeft size={18} className=" text-white " />
            </button>

            <button ref={nextRef} className="absolute bottom-4 right-4 z-10 bg-[#4992C1] p-3 rounded-full text-white">
              <FaChevronRight size={18} className=" text-white " />
            </button>
          </div>


          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            navigation={
              swiperReady
                ? { prevEl: prevRef.current, nextEl: nextRef.current }
                : undefined
            }
            onSwiper={() => setSwiperReady(true)} 
            className="rounded-xl overflow-hidden" >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0 h-[450px] overflow-hidden shadow-md">

                  {/* LEFT */}
                  <div className="lg:w-1/2 w-full h-full flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-gray-600 leading-7 mb-6 whitespace-pre-line">{slide.description}</p>
                    <button
                      onClick={() => navigate(slide.moreLink)}
                      className="w-fit btnGradient"
                    >
                      More →
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className="lg:w-1/2 w-full h-full relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Services;
