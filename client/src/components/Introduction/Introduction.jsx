import React from "react";
import { AiOutlineRobot, AiOutlineTruck } from "react-icons/ai";
import i1 from "./i1.jpg"
import Lastone from "./Lastone";
import Middleone from "./Middleone";
const Introduction = () => {
  return (
    <div>
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-32 mb-20 bg-white"
      style={{
        backgroundImage: `url(${i1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-1/2 relative left-[190px] text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl whitespace-nowrap font-semibold text-Blue">
          We are one of the world’s largest logistics platforms
        </h2>
        <p className="mt-4 text-[18px] text-gray-700">
          We provide solutions to our globally diverse clients working
          cross-domain, providing them the most feasible solutions to the most
          complex of their hurdles. With $21 billion under freight management
          and 19 million shipments annually, we are among the world’s largest
          logistics platforms. Our global suite of services accelerates trade
          to seamlessly deliver the commodities that rule the economy.
        </p>
        <div className="mt-6 flex space-x-4">
            <a href="/loadBoard">
  <button className="bg-Red text-white font-semibold px-6 py-2 rounded flex items-center cursor-pointer shadow-md hover:bg-red-600 transition">
    <AiOutlineTruck className="mr-2 text-lg" /> LOAD BOARD
  </button>
  </a>
  <a href="/timeManagement">
  <button className="border-2 border-Red text-Red font-semibold px-6 py-2 rounded flex items-center cursor-pointer shadow-md  transition">
    <AiOutlineRobot className="mr-2 text-lg" /> TIME MANAGEMENT
  </button>
  </a>
</div>
      </div>
    </section>
    <Middleone />
    <Lastone />
    </div>
  );
};

export default Introduction;
