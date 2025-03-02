import React from "react";
import i1 from "./i1.png"
import DrayageSolutions from "./DrayageSolutions";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Testimonial3 from "./Testimonial3";
const Drayage = () => {
  return (
    <div>
    <div className="relative hidden lg:flex items-center mb-3  font-noto-sans-display bg-white w-full min-h-[400px]">
      {/* Red Background on the Left */}
      <div className="absolute left-0 top-0 h-[500px] w-1/3 bg-Red"></div>

      {/* Content Section */}
      <div className="relative z-10 flex w-full top-[6px] max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-1/2 p-4 ">
          <img
            src={i1}
            alt="Flatbed Truck"
            className="rounded-lg shadow-lg w-[456px] h-[456px] "
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2 relative font-sans top-4 p-8">
          <p className="text-gray-600 mb-5">Drayage</p>
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Dependable Drayage Services
          </h2>
          <p className="text-gray-600 text-[16px] mt-4">
          Shaheen Express drayage services, can easily bridge the gap between ocean and inland transportation. For this critical link in your supply chain, use a variety of strategic, data-driven conclusions.
          </p>
          <p className="text-gray-600 text-[16px] mt-4 ">Increase your inland execution speed with Shaheen Express and keep your products moving once they reach the port with reliable capacity. With automation capabilities for your regionalized and global drayage requirements, can save time by eliminating manually repetitive work. By choosing Shaheen Express, can confidently plan for changing drayage conditions. Will get an additional data from us than from any other provider, as well as predictive tools and the ability to stay active in the market, if you choose us.

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
      <p class="text-gray-600 mb-5">Drayage</p>
      <h2 class="text-3xl mb-5 font-semibold text-[#264795]">
      Dependable Drayage Services
      </h2>
      <p className="text-gray-600 text-[16px] mt-4">
          Shaheen Express drayage services, can easily bridge the gap between ocean and inland transportation. For this critical link in your supply chain, use a variety of strategic, data-driven conclusions.
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
</div>
    <DrayageSolutions />
    <AdvantagesSection />
    <AgentPartnerSection />
    <Testimonial3 />
    </div>
  );
};

export default Drayage;
