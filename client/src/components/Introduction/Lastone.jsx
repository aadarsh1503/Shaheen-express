import { FaArrowRight } from "react-icons/fa";
import i1 from "./i1.webp"
import i2 from "./i2.webp"
import i3 from "./i3.webp"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"

const Lastone = () => {
  return (
    <div className="w-full py-10 text-center">
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6 px-10">
        {/* First block with text */}
        <div className="flex flex-col items-center justify-center   w-full h-48 p-4">
          <h2 className="text-2xl font-semibold text-blue-900">At Shaheen Express</h2>
          <p className="italic text-gray-600">Industry focused sustainability efforts</p>
        </div>

        {/* Remaining images */}
        <img
          src={i1}
          alt="Office 2"
          className="rounded-md shadow-lg w-full h-48 object-cover"
        />
        <img
          src={i2}
          alt="Office 3"
          className="rounded-md shadow-lg w-full h-48 object-cover"
        />
        <img
          src={i3}
          alt="Office 4"
          className="rounded-md shadow-lg w-full h-48 object-cover"
        />
        <img
          src={i4}
          alt="Office 5"
          className="rounded-md shadow-lg w-full h-48 object-cover"
        />
        <img
          src={i5}
          alt="Office 6"
          className="rounded-md shadow-lg w-full h-48 object-cover"
        />
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-6 mt-8 px-10">
  <div className="flex flex-col items-center">
    <div className="bg-[#239DDB] text-white p-4 rounded-full">
      <FaArrowRight className="text-xl" />
    </div>
    <p className="text-blue-900 font-semibold mt-2">
      24*7 Service and Accessibility
    </p>
  </div>
  <div className="flex flex-col items-center">
    <div className="bg-[#239DDB] text-white p-4 rounded-full">
      <FaArrowRight className="text-xl" />
    </div>
    <p className="text-blue-900 font-semibold mt-2">
      Financial stability and continued growth.
    </p>
  </div>
  <div className="flex flex-col items-center">
    <div className="bg-[#239DDB] text-white p-4 rounded-full">
      <FaArrowRight className="text-xl" />
    </div>
    <p className="text-blue-900 font-semibold mt-2">
      Real-time Freight tracking from pickup to delivery
    </p>
  </div>
</div>

    </div>
  );
};

export default Lastone;
