import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"
import LtlSolutions from "./LtlSolutions";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import TestimonialLoad from "../LoadBoard/TestimonialLoad";



export default function LessthanTruckload() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i1})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 relative lg:py-0 py-6 left- text-left  text-white">
            <h2 className="text-4xl font-semibold text-Blue ">
            Less than Truckload (LTL) <br />Shipping 
            </h2>
            <p className="mt-4 text-[18px] w-full lg:w-[500px] text-gray-900">
            With the growth of ecommerce, less truckload shipping necessitates greater flexibility than ever before. We will assist you in determining the best combination of LTL services to achieve efficiencies while exceeding customer expectations.

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
              Shaheen Express can help you gain a competitive advantage and improve your on-time performance by providing comprehensive LTL services.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              Collaborate with seasoned supply chain specialists at Shaheen Express who can assist you in predicting, strategizing, and resolving your planned and unplanned shipment needs.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
              With Shaheen Express, everyone can discover smarter, more flexible multimodal alternatives as well as end-to-end visibility.


              </p>
            </div>
          </div>
        </div>
      </div>
<LtlSolutions />
<AdvantagesSection />
<AgentPartnerSection />
<TestimonialLoad />
      </div>
    );
  }
  