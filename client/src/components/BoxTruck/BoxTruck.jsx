import React from "react";
import i1 from "./i1.jpg"
import BoxTruckService from "./BoxTruckService.JSX";
import LogisticsSection from "./LogisticsSection";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Testimonialbox from "./Testimonialbox";

const BoxTruck = () => {
  return (
    <div>
    <div className="relative lg:flex hidden items-center mb-3 font-noto-sans-display bg-white w-full min-h-[400px]">
      {/* Red Background on the Left */}
      <div className="absolute left-0 lg:flex hidden top-0 h-[500px] w-1/3 bg-Red"></div>

      {/* Content Section */}
      <div className="relative z-10 flex w-full top-[6px] max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-1/2 p-4 ">
          <img
            src={i1}
            alt="Flatbed Truck"
            className="rounded-lg object-fill shadow-lg w-[590px] h-[456px] "
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2 relative font-sans top-4 p-8">
          <p className="text-gray-600 mb-5">Box Truck</p>
          <h2 className="text-4xl mb-5 font-semibold text-[#264795]">
          Shaheen Express Box Truck Transport is a Quality Experience
          </h2>
          <p className="text-gray-600 text-[14px] mt-4">
          Shaheen Express provides you services of Heavy Haulers, we understand the importance of your box truck to your business. That’s the only reason when it comes to boxing truck transport, we make sure to handle the shipping process with full efficiency.
          </p>
          <a href="/contact">
          <button className="mt-6 cursor-pointer bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
          </a>
        </div>
      </div>
    </div>


    <div class="relative z-10 flex flex-col-reverse lg:flex-row w-full top-[18px] max-w-6xl mx-auto">
    <div class="lg:w-1/2 w-full p-8">
      <p class="text-gray-600 mb-5">Box Truck</p>
      <h2 class="text-3xl mb-5 font-semibold text-[#264795]">
      Shaheen Express Box Truck Transport is a Quality Experience
      </h2>
      <p className="text-gray-600 text-[16px] mt-4">
      Shaheen Express provides you services of Heavy Haulers, we understand the importance of your box truck to your business. That’s the only reason when it comes to boxing truck transport, we make sure to handle the shipping process with full efficiency.
          </p>
      <a href="/contact">
        <button class="mt-6 bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
          CONTACT US
        </button>
      </a>
    </div>

    <div class="lg:w-1/2 w-full p-4">
      <img
        src={i1}
        alt="Flatbed Truck"
        class="rounded-lg shadow-lg w-full h-auto"
      />
    </div>
  </div>

    
<BoxTruckService />
<LogisticsSection />
<AdvantagesSection />
<AgentPartnerSection />
<Testimonialbox />
    </div>
  );
};

export default BoxTruck;
