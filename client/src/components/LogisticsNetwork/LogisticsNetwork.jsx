import React, { useState, useEffect, useRef } from "react";
import i1 from "./i1.jpg";
import i2 from "./i2.png";

const LogisticsNetwork = () => {
  const [truckScale, setTruckScale] = useState(1);
  const [truckPosition, setTruckPosition] = useState(0);
  const [truckShift, setTruckShift] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bgSize, setBgSize] = useState(100); // 🔥 Background image zoom percentage

  const squareBoxRef = useRef(null);

  const MIN_TRUCK_SCALE = 0.96; // Set the minimum scale for the truck image

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
    if (!isVisible) return;

    const handleScroll = () => {
      let currentScroll = window.scrollY;

      // Truck Animation
      if (currentScroll > lastScrollY) {
        setTruckScale((prev) => Math.max(MIN_TRUCK_SCALE, prev - 0.015)); // Ensure it doesn't go below MIN_TRUCK_SCALE
        setTruckPosition((prev) => Math.max(-10, prev - 1));
        setTruckShift((prev) => Math.max(-10, prev - 0.5));

        // 🔥 Background Zoom In
        setBgSize((prev) => Math.min(120, prev + 1));
      } else {
        setTruckScale((prev) => Math.min(1.2, prev + 0.02));
        setTruckPosition((prev) => Math.min(0, prev + 2));
        setTruckShift((prev) => Math.min(0, prev + 1));

        // 🔥 Background Zoom Out
        setBgSize((prev) => Math.max(100, prev - 1));
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <section
      className="relative w-full font-roboto-condensed h-[800px] flex overflow-hidden items-center justify-between px-12 bg-cover bg-center transition-all duration-300"
    >
      <img 
        src={i1} 
        alt="Background Image" 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
        style={{ transform: `scale(${bgSize / 100})` }} // 🔥 Background Zoom Effect
      />

      {/* Left Side Text */}
      <div className="w-1/2 relative bottom-16 left-12">
        <h2 className="text-4xl font-bold text-Red uppercase">
          What Exactly Does <br />
          <span className="text-Red">Shaheen Express Do?</span>
        </h2>
        <p className="text-lg font-bold text-white mt-3">
          We thrive in solving most intricate to basic problems <br />
          across the Logistics network.
        </p>
        <a href="/contact">
          <button className="mt-4 px-6 py-3 w-[200px] cursor-pointer font-bold bg-Red text-white rounded-full shadow-lg hover:bg-red-500 transition">
            Start now
          </button>
        </a>
      </div>

      {/* Right Side Square Box */}
      <div className="w-1/2">
        <div
          ref={squareBoxRef}
          className="relative w-[530px] h-[500px] flex justify-center items-center"
        >
          {/* Square Border (Fixed Positioning) */}
          <div className="absolute w-full h-full border-[20px] border-[#032843] left-[9%]"></div>

          {/* Truck Image (Fixed Positioning + Zoom) */}
          <img
            src={i2}
            alt="Truck"
            className="absolute w-[340px] right-[14%] top-[25%] object-cover transition-transform duration-300"
            style={{
              transform: `scale(${truckScale}) translateX(${truckShift}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LogisticsNetwork;