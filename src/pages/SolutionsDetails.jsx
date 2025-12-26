import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { solutionsData } from "../Data/SolutionsData";

const SolutionsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const solution = solutionsData.find((s) => s.id === id);

  if (!solution) {
    return (
      <h2 className="text-center py-20 text-lg text-gray-600">
        Solution Not Found
      </h2>
    );
  }

  const isObjectDetails =
    typeof solution.details === "object" && !Array.isArray(solution.details);

  const dynamicTabs = isObjectDetails ? Object.keys(solution.details) : [];

  const initialIndex =
    typeof location.state?.tabIndex === "number"
      ? location.state.tabIndex
      : 0;

  const [activeTab, setActiveTab] = useState(
    dynamicTabs[initialIndex] || dynamicTabs[0] || null
  );

  useEffect(() => {
  if (dynamicTabs.length > 0) {
    const index =
      typeof location.state?.tabIndex === "number"
        ? location.state.tabIndex
        : 0;

    setActiveTab(dynamicTabs[index] || dynamicTabs[0]);
  }
}, [id]); // ✅ ONLY id


  return (
    <div className="bg-[#f9fafb] dark:bg-[#0f172a]">

      <img
        loading="lazy"
        src={solution.bannerImg}
        alt={solution.title}
        className="w-full h-56 object-cover  border border-gray-200"
      />
      <div className="containerCustom px-4 py-12">

        {/* Title */}
        <h2 className="mt-6 text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-white tracking-tight">
          {solution.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          {solution.subtitle}
        </p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Tabs (Desktop) */}
          {isObjectDetails && (
            <div className=" space-y-2">
              {dynamicTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-md transition border cursor-pointer
                    ${
                      activeTab === tab
                        ? "bg-white text-slate-900 border-slate-300 font-semibold"
                        : "bg-transparent text-gray-600 border-transparent hover:border-gray-300"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {/* Right Content */}
          <div className=" rightContent md:col-span-3 bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-gray-700 rounded-md p-6">

            {isObjectDetails && activeTab && solution.details[activeTab] && (
              <div className="space-y-6">

                {/* Heading */}
                {solution.details[activeTab].heading && (
                  <h3 className="text-base font-semibold text-slate-800 dark:text-gray-200">
                    {solution.details[activeTab].heading}
                  </h3>
                )}

                {/* Paragraph */}
                {solution.details[activeTab].para1 && (
                  <p className=" text-gray-700 dark:text-gray-300 leading-relaxed">
                    {solution.details[activeTab].para1}
                  </p>
                )}

                {/* FAQ */}
                {solution.details[activeTab].faq && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      Need Help ?
                    </h3>
                    <ul className="space-y-3">
                      {solution.details[activeTab].faq.map((item, i) => (
                        <li key={i}>
                          <p className="font-medium text-slate-800 dark:text-white">
                            Q{i + 1}. {item.question}
                          </p>
                          <p className="ml-4 mt-1 text-gray-600 dark:text-gray-400">
                            {item.answer}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Strengths */}
                {solution.details[activeTab].strengths && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      {solution.details[activeTab].strengths.title}
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {solution.details[activeTab].strengths.items.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Support */}
                {solution.details[activeTab].support && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      {solution.details[activeTab].support.title}
                    </h3>
                    <ul className="list-disc ml-4  text-gray-700 dark:text-gray-300 space-y-1">
                      {solution.details[activeTab].support.items.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Image */}
                {solution.details[activeTab].img && (
                  <img
                    loading="lazy"
                    src={solution.details[activeTab].img}
                    alt={activeTab}
                    className="w-full rounded-md border border-gray-200"
                  />
                )}

              </div>
            )}

            {/* Simple Array */}
            {!isObjectDetails && Array.isArray(solution.details) && (
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                {solution.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Mobile Tabs */}
            {isObjectDetails && (
              <div className="mt-6 space-y-2 md:hidden">
                {dynamicTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full px-4 py-3 border rounded-md transition
                      ${
                        activeTab === tab
                          ? "border-slate-400 bg-white"
                          : "border-gray-200 bg-gray-50"
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
    </div>
  );
};

export default SolutionsDetails;
