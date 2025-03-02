import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png"
const Last = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 lg:p-12">
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
          <strong className="mb-2">We Follow The Simple Process</strong> <br />
          We have made our logistic system and process as simple as possible so that anyone can understand and work with it. We have a very simple gate entry procedure, and we also make certain that the loading and unloading process is smooth and quick. This streamlined procedure allows you to save and manage time.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-white text-Red p-2 rounded-full text-xl">
            <FaAngleDoubleRight />
          </div>
          <p className="text-lg relative left-4 leading-relaxed">
          <strong className="mb-2">We Have An Automated Process To Follow</strong> <br />
          Save time and money by utilizing our transportation optimization logistic
            services. This also aids in the development of a positive customer
            relationship because shipments are delivered ahead of schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last;
