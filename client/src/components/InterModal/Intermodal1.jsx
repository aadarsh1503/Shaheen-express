import React from "react";
import i3 from "./i3.png"
const Intermodal1 = () => {
  return (
    <div className="relative flex items-center font-noto-sans-display bg-white w-full min-h-[400px]">
      {/* Red Background on the Left */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500"></div>

      {/* Content Section */}
      <div className="relative z-10 flex w-full top-[18px] max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-1/2 p-4">
          <img
            src={i3}
            alt="Flatbed Truck"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-1/2 relative top-32 p-8">
         
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          What sets our intermodal services apart
          </h2>
          <p className="text-gray-600 mt-4">
          Improving your over-the-road shipments with intermodal capacity provides numerous advantages to your company. Anyone can benefit from our expertise with cutting-edge technology & Shaheen Express will assist you in mitigating the effects of seasonal, environmental, regulatory, and industry factors.
          </p>
          <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intermodal1;
