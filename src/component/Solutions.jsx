import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const accordionData = [
  {
    title: "ICT Solutions",
    subtitle: "We provide end-to-end ICT solutions to ensure your infrastructure, applications and data are secure, reliable and scalable. Our expertise spans cloud management, servers and storage, databases and fraud prevention, enabling businesses to operate efficiently and safely.",
    links: [
      { label: "Cloud Management", 
        to: "/solutions/solution-ict", 
        tabIndex: 0,

      },
      { label: "Servers & Storage", to: "/solutions/solution-ict", 
        tabIndex: 1,
      },
      { label: "Database", to: "/solutions/solution-ict", 
        tabIndex: 2,
      },
      { label: "Crime Prevention Security", to: "/solutions/solution-ict", 
        tabIndex: 3,
      },
    ],
  },
  {
    title: "Network Solutions",
    subtitle: "We provide end-to-end network solutions that ensure reliable connectivity, enhanced communication and robust security. Our services cover data networking, audio/video systems and security implementation, designed to optimize your business operations.",
    links: [
      { label: "Data Network", to: "/solutions/solution-network", 
        tabIndex: 0,
      },
      { label: "Audio and Video Solutions", to: "/solutions/solution-network", 
        tabIndex: 1,
      },
      { label: "Security Implementation", to: "/solutions/solution-network", 
        tabIndex: 2,
      },
    ],
  },
  // {
  //   title: "Zero Trust Security",
  //   subtitle: "We help businesses secure their entire digital ecosystem with Zero Trust — a modern security approach that assumes no user, device, or application should be trusted by default. Every access request is verified, monitored and controlled to protect your organization from cyber threats.",
  //   links: [
  //     { label: "Identity Security", to: "/solutions/solution-zerotrustsecurity" },
  //     { label: "Device Security", to: "/solutions/solution-zerotrustsecurity" },
  //     { label: "Network Security (Micro-Segmentation)", to: "/solutions/solution-zerotrustsecurity" },
  //     { label: "Application Security", to: "/solutions/solution-zerotrustsecurity" },
  //     { label: "Data Security", to: "/solutions/solution-zerotrustsecurity" },
  //     { label: "Analytics & Monitoring", to: "/solutions/solution-zerotrustsecurity" },
  //   ],
  // },
  {
    title: "SD-WAN (Software-Defined Wide Area Network) Solution",
    subtitle: "We provide flexible, secure and high-performance SD-WAN solutions tailored to your business needs. Whether you prefer fully managed services, self-managed setups, cloud-delivered deployments, or hybrid models, our SD-WAN solutions optimize connectivity, reliability and control.",
    links: [
      { label: "Managed SD-WAN Solution", to: "/solutions/solution-sdwan", 
        tabIndex: 0,
      },
      { label: "DIY (Self-Managed) SD-WAN Solution", to: "/solutions/solution-sdwan", 
        tabIndex: 1,
      },
      { label: "Cloud-Delivered SD-WAN Solution", to: "/solutions/solution-sdwan", 
        tabIndex: 2,
      },
      { label: "Hybrid SD-WAN Solution", to: "/solutions/solution-sdwan", 
        tabIndex: 3,
      },
    ],
  },
  {
    title: "LAN & Wi-Fi Solutions",
    subtitle: "We design, deploy and manage enterprise-grade LAN and Wi-Fi networks using Cisco and FortiGate solutions, including Cisco ASA security appliances for firewalling and VPN. Our networks deliver high performance, reliability and security for all business environments, from small offices to large campuses.",
    links: [
      { label: "Wired LAN Solution (Ethernet LAN)", to: "/solutions/solution-lanwifi", 
        tabIndex: 0,

      },
      { label: "Wireless LAN / WiFi Solution", to: "/solutions/solution-lanwifi", 
        tabIndex: 1,

      },
      { label: "Hybrid LAN + WiFi Solution", to: "/solutions/solution-lanwifi", 
        tabIndex: 2,

      },
      { label: "Enterprise WiFi Solution (High-Density WiFi)", to: "/solutions/solution-lanwifi", 
        tabIndex: 3,

      },
      { label: "Point-to-Point (P2P) Wireless Link", to: "/solutions/solution-lanwifi", 
        tabIndex: 4,

      },
      { label: "Point-to-Point & Mesh WiFi Solution", to: "/solutions/solution-lanwifi", 
        tabIndex: 5,

      },
    ],
  },
  {
    title: "DX Solution",
    subtitle: "We help organizations modernize operations, adopt new technologies and improve customer experiences through digital transformation. Our DX solutions combine strategy, technology and process optimization to achieve measurable business outcomes.",
    links: [
      { label: "IT Modernization & Cloud Adoption", to: "/solutions/solution-dx", 
        tabIndex: 0,
      },
      { label: "Process Automation & Workflow Optimization", to: "/solutions/solution-dx", 
        tabIndex: 1,
      },
      { label: "Customer Experience (CX) Digitalization", to: "/solutions/solution-dx", 
        tabIndex: 2,
      },
      { label: "Data Analytics & Business Intelligence", to: "/solutions/solution-dx", 
        tabIndex: 3,
      },
      { label: "Enterprise Mobility & Collaboration", to: "/solutions/solution-dx", 
        tabIndex: 4,
      },
    ],
  },
  {
    title: "Internal AI Solutions",
    subtitle: "We help organizations leverage AI internally to optimize operations, automate processes, enhance decision-making and improve security. Our AI solutions cover automation, predictive analytics, chatbots, document intelligence, recommendations and monitoring systems.",
    links: [
      { label: "AI Automation Systems", to: "/solutions/solution-internalai", 
        tabIndex: 0,
      },
      { label: "AI Predictive Analytics", to: "/solutions/solution-internalai", 
        tabIndex: 1,
      },
      { label: "AI Chatbots & Virtual Assistants (Internal Use)", to: "/solutions/solution-internalai", 
        tabIndex: 2,
      },
      { label: "Document Intelligence & AI OCR Systems", to: "/solutions/solution-internalai", 
        tabIndex: 3,
      },
      { label: "AI Recommendation & Decision Systems", to: "/solutions/solution-internalai", 
        tabIndex: 4,
      },
      { label: "AI Monitoring & Security Intelligence", to: "/solutions/solution-internalai", 
        tabIndex: 5,
      },
    ],
  },
  {
    title: "Global Solutions",
    subtitle: "We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise software, digital transformation and global IT support, ensuring consistent performance and security across regions.",
    links: [
      { label: "Cloud & Infrastructure Solutions", to: "/solutions/solution-globalsolution", 
        tabIndex: 0,
      },
      { label: "Cybersecurity & Data Protection Solutions", to: "/solutions/solution-globalsolution", 
        tabIndex: 1,
      },
      { label: "Business Process Automation Solutions", to: "/solutions/solution-globalsolution", 
        tabIndex: 2,
      },
      { label: "Enterprise Software Solutions", to: "/solutions/solution-globalsolution", 
        tabIndex: 3,
      },
    ],
  },
];

