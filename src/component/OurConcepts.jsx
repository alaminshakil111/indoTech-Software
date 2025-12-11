import React from "react";
import concept from "../assets/images/ourCencepts.avif";

const OurConcepts = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      {/* Banner Image */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={concept}
          alt="Our Concept Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg">
            Our Concepts
          </h2>
        </div>
      </div>

      {/* Content Box */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Make quick decisions, make prompt decisions, and act immediately.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our philosophy is <strong>"make a quick decision, make a quick decision, and act quickly."</strong>
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We never keep our valued customers waiting.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            When a problem arises or you're struggling to deal with it, it's natural to want it resolved quickly.
            We provide speedy and flexible services and thoroughly support the growth of our customers' businesses.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            What we value is human connections. We want to make everyone involved happy through our services.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With this in mind, we will continue to create new value that will lead to your happiness and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurConcepts;
