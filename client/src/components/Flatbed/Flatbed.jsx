import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png"
import Flatbed1 from "./Flatbed1";
import TransportSection from "./TransportSection";
import CardsSection from "./CardsSection";
import AdvantagesSection from "./AdvantagesSection";
import AgentPartnerSection from "./AgentPartnerSection";
import TestimonialSection from "./TestimonialSection";

export default function FlatbedShipping() {
  return (
    <div>
    <div className="bg-gray-100 font-noto-sans-display py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Section */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-blue-900">Flatbed Shipping</h2>
        <p className="text-gray-700 mt-4">
          With Shaheen Express, you can navigate the capacity of the open deck and overcome the
          market uncertainty within the network. Working with us will assist you in completing tasks
          on time and obtaining high-quality deals, as well as the ability to flex within the market.
        </p>
        <div className="mt-6">
          <img
            src={i1}
            alt="Flatbed Shipping"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-md font-semibold uppercase">
          Connect with an Expert
        </button>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {["With Shaheen Express, we will provide the most effective freight services with supply chain decisions in a cost-effective manner because of our vast market awareness and transparent pricing techniques.",
          "By scheduling freight services with Shaheen Express, you can save time with a single point of contact.",
          "Visit the Shaheen Express freight services experts and the climate of the logistics industry will be considerable. Moreover, we do provide efficient services to our clients."]
          .map((text, index) => (
            <div key={index} className=" bg-white cursor-pointer hover:text-black text-black hover:bg-[#c8342c] shadow-lg flex items-start space-x-4 p-10  rounded-lg">
              <div className="w-10 h-10 flex items-center top-3 relative shrink-0 justify-center bg-red-500 text-white rounded-full text-">
                <FaAngleDoubleRight />
              </div>
              <p className=" w-[200px]  relative left-2 top-3 ">{text}</p>
            </div>
          ))}
      </div>
    </div>
    <Flatbed1 />
    <TransportSection />
    <CardsSection />
    <AdvantagesSection />
    <AgentPartnerSection />
    <TestimonialSection />
    </div>
  );
}
