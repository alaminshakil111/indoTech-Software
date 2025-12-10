import React from "react";

// import from local
import bgShape from "../assets/images/bgsec.png";
import { softDevelopmentData } from "../Data/SoftwareDevData";

const SoftwareDev = () => {
    const { stepsData, ...paragraphs } = softDevelopmentData;

  return (
    <section className=' dark:bg-[#192030] relative bg-no-repeat textColor '
            style={{
            backgroundImage: `url(${bgShape})`,
            backgroundPosition: "top left",
            backgroundSize: "auto"
        }}>
        <div className="containerCustom px-4 py-10 lg:py-[75px]">

            <h2 className="text-[24px] lg:text-[36px] font-bold text-center text-[#0072B5] mb-3"> Software Development </h2>

            <div className="space-y-5 textColor text-[15px] leading-relaxed mb-14">
            {Object.values(paragraphs).map((para, index) => (
                <p key={index}>{para}</p>
            ))}
            </div>

            <div className="space-y-20">
                {stepsData.map((step, index) => (
                    <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-10 ${
                        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                    >
                    <div className="lg:w-1/2 w-full">
                        <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl shadow-lg w-full object-cover animate-bounce-slow"
                        />
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

                        {Object.entries(step).filter(([key]) => key.startsWith("details")).map(([key, value], i) => (
                            <p key={i} className="mb-4 textColor text-[15px] leading-relaxed"> 
                            <span className="hidden">{key}</span>
                            {value}
                            </p>
                        ))}

                        {step.services && (
                        <ul className=" list-disc list-inside space-y-2">
                            {step.services.map((service, i) => (
                            <li key={i}>{service}</li>
                            ))}
                        </ul>
                        )}

                        {step.steps && (
                        <div className="mt-6 space-y-4">
                            {Object.values(step.steps).map((process, i) => (
                            <div
                                key={i}
                                className=" dark:bg-[#2C2C3B] " >
                                <h4 className="text-lg font-semibold mb-2">
                                    {process.title}
                                </h4>
                                <p className="textColor text-[15px] " >{process.description}</p>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default SoftwareDev;
