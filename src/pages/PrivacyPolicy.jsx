import React, { useState } from "react";
import { policyData } from "@/Data/PrivacyPolicyData";
import { useLocation } from "react-router-dom";


const PrivacyPolicy = () => {
  const location = useLocation();
  const initialIndex =
    typeof location.state?.tabIndex === "number"
      ? location.state.tabIndex
      : 0;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const active = policyData[activeIndex];

  return (
    <div className="px-6 py-12 bg-gray-50 dark:bg-[#1E1E2F]" >
      <div className="containerCustom mx-auto px-4 py-10 lg:py-[75px] grid grid-cols-1 md:grid-cols-4 gap-8">

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
          
          <p className="textColor text-[15px] leading-relaxed mb-8 whitespace-pre-line space-y-4 ">{active.intro}</p>
          
          {active.intro1 &&(
            <p className="textColor text-[15px] leading-relaxed mb-8  ">{active.intro1}</p>
          )}

          {/* Sections */}
          <div className="space-y-8">
            {active.sections.map((sec, index) => (
              <div key={index}>
                {sec.title && (
                  <h5 className=" textColor text-[18px] lg:text-[20px] font-semibold mb-2">{sec.title}</h5>
                )}

                {sec.text && (
                  <p className="textColor text-[15px] leading-relaxed whitespace-pre-line ">{sec.text}</p>
                )}
                {sec.text1 && (
                  <p className="textColor text-[15px] mt-2 leading-relaxed">{sec.text1}</p>
                )}

                {sec.bullets && (
                  <ul className="list-disc pl-6 space-y-1">
                    {sec.bullets.map((item, i) => (
                      <li key={i} className="textColor text-[15px] leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.numbers && (
                  <ul className=" pl-6 space-y-1">
                    {sec.numbers.map((item, i) => (
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
          {active.footer && (
            <div className="border-t border-gray-300 mt-12 pt-6 textColor text-sm lg:text-[15px] leading-relaxed">
            <p>{active.footer.established}</p>
            <p>{active.footer.revised}</p>
            <p>{active.footer.name}</p>
            <p>{active.footer.director}</p>

            {active.footer.contactIndo && (
              <div className="mt-6">
                <p>{active.footer.contactIndo.intro}</p>
                <p>{active.footer.contactIndo.address}</p>
                <p className=" whitespace-pre-line " >{active.footer.contactIndo.manager}</p>
                <p>{active.footer.contactIndo.telephone}</p>
              </div>
            )}

            {active.footer.contact && (
              <div className="mt-6">
                {/* <h3 className="font-semibold">Contact Information</h3> */}
                {/* <p>{active.footer.contact.name}</p> */}
                <p> {active.footer.contact.certified1} </p>
                <p> {active.footer.contact.certified2} </p>
                <p> {active.footer.contact.certified3} </p>
                <p>{active.footer.contact.address}</p>
                <p>{active.footer.contact.telephone}</p>
              </div>
            )}

            {active.footer.certified && (
              <div className="mt-6">
                {/* <h3 className="font-semibold">Certified Organization</h3> */}
                <p>{active.footer.certified.name}</p>
                <p>{active.footer.certified.contact}</p>
                <p>{active.footer.certified.address}</p>
                <p>{active.footer.certified.phone}</p>
                <p>{active.footer.certified.email}</p>
              </div>
            )}
          </div>
          )}

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
