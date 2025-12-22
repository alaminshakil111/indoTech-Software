import React from "react";
import { Link, NavLink } from "react-router-dom";

// import from local
import Banner from '../assets/images/recruitment/recruitmentbanner.png';
import { recruitmentData } from "../Data/RecruitmentData";

const whyLoveUs = [
  {
    title: "Innovative Projects",
    desc: "Build smart, scalable solutions using the latest technologies.",
  },
  {
    title: "Global Exposure",
    desc: "Collaborate with diverse teams and clients around the world.",
  },
  {
    title: "Growth & Learning",
    desc: "Access training, mentorship and opportunities to level up your skills.",
  },
  {
    title: "Impactful Work",
    desc: "Your ideas and contributions make a real difference.",
  },
  {
    title: "People-First Culture",
    desc: "We value teamwork, respect and personal growth.",
  },
];

const Recruitment = () => {
  return (
    <div className="dark:bg-[#192030]">
        <div className="containerCustom px-4 py-12">
            <div >
                <img src={Banner} alt="Recrtuiment banner" className="w-full rounded-[15px] " />
            </div>
            
            <div className=" w-[90%] mx-auto relative bg-[#fff] shadow-md dark:bg-[#192030] text-left -mt-[50px] rounded-[15px] p-4 lg:p-7 mb-16">
                <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mb-4">
                Careers at IndoTech
                </h2>

                <p className="textColor text-[15px] leading-7">
                IndoTech is a Japan-based technology company specializing in comprehensive IT services, digital transformation, and infrastructure optimization. With a strong focus on quality, reliability, and long-term partnerships, IndoTech supports organizations in achieving operational excellence through innovative and scalable technology solutions.
                </p>

                <h3 className="font-semibold mt-4 mb-2 text-[#0072B5]">
                    Why You’ll Love Working With Us:
                </h3>

                <ul className=" textColor list-disc ml-6 space-y-1">
                    {whyLoveUs.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}:</strong> {item.desc}
                    </li>
                    ))}
                </ul>

                <p className=" textColor mt-4">
                    We are looking for passionate, creative and driven professionals
                    ready to solve challenges, innovate and grow with us.
                </p>

                <p className=" textColor mt-2 font-semibold">
                    Be part of our journey. Apply today and help shape the future of IT.
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

                    <div className="mt-5 flex justify-between gap-2">
                        <NavLink
                            to={`/RecruitmentDetails/${job.id}`}
                            className="btnGradient w-fit ">
                            Check Details
                        </NavLink>
                    </div>

                    
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Recruitment;
