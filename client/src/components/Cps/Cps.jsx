import { FaAngleDoubleRight } from "react-icons/fa";
import i6 from "./i6.jpg"

import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import SupportSection1 from "./SupportSection1";




export default function Cps() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i6})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 relative left- text-left  text-white">
            <h2 className="text-4xl font-semibold text-Blue ">
            Carrier Payment Service
            </h2>
            <p className="mt-4 text-[16px] w-[500px] text-gray-900">
            Now you do not need to worry about your payment as we have brought up the easiest and most convenient Carrier payment Service for you. Get paid faster for the work you have done with our Carrier payment service.

            </p>
            <p className=" mt-4 text-[16px] w-[500px] text-gray-900">﻿To start or apply for The payment cycle or process, upload your documentation of the load work. We give you several convenient options to submit your Paperwork. You're requested to choose only the options which work for you.</p>
            <button className="mt-6 bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/ mt-10 lg:mt-0 lg:ml-10 bg-[#F73D38] p-8 rounded-lg shadow-lg text-white">
            <div className="flex mt-4 items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mb-9 w-[220px]">
              Scan upload the load documentation to our Application
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 mt-2 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
              Take a picture and Send it Via our mobile application


              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex  items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 mt-2 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
              Submit your paperwork using Load Docs


              </p>
            </div>
            <hr className="my-4 border-white border-opacity-30" />
  
  <div className="flex  items-start ">
    <div className=" bg-opacity-20 p-3 rounded-full">
    <div className="rounded-full p-4 mt-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
    </div>
    <p className="ml-4 text-[16px] mt-4 mb-9 w-[220px]">
    Capture scans and submit them through our Shaheen technology.


    </p>
  </div>
          </div>
        </div>
      </div>
<SupportSection1 />
<AdvantagesSection />
<AgentPartnerSection />
      </div>
    );
  }
  