import React from "react";
import i3 from "./i3.png"
import i4 from "./i4.png"
const Middle1 = () => {
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
          <div className="md:w-1/2 relative lg:ml-10 ml-0 top-1">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">We will manage the logistic part of<br /> your business</h2>
            <p className="text-gray-600 mt-2 w-full lg:w-[390px]">
            It is not possible to self-manage or regulates every aspect of a business, that is why we are here for you to help in managing and regulating the logistic part of your business. We can provide you with the best logistic service. So that you do not need to bother about the shipment and delivery of your product before the deadlines and once you are free from the logistic part, you can work on other parts of your business effectively to achieve financial stability in your business and for growing your business Continuously.
            </p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2 relative left-0 lg:left-32">
            <h2 className="text-xl font-semibold mb-6 text-[#264795]">Grow your business continuously <br />with our Services</h2>
            <p className="text-gray-600 mt-2 w-full lg:w-[390px]">
            By Taking our logistic services, you will be able to provide the best and fast delivery or shipment services to your customers and once your customers feel satisfied with your services then absolutely it will lead you to grow your business continuously. and when your business will grow it is obvious that, it helps you to achieve financial stability in your business.
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

export default Middle1;