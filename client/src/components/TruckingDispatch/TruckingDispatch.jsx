import React from "react";
import i2 from "./i2.png"
import FeaturesSection from "./FeaturesSection";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TestimonialTruck from "./TestimonialTruck";
const TruckingDispatch = () => {
  return (
    <div>
    <div className="relative flex items-center font-noto-sans-display bg-white w-full min-h-[400px]">
      {/* Red Background on the Left */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500"></div>

      {/* Content Section */}
      <div className="relative z-10 flex w-full top-[18px] max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-1/2 p-4">
          <img
            src={i2}
            alt="Flatbed Truck"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2 relative top-32  p-8">
          <p className="text-gray-600 mb-5">Trucking & Dispatch</p>
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Trucking And Dispatch Services
          </h2>
          <p className="text-black font-noto-serif tracking-wide mt-4">
          Do you need trucking and dispatch services to load and deliver your products on time? Then we have a vast array of trucking and dispatch services available to you. Because we have simplified our trucking and dispatch services, you can rely on us. so that we can bridge the gap between you and your customers.
          </p>
          <a href="/contact">
          <button className="mt-6 cursor-pointer bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
          </a>
        </div>
      </div>
    </div>
    <FeaturesSection />
    <AdvantagesSection />
    <AgentPartnerSection />
    <TestimonialTruck />
    </div>
  );
};

export default TruckingDispatch;
