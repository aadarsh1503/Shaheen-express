import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"
import BorderCrossingSolutions from "./BorderCrossingSolutions";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TestimonialLoad from "../LoadBoard/TestimonialLoad";





export default function CrossBorder() {
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
            Cross Border Shipping Services
            </h2>
            <p className="mt-4 text-[18px] w-[500px] text-gray-900">
            Logistics makes over-the-road cross-border shipping easier with the help of Pamm. Trust our experienced staff to understand traffic flows, customs regulations, and border processes at major border-crossing locations when you're crossing one or more borders.

            </p>
            <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
            </a>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-[490p] mt-10 lg:mt-0 lg:ml-10 bg-[#F73D38] p-6 rounded-lg shadow-lg text-white">
            <div className="flex items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Give strength to your business and customs compliance with the help of cross-border specialists and licensed customs brokers of Shaheen Express.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[300px]">
             
Give strength to your business and customs compliance with the help of cross-border specialists and licensed customs brokers of Shaheen Express.

Optimize your worldwide order fulfilment, and delivery. Shaheen Express meets customers expectations with cross-dock or direct solutions.


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Do work with local experts who talk in your language and facilitate the solutions for the complexities of cross-border shipping into a simplified experience.


              </p>
            </div>
          </div>
        </div>
      </div>
<BorderCrossingSolutions />
<AdvantagesSection />
<AgentPartnerSection />
<TestimonialLoad />
      </div>
    );
  }
  