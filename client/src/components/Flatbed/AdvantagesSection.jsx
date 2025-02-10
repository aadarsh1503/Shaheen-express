import React from "react";
import { FaUser, FaGasPump, FaCheckCircle, FaFingerprint } from "react-icons/fa";

const advantages = [
  {
    icon: <FaUser size={40} />,
    text: "24*7 Service and Accessibility",
    bgColor: "bg-lime-400",
  },
  {
    icon: <FaGasPump size={40} />,
    text: "Quick-pay and Fuel card for services",
    bgColor: "bg-purple-800",
  },
  {
    icon: <FaCheckCircle size={40} />,
    text: "Real time Freight tracking from pickup to delivery",
    bgColor: "bg-yellow-400",
  },
  {
    icon: <FaFingerprint size={40} />,
    text: "Financial stability and continued growth.",
    bgColor: "bg-red-600",
  },
];

const AdvantagesSection = () => {
  return (
    <div className="flex items-center justify-center gap-10 py-10 px-6 bg-white">
      {/* Left Side Text */}
      <div className="w-1/3">
        <h4 className="text-black text-sm mb-6 font-semibold">Features</h4>
        <h2 className="text-[#264795] text-5xl font-light w-[370px] leading-tight">
          Advantages to Work With Shaheen Express LLC
        </h2>
      </div>

      {/* Right Side Cards */}
      <div className="grid grid-cols-2 gap-6">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`w-56 h-56 rounded-sm shadow-lg hover:bg-[#f83c3c] cursor-pointer flex flex-col justify-center items-center ${advantage.bgColor} text-white`}
          >
            {advantage.icon}
            <p className="text-center text-lg font-semibold mt-3 px-4">
              {advantage.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
