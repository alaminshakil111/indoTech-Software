import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";

import bgShape from "../assets/images/bgsec.png";

const accordionData = [
  {
    title: "ICT Solutions",
    subtitle: "We provide end-to-end ICT solutions to ensure your infrastructure, applications, and data are secure, reliable, and scalable. Our expertise spans cloud management, servers and storage, databases, and fraud prevention, enabling businesses to operate efficiently and safely.",
    links: [
      { label: "Cloud Management", to: "/solutions/solution-ict" },
      { label: "Servers & Storage", to: "/solutions/solution-ict" },
      { label: "Database", to: "/solutions/solution-ict" },
      { label: "Crime Prevention Security", to: "/solutions/solution-ict" },
    ],
  },
  {
    title: "Network Solutions",
    subtitle: "We provide end-to-end network solutions that ensure reliable connectivity, enhanced communication, and robust security. Our services cover data networking, audio/video systems, and security implementation, designed to optimize your business operations.",
    links: [
      { label: "Data Network", to: "/solutions/solution-network" },
      { label: "Audio and Video Solutions", to: "/solutions/solution-network" },
      { label: "Security Implementation", to: "/solutions/solution-network" },
    ],
  },
  // {
  //   title: "Zero Trust Security",
  //   subtitle: "We help businesses secure their entire digital ecosystem with Zero Trust — a modern security approach that assumes no user, device, or application should be trusted by default. Every access request is verified, monitored, and controlled to protect your organization from cyber threats.",
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
    subtitle: "We provide flexible, secure, and high-performance SD-WAN solutions tailored to your business needs. Whether you prefer fully managed services, self-managed setups, cloud-delivered deployments, or hybrid models, our SD-WAN solutions optimize connectivity, reliability, and control.",
    links: [
      { label: "Managed SD-WAN Solution", to: "/solutions/solution-sdwan" },
      { label: "DIY (Self-Managed) SD-WAN Solution", to: "/solutions/solution-sdwan" },
      { label: "Cloud-Delivered SD-WAN Solution", to: "/solutions/solution-sdwan" },
      { label: "Hybrid SD-WAN Solution", to: "/solutions/solution-sdwan" },
    ],
  },
  {
    title: "LAN & Wi-Fi Solutions",
    subtitle: "We design, deploy, and manage enterprise-grade LAN and Wi-Fi networks using Cisco and FortiGate solutions, including Cisco ASA security appliances for firewalling and VPN. Our networks deliver high performance, reliability, and security for all business environments, from small offices to large campuses.",
    links: [
      { label: "Wired LAN Solution (Ethernet LAN)", to: "/solutions/solution-lanwifi" },
      { label: "Wireless LAN / WiFi Solution", to: "/solutions/solution-lanwifi" },
      { label: "Hybrid LAN + WiFi Solution", to: "/solutions/solution-lanwifi" },
      { label: "Enterprise WiFi Solution (High-Density WiFi)", to: "/solutions/solution-lanwifi" },
      { label: "Point-to-Point (P2P) Wireless Link", to: "/solutions/solution-lanwifi" },
      { label: "Point-to-Point & Mesh WiFi Solution", to: "/solutions/solution-lanwifi" },
    ],
  },
  {
    title: "DX Solution",
    subtitle: "We help organizations modernize operations, adopt new technologies, and improve customer experiences through digital transformation. Our DX solutions combine strategy, technology, and process optimization to achieve measurable business outcomes.",
    links: [
      { label: "IT Modernization & Cloud Adoption", to: "/solutions/solution-dx" },
      { label: "Process Automation & Workflow Optimization", to: "/solutions/solution-dx" },
      { label: "Customer Experience (CX) Digitalization", to: "/solutions/solution-dx" },
      { label: "Data Analytics & Business Intelligence", to: "/solutions/solution-dx" },
      { label: "Enterprise Mobility & Collaboration", to: "/solutions/solution-dx" },
    ],
  },
  {
    title: "Internal AI Solutions",
    subtitle: "We help organizations leverage AI internally to optimize operations, automate processes, enhance decision-making, and improve security. Our AI solutions cover automation, predictive analytics, chatbots, document intelligence, recommendations, and monitoring systems.",
    links: [
      { label: "AI Automation Systems", to: "/solutions/solution-internalai" },
      { label: "AI Predictive Analytics", to: "/solutions/solution-internalai" },
      { label: "AI Chatbots & Virtual Assistants (Internal Use)", to: "/solutions/solution-internalai" },
      { label: "Document Intelligence & AI OCR Systems", to: "/solutions/solution-internalai" },
      { label: "AI Recommendation & Decision Systems", to: "/solutions/solution-internalai" },
      { label: "AI Monitoring & Security Intelligence", to: "/solutions/solution-internalai" },
    ],
  },
  {
    title: "Global Solutions",
    subtitle: "We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise We provide comprehensive global IT solutions designed to help enterprises scale internationally. Our services cover cloud and infrastructure, cybersecurity, business process automation, enterprise software, digital transformation, and global IT support, ensuring consistent performance and security across regions.",
    links: [
      { label: "Cloud & Infrastructure Solutions", to: "/solutions/solution-globalsolution" },
      { label: "Cybersecurity & Data Protection Solutions", to: "/solutions/solution-globalsolution" },
      { label: "Business Process Automation Solutions", to: "/solutions/solution-globalsolution" },
      { label: "Enterprise Software Solutions", to: "/solutions/solution-globalsolution" },
    ],
  },
];

const Solutions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="solutionsSection relative bg-no-repeat " 
        style={{
            backgroundImage: `url(${bgShape})`,
            backgroundPosition: "top left",
            backgroundSize: "auto"
        }}>
        <div className="containerCustom px-4 py-10 lg:py-[75px]">
            <div className="max-w-[1000px] m-auto text-center mb-12">
                <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mb-3 uppercase ">Our Solutions</h2>
                <p className="textColor leading-tight">
                    Strategic solutions that optimize workflow efficiency and empower teams to achieve more.
                </p>
            </div>

            {/* Wrapper grid for left-right layout */}
            <div className="textColor grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accordionData.map((item, index) => (
                <div key={index} className={` border-b border-gray-300 py-4 cursor-pointer select-none ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
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
    </div>

  );
};

export default Solutions;
