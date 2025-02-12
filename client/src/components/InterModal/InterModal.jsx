import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"
import ServicesSection from "./ServicesSection";
import Intermodal1 from "./intermodal1";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TestimonialInterModal from "./TestimonialInterModal";




export default function InterModal() {
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
            Intermodal Shipping
            </h2>
            <p className="mt-4 text-[18px] w-[500px] text-gray-900">
            'Shaheen Express' Intermodal services provide you with the most up-to-date options and control over your supply chain. We have a wealth of experience and resources to supplement and frequently improve your current strategy.

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
              With our intermodal rail container capacity, have direct access to every major railroad in Canada and the United States. Shaheen Express will provide you with efficient services.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Now you can enjoy the efficiency and cost savings of a route-neutral shipping strategy. While choosing Shaheen Express you don't need to depend on specific railroads or limited routes.


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              You will get the benefit of flexibility to your existing supply chain strategy and you can easily convert from one model to another.


              </p>
            </div>
          </div>
        </div>
      </div>
      <Intermodal1 />
<ServicesSection />
<AdvantagesSection />
<AgentPartnerSection />
<TestimonialInterModal />
      </div>
    );
  }
  