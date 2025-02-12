import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Small1 from "./Small1";
import Testimonialsmall from "./Testimonialsmall";




export default function SmallParcel() {
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
            Small Parcel Shipping
            </h2>
            <p className="mt-4 text-[18px] w-[500px] text-gray-900">
            When small parcel shipments are required and the customers expectations are higher than ever, than a provider like Shaheen Express can boost your efficiency without breaking the bank. Allow our vast network and cutting-edge supply chain technology to work for you.

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
              <p className="ml-4 text-[16px] w-[220px] mb-4">
              Enhance your on-time shipping performance with Shaheen Express contract management and request proposal management insights.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px] mb-4">
              More information provides you with a more profitable supply chain and Shaheen Express provides you with all the necessary information that you need.


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px] mb-4">
              Enhance your parcel supply chain’s pervasiveness with Shaheen Express and access to a team of experts backed by delivery, cost, performance reporting, and technology.


              </p>
            </div>
          </div>
        </div>
      </div>
<Small1 />
<AdvantagesSection />
<AgentPartnerSection />
<Testimonialsmall />
      </div>
    );
  }
  