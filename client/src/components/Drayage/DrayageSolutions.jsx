import { FaAngleDoubleRight } from "react-icons/fa";
import i2webp from "./i2webp.webp"
export default function DrayageSolutions() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center gap-8 px-6 lg:px-16 py-12">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-3xl font-semibold text-Blue">Drayage Solutions</h2>
        <p className="italic text-gray-600 mt-8 mb-10">
          While shipping entire or empty containers, trust is a must and the
          right drayage solution to keep the system functioning smoothly onsite,
          so your deliveries happen on time.
        </p>

        {/* Drayage Procurement */}
        <div className="mt-6 flex gap-3">
          <FaAngleDoubleRight className="text-red-500 shrink-0" size={28} />
          <div>
            <h3 className="text-lg font-semibold text-Blue">Drayage Procurement</h3>
            <p className="text-gray-700 text-[14px] mt-2">
              Personalize your customs brokerage policy with drayage and
              port-to-door solutions, and Shaheen Express is always ready to
              help you with the best services.
            </p>
          </div>
        </div>

        {/* Chassis Pool Program */}
        <div className="mt-6 flex gap-3">
          <FaAngleDoubleRight className="text-red-500 shrink-0" size={28} />
          <div>
            <h3 className="text-lg font-semibold text-Blue">Chassis Pool Program</h3>
            <p className="text-gray-700 text-[14px] mt-2">
              Ensure a constant supply of the equipment that you need by
              choosing Shaheen Express. We are offering services at competitive
              market pricing, this customizable solution lowers your need for
              multiple providers while providing seamless, reliable drayage
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2">
        <img
          src={i2webp}
          alt="Drayage Solutions"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
