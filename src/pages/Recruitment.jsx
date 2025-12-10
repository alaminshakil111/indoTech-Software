import React from "react";
import { Link } from "react-router-dom";

// import from local
import Banner from '../assets/images/recruitment/recruitmentbanner.png';
import { recruitmentData } from "../Data/RecruitmentData";

const Recruitment = () => {
  return (
    <div className="dark:bg-[#192030]">
        <div className="containerCustom px-4 py-12">
            <div >
                <img src={Banner} alt="Recrtuiment banner" className="w-full rounded-[15px] " />
            </div>
            
            <div className=" w-[90%] mx-auto relative bg-[#fff] shadow-md dark:bg-[#192030] text-left -mt-[50px] rounded-[15px] p-4 lg:p-7 mb-16">
                <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mb-4">
                Careers at AttraBit ICT Solution
                </h2>

                <p className="textColor text-[15px] leading-7">
                AttraBit ICT Solutions is a Japan-based technology firm dedicated to 
                delivering high-quality IT services, digital transformation solutions, 
                and infrastructure optimization. We believe in empowering businesses through innovation, global expertise, 
                and a strong commitment to service excellence.  
                </p>

                <p className="textColor text-[15px] leading-7 mt-4">
                Join our talented team and help us build the next generation of smart, 
                scalable, and impactful digital solutions.
                </p>
            </div>

            {/* Job Openings Section */}
            <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mb-10 text-center">
                Open Job Positions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recruitmentData.map((job) => (
                <div
                    key={job.id}
                    className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-[#1f2937]"
                >
                    <h3 className="text-xl font-semibold text-[#0072B5]">
                    {job.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.shortDescription}
                    </p>

                    <p className="mt-3 text-sm text-gray-500">
                    <strong>Location:</strong> {job.location}
                    </p>
                    <p className="text-sm text-gray-500">
                    <strong>Type:</strong> {job.type}
                    </p>

                    <Link
                    to={`/RecruitmentDetails/${job.id}`}
                    className="inline-block mt-5 bg-[#0072B5] text-white px-5 py-2 rounded-lg hover:bg-[#005b91]"
                    >
                    Apply Now
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Recruitment;
