import React from "react";
import { FaUser } from "react-icons/fa6";
const testimonials = [
  {
    name: "Abdul Rehman",
    location: "Dammam, KSA",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "We are feeling very happy and fortunate that we found Shaheen Express for transportation of our products. they have made our work very easy and fast. whatever they have mentioned on their websites, they follow and work on it"
  },
  {
    name: "Ismail",
    location: "East Riffa, Bahrain",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "if you want to hire any logistic company who can help you in managing transportation or shipment of your business then Shaheen Express can be the best option for you as it provides all the necessary options and technologies which are needed for a faster logistic service."
  }
];

const TestimonialInterModal = () => {
  return (
    <div className="flex justify-center max-w-5xl mx-auto items-center gap-10 p-10 h-[300px] bg-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-1/2 border-r last:border-r-0 pr-10 last:pr-0"
        >
          <p className="text-gray-600 text-[16px] ">"{testimonial.text}"</p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full text-white text-xl">
              <FaUser />
            </div>
            <div className="ml-4">
              <h3 className="text-Blue font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm font-semibold">{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialInterModal;
