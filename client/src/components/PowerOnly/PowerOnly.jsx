import { FaAngleDoubleRight } from "react-icons/fa";
import i2 from "./i2.png";
import i1 from "./i1.jpg";
import PowerOnlySolutions from "./PowerOnlySolutions";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import Testimonial4 from "./Testimonial4";

export default function PowerOnly() {
  return (
    <div>
    <div
      className="bg-gray-100 font-noto-sans-display py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 relative bg-cover bg-center"
      style={{ backgroundImage: `Url(${i1})` }} // 🔹 Background Image
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0  bg-opacity-0"></div>
      {/* Content */}
      <div className=" max-w-2/3 flex-shrink-0">
        <h2 className="text-3xl font-semibold text-Blue">
        Power Only</h2>
        <p className="text-black mt-4">
        When the shipper owns the trailer that needs to be transported but does not have any trucks available, power only shipping is required, and the truck and driver are hired to transport the goods.
        </p>
        <p className="text-black mt-6">When you don't have a driver or a truck, power is primarily used for local supplies. You needed to hire those vehicles in this situation, & Shaheen Express will provide you with those vehicles at a reasonable price.</p>
        <div className="mt-6">
          <img src={i2} alt="Flatbed Shipping" className="rounded-lg shadow-lg w-[800px]" />
        </div>
        <a href="/contact">
            <button className="mt-6 cursor-pointer bg-Red text-white px-6 py-3 font-semibold rounded-md">
              CONNECT WITH AN EXPERT
            </button>
            </a>
      </div>

      {/* Right Section */}
      <div className="relative z-10 space-y-6">
        {[
          "With Shaheen Express, we will provide the most effective freight services with supply chain decisions in a cost-effective manner because of our vast market awareness and transparent pricing techniques.",
          "By scheduling freight services with Shaheen Express, you can save time with a single point of contact.",
          "Visit the Shaheen Express freight services experts and the climate of the logistics industry will be considerable. Moreover, we do provide efficient services to our clients.",
        ].map((text, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer hover:text-black text-black hover:bg-[#c8342c] shadow-lg flex items-start space-x-4 p-10 rounded-lg"
          >
            <div className="w-10 h-10 flex items-center top-3 relative shrink-0 justify-center bg-Red text-white rounded-full">
              <FaAngleDoubleRight />
            </div>
            <p className="w-[200px] relative left-2 top-3">{text}</p>
          </div>
        ))}
      </div>
    </div>
    <PowerOnlySolutions />
    <AdvantagesSection />
    <AgentPartnerSection />
    <Testimonial4 />
    </div>
  );
}
