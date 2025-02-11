import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.jpg"

import Temprature1 from "./Temprature1";
import ShippingServices from "./ShippingServices";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Testimonial2 from "./Testimonial2";
export default function TemperatureControlledShipping() {
    return (
        <div>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center px-10"
        style={{ backgroundImage: `Url(${i1})` }}
      >
        {/* Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 relative left-32 text-left  text-white">
            <h2 className="text-3xl font-semibold text-blue-900">
              Temperature Controlled <br /> Shipping
            </h2>
            <p className="mt-4 text-[18px] w-[370px] text-gray-900">
              Your temperature-sensitive shipment needs a lot of care to protect
              its quality. You can get it by access to the largest network of
              reliable temperature-controlled capacity in the US and Canada. With
              Shaheen Express, experts leverage core carrier relationships based
              on your products arriving safely, and on time.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
          </div>
  
          {/* Right Content */}
          <div className="lg:w-1/ mt-10 lg:mt-0 lg:ml-10 w-[400px] bg-[#F73D38] p-6 rounded-lg shadow-lg text-white">
            <div className="flex items-start">
              <div className="  p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
                Now you can access trucks when and where you want them, with a
                Shaheen Express network of temperature-controlled contract
                carriers.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start">
              <div className="b bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
                Shaheen Express are fully reliable and have experience across
                product shipments that are temperature sensitive.
              </p>
            </div>
  
            <hr className="my-4 border-white border-opacity-30" />
  
            <div className="flex items-start ">
              <div className=" bg-opacity-20 p-3 rounded-full">
              <div className="rounded-full p-4 bg-[#f8504c]"><FaAngleDoubleRight /></div>
              </div>
              <p className="ml-4 text-[16px] w-[220px]">
                You can get efficient services from Shaheen Express staff who are
                experienced, certified temperature-controlled experts—focused on
                helping organize your sensitive shipment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Temprature1 />
      <ShippingServices />
      <AdvantagesSection />
      <AgentPartnerSection />
      <Testimonial2 />
      </div>
    );
  }
  