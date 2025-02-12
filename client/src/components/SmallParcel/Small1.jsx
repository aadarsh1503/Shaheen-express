import React from "react";
import i2 from "./i2.png"
const Small1 = () => {
  return (
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
        <div className="w-1/2 relative top-12 p-8">
          <p className="text-gray-600 mb-5">Small Parcel</p>
          <h2 className="text-3xl mb-5 font-semibold text-[#264795]">
          Small Parcel Freight Services
          </h2>
          <p className="text-gray-600 mt-4">
          When there is very little weight with a parcel, the various supply chains become very complicated, but when you choose Shaheen Express, there is no need to worry about those complications.
          </p>
          <p className="mt-4"><strong>Parcel Freight Solutions</strong><br />Shaheen Express strategic worldwide contract carrier relationships offer our clients the advantage of extraordinary services and cost savings.</p>
          <p className="mt-4"><strong>Parcel Intelligence Technology</strong><br />Turn your consumer data into actionable performance with Shaheen Express comprising audit and freight pay, business intelligence analytics, and RFP analysis. Shaheen Express offers you the latest technology available.

</p>
<a href="/contact">
          <button className="mt-6 cursor-pointer bg-Red text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            CONTACT US
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Small1;
