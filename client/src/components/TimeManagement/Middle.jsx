import React from "react";
import i3 from "./i3.png"
import i4 from "./i4.png"
const Middle = () => {
  return (
    <div className="bg-gray-100 font-noto-sans-display py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
        {/* First Item */}
        <div className="flex flex-col relative  md:flex-row items-center md:items-start gap-6">
          <img
            src={i3}
            alt="Flatbed Truck"
            className="w-full md:w-1/2 h-auto rounded-lg"
          />
          <div className="md:w-1/2 relative ml-10 top-12">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">We Understand Your Time Value</h2>
            <p className="text-gray-600 mt-2 w-[300px]">
            We understand the importance of your every minute and how critical it is for you to deliver your products to their destination on time. As a result, our team is dedicated to providing you with a service that will assist you in effectively managing your time so that you can grow your business and company to the top of your field.
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2 relative top-12 left-44">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">Our Logistic Technology Will Help<br /> You To Save Time</h2>
            <p className="text-gray-600 mt-2 w-[300px]">
            Our team not only saves you time, but so does our technology. We designed our web portal and application to take up as little time as possible while providing the most benefit to you. It comprehends everything and simplifies your work, allowing you to save valuable time.
            </p>
          </div>
          <img
            src={i4}
            alt="Hot Shot Trucks"
            className="w-full md:w-1/2 relative  h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;