import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaHeadphones, FaTimes } from "react-icons/fa";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import i1 from "./i1.png"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); // Track route changes


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDropdownHover = (menu) => {
    setDropdown(menu);
  };

  const handleSubDropdownHover = (submenu) => {
    setSubDropdown(submenu);
  };

  const handleDropdownLeave = () => {
    setDropdown(null);
    setSubDropdown(null);
  };

  
  // Toggle main dropdown
  const handleDropdownClick = (label) => {
    if (dropdown === label) {
      setDropdown(null); // Close dropdown if it's already open
    } else {
      setDropdown(label); // Open dropdown
    }
  };
  
  // Toggle sub-dropdown
  const handleSubDropdownClick = (label) => {
    if (subDropdown === label) {
      setSubDropdown(null); // Close sub-dropdown if it's already open
    } else {
      setSubDropdown(label); // Open sub-dropdown
    }
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
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center relative right-0 lg:right-12">
          <img
            src={i1}
            alt="Shaheen Express"
            className="h-14"
          />
        </div>

        {/* Address & Contact */}
        <div className="flex items-center font-noto-sans-display justify-center text-[14px] leading-loose text-gray-800">
          <span className="text-center lg:flex hidden">
            FLAT 22, BUILDING 661, BLOCK 712, ROAD 1208, MANAMA, KINGDOM OF BAHRAIN
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
      <nav ref={navRef} className="w-full lg:flex hidden font-noto-sans-display font-medium items-center bg-white">
        <div className="mx-auto px-4">
          <ul className="flex space-x-24 ml-14 py-3 text-[14px] text-gray-900 tracking-wide relative">
            <li className="hover:text-Red items-center mt-[7px] cursor-pointer">
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
              <li 
                key={menu.label} 
                className="relative"
                onMouseEnter={() => handleDropdownHover(menu.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="hover:text-Red text-center cursor-pointer flex items-center gap-2">
                  <button className="flex items-center cursor-pointer gap-2">
                    {menu.label}
                    <span className="cursor-pointer py-2">
                      {dropdown === menu.label ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  </button>
                </div>
                {dropdown === menu.label && (
                  <ul className="absolute left-0 mt-2 w-72 top-[20px]  bg-white shadow-lg rounded-md  z-50">
                    {menu.subRoutes.map((route, index) => (
                      <li 
                        key={index} 
                        className="hover:bg-gray-100 rounded-md px-4 cursor-pointer p-8 mt-2 py-2 relative group"
                        onMouseEnter={() => route.label === "FREIGHT SERVICES" && handleSubDropdownHover(route.label)}
                        onMouseLeave={() => route.label === "FREIGHT SERVICES" && setSubDropdown(null)}
                      >
                        {route.subSubRoutes ? (
                          <>
                            <button
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
            
            <li className="hover:text-Red p-1 cursor-pointer">
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav ref={navRef} className="w-full lg:hidden flex font-noto-sans-display font-medium items-center bg-white">
  <div className="mx-auto px-4">
    <div className="flex justify-between items-center py-3">
      <button onClick={toggleMenu} className="text-gray-900 relative left-38 focus:outline-none">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    <div className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-900">
        <FaTimes />
      </button>
      <ul className="mt-16 space-y-6 px-6 text-gray-900 text-[14px] tracking-wide">
        <li>
          <Link to="/contact" onClick={toggleMenu}>CONTACT US</Link>
        </li>

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
          {
            label: "CARRIERS",
            subRoutes: [
              { label: "Load Board", path: "/loadBoard" },
              { label: "Carrier Payment services", path: "/carrierPayment" },
              { label: "Faq's", path: "/faq" }
            ]
          },
          {
            label: "RESOURCES",
            subRoutes: [{ label: "Trucking Dispatch Services", path: "/trucking-Dispatch" }]
          },
          {
            label: "PLANNING",
            subRoutes: [{ label: "Transportation Optimization", path: "/transportation" }]
          },
          {
            label: "ADVANTAGES",
            subRoutes: [
              { label: "Time Management", path: "/timeManagement" },
              { label: "Financial Stability and continue Growth", path: "/financialStability" }
            ]
          }
        ].map((menu) => (
          <li key={menu.label} className="relative">
            <div 
              className="flex items-center justify-between cursor-pointer" 
              onClick={() => handleDropdownClick(menu.label)} // Use click handler instead of hover
            >
              {menu.label}
              {dropdown === menu.label ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {dropdown === menu.label && (
              <ul className="mt-2 pl-4 space-y-4">
                {menu.subRoutes.map((route, index) => (
                  <li key={index} className="relative">
                    {route.subSubRoutes ? (
                      <>
                        <div 
                          className="flex items-center justify-between cursor-pointer" 
                          onClick={() => handleSubDropdownClick(route.label)} // Use click handler for sub-dropdown
                        >
                          {route.label.toUpperCase()}
                          {subDropdown === route.label ? <FaAngleUp /> : <FaAngleRight />}
                        </div>

                        {subDropdown === route.label && (
                          <ul className="mt-2 pl-4 space-y-2">
                            {route.subSubRoutes.map((subRoute, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subRoute} onClick={toggleMenu}>{subRoute.replace("/", "").toUpperCase()}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link to={route.path} onClick={toggleMenu}>{route.label.toUpperCase()}</Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>


    </header>
  );
};

export default Navbar;