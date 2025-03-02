import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png"
const Last1 = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-4 items-center gap-6 lg:gap-12 p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={i1}
          alt="Fleet of Trucks"
          className="w-[500px] relative left-0 lg:left-32 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 relative right-0 lg:right-9 top-12 bg-Red p-6 lg:p-12 text-white rounded-lg flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-white text-Red p-2 rounded-full text-xl">
            <FaAngleDoubleRight />
          </div>
          <h1></h1>
          <p className="text-lg leading-relaxed">
          <strong className="mb-2">Reduce your logistic Expenses with our services</strong> <br />
          We will assist you in lowering your logistic costs by providing logistic services at a low cost. You can lower your business costs by using our logistic services, as it is a very low-cost service compared to managing the logistics part on your own.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-white text-Red p-2 rounded-full text-xl">
            <FaAngleDoubleRight />
          </div>
          <p className="text-lg relative left-4 leading-relaxed">
          <strong className="mb-2">Expand your business as you do not need to worry about logistics </strong> <br />
          Now that you've given us the logistical part of the job, you won't have to worry about shipments, and you'll be able to expand your business on a massive scale to keep it growing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last1;
