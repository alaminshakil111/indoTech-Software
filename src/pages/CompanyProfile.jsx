import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaGlobe, FaCalendarAlt } from "react-icons/fa";

import profileImage from '../assets/images/companyPP.png';

const CompanyProfile = () => {
  return (
    <section className=" bg-gray-50">
      <div className="containerCustom mx-auto px-4 py-10 ">
        <img src={profileImage} className="w-full h-64 object-cover rounded-lg shadow" alt={profileImage} />
        <div className="max-w-[1000px] m-auto text-center mb-12 mt-10 ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0072B5] uppercase mb-3 " 
              style={{
                  textShadow: `
                    rgb(166 215 255 / 70%) 1px 1px 10px, 
                    rgb(255 255 255 / 70%) -1px 1px 10px, 
                    rgba(77, 111, 139, 0.7) 1px -1px 10px, 
                    rgba(77, 111, 139, 0.7) -1px -1px 10px
                  `
              }}> Company Profile </h2>
              <p className="textColor leading-tight">
                  Key information about our company, legal identity, and headquarters.
              </p>
          </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-[#015099] border-l-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaBuilding className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Legal Company Name</p>
                  <p className="font-semibold text-gray-800">
                    Indo Tech KK
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Billing Address</p>
                  <p className="font-medium text-gray-700">
                    7F Kanda Jimbocho 2-chome Building,<br />
                    2-2 Kanda Jimbocho, Chiyoda-ku,<br />
                    Tokyo 101-0051, Japan
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">JP Mobile Number</p>
                <p className="font-medium text-gray-800">
                  03-6672-6855
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaGlobe className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Company Website</p>
                  <a
                    href="https://www.indotech.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    www.indotech.jp
                  </a>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Headquarters Location</p>
                <p className="font-medium text-gray-800">
                  Tokyo, Japan
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCalendarAlt className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Year Established</p>
                  <p className="font-medium text-gray-800">
                    2016
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
