import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation(); // Track route changes

  const toggleDropdown = (menu) => {
    setDropdown(prev => prev === menu ? null : menu);  // Using a functional update for setDropdown
    setSubDropdown(null);  // Reset sub-dropdown when a new main dropdown is toggled
  };
  
  const toggleSubDropdown = (submenu) => {
    setSubDropdown(prev => prev === submenu ? null : submenu); // Same here for subDropdown
  };
  
  const handleToggleIcon = (menu) => {
    setDropdown(prev => (prev === menu ? null : menu)); // Toggle dropdown on icon click
    setSubDropdown(null); // Reset sub-dropdown
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdown(null);
        setSubDropdown(null);
      }
    };

    const handleScroll = () => {
      setDropdown(null);
      setSubDropdown(null);
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setDropdown(null);
    setSubDropdown(null);
  }, [location.pathname]); // Runs when route changes

  return (
    <header className="w-full border-b font-roboto-condensed border-gray-200">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center relative right-12">
          <img
            src="https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/Shaheen%20763x208.png"
            alt="Shaheen Express"
            className="h-14"
          />
        </div>

        {/* Address & Contact */}
        <div className="flex items-center font-noto-sans-display justify-center text-[14px] leading-loose text-gray-800">
          <span className="text-center">
            FLAT 22, BUILDING 661, BLOCK 712, ROAD 1208, P.O BOX 54121, MANAMA, KINGDOM OF BAHRAIN
          </span>
          <div className="mx-2 h-4 border-l border-gray-400"></div>
          <span className="flex items-center">
  <FaHeadphones className="text-gray-600 mr-1" />
  <a href="tel:+97313303301" className="text-gray-600 hover:underline">
    +973 1330 3301
  </a>
</span>

        </div>
      </div>

      {/* Bottom Navbar */}
      <nav ref={navRef} className="w-full font-noto-sans-display font-medium items-center bg-white">
        <div className="mx-auto px-4">
          <ul className="flex space-x-24 ml-14 py-3 text-[14px] text-gray-900 tracking-wide relative">
            <li className="hover:text-Red items-center cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            
            {/* Dropdowns with Icons */}
            {[
              { 
                label: "SHIPPERS", 
                path: "/flatbed", 
                subRoutes: [
                  { 
                    label: "FREIGHT SERVICES", 
                    path: "/flatbed", 
                    subSubRoutes: ["/flatbed", "/temperature-controlled", "/drayage", "/power-only", "/box-truck"] 
                  },
                  { label: "TRUCKLOAD", path: "/truck-Load" },
                  { label: "LESS THAN TRUCKLOAD", path: "/lst" },
                  { label: "INTERMODAL", path: "/intermodal" },
                  { label: "CROSS BORDER", path: "/crossBorder" },
                  { label: "SMALL PARCEL", path: "/smallParcel" }
                ]
              },

              { label: "CARRIERS", subRoutes: [ { label: "Load Board", path: "/loadBoard" }, { label: "Carrier Payment services", path: "/carrierPayment" }, { label: "Faq's", path: "/faq" }] },

              { label: "RESOURCES", subRoutes: [{ label: "Trucking Dispatch Services", path: "/trucking-Dispatch" }] },

              { label: "PLANNING", subRoutes: [{ label: "Transportation Optimization", path: "/transportation" }] },

              { label: "ADVANTAGES", subRoutes: [{ label: "Time Management", path: "/timeManagement" }, { label: "Financial Stability and continue Growth", path: "/financialStability" }] }
            ].map((menu) => (
<li key={menu.label} className="relative">
<div
  onClick={() => toggleDropdown(menu.label)} // Text click opens/closes dropdown
  className="hover:text-Red text-center cursor-pointer flex items-center gap-2"
>
  <button className="flex items-center cursor-pointer gap-2">
    {menu.label}
    <span className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleToggleIcon(menu.label); }}>
      {dropdown === menu.label ? <FaAngleUp /> : <FaAngleDown />}
    </span>
  </button>
</div>
  {dropdown === menu.label && (
    <ul className="absolute left-0 mt-2 w-72 top-[26px] shadow-custom bg-white rounded-md shadow-lg z-50">
      {menu.subRoutes.map((route, index) => (
        <li 
          key={index} 
          className="hover:bg-gray-100 px-4 cursor-pointer p-8 mt-2 py-2 relative group"
          onMouseEnter={() => route.label === "FREIGHT SERVICES" && setSubDropdown(route.label)}
          onMouseLeave={() => route.label === "FREIGHT SERVICES" && setSubDropdown(null)}
        >
          {route.subSubRoutes ? (
            <>
              <button
                onClick={() => toggleSubDropdown(route.label)}
                className="w-full h-full flex justify-between items-center"
              >
                {route.label.toUpperCase()}
                {route.label === "FREIGHT SERVICES" && <FaAngleRight className="ml-2" />}
              </button>
              {subDropdown === route.label && (
                <ul className="absolute left-full top-0 w-72 bg-white rounded-md shadow-lg z-10">
                  {route.subSubRoutes.map((subRoute, subIndex) => (
                    <li key={subIndex} className="hover:bg-gray-100 px-4 py-2">
                      <Link to={subRoute} className="block w-full h-full">
                        {subRoute.replace("/", "").toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link to={route.path} className="block w-full h-full">{route.label.toUpperCase()}</Link>
          )}
        </li>
      ))}
    </ul>
  )}
</li>
            
            ))}
            
            <li className="hover:text-Red cursor-pointer">
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
