import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../Data/ServicesData";

const ServicesDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <h2 className="text-center py-20 text-lg text-gray-600">
        Service Not Found
      </h2>
    );
  }

  const isObjectDetails =
    typeof service.details === "object" && !Array.isArray(service.details);

  const dynamicTabs = isObjectDetails ? Object.keys(service.details) : [];

  const [activeTab, setActiveTab] = useState(dynamicTabs[0] || null);

  useEffect(() => {
    if (dynamicTabs.length > 0) {
      setActiveTab(dynamicTabs[0]);
    }
  }, [id]);

  return (
    <div className="bg-[#f9fafb] dark:bg-[#0f172a]">
      <img
          src={service.bannerImg}
          alt={service.title}
          className="w-full h-56 object-cover border border-gray-200"
      />
      <div className="containerCustom px-4 py-12">

        {/* Banner Image */}
        

        {/* Title */}
        <h2 className="mt-6 text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-white tracking-tight">
          {service.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          {service.subtitle}
        </p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Left Tabs (Desktop) */}
          {isObjectDetails && (
            <div className="hidden md:block space-y-2">
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
          <div className="md:col-span-3 bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-gray-700 rounded-md p-6">

            {isObjectDetails && activeTab && service.details[activeTab] && (
              <div className="space-y-6">

                {/* Heading */}
                {service.details[activeTab].heading && (
                  <h3 className=" font-semibold text-slate-800 dark:text-gray-200">
                    {service.details[activeTab].heading}
                  </h3>
                )}

                {/* Paragraph */}
                {service.details[activeTab].para1 && (
                  <p className=" text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.details[activeTab].para1}
                  </p>
                )}

                {/* What You Get */}
                {service.details[activeTab].what && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      What You Get
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {service.details[activeTab].what.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Why Choose Us */}
                {service.details[activeTab].do && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      Why Choose Us
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {service.details[activeTab].do.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQ */}
                {service.details[activeTab].faq && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      Need Help ?
                    </h3>
                    <ul className="space-y-3">
                      {service.details[activeTab].faq.map((item, i) => (
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
                {service.details[activeTab].strengths && (
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      {service.details[activeTab].strengths.title}
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {service.details[activeTab].strengths.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Support */}
                {service.details[activeTab].support && (
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      {service.details[activeTab].support.title}
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {service.details[activeTab].support.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Image */}
                {service.details[activeTab].img && (
                  <img
                    src={service.details[activeTab].img}
                    alt={activeTab}
                    className="w-full rounded-md border border-gray-200"
                  />
                )}

                {/* Clients */}
                {service.details[activeTab].clients && (
                  <div>
                    <h3 className=" font-semibold text-slate-800 dark:text-gray-200 mb-2">
                      Our Clients Trust Us Because
                    </h3>
                    <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                      {service.details[activeTab].clients.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
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

            {/* Simple Array */}
            {!isObjectDetails && Array.isArray(service.details) && (
              <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 space-y-1">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
