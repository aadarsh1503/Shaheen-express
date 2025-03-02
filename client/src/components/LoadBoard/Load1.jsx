import { FaAngleDoubleRight } from "react-icons/fa";
import i6 from "./i6.jpg"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";




export default function Load1() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i6})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 relative py-6 lg:py-0 left-4 lg:left-10 text-left  text-white">
            <h2 className="text-4xl font-semibold text-Blue ">
            Book your loads instantly and save your time
            </h2>
            <p className="mt-4 text-[18px] w-full lg:w-[500px] text-gray-900">
            We have a lot more freight than ever before on our load board. Moreover, are free to book any load. We have more freight available on the load boards than ever before and can book the loads with our Shaheen Express carrier, including short-haul, cross-border, temperature-controlled, and so on, right away. Our app is available for 24hr for use whenever and wherever required.

            </p>
            <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
            </a>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/ mt-10 lg:mt-0 lg:ml-38 bg-[#F73D38] p-6 rounded-lg shadow-lg text-white">
            <div className="flex mt-4 items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mb-9 w-[220px]">
              You can access more loads as we are one of the largest load boards of ( area name)
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 mt-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
              You can use the filter search option to find out the exact load option as per your preference.


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex  items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 mt-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
              Book anytime on your schedule- no calls, no emails are necessarily required


              </p>
            </div>
          </div>
        </div>
      </div>

<AdvantagesSection />
<AgentPartnerSection />
      </div>
    );
  }
  