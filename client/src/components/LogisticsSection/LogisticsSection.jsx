import React from "react";
import i1 from "./i1.png"
const LogisticsSection = () => {
  return (
    <div className="p-8">
      <section className="relative mt-24 font-roboto-condensed rounded-xl bg-[#f8504c] text-white h-[520px]">
        <div className="container mx-auto px-6 text-center">
          {/* Header Text */}
          <h1 className="text-4xl sm:text-5xl relative top-14 text-[#550000] font-bold mb-4">
            LOGISTICS PROGRESSION BEGINS HERE
          </h1>
          <p className="text-lg mb-20 relative top-12 text-[#11294f]">
            We are here to help you figure out and prospect in logistics service together
          </p>
          <a 
            href="/introduction" 
            className="text-[#343a40] z-50 hover:text-[#550000] cursor-pointer outline p-4 outline-[#343a40] font-semibold hover:underline relative"
          >
            INTRODUCTION+
          </a>
        </div>

        {/* Background Truck and LOGISTICS text */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Text with lowest z-index */}
          <div className="absolute text-[50px] lg:text-[256px] font-bold text-[#fa8380] text-opacity-30 top-78 lg:top-22 transform z-0">
            Logistics
          </div>

          {/* Image with higher z-index */}
          <img
            src={i1}
            alt="Truck"
            className="w-3/4 lg:w-[900px] relative top-44 object-cover z-10"
          />
        </div>
      </section>
    </div>
  );
};

export default LogisticsSection;