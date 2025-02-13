import React, { useState, useEffect, useRef } from "react";
import i1 from "./i1.jpg";
import i2 from "./i2.png";

const LogisticsNetwork = () => {
  const [truckScale, setTruckScale] = useState(1);
  const [truckShift, setTruckShift] = useState(0);
  const [truckTilt, setTruckTilt] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(false);
  const [bgSize, setBgSize] = useState(100);

  const squareBoxRef = useRef(null);
  const MIN_TRUCK_SCALE = 0.8;
  const MAX_TRUCK_SCALE = 1.4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
          let scrollDiff = currentScroll - lastScrollY;
          let speedFactor = Math.min(1, Math.abs(scrollDiff) / 100); // Smooth speed control
  
          const lerp = (start, end, factor) => start + (end - start) * factor; // Smooth transition function
  
          if (currentScroll > lastScrollY) {
            // Scroll Down (Shrink Truck & Increase BG)
            setTruckScale((prev) => lerp(prev, MIN_TRUCK_SCALE, speedFactor * 0.1));
            setBgSize((prev) => lerp(prev, 120, speedFactor * 0.1)); // BG zoom in smoothly
          } else {
            // Scroll Up (Enlarge Truck & Reset BG)
            setTruckScale((prev) => lerp(prev, MAX_TRUCK_SCALE, speedFactor * 0.1));
            setBgSize((prev) => lerp(prev, 100, speedFactor * 0.1)); // BG reset smoothly
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
  const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const rotateY = ((clientX - centerX) / centerX) * 20; // Left-Right movement
  const rotateX = ((clientY - centerY) / centerY) * -20; // Up-Down movement

  setTruckTilt(rotateY);
  setTruckShift(rotateX);
};
  

  return (
    <section className="relative w-full h-[1100px] flex overflow-hidden items-center justify-between px-12 bg-cover bg-center transition-all duration-500 ease-out">
      <img
        src={i1}
        alt="Background"
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
        <div ref={squareBoxRef} className="relative w-[530px] h-[500px] flex justify-center items-center">
          <div className="absolute w-full h-full border-[20px] border-[#032843] left-[9%]"></div>

          {/* Truck Image with 3D Effect */}
          <img
            src={i2}
            alt="Truck"
            className="absolute w-[400px] left-[20%] top-[25%] object-cover transition-transform duration-500 ease-out"
            style={{
              transform: `perspective(1000px) scale(${truckScale}) translateX(${truckShift}px) rotateY(${truckTilt}deg)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LogisticsNetwork;
