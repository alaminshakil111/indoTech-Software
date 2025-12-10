import React, { useState } from "react";
import { policyData } from "@/Data/PrivacyPolicyData";

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = policyData[activeIndex];

  return (
    <div className="px-6 py-12 bg-gray-50 dark:bg-[#1E1E2F]" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* LEFT SIDE TABS */}
        <div className="col-span-1 border-r pr-4">
          <h4 className="textColor text-[20px] lg:text-[24px] font-semibold mb-4">Privacy Menu</h4>
          <div className="space-y-2">
            {policyData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium 
                  ${
                    activeIndex === i
                      ? "bg-[#338EC4] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {item.subject}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-span-3">

          <h3 className="textColor text-[20px] lg:text-[30px] font-bold mb-6">{active.subject}</h3>
          <p className="textColor text-[15px] leading-relaxed mb-8">{active.intro}</p>

          {/* Sections */}
          <div className="space-y-8">
            {active.sections.map((sec, index) => (
              <div key={index}>
                <h5 className=" textColor text-[18px] lg:text-[20px] font-semibold mb-2">{sec.title}</h5>

                {sec.text && <p className="textColor text-[15px] leading-relaxed">{sec.text}</p>}

                {sec.bullets && (
                  <ul className="list-disc pl-6 space-y-1">
                    {sec.bullets.map((item, i) => (
                      <li key={i} className="textColor text-[15px] leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300 mt-12 pt-6 textColor text-sm lg:text-[15px] leading-relaxed">
            <p>{active.footer.established}</p>
            <p>{active.footer.revised}</p>
            <p className="mt-2">{active.footer.director}</p>

            <div className="mt-6">
              <h3 className="font-semibold">Contact Information</h3>
              <p>{active.footer.contact.name}</p>
              <p>{active.footer.contact.address}</p>
              <p>{active.footer.contact.manager}</p>
              <p>{active.footer.contact.phone}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Certified Organization</h3>
              <p>{active.footer.certified.name}</p>
              <p>{active.footer.certified.contact}</p>
              <p>{active.footer.certified.address}</p>
              <p>{active.footer.certified.phone}</p>
              <p>{active.footer.certified.email}</p>
            </div>
          </div>

        </div>

        <div className=" md:hidden col-span-1 border-r pr-4 mt-6">
          <h4 className="textColor text-[20px] lg:text-[24px] font-semibold mb-4">Privacy Menu</h4>
          <div className="space-y-2">
            {policyData.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium 
                  ${
                    activeIndex === i
                      ? "bg-[#338EC4] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {item.subject}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
