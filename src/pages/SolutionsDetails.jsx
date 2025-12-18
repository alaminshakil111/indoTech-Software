import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { solutionsData } from "../Data/SolutionsData";

const SolutionsDetails = () => {
  const { id } = useParams();
  const solution = solutionsData.find((s) => s.id === id);
  const location = useLocation();

  if (!solution)
    return <h2 className="text-center py-20 text-xl"> Solutions Not Found </h2>;

  const isObjectDetails = typeof solution.details === "object" && !Array.isArray(solution.details);
  
  const dynamicTabs = isObjectDetails ? Object.keys(solution.details) : [];

  const initialIndex =
    typeof location.state?.tabIndex === "number"
      ? location.state.tabIndex
      : 0;

  

  const [activeTab, setActiveTab] = useState( dynamicTabs[initialIndex] || dynamicTabs[0] || null);

  // 🔥 Reset active tab whenever solution ID changes
   useEffect(() => {
    if (dynamicTabs.length > 0) {
      const index =
        typeof location.state?.tabIndex === "number"
          ? location.state.tabIndex
          : 0;

      setActiveTab(dynamicTabs[index] || dynamicTabs[0]);
    }
  }, [id, dynamicTabs, location.state]);

  return (
    <div className="dark:bg-[#192030]">
      <div className="containerCustom px-4 py-10">
        <img
          loading="lazy"
          src={solution.bannerImg}
          className="w-full h-64 object-cover rounded-lg shadow"
          alt={solution.title}
        />

        <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mt-6">
          {solution.title}
        </h2>
        <p className="textColor mt-1">{solution.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Tabs */}
          {isObjectDetails && (
            <div className="space-y-2 hidden md:block ">
              {dynamicTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition cursor-pointer
                    ${
                      activeTab === tab
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
            {isObjectDetails && activeTab && solution.details[activeTab] && (
              <div>
                {solution.details[activeTab].heading && (
                  <h3 className="text-lg font-semibold mb-2">
                    {solution.details[activeTab].heading}
                  </h3>
                )}

                {solution.details[activeTab].para1 && (
                  <p className="textColor mb-4">
                    {solution.details[activeTab].para1}
                  </p>
                )}

                {/* FAQ Section */}
                {solution.details[activeTab].faq && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                    <ul className="list-disc ml-5 textColor">
                      {solution.details[activeTab].faq.map((item, i) => (
                        <li key={i} className="mb-2">
                          <strong>
                            Q{i + 1}. {item.question}
                          </strong>
                          <p className="ml-4 textColor">{item.answer}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Strengths Section */}
                {solution.details[activeTab].strengths && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {solution.details[activeTab].strengths.title}
                    </h3>
                    <ul className="list-disc ml-5 textColor">
                      {solution.details[activeTab].strengths.items.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Support Section */}
                {solution.details[activeTab].support && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {solution.details[activeTab].support.title}
                    </h3>
                    <ul className="list-disc ml-5 textColor">
                      {solution.details[activeTab].support.items.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {solution.details[activeTab].img && (
                  <div className="mb-4 lg:my-10">
                    <img
                      loading="lazy"
                      src={solution.details[activeTab].img}
                      alt={activeTab}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                )}
              </div>
            )}

            {!isObjectDetails && Array.isArray(solution.details) && (
              <ul className="list-disc ml-5 textColor space-y-1">
                {solution.details.map((item, i) => (
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
                  onClick={() => {
                    setActiveTab(tab);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition cursor-pointer
                    ${
                      activeTab === tab
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

export default SolutionsDetails;
