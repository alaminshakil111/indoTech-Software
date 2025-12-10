import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../Data/ServicesData";

const ServicesDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);
  if (!service)
    return (
      <h2 className="text-center py-20 text-xl">Service Not Found</h2>
    );

  const isObjectDetails = typeof service.details === "object" && !Array.isArray(service.details);

  // ✅ Generate tabs only after service exists
  const dynamicTabs = isObjectDetails ? Object.keys(service.details) : [];

  // ✅ Initial active tab = first tab
  const [activeTab, setActiveTab] = useState(dynamicTabs[0] || null);

   useEffect(() => {
      if (dynamicTabs.length > 0) {
        setActiveTab(dynamicTabs[0]);
      }
    }, [id]);

  return (
    <div className="dark:bg-[#192030]">
      <div className="containerCustom px-4 py-10">
          {/* Image */}
          <img src={service.img} className="w-full h-64 object-cover rounded-lg shadow" alt="" />

          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mt-6">{service.title}</h2>
          <p className="textColor mt-1">{service.subtitle}</p>

          {/* Layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Left Tabs */}
            {isObjectDetails && (
              <div className="space-y-2 hidden md:block ">
                {dynamicTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition
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

              {isObjectDetails && activeTab && service.details[activeTab] && (
                <div>
                  {/* <h2 className="text-2xl font-semibold mb-4">{activeTab}</h2> */}

                  {service.details[activeTab].heading && (
                    <h3 className="text-lg font-semibold mb-2"> 
                      {service.details[activeTab].heading}
                    </h3>
                  )}

                  {service.details[activeTab].para1 && (
                    <p className="textColor mb-4">
                      {service.details[activeTab].para1}
                    </p>
                  )}

                  {service.details[activeTab].what && (
                    <p className="textColor mb-4">
                      <h3 className="text-lg font-semibold mb-2" > What You Get: </h3>
                       
                       <ul className="list-disc ml-5 textColor mb-4">
                        {service.details[activeTab].what.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </p>
                  )}

                  {service.details[activeTab].do && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2"> Why You Choose Us: </h3>
                      <ul className="list-disc ml-5 textColor mb-4">
                        {service.details[activeTab].do.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* FAQ Section */}
                  {service.details[activeTab].faq && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                      <ul className="list-disc ml-5 textColor">
                        {service.details[activeTab].faq.map((item, i) => (
                          <li key={i} className="mb-2">
                            <strong>Q{i + 1}. {item.question}</strong>
                            <p className="ml-4 textColor">{item.answer}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Strengths Section */}
                  {service.details[activeTab].strengths && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {service.details[activeTab].strengths.title}
                      </h3>
                      <ul className="list-disc ml-5 textColor">
                        {service.details[activeTab].strengths.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Support Section */}
                  {service.details[activeTab].support && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {service.details[activeTab].support.title}
                      </h3>
                      <ul className="list-disc ml-5 textColor">
                        {service.details[activeTab].support.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}



                  {service.details[activeTab].img && (
                    <div className="mb-4 lg:my-10">
                      <img
                        src={service.details[activeTab].img}
                        alt={activeTab}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  )}

                  {service.details[activeTab].clients && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Why You Choose Us:</h3>
                      <ul className="list-disc ml-5 textColor">
                        {service.details[activeTab].clients.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  
                </div>
              )}

              {isObjectDetails && (
              <div className="space-y-2 md:hidden ">
                {dynamicTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}

                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition
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

              {/* Simple array */}
              {!isObjectDetails && Array.isArray(service.details) && (
                <ul className="list-disc ml-5 textColor space-y-1">
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
