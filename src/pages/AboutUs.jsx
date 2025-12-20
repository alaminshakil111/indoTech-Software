import React from "react";

// import from local

import missionVission from "../assets/images/aboutUs/missonVission.webp";
import heroBg from "../assets/images/aboutUs/photo-1723881007485-1d13d14eb981.jpg";

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

const aboutData = {
  title: "About Us",
  subtitle: "Innovate. Support. Grow — Together",
  image: missionVission,

  whoWeAre: {
    title: "Who We Are",
    description:
      "Attrabit ICT Solution is a Japan-based total IT solutions company delivering end-to-end technology services designed to help businesses innovate, scale and strengthen their digital capabilities. With operational presence in Japan and Bangladesh, we specialize in IT Infrastructure Solutions, Cloud Computing, Cybersecurity, Network Engineering, Managed IT Services, Software Development, Mobile App Development, AI Automation, Data Analytics and Digital Transformation Services. Our global delivery model ensures reliable, secure and future-ready ICT solutions for clients across multiple industries.",
  },

  mission: {
    title: "Our Mission",
    description:
      "To empower organizations with intelligent, high-performance technology solutions that enhance customer engagement, improve operational efficiency and support fast, data-driven decision-making.",
  },

  vision: {
    title: "Our Vision",
    description:
      "To build a global team of passionate ICT professionals who enjoy their craft, continuously innovate and contribute to the advancement of the information and communications technology industry, both in Japan and worldwide.",
  },
  value: {
    title: "Our Core Values",
    description: [
      {
        title: "1. Customer-Centric Service Excellence",
        text: "We place customer needs at the center of every decision and deliver solutions that create real business impact. Our Japan-standard service quality ensures fast, reliable and detail-oriented support across all IT and software projects.",
      },
      {
        title: "2. Innovation, Learning & Continuous Growth",
        text: "We embrace emerging technologies and foster a culture of continuous skill development, ensuring our clients always receive modern, efficient and innovative ICT solutions.",
      },
      {
        title: "3. Professional & Efficient Work Style",
        text: "Guided by Japanese work ethics — precision, quality and consistency — we set clear, achievable goals and deliver optimized results across infrastructure, cloud, security and software development projects.",
      },
      {
        title: "4. Strong Teamwork & Talent Development",
        text: "Collaboration and mutual respect define our workplace. We focus on nurturing world-class ICT talent and building a strong global engineering team capable of meeting complex and diverse client needs.",
      },
      {
        title: "5. Open, Agile & Future-Focused Management",
        text: "We adapt quickly to technology trends, encourage transparent communication and maintain long-term, trust-based relationships with clients, partners and stakeholders across Japan and international markets.",
      },
    ],
  },

  highlightSection: {
    enable: true,
    title: "Why Choose Us",
    description:
      "With many companies offering IT services, selecting the right partner matters. Here are the key reasons clients trust us. We are dedicated to delivering high-quality technology solutions and contributing directly to your business success.",

    features: [
      {
        number: "No.1",
        title: "Customer-First Mindset",
        description: `Your needs come first — always. Our goal is to fully understand your challenges and deliver IT solutions that provide measurable value. We stay with you every step of the way, ensuring smooth implementation and reliable support. If any issue arises, you can depend on us to respond quickly, accurately and with complete accountability as your technology partner.`,
      },
      {
        number: "No.2",
        title: "Flexible, Independent and Highly Skilled Team",
        description: `As an independent IT company, our recommendations are always based on what is best for you — not influenced by external vendors or parent-company priorities. Our experts team gives us the agility to adapt, customize and move fast. We offer a level of flexibility and personal attention that large companies cannot match, ensuring you receive solutions that truly fit your business.`,
      },
      {
        number: "No.3",
        title: "A People-Centered Company",
        description: `We believe that meaningful relationships are the foundation of long-term success. We value everyone connected to our company — customers, partners, employees and their families. Profit alone is not our purpose; building trust, delivering happiness and creating positive impact for all stakeholders is what drives us.`,
      },
      {
        number: "No.4",
        title: "Comprehensive IT and E-Commerce Services",
        description: `We develop high-quality websites and e-commerce platforms for our clients and provide ongoing maintenance and support to keep them running smoothly. Our experience delivering solutions across different industries allows us to recommend practical, effective strategies that improve performance, enhance user experience, and help your business grow.`,
      },
    ],
  },
};

const AboutUs = () => {
  return (
    <div
      className="relative bg-no-repeat dark:bg-[#192030]" >
      <div className="containerCustom px-4 py-10 lg:py-[90px]">
        {/* Section Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-14">
          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] uppercase">
            {aboutData.title}
          </h2>
          <p className="textColor mt-3 text-[15px]  ">{aboutData.subtitle}</p>
        </div>

        {/* Main Content */}

        <div className="relative mb-16">

          <div className="relative bg-white/80 dark:bg-white/0 backdrop-blur-xl p-10 lg:p-14 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#015099] border-l-6 ">
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
          </div>
        </div>
      </div>

      <div
        className="relative lg:pl-8 border-l-4 border-[#0072B5] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
        <div className="containerCustom px-4 py-10 lg:p-[90px]">
          <div className="relative z-10 bg-white/85 rounded-[15px] px-8 py-5 lg:p-[50px] ">
            <div className="relative lg:pl-[20px] mb-10  ">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.whoWeAre.title}
              </h3>
              <p className="text-[#444a4e] mt-2">
                {aboutData.whoWeAre.description}
              </p>
            </div>

            <div className="relative lg:pl-[20px] mb-10">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.mission.title}
              </h3>
              <p className="text-[#444a4e] mt-2">
                {aboutData.mission.description}
              </p>
            </div>

            <div className="relative lg:pl-[20px] mb-10">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.vision.title}
              </h3>
              <p className="text-[#444a4e] mt-2">
                {aboutData.vision.description}
              </p>
            </div>

            <div className="relative lg:pl-[20px]">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.value.title}
              </h3>

              <div className="mt-4 space-y-3">
                {aboutData.value.description.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-xl shadow"
                  >
                    <h4 className="text-[#1e4969] font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-[#444a4e] ">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerCustom px-4 py-10 lg:p-[90px]">
        {aboutData.highlightSection.enable && (
          <div className="mt-20 bg-[#F4FAFF] dark:bg-[#1f2937] p-10 rounded-[15px] shadow-sm">
            <h3 className="textColor text-[20px] lg:text-[30px] font-bold text-[#0072B5] text-center mb-4 uppercase ">
              {aboutData.highlightSection.title}
            </h3>

            <p className="text-center textColor max-w-[800px] mx-auto text-[15px] leading-7 mb-10">
              {aboutData.highlightSection.description}
            </p>

            <div className="grid  gap-6 mt-8">
              {aboutData.highlightSection.features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#111827] p-6 rounded-[15px] shadow hover:shadow-lg transition-all duration-300"
                >
                  {/* <div className="text-4xl mb-3">{item.number}</div> */}
                  <h4 className="text-[20px] lg:text-[22px] font-bold text-[#0072B5] mb-2">
                    {item.title}
                  </h4>
                  <p
                    className="textColor text-[15px] leading-6"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
