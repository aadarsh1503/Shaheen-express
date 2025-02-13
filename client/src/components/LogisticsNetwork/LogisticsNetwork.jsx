import React, { useState, useEffect, useRef } from "react";
import i1 from "./i1.jpg";
import i2 from "./i2.png";

const LogisticsNetwork = () => {
  const [truckScale, setTruckScale] = useState(1);
  const [truckPosition, setTruckPosition] = useState(0);
  const [truckShift, setTruckShift] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bgSize, setBgSize] = useState(100);

  const squareBoxRef = useRef(null);
  const scrollTimeout = useRef(null);

  const MIN_TRUCK_SCALE = 0.96;

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

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentScroll = window.scrollY;
          let scrollSpeed = Math.abs(currentScroll - lastScrollY) / 10; 
          let speedFactor = Math.min(1, scrollSpeed / 5);

          if (currentScroll > lastScrollY) {
          
            setTruckScale((prev) => Math.max(MIN_TRUCK_SCALE, prev - 0.03 * speedFactor)); 
            setTruckPosition((prev) => Math.max(-20, prev - 0.5 * speedFactor));
            setTruckShift((prev) => Math.max(-70, prev - 0.9 * speedFactor)); 
        
            setBgSize((prev) => Math.min(420, prev + 1.2 * speedFactor)); 
        } else {
           
            setTruckScale((prev) => Math.min(3.2, prev + 0.0234 * speedFactor)); 
            setTruckPosition((prev) => Math.min(0, prev + 0.8 * speedFactor)); 
            setTruckShift((prev) => Math.min(70, prev + 0.9 * speedFactor));
        
            setBgSize((prev) => Math.max(100, prev - 1.2 * speedFactor)); 
        }
        

          setLastScrollY(currentScroll);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <section
      className="relative w-full font-roboto-condensed h-[1100px] flex overflow-hidden items-center justify-between px-12 bg-cover bg-center transition-all duration-500 ease-out"
    >
      <img
        src={i1}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
        style={{ transform: `scale(${bgSize / 100})` }}
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
            className="absolute w-[340px] right-[14%] top-[25%] object-cover transition-transform duration-500 ease-out"
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
