import React, { useState, useEffect, useRef } from "react";
import i1 from "./i1.jpg";
import i2 from "./i2.png";

const LogisticsNetwork = () => {
  const [truckScale, setTruckScale] = useState(1); // Default scale (normal size)
  const [truckPosition, setTruckPosition] = useState(0); // Default horizontal position
  const [truckShift, setTruckShift] = useState(0); // Extra left shift
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isVisible, setIsVisible] = useState(false); // Track visibility of square box
  const squareBoxRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to check visibility of square box
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Animation starts when at least 50% of the box is visible
    );

    if (squareBoxRef.current) {
      observer.observe(squareBoxRef.current);
    }

    return () => {
      if (squareBoxRef.current) {
        observer.unobserve(squareBoxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't animate until box is visible

    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // Scrolling Down → Truck shrinks & shifts left
        setTruckScale((prev) => Math.max(0.5, prev - 0.02));
        setTruckPosition((prev) => Math.max(-50, prev - 1)); // Shift left
        setTruckShift((prev) => Math.max(-30, prev - 0.5)); // Extra left shift
      } else {
        // Scrolling Up → Truck enlarges & shifts right
        setTruckScale((prev) => Math.min(1.2, prev + 0.02));
        setTruckPosition((prev) => Math.min(0, prev + 2)); // Shift right
        setTruckShift((prev) => Math.min(0, prev + 1)); // Reset left shift
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <section
      className="relative w-full h-[1100px] flex items-center  justify-between px-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${i1})` }}
    >
      {/* Left Side Text */}
      <div className="w-1/2 relative bottom-16 left-12">
        <h2 className="text-4xl font-bold text-red-500 uppercase">
          What Exactly Does <br />
          <span className="text-red-500">Shaheen Express Do?</span>
        </h2>
        <p className="text-lg font-bold text-white mt-3">
          We thrive in solving most intricate to basic problems <br />
          across the Logistics network.
        </p>
        <button className="mt-4 px-6 py-3 w-[200px] font-bold bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition">
          Start now
        </button>
      </div>

      {/* Right Side Square Box */}
      <div
        ref={squareBoxRef}
        className="relative w-[530px] h-[500px] flex justify-center items-center"
      >
        {/* Square Border */}
        <div className="absolute w-full h-full border-[20px] right-[80px] border-[#032843]"></div>

        {/* Truck Image with Zoom & Left Shift Effect */}
        <img
          src={i2}
          alt="Truck"
          className={`absolute w-[340px] right-56 top-28 object-cover transition-transform duration-300 ${
            isVisible ? "opacity-100" : "opacity-100"
          }`}
          style={{
            transform: `scale(${truckScale}) translateX(${truckPosition + truckShift}px)`,
          }}
        />
      </div>
    </section>
  );
};

export default LogisticsNetwork;
