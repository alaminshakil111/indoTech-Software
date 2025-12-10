import React from "react";

// From Local
import team1 from "/public/images/Vivasoft-Developer-1.webp";
import team2 from "/public/images/Vivasoft-Developer-Software-Company-1.webp";
import team3 from "/public/images/Engineers-Meeting-Vivasoft.webp";
import team4 from "/public/images/meeting-vivasoft.webp";
import team5 from "/public/images/Developer-team-Meeting.webp";
import team6 from "/public/images/vivasoft-dev.webp";
import team7 from "/public/images/vivasoft-developers-team-collaboration-6627a11fdcfbd-768x454-1.webp";
import team8 from "/public/images/Vivasoft-Engineer-1.webp";
import team9 from "/public/images/Skilled-Enginner-Vivasoft-Limited-1.webp";



const stats = [
  { title: "Top Talents", value: "300+", color: "bg-blue-100" },
  { title: "Projects", value: "80+", color: "bg-pink-100" },
  { title: "Experience", value: "8+", color: "bg-green-100" },
  { title: "Tech Stack", value: "20+", color: "bg-purple-100" },
];

const Banner = () => {

    return(
        <section className="w-full bg-[#f6fbff] py-12 px-6">
            <div className=" items-center max-w-7xl mx-auto">
                <h1> ATTRACTIVE AND ABSOLUTE SOLUTION </h1>
                <p> For Better experience, Complete ICT Solutions Software Development you can trust our company blindly. Save time and reduce costs with intuitive Unified Endpoint Management from Attrabit </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center max-w-8xl mx-auto">
                
                <div>
                    <div className="grid grid-cols-2" >
                        {/* Left side Image */}
                        <div className="rounded-tl-[50px] overflow-hidden">
                        <img
                            src={team1}
                            alt="team"
                            className="w-full h-full object-cover"
                        />
                        </div>

                        {/* Stat Card */}
                        <div className={`flex flex-col self-end justify-center items-center rounded-tr-[50px] ${stats[0].color} p-6`}>
                            <p className="text-gray-700">{stats[0].title}</p>
                            <h2 className="text-3xl font-bold">{stats[0].value}</h2>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="rounded-tr-[50px] overflow-hidden">
                        <img
                            src={team3}
                            alt="team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Stat Card */}
                <div className={`flex flex-col justify-center items-center rounded-bl-[50px] ${stats[1].color} p-6`}>
                <p className="text-gray-700">{stats[1].title}</p>
                <h2 className="text-3xl font-bold">{stats[1].value}</h2>
                </div>

                {/* Stat Card */}
                <div className={`flex flex-col justify-center items-center rounded-tr-[50px] ${stats[2].color} p-6`}>
                <p className="text-gray-700">{stats[2].title}</p>
                <h2 className="text-3xl font-bold">{stats[2].value}</h2>
                </div>

                {/* Image */}
                <div className="rounded-bl-[50px] overflow-hidden">
                <img
                    src={team1}
                    alt="team"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Stat Card */}
                <div className={`flex flex-col justify-center items-center rounded-tl-[50px] ${stats[3].color} p-6`}>
                <p className="text-gray-700">{stats[3].title}</p>
                <h2 className="text-3xl font-bold">{stats[3].value}</h2>
                </div>

                {/* Image */}
                <div className="rounded-br-[50px] overflow-hidden">
                <img
                    src={team1}
                    alt="team"
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
        </section>
    );
};

export default Banner;