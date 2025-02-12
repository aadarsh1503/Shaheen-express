import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import LogisticsSection from "../LogisticsSection/LogisticsSection";
import FreightServices from "../FreightServices/FreightServices";
import ShippingServices from "../ShippingServices/ShippingServices";
import LogisticsNetwork from "../LogisticsNetwork/LogisticsNetwork";
import h1 from "./h1.png";
import h2 from "./h2.png";
import h3 from "./h3.png";
import h4 from "./h4.png";
import h5 from "./h5.png";

const images = [
  { src: h1, text: "FREIGHT  SERVICES" },
  { src: h2, text: "Less Than truckload shipping" },
  { src: h3, text: "CROSS BORDER SHIPPING" },
  { src: h4, text: "TRUCK  SOLUTIONS" },
  { src: h5, text: "RESOLVE THE LOGISTICS PROBLEMS" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Increased timing for smoother transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative font-roboto-condensed w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <AnimatePresence key={index}>
            {index === currentIndex && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 left-[250px] flex items-center justify-center">
                  <motion.h1
                    key={currentIndex}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="text-white font-bold uppercase flex flex-col text-center"
                  >
                    {/* 🚀 Red Block - Scaling + Rotation Effect */}
                    <motion.div
                      initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: "backOut" }}
                      className="bg-Red text-[110px] w-fit inline-block px-3 py-1 leading-none whitespace-nowrap shadow-2xl"
                    >
                      {image.text.split(" ")[0]} {image.text.split(" ")[1] || ""}
                    </motion.div>

                    {/* 🔥 Blue Block - Slide Up Pop-Out Effect */}
                    <motion.div
                      initial={{ y: 50, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                      className="bg-blue-500 mt-4 text-[90px] leading-none w-fit inline-block px-3 py-1 whitespace-nowrap shadow-xl"
                    >
                      {image.text.split(" ").slice(2).join(" ")}
                    </motion.div>
                  </motion.h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* Navigation Dashes */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-10 h-1 cursor-pointer ${
                currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
              } transition-all duration-300`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <LogisticsSection />
      <FreightServices />
      <ShippingServices />
      <LogisticsNetwork />
    </div>
  );
}
