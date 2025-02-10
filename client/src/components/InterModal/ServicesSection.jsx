import { FaAngleDoubleRight } from "react-icons/fa";
import i2 from "./i2.png"
export default function ServicesSection() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10 w-full md:w-1/3 text-center md:text-right">
          <div className="relative text-right bottom-8">
            <FaAngleDoubleRight className="text-Red text-5xl relative  bottom-9 inline-block" />
            <h2 className="text-xl font-semibold relative  bottom-6 text-Blue">Cross Border</h2>
            <p className="text-gray-700 mt-2 w-[200px]  bottom-4 text-[14px] leading-6 relative inline-block">
              Cross-border supplies demand specialized customs brokerage, warehousing, cross-docking, drop trailers, and distribution support.
              Shaheen Express provides you with <strong>all</strong> those services with an expert team.
            </p>
          </div>
          <div>
            <FaAngleDoubleRight className="text-Red text-5xl relative  bottom-9 inline-block" />
            <h2 className="text-xl font-semibold relative  bottom-6 text-Blue">Drayage</h2>
            <p className="text-gray-700 mt-2 w-[200px]  bottom-4 text-[14px] leading-6 relative inline-block">
              Now you can reduce your import costs and maximize simplicity while dealing with Shaheen Express.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3">
          <img
            src={i2}
            alt="Truck"
            className="rounded-lg shadow-lg  w-full"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 w-full md:w-1/3 text-center md:text-left">
          <div>
            <FaAngleDoubleRight className="text-Red text-5xl relative  bottom-16 inline-block" />
            <h2 className="text-xl font-semibold relative  bottom-12 text-Blue">Port Services</h2>
            <p className="text-gray-700 mt-2 w-[200px]  bottom-11 text-[14px] leading-6 relative  ">
              This is a front-end page builder where what you see is what you get. Just click, modify, and watch the results. Cool right?
            </p>
          </div>
          <div>
            <FaAngleDoubleRight className="text-Red text-5xl relative  bottom-9 inline-block" />
            <h2 className="text-xl font-semibold relative  bottom-6 text-Blue">Expedited</h2>
            <p className="text-gray-700 mt-2 w-[200px]  bottom-4 text-[14px] leading-6 relative ">
              Now you can add flexibility to your supply chain strategy as an alternative to single driver over-the-road (OTR) transit.
              Shaheen Express offers you <strong>competitive delivery</strong> speeds for your time-sensitive shipments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
