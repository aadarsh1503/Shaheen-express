import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png"
const TransportSection1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={i1}
          alt="Fleet of Trucks"
          className="w-[500px] relative lg:left-32 left-0 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 relative right-0 lg:right-9 top-12 bg-Red p-6 lg:p-12 text-white rounded-lg flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-white text-Red p-2 rounded-full text-xl">
            <FaAngleDoubleRight />
          </div>
          <p className="text-lg leading-relaxed">
            When you use our services, you will receive transportation optimization
            services, which means that you will receive fully evaluated and
            well-defined transportation services that will relieve you of your
            logistical stress.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-white text-Red p-2 rounded-full text-xl">
            <FaAngleDoubleRight />
          </div>
          <p className="text-lg leading-relaxed">
            Save time and money by utilizing our transportation optimization logistic
            services. This also aids in the development of a positive customer
            relationship because shipments are delivered ahead of schedule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransportSection1;
