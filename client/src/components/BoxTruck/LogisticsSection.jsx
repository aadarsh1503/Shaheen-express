import React from "react";
import i1 from "./i1.png"
const LogisticsSection = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-8">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={i1}
          alt="Shipping Containers"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2  space-y-6">
        <p className="text-gray-700 w-[350px]">
          Our team is always ready to help you to settle the business and meet
          all of your requirements for boxing trucks, which are primarily used
          by heavy haulers.
        </p>

        <div>
          <h3 className="text-lg font-bold">Cross Border</h3>
          <p className="text-gray-700 w-[350px]">
            Our company provides a variety of drivers who are familiar with
            duties, customs, and traffic rules in the United States and Canada,
            ensuring that the business runs smoothly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Work efficiently</h3>
          <p className="text-gray-700 w-[350px]">
            Our team is always efficient and cost-effective, and your products
            are always safe.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">On time delivery</h3>
          <p className="text-gray-700 w-[350px]">
            We guarantee on-time delivery of your product, and all you have to
            do is choose Shaheen Express.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsSection;
