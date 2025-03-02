import { FaAngleDoubleRight } from "react-icons/fa";
import i6 from "./i6.jpg"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TransportSection1 from "./TransportSection1";




export default function TransportationOptimization() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i6})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 py-6 lg:py-0 relative left- text-left  text-white">
            <h2 className="text-4xl font-semibold text-Blue ">
            Transportation Optimization
            </h2>
            <p className="mt-4 text-[18px] w-full lg:w-[500px] text-gray-900">
            Optimization of transportation is one of the topmost crucial parts of a logistic service that helps in providing the best and fast transportation service at a very low cost. This is the reason that we have focused very much on the optimization part of our transportation services.

            </p>
            <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
            </a>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/ mt-10 lg:mt-0 lg:ml-10 w-[400px] bg-[#F73D38] p-6 rounded-lg shadow-lg text-white">
            <div className="flex mt-4 items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mb-9 w-[220px]">
              Optimizing the transportation service is significant because it helps to reduce your transportation cost and it also plays a dominant role in providing fast logistic services to the customers.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 mt-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
              We have optimized our logistic and transportation services by analysing different parts of our services like shipments, rates etc and by working on constraints of our services


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
           
          </div>
        </div>
      </div>
<TransportSection1 />
<AdvantagesSection />
<AgentPartnerSection />
      </div>
    );
  }
  