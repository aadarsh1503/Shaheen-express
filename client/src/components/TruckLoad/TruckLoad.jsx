import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"
import Truck1 from "./Truck1";
import TransportSection from "../Flatbed/TransportSection";
import TransportServices from "./TransportServices";
import Shipping1 from "./Shipping1";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TestimonialLoad from "../LoadBoard/TestimonialLoad";
import Testimonialbox from "./TestimonialLoad";


export default function TruckLoad() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i1})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 relative left- text-left  text-white">
            <h2 className="text-4xl font-semibold text-Blue ">
            Truckload Services
            </h2>
            <p className="mt-4 text-[18px] w-[500px] text-gray-900">
            Now you can strengthen your supply chain with the strength of our business and credible truckload capacity in all markets. Shaheen Express has experts for full truckload freight (FTL).
            </p>
            <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
            </a>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/ mt-10 lg:mt-0 lg:ml-10 w-[400px] bg-[#F73D38] p-6 rounded-lg shadow-lg text-white">
            <div className="flex items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Now you can easily navigate today's fragmented truckload market and access the largest network of vetted, high-quality carriers in the US and Canada with Shaheen Express.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Shaheen Express has the latest technology to automate the entire freight lifecycle and help to improve your truckload RFP process, get adequate end-to-end visibility, and maximize efficiency for your shipments.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Shaheen Express has a Trustworthy supply chain and experts to track market shifts, act as an addition to your team, and develop solutions based on your business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
<Truck1 />       
<TransportServices />
<Shipping1 />
<AdvantagesSection />
<AgentPartnerSection />
<Testimonialbox />
      </div>
    );
  }
  