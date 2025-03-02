import React from "react";
import i2 from "./i2.png"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Middle from "./Middle";
import Last from "./Last";

const TimeManagement = () => {
  return (
    <div>
    <div className="relative hidden lg:flex items-center font-noto-sans-display bg-white w-full min-h-[400px]">
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
        <div className="w-1/2 relative top-32 p-8">
          <p className="text-gray-600 mb-5">Time Management</p>
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Time Management
          </h2>
          <p className="text-gray-600 mt-4">
          Manage your time effectively with our great logistic system where our logistic team and technology will make sure that your product is shipping very fast so that you can manage your time.
          </p>
          <a href="/contact">
          <button className="mt-6 cursor-pointer bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
          </a>
        </div>
      </div>
    </div>
   <div class="relative flex items-center lg:hidden  font-noto-sans-display bg-white w-full min-h-[400px]">
  <div class="absolute left-0 top-0 h-full lg:w-1/3 bg-Red"></div>

  <div class="relative z-10 flex flex-col-reverse lg:flex-row w-full top-[18px] max-w-6xl mx-auto">
    <div class="lg:w-1/2 w-full p-8">
    <p className="text-gray-600 mb-5">Time Management</p>
    <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Time Management
          </h2>
      <p className="text-gray-600 mt-4">
          Manage your time effectively with our great logistic system where our logistic team and technology will make sure that your product is shipping very fast so that you can manage your time.
          </p>
      <a href="/contact">
        <button class="mt-6 bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
          CONTACT US
        </button>
      </a>
    </div>

    <div class="lg:w-1/2 w-full p-4">
      <img
        src={i2}
        alt="Flatbed Truck"
        class="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
  </div>
</div>

<Middle />
<Last />
    <AdvantagesSection />
    <AgentPartnerSection />

    </div>
  );
};

export default TimeManagement;
