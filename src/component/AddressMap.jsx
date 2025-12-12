import React from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

import locationBgImg from "../assets/images/locationbgImg.jpg";

// Address Locations
const locations = [
  {
    companyName: "Indo Tech KK",
    address: `7F Kanda Jimbocho2-chome Building, 2-2 Kanda Jimbocho, Chiyoda-ku`,
    city: "Tokyo",
    country: "Japan", 
    phone: "03-6672-6855",
    fax: "03-6674-1269",
    hours: "9 am - 6 pm (Mon-Sat)",
    email: "kojinjouhou@indotech.jp",
    bgImage: locationBgImg,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.54066700231!2d90.42148897592858!3d23.799365786893713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e6aed1077%3A0xdfff52439677f321!2sAttraBit%20ICT%20Solution%20Ltd.!5e0!3m2!1sen!2sbd!4v1762102936045!5m2!1sen!2sbd",
  },
];

const AddressMap = () => {
  return (
    <div className="space-y-10">
      {locations.map((loc, index) => (
        <section
          key={index}
          className="w-full mx-auto grid md:grid-cols-2 gap-0 min-h-[500px]"
        >
          {/* Left Side - Contact Info */}
          <div
            className="relative flex flex-col justify-center items-center px-10 py-12 text-black bg-cover bg-center"
            
          >
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 space-y-4 whitespace-pre-line">
              <h2 className=" text-[#FF8904]  text-xl font-semibold">
                {loc.companyName}
              </h2>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
  
                {/* Address */}
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Address</strong>
                  <span>{loc.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">City</strong>
                  <span>{loc.city}</span>
                </li>
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Country</strong>
                  <span>{loc.country}</span>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Phone</strong>
                  <span>{loc.phone}</span>
                </li>

                {/* Fax */}
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Fax</strong>
                  <span>{loc.fax}</span>
                </li>

                {/* Hours */}
                {/* <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Opening</strong>
                  <span>{loc.hours}</span>
                </li> */}

                {/* Email */}
                <li className="flex items-start gap-3">
                  <strong className="min-w-[90px] font-semibold text-gray-900 dark:text-white">Email</strong>
                  <span>{loc.email}</span>
                </li>

              </ul>


              <NavLink to="/contact" className="mt-[15px] inline-block py-2! btnGradient">
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full h-[500px] md:h-auto">
            <iframe
              title={loc.companyName}
              src={loc.mapSrc}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AddressMap;
