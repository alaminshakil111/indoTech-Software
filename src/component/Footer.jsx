import React from "react";
import { NavLink } from "react-router-dom";

// import from local
import logo from "../assets/images/attrabit_logo.png";
import SocialLink from "./SocialLink";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const footerData = [
  {
    title: null,
    items: [
      { label: "Personal Information Protection Policy", 
        to: "/privacypolicy", 
        tabIndex: 0,
      },
      { label: "Regarding the handling of personal information", 
        to: "/privacypolicy", 
        tabIndex: 1,

      },
      { label: "Regarding the procedure for requesting disclosure of personal information, etc.", 
        to: "/privacypolicy", 
        tabIndex: 2,

      },
      { label: "Contact point for complaints and inquiries regarding personal information", 
        to: "/privacypolicy", 
        tabIndex: 3,

      },
    ],
  },

  {
    title: "Services",
    items: [
      { label: "AI & Automation", to: "/services/service-AI&Automation" },
      { label: "ICT Managed Service", to: "/services/service-IctManagedServices" },
      { label: "Software Development", to: "/services/service-SoftwareDevelopment" },
      { label: "Zero Trust Security", to: "/services/service-zerotrustsecurity" },
      { label: "Business Consultation", to: "/consultancy/business" },
    ],
  },

  {
    title: "Solutions & Products",
    items: [
      { label: "ICT Solutions", to: "/solutions/solution-ict" },
      { label: "Network Solutions", to: "/solutions/solution-network" },
      { label: "SD WAN Solution", to: "/solutions/solution-sdwan" },
      { label: "LAN & WiFi Solution", to: "/solutions/solution-lanwifi" },
      { label: "DX Solution", to: "/solutions/solution-dx" },
      { label: "Internal AI Solutions", to: "/solutions/solution-internalai" },
      { label: "Global Solution", to: "/solutions/solution-globalsolution" },
    ],
  },

  {
    title: null,
    items: [
      {label: "Company Information", to: "/services/service-SoftwareDevelopment" },
      {label: "Recruitment", to: "/services/service-SoftwareDevelopment" },
    ],
  },

  {
    title: "Follow Us",
    items: [], // will render SocialLink
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1E1E1E] to-[#0F1E2D] text-[#c4c6c7] text-sm">
      <div className="containerCustom px-4 py-10 lg:py-[75px] grid grid-cols-1 md:grid-cols-5 gap-10">

        {footerData.map((data, index) => (
          <div key={index}>

            {/* Company Logo on first column */}
            {index === 0 && (
              <img
                loading="lazy"
                src={logo}
                alt="Company Logo"
                className="w-28 mb-4"
              />
            )}

            {data.title && (
              <h4 className="font-semibold text-base mb-3">{data.title}</h4>
            )}

            <ul className="space-y-2 opacity-90 leading-5">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">

                  {item.icon && <span>{item.icon}</span>}
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      state={{ tabIndex: item.tabIndex }}
                      className="hover:text-white hover:opacity-100 opacity-80 transition"
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <p className="opacity-80 text-[15px]! whitespace-pre-line ">{item.label}</p>
                  )}

                </li>
              ))}
            </ul>
            {data.title === "Follow Us" && (
              <div className="mt-4">
                <SocialLink />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center md:flex md:justify-between md:items-center px-6 py-4 text-xs opacity-80">
        <p className="text-[12px]"> © 2025 IndoTech KK </p>

        <div className="mt-2 md:mt-0">
          <NavLink
            to="/privacypolicy"
            className="cursor-pointer hover:opacity-100 hover:text-white transition"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/contact"
            className="cursor-pointer hover:opacity-100 hover:text-white transition"
          >
            {" "} | Contact Information
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
