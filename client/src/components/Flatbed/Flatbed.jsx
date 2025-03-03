import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png";
import Flatbed1 from "./Flatbed1";
import TransportSection from "./TransportSection";
import CardsSection from "./CardsSection";
import AdvantagesSection from "./AdvantagesSection";
import AgentPartnerSection from "./AgentPartnerSection";
import TestimonialSection from "./TestimonialSection";

export default function FlatbedShipping() {
  return (
    <div>
      <div className="bg-gray-100 font-noto-sans-display py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 flex-nowrap">
        {/* Left Section */}
        <div className=" max-w-2/3 flex-shrink-0">
          <h2 className="text-3xl font-semibold text-blue-900">Flatbed Shipping</h2>
          <p className="text-black mt-4">
            With Shaheen Express, you can navigate the capacity of the open deck and overcome the
            market uncertainty within the network. Working with us will assist you in completing tasks
            on time and obtaining high-quality deals, as well as the ability to flex within the market.
          </p>
          <div className="mt-6">
            <img
              src={i1}
              alt="Flatbed Shipping"
              className="rounded-lg shadow-lg w-[800px]"
            />
          </div>
          <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-6   relative">
          {[
            "With Shaheen Express, we will provide the most effective freight services with supply chain decisions in a cost-effective manner because of our vast market awareness and transparent pricing techniques.",
            "By scheduling freight services with Shaheen Express, you can save time with a single point of contact.",
            "Visit the Shaheen Express freight services experts and the climate of the logistics industry will be considerable. Moreover, we do provide efficient services to our clients."
          ].map((text, index) => (
            <div key={index} className="bg-white cursor-pointer hover:text-black text-black hover:bg-[#c8342c] shadow-lg flex items-start space-x-4 p-10 rounded-lg">
              <div className="w-10 h-10 flex items-center top-3 relative shrink-0 justify-center bg-Red text-white rounded-full">
                <FaAngleDoubleRight />
              </div>
              <p className="w-[200px] relative left-2 top-3">{text}</p>
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