const Solutions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="solutionsSection relative bg-no-repeat flex flex-col gap-4 sm:flex-row sm:gap-4 items-end 
    pt-[20px] pb-[20px] pr-[20px] lg:pt-[60px] lg:pb-[60px] lg:pl-[55px] "  >
      <div className="containerCustom px-4 py-10 lg:py-[75px] bg-white rounded-[10px] lg:px-20 ">
          <div className="max-w-[1000px] m-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0072B5] uppercase mb-3 " 
              style={{
                  textShadow: `
                    rgb(166 215 255 / 70%) 1px 1px 10px, 
                    rgb(255 255 255 / 70%) -1px 1px 10px, 
                    rgba(77, 111, 139, 0.7) 1px -1px 10px, 
                    rgba(77, 111, 139, 0.7) -1px -1px 10px
                  `
              }}> Our Solutions </h2>
              <p className="textColor leading-tight">
                  Strategic solutions that optimize workflow efficiency and empower teams to achieve more.
              </p>
          </div>

          {/* Wrapper grid for left-right layout */}
          <div className="textColor grid grid-cols-1 gap-8">
            {accordionData.map((item, index) => (
                <div key={index} className={` border-b border-gray-300 py-4 cursor-pointer select-none `}>
                <div
                    className="flex items-start justify-between"
                    onClick={() => handleToggle(index)} >
                    <div>
                        <h5 className="text-[18px] lg:text-[20px] font-semibold">
                            {item.title}
                        </h5>
                        <p className="textColor text-[15px] mt-1">{item.subtitle}</p>
                    </div>

                    <span className="text-2xl font-bold">
                        {openIndex === index ? <CiCircleMinus className="text-[#FF5650]" /> : <CiCirclePlus className="text-[#336DBC]" />}
                    </span>
                </div>

                {openIndex === index && (
                    <div className="mt-4 space-y-2 pl-2">
                      {openIndex === index && (
                        <div className="grid grid-cols-2 gap-2 pl-3 md:pl-4 lg:pl-[25px] ">
                            {item.links.map((link, i) => (
                              
                                <li>
                                  <NavLink
                                    key={i}
                                    to={link.to}
                                    state={{ tabIndex: link.tabIndex }}
                                    className="block text-[#0072B5] hover:underline text-sm" >
                                    {link.label}
                                  </NavLink>
                                </li>
                              
                            ))}
                          </div>
                      )}

                    </div>
                    
                )}
                </div>
            ))}
          </div>
      </div>
      
      <NavLink to="/about-us" className="w-fit btnGradient flex items-center gap-2 lg:mx-[50px]
      lg:px-[70px]! lg:py-[70px] xl:mx-[110px]
      xl:px-[90px]! xl:py-[85px] whitespace-nowrap ">
        Our Partner <HiOutlineArrowLongRight/>
      </NavLink>
    </div>

  );
};

export default Solutions;
