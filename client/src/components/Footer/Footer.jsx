import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn,FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F73D38] font-roboto-condensed text-white py-10 px-5 lg:px-20">
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
  <h3 class="font-bold text-lg border-b border-white pb-2 mb-3">SHIPPERS</h3>
  <ul class="space-y-1">
    <li><a href="/truck-Load" class="hover:underline">Truckload</a></li>
    <li><a href="/lst" class="hover:underline">Less Than Truckload</a></li>
    <li><a href="/intermodal" class="hover:underline">Intermodal</a></li>
    <li><a href="/crossBorder" class="hover:underline">Cross Border</a></li>
    <li><a href="/smallParcel" class="hover:underline">Small Parcel</a></li>
  </ul>
  
  <h3 class="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">FREIGHT SERVICES</h3>
  <ul class="space-y-1">
    <li><a href="/flatbed" class="hover:underline">Flatbed</a></li>
    <li><a href="/temperature-controlled" class="hover:underline">Temperature Controlled</a></li>
    <li><a href="/drayage" class="hover:underline">Drayage</a></li>
    <li><a href="/power-only" class="hover:underline">Power Only</a></li>
    <li><a href="/box-truck" class="hover:underline">Box Truck</a></li>
  </ul>
</div>


      
        <div>
  <h3 class="font-bold text-lg border-b border-white pb-2 mb-3">CARRIERS</h3>
  <ul class="space-y-1">
    <li><a href="/loadBoard" class="hover:underline">Load Board</a></li>
    <li><a href="/carrierPayment" class="hover:underline">Carrier Payment Services</a></li>
    <li><a href="/faq" class="hover:underline">FAQ’s</a></li>
  </ul>

  <h3 class="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">ADVANTAGES</h3>
  <ul class="space-y-1">
    <li><a href="#" class="hover:underline">Time Management</a></li>
    <li><a href="#" class="hover:underline">Financial Stability And Continued Growth</a></li>
  </ul>

  <h3 class="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">RESOURCES</h3>
  <ul class="space-y-1">
    <li><a href="/trucking-Dispatch" class="hover:underline">Trucking Dispatch Services</a></li>
  </ul>
</div>


<div>
  <h3 class="font-bold text-lg border-b border-white pb-2 mb-3">PLANNING</h3>
  <ul class="space-y-1">
    <li><a href="/transportation" class="hover:underline">Transportation Optimization</a></li>
  </ul>

  <h3 class="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">NAVIGATION</h3>
  <ul class="space-y-1">
    <li><a href="/" class="hover:underline">Home</a></li>
    <li><a href="#" class="hover:underline">Introduction</a></li>
    <li><a href="/contact" class="hover:underline">Contact Us</a></li>
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
