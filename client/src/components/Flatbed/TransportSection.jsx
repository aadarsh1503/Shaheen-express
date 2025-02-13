import React from "react";
import i1 from "./i1.webp"
import i3 from "./i3.png"
const TransportSection = () => {
  return (
    <div className="bg-gray-100 font-noto-sans-display py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
        {/* First Item */}
        <div className="flex flex-col relative md:flex-row items-center md:items-start gap-6">
          <img
            src={i1}
            alt="Flatbed Truck"
            className="w-full md:w-1/2 h-auto rounded-lg"
          />
          <div className="md:w-1/2 relative ml-10 top-12">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">Flatbed/Open Deck</h2>
            <p className="text-gray-600 mt-2 w-[300px]">
              To overcome the market fluctuations by enhancing your planned supply
              chain performance. Shaheen Express provides you with a tremendous
              flatbed capacity network that has all the transport options you need.
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2 relative top-12 left-44">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">Hot Shot</h2>
            <p className="text-gray-600 mt-2 w-[300px]">
              Suitable for hauling small, time-sensitive, less than truckload flatbed
              freight. Hot Shot trailers are generally hauled by Class 3, 4, or 5
              trucks. It is fit for the bill and loads that need credible, quick
              delivery.
            </p>
          </div>
          <img
            src={i3}
            alt="Hot Shot Trucks"
            className="w-full md:w-1/2 relative  h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportSection;