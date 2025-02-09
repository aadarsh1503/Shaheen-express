import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="w-full border-b font-roboto-condensed border-gray-200">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center relative right-12">
          <img src="https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/Shaheen%20763x208.png" alt="Shaheen Express" className="h-14" />
        </div>

        {/* Address & Contact */}
        <div className="text-xs text-gray-800 text-center">
          FLAT 22, BUILDING 661, BLOCK 712, ROAD 1208, P.O BOX 54121, MANAMA, KINGDOM OF BAHRAIN
          <span className="ml-2">
            <i className="fas fa-phone-alt text-gray-600"></i> +973 1330 3301
          </span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="w-full  text-left bg-white">
        <div className=" mx-auto px-4">
        <ul className="flex space-x-20 ml-14 py-3 text-sm font-semibold text-gray-900 tracking-wide">
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/">HOME</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/flatbed">SHIPPERS</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/TemperatureControlledShipping">CARRIERS</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/resources">RESOURCES</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/planning">PLANNING</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/advantages">ADVANTAGES</Link>
  </li>
  <li className="hover:text-red-500 cursor-pointer">
    <Link to="/contact-us">CONTACT US</Link>
  </li>
</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
