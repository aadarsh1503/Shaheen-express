import { FaPhoneAlt } from "react-icons/fa";
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
const SupportSection1 = () => {
  return (
    <div>
      <h1 className="text-Blue text-4xl mt-10 text-center">Take a benefit of multiple carrier payment options</h1>
      <p className="mt-6 text-[18px] max-w-5xl mb-10 mx-auto text-center">Whether you use a check or an electronic funds transfer, we have multiple payment options for our carriers.With an additional carrier payment options, you can personalise your payment experience.</p>
    <div className="flex flex-col lg:flex-row max-w-6xl mt-8 mx-auto justify-between items-start gap-10 p-8">
      {/* Left Content */}
      <div className="flex flex-col gap-12 max-w-2xl">
        {/* Card 1 */}
        <div className="flex gap-6 items-start">
          <img src={i2} alt="Booking loads" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Get paid for your work within two business working days</h2>
            <p className="text-gray-600">
            Use our quick pay options to get paid for your work, as soon as you upload the proof of delivery, we will verify it and pay you within two working days. However, note down that your payment percentage can be changed based on your carrier payment advantage program status
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex gap-6 items-start">
          <img src={i3} alt="Checking loads status" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Get paid for your work up to 60% in advance</h2>
            <p className="text-gray-600">
            Get up to a 60% cash advance on your next load of work to keep your cash flow safe and secure. By taking an advance, you can also keep your shipment-related expenses under control without being worried about cash flow. Contact our Billing team to get an advance on your next shipment.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex gap-6 items-start">
          <img src={i4} alt="Office connection" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Work for an approved list of factors</h2>
            <p className="text-gray-600">
            Working with us provides a number of advantages, including the ability to work with banks, factoring companies, or other well-known financial institutions to obtain a variety of banking and credit card services, as well as a variety of other financial and factoring services.
            </p>
          </div>
        </div>
      </div>

      {/* Right Support Box */}
      <div className="bg-Red text-white p-6 bottom-8 relative font-noto-sans-display rounded-xl w-80 h-[650px] flex flex-col items-center text-center shadow-lg">
        <div className="border border-white rounded-lg p-6 h-[540px]  top-7 relative  w-full">
        <svg className="ml-16 mt-20 text-6xl"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  width="80"
  height="70"
>
  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.13-.24 11.36 11.36 0 004.44.89 1 1 0 011 1V21a1 1 0 01-1 1 19 19 0 01-19-19 1 1 0 011-1h3.06a1 1 0 011 1 11.36 11.36 0 00.89 4.44 1 1 0 01-.24 1.13l-2.2 2.2z" />
  <path d="M15 2a1 1 0 00-1 1 7 7 0 017 7 1 1 0 002 0A9 9 0 0015 2zM15 6a1 1 0 00-1 1 3 3 0 013 3 1 1 0 002 0 5 5 0 00-5-5z" />
</svg>

          <h3 className="uppercase text-sm mt-6 mb-6 font-montserrat tracking-wide">Support</h3>
          <p className="mt-2 mb-12 font-montserrat">Get accurate, flexible freight rates.</p>
          <h2 className="text-2xl mt-10 font-bold font-montserrat ">+973 1330 3301</h2>
          <p className=" mt-8 text-sm font-montserrat">Phone: 09:00 – 18:00</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupportSection1;
