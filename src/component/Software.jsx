import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegQuestionCircle, FaPencilRuler  } from "react-icons/fa";
import { FiLayers, FiCheckCircle  } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import from local
import bgShape from "../assets/images/bgsec.png";


// Wavy connecting line
const WavyLine = () => (
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-12 absolute top-[70px]"
    preserveAspectRatio="none"
  >
    <path
        d="M0,75 C150,-30 300,180 450,75 C600,-30 750,180 900,75 C1050,-30 1200,180 1350,75 L1440,75"
        fill="none"
        stroke="#0072B5"
        strokeWidth="4"
        strokeLinecap="round"
        className="wavy-path"
    />

    <path
        d="M0,75 C150,-30 300,180 450,75 C600,-30 750,180 900,75 C1050,-30 1200,180 1350,75 L1440,75"
        fill="none"
        stroke="#0072B5"
        strokeWidth="4"
        strokeLinecap="round"
        className="wavy-path second-wave"
        />


  </svg>
);


const WavySea = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className = "w-full h-25 bottom-0"
        preserveAspectRatio="none"
        >
        
        <path 
            fill="#E5312D" 
            fill-opacity="0.1" 
            d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,272C672,299,768,309,864,277.3C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
    </svg>
)

const Software = () => {
  const steps = [
    {
      "title": "Plan Requirements",
      "description": "We start by understanding your goals, business needs, and project scope to define what needs to be built.",
      "icon": FaRegQuestionCircle,
      "color": "border-[#0072B5]",
    },
    {
      "title": "Design the Solution",
      "description": "Our UI/UX and technical teams create visual layouts and system architectures ensuring clarity and efficiency.",
      "icon": FaPencilRuler ,
      "color": "border-cyan-500",
    },
    {
      "title": "Develop in Sprints",
      "description":  "The development process is segmented into multiple short cycles (Sprints) allowing fast progress and flexibility.",
      "icon": FiLayers,
      "color": "border-teal-500",
    },
    {
      "title": "Test for Quality",
      "description":  "We test each feature carefully to ensure performance, security, and error-free functionality.",
      "icon": FiCheckCircle ,
      "color": "border-blue-700",
    },
    {
    "title": "Client Feedback & Improvement",
    "description": "After each sprint, we share updates for review, gather feedback, and refine the product continuously.",
    "icon": VscFeedback,
    "color": " border-green-500 ",
    },
  ];

  return (
    <section className=' dark:bg-[#192030] relative bg-no-repeat textColor '
        style={{
        backgroundImage: `url(${bgShape})`,
        backgroundPosition: "top left",
        backgroundSize: "auto"
    }}>
    <div className="containerCustom px-4 py-10 lg:py-[75px]">
      <div className="max-w-[1000px] m-auto ">
          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] text-center mb-3 uppercase">
              Software Development
          </h2>
          <p className="textColor  text-center mb-12 leading-tight  "> We follow a flexible and client-centric Agile methodology to ensure high-quality software delivery. Our approach focuses on continuous collaboration, iterative improvements, and transparent progress. </p>
      </div>

      {/* Wavy Connecting Line */}
      <div className="relative mb-4">
      <WavyLine />
      </div>

      {/* Circles */}
      <div className="hidden xl:grid grid-cols-1 xl:grid-cols-5 gap-10 xl:gap-4">
      {steps.map((step, index) => (
          <ProcessItem key={index} {...step} />
      ))}
      </div>

      {/* Mobile Swiper */}
      <div className="xl:hidden">
      <Swiper
          spaceBetween={5}
          slidesPerView={1.4}
          centeredSlides={false}
          breakpoints={{
              500: {
                  slidesPerView: 1.7

              },
              768: {
                  slidesPerView: 2.4

              },
              992: {
                  slidesPerView: 3.4

              },
          }}
          
      >
          {steps.map((step, index) => (
          <SwiperSlide key={index}>
              <ProcessItem {...step} />
          </SwiperSlide>
          ))}
      </Swiper>
      </div>


      <div className="text-center mt-10">
      <NavLink
          to="services/service-SoftwareDevelopment"
          className="btnGradient px-6 py-3 rounded-lg text-white font-semibold"
      >
          Explore Details
      </NavLink>
      </div>
    </div>
    {/* <div> 
        <WavySea/> 
    </div> */}


    </section>
  );
};


const ProcessItem = ({ title, description, icon: Icon, color }) => {
  return (
    <div className="agileCard group flex flex-col items-center text-center px-2 relative">
      <div className="relative w-40 h-40 mb-4 rounded-full p-[4px] group-hover:bg-gradient-to-r group-hover:from-[#E5312D]
         group-hover:via-[#FFB347] group-hover:to-[#E5312D] group-hover:bg-[length:200%_200%] group-hover:animate-gradient-border transition-all duration-300 border-transparent ">
        <div className={`w-full h-full rounded-full bg-white dark:bg-[#192030] ${color} 
                        flex items-center justify-center border-4 group-hover:border-transparent  `}>
          <Icon className="w-12 h-12" />
        </div>
      </div>

      <h4 className="textColor text-[20px] lg:text-[24px] font-bold mb-2">{title}</h4>
      <p className="textColor text-[15px] leading-relaxed max-w-[230px]">
        {description}
      </p>
    </div>
  );
};



export default Software;
