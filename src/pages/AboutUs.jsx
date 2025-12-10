import React from "react";

// import from local
import bgShape from "../assets/images/bgsec.png";
import missionVission from "../assets/images/aboutUs/missonVission.webp"
import heroBg from "../assets/images/hero1.jpg";


const conceptData= {
  heading: 'Make quick decisions, make prompt decisions, and act immediately.',
  paragraphs: [
  'Our philosophy is "make a quick decision, make a quick decision, and act quickly."',
  'We never keep our valued customers waiting.',
  "When a problem arises or you're struggling to deal with it, it's only natural that you want it resolved quickly.",
  "We provide speedy and flexible services and thoroughly support the growth of our customers' businesses.",
  'What we value is human connections.',
  "We want to make everyone involved happy through our services.",
  'With this in mind, we will continue to create new value that will lead to your happiness and growth.',
  ]
};

const aboutData = {
  title: "About Us",
  subtitle: "Innovation, Integrity & Intelligence — this is what defines us.",
  image: missionVission,

  whoWeAre: {
    title: "Who We Are",
    description:
      "AttraBit ICT Solution is a software development company committed to delivering cutting-edge digital solutions that drive business growth and transformation.",
  },

  mission: {
    title: "Our Mission",
    description:
      "Contribute to increasing customer sales by honing our interpersonal skills and practicing quick decision-making and immediate action.",
  },

  vision: {
    title: "Our Vision",
    description:
      "Increase the number of engineers who enjoy their work and contribute to the expansion of the information and communications industry.",
  },
   value: {
    title: "Value",
    description:[
      {
        title: "1. Customer Service",
        text: "We always act from the customer's perspective and strive to provide valuable services by making quick decisions, making quick decisions, and taking immediate action."
      },
      {
        title: "2. Independence and Self-Growth",
        text: "We strive to constantly improve ourselves with curiosity and ambition, and never stop challenging ourselves."
      },
      {
        title: "3. Work Style",
        text: "We maintain a humble attitude, set objectives and goals that meet our customers' needs, and strive for optimal results."
      },
      {
        title: "4. Teamwork and Human Resource Development",
        text: "We build relationships based on mutual respect, focusing on teamwork and never forgetting our compassion and helpful spirit."
      },
      {
        title: "5. Company Management Attitude",
        text: "We strive to act quickly in line with changing times and create an open company where opinions can be freely expressed. We also aim to gain the satisfaction and trust of all our stakeholders and companies, and to build long-lasting relationships."
      }
    ]
      
  },

  highlightSection: {
    enable: true,
    title: "Why Choose Us",
    description: "There are many companies that offer solutions.Here are some reasons why many people choose us.We are committed to providing high-quality IT services and contributing to our customers' success.",

    features: [
      {
        number: "No.1",
        title: "Customer-first spirit.",
        description:
          "Our mission is to meet our customers' needs to the fullest extent possible and provide solid value through IT.We always put our customers first and will accompany them to the very end to realize their IT solutions.There is no need to worry if any trouble occurs.As your business partner, we will respond quickly and accurately, so you can rest assured.",
      },
      {
        number: "No.2",
        title: "We have the flexibility to make proposals because we are a small but elite team.",
        description: "We are a completely independent IT services company.As we do not have a parent company, we are not bound by or influenced by any other company, and are therefore able to propose optimal solutions from the customer's perspective.Another advantage is the flexibility that only a small, elite team can provide.We provide flexible support that is difficult for large companies to provide, and deliver results that you can be satisfied with.",
      },
      {
        number: "No.3",
        title: "A company that values ​​people.",
        description:
          "Our policy is to value everyone involved, including our customers, suppliers, employees, and their families, and to create happiness for everyone.Making profits is not the only purpose of a company's existence.We believe that the trust that is born from connections between people is an essential element for a company to grow.",
      },
      {
        number: "No.4",
        title: "We handle a wide range of services, from IT to logistics and e-commerce.",
        description:
          "Our company not only provides IT solutions but also logistics services.We can handle a wide range of business needs, from physical logistics to online commerce (EC).Taking advantage of the strength of handling logistics through our own EC site, we will propose effective measures to increase sales.",
      },
    ],
  },
};


const AboutUs = () => {
  return (
    <div
      className="relative bg-no-repeat dark:bg-[#192030]"
      style={{
        backgroundImage: `url(${bgShape})`,
        backgroundPosition: "top left",
        backgroundSize: "auto",
      }}
    >
      <div className="containerCustom px-4 py-10 lg:py-[90px]">

        {/* Section Heading */}
        <div className="max-w-[900px] mx-auto text-center mb-14">
          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] uppercase">
            {aboutData.title}
          </h2>
          <p className="textColor mt-3 text-[15px]  ">
            {aboutData.subtitle}
          </p>
        </div>

        {/* Main Content */}

        <div className="conceptSec bg-white/30 dark:bg-white/5 shadow-[0px_2px_7px_-0px_rgba(183,185,233,1)]  p-8 rounded-2xl border-l-4 border-[#0072B5] mb-8 lg:mb-15 ">
          <h3 className="textColor text-[22px] lg:text-[32px] font-bold mb-4">
            {conceptData.heading}
          </h3>

          <div className="space-y-4">
            {conceptData.paragraphs.map((p, idx) => (
              <p key={idx} className="textColor leading-relaxed text-[16px]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative lg:pl-8 border-l-4 border-[#0072B5] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
          <div className="containerCustom px-4 py-10 lg:p-[90px]">
            <div className="relative z-10 bg-white/50 rounded-[15px] px-8 py-5 lg:p-[50px] ">
            
            <div className="relative lg:pl-[20px] mb-10  ">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.whoWeAre.title}
              </h3>
              <p className="text-[#444a4e] mt-2">{aboutData.whoWeAre.description}</p>
            </div>

            <div className="relative lg:pl-[20px] mb-10">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.mission.title}
              </h3>
              <p className="text-[#444a4e] mt-2">{aboutData.mission.description}</p>
            </div>

            <div className="relative lg:pl-[20px] mb-10">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.vision.title}
              </h3>
              <p className="text-[#444a4e] mt-2">{aboutData.vision.description}</p>
            </div>

            <div className="relative lg:pl-[20px]">
              <span className="absolute -left-4 top-2 w-3 h-3 bg-[#0072B5] "></span>
              <h3 className="text-[#444a4e] text-[22px] font-bold">
                {aboutData.value.title}
              </h3>

              <div className="mt-4 space-y-3">
                {aboutData.value.description.map((item, index) => (
                  <div key={index} className="p-4 bg-white/20 backdrop-blur-sm rounded-xl shadow">
                    <h4 className="text-[#1e4969] font-semibold">{item.title}</h4>
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
                    <p className="textColor text-[15px] leading-6">
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
