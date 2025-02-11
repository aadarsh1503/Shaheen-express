import { FaPhoneAlt } from "react-icons/fa";
import i2jpg from "./i2jpg.jpg"
import i3 from "./i3.jpg"
import i4jpg from "./i4jpg.jpg"
const SupportSection = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between items-start gap-10 p-8">
      {/* Left Content */}
      <div className="flex flex-col gap-12 max-w-2xl">
        {/* Card 1 */}
        <div className="flex gap-6 items-start">
          <img src={i2jpg} alt="Booking loads" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Book your loads in a very simple way</h2>
            <p className="text-gray-600">
              It is a front-end page builder where what you see is what you get. We designed it
              so you can be in complete control of your website. Just click, modify and watch
              the results.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex gap-6 items-start">
          <img src={i3} alt="Checking loads status" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Stay connected and check your loads status on the way</h2>
            <p className="text-gray-600">
              Always stay connected with us on the road with our mobile app, where you can
              quickly access a plethora of powerful and extremely useful tools in the palm of
              your hand. This allows you to easily book and check the status of your load on
              your mobile phone. Any document can be uploaded directly from your smartphone.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex gap-6 items-start">
          <img src={i4jpg} alt="Office connection" className="w-36 h-36 rounded-full" />
          <div>
            <h2 className="text-xl font-serif mb-6 text-Blue">Stay connected from your office</h2>
            <p className="text-gray-600">
              There is no longer a need to make hundreds of phone calls and send thousands of
              emails to book loads; instead, you can find and book loads in less than a minute
              from the comfort of your own office using your computer or laptop.
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
  );
};

export default SupportSection;
