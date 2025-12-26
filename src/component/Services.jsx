import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";


import ictManaged from "../assets/images/services/itmanaged/managed-services23.jpg";
import developerAi from "../assets/images/services/artifficial/ai&AumtationCard.jpg";
import softwareBanner from "../assets/images/services/softwareDev/softwareBanner.avif";
import zeroTrustBanner from "../assets/images/services/zeroTrust/photo-1550751827-4bd374c3f58b.avif";
import consultancyBanner from "../assets/images/consultancy/business/businessBanner.jpg";

const slidesData = [
  {
    id: "service-IctManagedServices",
    title: "ICT Managed Services",
    description: `We aim to foster a stable, secure and scalable IT environment where your operations run smoothly, your teams stay productive and your technology continuously supports your business growth. Our managed services take full ownership of your IT ecosystem so you can stay focused on your core goals.`,
    image: ictManaged,
    moreLink: "/services/service-IctManagedServices",
  },
  {
    id: "service-AI&Automation",
    title: "AI & Automation",
    description: `We deliver intelligent, data-driven solutions that automate workflows, improve decision-making and enhance productivity. Our AI systems are built with strong backend engineering, scalable cloud architecture and modern machine learning frameworks. Whether you want predictive analytics, automated business processes or virtual assistants—we design solutions that create measurable value.`,
    image: developerAi,
    moreLink: "/services/service-AI&Automation",
  },
  {
    id: "service-SoftwareDevelopment",
    title: "Software Development",
    description: `We deliver professional, reliable and scalable software solutions powered by a clean Java based backend architecture and a modern React/Next.js frontend stack. Our development process includes automated testing, CI/CD pipelines and a predictable delivery workflow. We transform client requirements into production-ready applications supported by long-term maintenance and continuous improvement.`,
    image: softwareBanner,
    moreLink: "/services/service-SoftwareDevelopment",
  },
  {
    id: "service-zerotrustsecurity",
    title: "Zero Trust Security",
    description: `We help organizations implement Zero Trust principles to secure users, devices, applications and data. By continuously verifying identities and controlling access, we reduce risk, prevent breaches and protect critical assets.`,
    image: zeroTrustBanner,
    moreLink: "/services/service-zerotrustsecurity",
  },
  {
    id: "business",
    title: "Business Consultancy",
    description: `We help businesses grow strategically by providing expert guidance across IT marketing, international expansion and operational management. Our consultancy services combine industry insight, practical experience and actionable strategies to achieve measurable results.`,
    image: consultancyBanner,
    moreLink: "/services/business",
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
    <section className="w-full bg-gray-50">
      <div className="containerCustom mx-auto px-4 py-10 lg:py-[75px] relative ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold text-[#0072B5] uppercase " 
        style={{
            textShadow: `
              rgb(166 215 255 / 70%) 1px 1px 10px, 
              rgb(255 255 255 / 70%) -1px 1px 10px, 
              rgba(77, 111, 139, 0.7) 1px -1px 10px, 
              rgba(77, 111, 139, 0.7) -1px -1px 10px
            `
          }}> Our Services </h2>

        <div className="relative">
          {/* Buttons OUTSIDE the Swiper */}
          <div className=" flex gap-10 bg-[#c4c9cd]/70 rounded-br-[10px] rounded-bl-[10px] px-4 md:px-8 py-1 absolute 
          top-[100%] right-0  " >
            <button ref={prevRef} className="cursor-pointer z-10 bg-[#4992C1] p-2 md:p-3 rounded-full text-white hover:shadow-xl hover:shadow-[#4992C1]/60 transition-all duration-300" >
              <HiArrowLongLeft size={18} className="text-white" />
            </button>

            <button ref={nextRef} className="cursor-pointer z-10 bg-[#4992C1] p-2 md:p-3 rounded-full text-white
              hover:shadow-lg hover:shadow-[#4992C1]/60 transition-all duration-300" >
              <HiOutlineArrowLongRight size={18} className="text-white" />
            </button>
          </div> 

          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            
            effect="fade"
            fadeEffect={{ crossFade: true }}
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onBeforeInit={(swiper) => {
              // Attach refs to Swiper navigation BEFORE init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className=" overflow-hidden servicesSwiper" >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:px-0 overflow-hidden">


                  {/* LEFT */}
                  <div className=" w-full h-full flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-gray-600 leading-7 mb-6 whitespace-pre-line">{slide.description}</p>
                    <button
                      onClick={() => navigate(slide.moreLink)}
                      className="w-fit btnGradient ml-1"
                    >
                      More →
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className=" w-full h-full relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] 
                      rounded-br-[1px] shadow-md"

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
