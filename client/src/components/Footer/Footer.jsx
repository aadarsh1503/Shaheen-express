import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn,FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F73D38] text-white py-10 px-5 lg:px-20">
        <div>
        <h2 className="text-4xl mb-10 text-center font-bold uppercase ">
          We Offer Solutions to Various Industries
        </h2>
        
        <div className="flex justify-center space-x-9 mb-8">
  {[
    "Frozen Food & Beverages",
    "Construction Material",
    "Agriculture",
    "Factory Material",
    "Oversized Cargo",
    "Meat Fish and Poultry",
  ].map((item, index) => (
    <div key={index} className="text-center group">
      <div className="w-32 h-32 border-2 border-white rounded-full mx-auto mb-2 cursor-pointer transition-all duration-300 group-hover:bg-[#811F1D]"></div>
      <p className="text-sm transition-all duration-300 font-bold mb-10 group-hover:text-[#811F1D]">
        {item}
      </p>
    </div>
  ))}
</div>

        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg border-b border-white pb-2 mb-3">SHIPPERS</h3>
          <ul className="space-y-1">
            <li>Truckload</li>
            <li>Less Than Truckload</li>
            <li>Intermodal</li>
            <li>Cross Border</li>
            <li>Small Parcel</li>
          </ul>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">FREIGHT SERVICES</h3>
          <ul className="space-y-1">
            <li>Flatbed</li>
            <li>Temperature Controlled</li>
            <li>Drayage</li>
            <li>Power Only</li>
            <li>Box Truck</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg border-b border-white pb-2 mb-3">CARRIERS</h3>
          <ul className="space-y-1">
            <li>Load Board</li>
            <li>Carrier Payment Services</li>
            <li>Faq’s</li>
          </ul>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">ADVANTAGES</h3>
          <ul className="space-y-1">
            <li>Time Management</li>
            <li>Financial Stability And Continue Growth</li>
          </ul>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">RESOURCES</h3>
          <ul className="space-y-1">
            <li>Trucking Dispatch Services</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg border-b border-white pb-2 mb-3">PLANNING</h3>
          <ul className="space-y-1">
            <li>Transportation Optimization</li>
          </ul>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">NAVIGATION</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Introduction</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg border-b border-white pb-2 mb-3">OFFICE</h3>
          <p className="leading-6">
            📍 Flat 22, Building 661, Block 712, Road 1208, P.O Box 54121, Manama, Kingdom of Bahrain
          </p>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">REACH US</h3>
          <p className="flex items-center gap-2"><FaPhone className="text-white cursor-pointer" /> +973 1330 3301</p>
          <p className="flex items-center gap-2">✉ hello@alshaheenexpress.com</p>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">FOLLOW US</h3>
          <div className="flex space-x-3 mt-2">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaXTwitter className="text-xl cursor-pointer" />
            <FaLinkedinIn className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-white pt-5">
        © 2025 SHAHEEN EXPRESS | ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
