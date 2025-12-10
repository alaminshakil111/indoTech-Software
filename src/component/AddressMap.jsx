import React from "react";
import { NavLink } from "react-router-dom";

import locationBgImg from "../assets/images/locationbgImg.jpg";

// Array of addresses / locations
const locations = [
  {
    companyName: "attrabit ICT Solution",
    address:
      "📍 Concord Farhan Building (2nd Floor) \n House-08 ,Road-3, Block-J, Baridhara R/A \n Dhaka-1212, Bangladesh",
    phone: "📞 +880-167-106-0576",
    hours: "🕒 9 am - 6 pm (Mon-Sat)",
    email: "✉️ info@attrabit.net",
    bgImage: locationBgImg,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.54066700231!2d90.42148897592858!3d23.799365786893713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e6aed1077%3A0xdfff52439677f321!2sAttraBit%20ICT%20Solution%20Ltd.!5e0!3m2!1sen!2sbd!4v1762102936045!5m2!1sen!2sbd",
  }
];


const AddressMap = () => {
  return (
    <div className="space-y-10">
      {locations.map((loc, index) => (
        <section
          key={index}
          className="w-full mx-auto grid md:grid-cols-2 gap-0 min-h-[500px]"  >
          {/* Left Side - Contact Info */}
          <div
            className="relative flex flex-col justify-center items-center px-10 py-12 text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${loc.bgImage})` }} >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 space-y-4 whitespace-pre-line ">
              <h2 className="text-orange-400 text-xl font-semibold">
                {loc.companyName}
              </h2>
              <p>{loc.address}</p>
              <p>{loc.phone}</p>
              <p>{loc.hours}</p>
              <p>{loc.email}</p>

              <NavLink to="/contact" className="mt-4 btnGradient">Contact Us</NavLink>
            </div>
          </div>

          {/* Right Side - Google Map */}
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
