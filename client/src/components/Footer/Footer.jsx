import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn,FaPhone } from "react-icons/fa6";
import i1 from "./i1.webp"
import i2 from "./i2.webp"
import i3 from "./i3.webp"
import i4 from "./i4.webp"
import i5 from "./i5.webp"
import i6 from "./i6.png"
import world from "./world.png"
const Footer = () => {
  return (
<footer
  className="relative text-white font-roboto-condensed py-10 px-5 lg:px-20 bg-cover bg-center opacity-100" // Apply opacity to the entire background
  style={{
    backgroundImage: `url(${world})`,
    backgroundColor: "#F73D38", // Optional dark tint
    backgroundBlendMode: "multiply", // Blend the image with the background color
  }}
>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl mb-10 text-center font-bold uppercase">
          We Offer Solutions to Various Industries
        </h2>
        
        <div className="flex justify-center space-x-9 mb-8">
          {[
            { name: "Frozen Food & Beverages", image: i1 },
            { name: "Construction Material", image: i2 },
            { name: "Agriculture", image: i3 },
            { name: "Factory Material", image: i4 },
            { name: "Oversized Cargo", image: i5 },
            { name: "Meat Fish and Poultry", image: i6 },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <a href="/">
                <div className="w-32 h-32 border-1 border-black rounded-full mx-auto mb-2 cursor-pointer transition-all duration-300 group-hover:bg-[#811F1D] flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                </div>
              </a>
              <p className="text-sm transition-all duration-300 font-bold mb-10 group-hover:text-[#811F1D]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Grid Sections */}
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
    <li><a href="/timeManagement" class="hover:underline">Time Management</a></li>
    <li><a href="/financialStability" class="hover:underline">Financial Stability And Continued Growth</a></li>
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
    <li><a href="/introduction" class="hover:underline">Introduction</a></li>
    <li><a href="/contact" class="hover:underline">Contact Us</a></li>
  </ul>
</div>


        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg border-b border-white pb-2 mb-3">OFFICE</h3>
          <p className="leading-6">
             Flat 22, Building 661, Block 712, Road 1208, Manama, Kingdom of Bahrain
          </p>
          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">REACH US</h3>
          <p className="flex items-center gap-2">
  <a href="tel:+97313303301" className="flex items-center gap-2 hover:underline text-white">
    <FaPhone className="text-white cursor-pointer " /> +973 1330 3301
  </a>
</p>
<p className="flex items-center gap-2">
  <a href="mailto:hello@alshaheenexpress.com" className="flex hover:underline items-center gap-2 text-white">
    ✉ hello@alshaheenexpress.com
  </a>
</p>

          <h3 className="font-bold text-lg border-b border-white pb-2 mt-5 mb-3">FOLLOW US</h3>
          <div className="flex space-x-3 mt-2">
  <a href="https://www.facebook.com/alshaheenexpress" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-xl hover:text-red-900 cursor-pointer" />
  </a>
  <a href="https://www.instagram.com/alshaheenexpress/#" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-xl cursor-pointer hover:text-red-900" />
  </a>
  <a href="https://x.com/shaheenexpress" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-xl cursor-pointer hover:text-red-900" />
  </a>
  <a href="https://www.linkedin.com/in/shaheen-express-495250236/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="text-xl cursor-pointer hover:text-red-900" />
  </a>
</div>

        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-white pt-5">
        © 2025 SHAHEEN EXPRESS | ALL RIGHTS RESERVED.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
