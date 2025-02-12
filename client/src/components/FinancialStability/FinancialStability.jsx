import React from "react";
import i2 from "./i2.png"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Middle1 from "./Middle1";
import Last from "../TimeManagement/Last";
import Last1 from "./Last1";

const FinancialStability = () => {
  return (
    <div>
    <div className="relative flex items-center font-noto-sans-display bg-white w-full min-h-[400px]">
      {/* Red Background on the Left */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-Red"></div>

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
          <p className="text-gray-600 mb-5">Financial Stability</p>
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Financial Stability and Continuous growth
          </h2>
          <p className="text-gray-600 mt-4">
          We are always here to help you achieve your financial goals and become financially stable, whether you are a carrier or want to have your products shipped by us.
          </p>
          <a href="/contact">
          <button className="mt-6 bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
          </a>
        </div>
      </div>
    </div>

<Middle1 />
<Last1 />
    <AdvantagesSection />
    <AgentPartnerSection />

    </div>
  );
};

export default FinancialStability;
