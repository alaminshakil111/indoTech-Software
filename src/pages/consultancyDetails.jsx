import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultancyData } from "../Data/ConsultancyData";

const ConsultancyDetails = () => {
  const { id } = useParams();
  const consultancy = consultancyData.find((s) => s.id === id);

  if (!consultancy)
    return (
      <h2 className="text-center py-20 text-xl"> Consultancy Not Found </h2>
    );

  const isObjectDetails = typeof consultancy.details === "object" && !Array.isArray(consultancy.details);
  const dynamicTabs = isObjectDetails ? Object.keys(consultancy.details) : [];
  
  const [activeTab, setActiveTab] = useState(dynamicTabs[0] || null);

  // 🔥 Reset active tab whenever consultancy ID changes
  useEffect(() => {
    if (dynamicTabs.length > 0) {
      setActiveTab(dynamicTabs[0]);
    }
  }, [id]);

  return (
    <div className="dark:bg-[#192030]">
      <div className="containerCustom px-4 py-10">

        <img src={consultancy.img} className="w-full h-64 object-cover rounded-lg shadow" alt={consultancy.title} />

        <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mt-6">{consultancy.title}</h2>
        <p className="textColor mt-1">{consultancy.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Tabs */}
          {isObjectDetails && (
            <div className="space-y-2 hidden md:block ">
              {dynamicTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition cursor-pointer
                    ${activeTab === tab
                        ? "bg-[#0072B5] text-white shadow"
                        : "bg-gray-100 dark:text-white dark:bg-[#151b2b] hover:bg-gray-200 dark:hover:bg-[#222e49]"
                      }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {/* Right Content */}
          <div className="md:col-span-3 textColor bg-white dark:bg-[#151b2b] p-6 rounded-lg shadow">

            {isObjectDetails && activeTab && consultancy.details[activeTab] && (
              <div>
                {/* <h2 className="text-2xl font-semibold mb-4">{activeTab}</h2> */}

                {consultancy.details[activeTab].heading && (
                    <h3 className="text-lg font-semibold mb-2"> 
                      {consultancy.details[activeTab].heading}
                    </h3>
                  )}

                  {consultancy.details[activeTab].para1 && (
                    <p className="textColor mb-4">
                      {consultancy.details[activeTab].para1}
                    </p>
                  )}

                {/* FAQ Section */}
                  {consultancy.details[activeTab].faq && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                      <ul className="list-disc ml-5 textColor">
                        {consultancy.details[activeTab].faq.map((item, i) => (
                          <li key={i} className="mb-2">
                            <strong>Q{i + 1}. {item.question}</strong>
                            <p className="ml-4 textColor">{item.answer}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Strengths Section */}
                  {consultancy.details[activeTab].strengths && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {consultancy.details[activeTab].strengths.title}
                      </h3>
                      <ul className="list-disc ml-5 textColor">
                        {consultancy.details[activeTab].strengths.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Support Section */}
                  {consultancy.details[activeTab].support && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {consultancy.details[activeTab].support.title}
                      </h3>
                      <ul className="list-disc ml-5 textColor">
                        {consultancy.details[activeTab].support.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {consultancy.details[activeTab].img && (
                  <div className="mb-4 lg:my-10">
                    <img
                      src={consultancy.details[activeTab].img}
                      alt={activeTab}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                )}
              </div>
            )}

            {!isObjectDetails && Array.isArray(consultancy.details) && (
              <ul className="list-disc ml-5 textColor space-y-1">
                {consultancy.details.map((item, i) => (
                  <li key={i}>{item}</li> 
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Tab Buttons */}
          {isObjectDetails && (
            <div className="space-y-2 md:hidden mt-4">
              {dynamicTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition cursor-pointer
                    ${activeTab === tab
                      ? "bg-[#0072B5] text-white shadow"
                      : "bg-gray-100 dark:text-white dark:bg-[#151b2b] hover:bg-gray-200 dark:hover:bg-[#222e49]"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ConsultancyDetails;
