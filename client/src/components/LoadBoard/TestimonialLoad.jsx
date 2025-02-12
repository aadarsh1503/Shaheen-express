import React from "react";
import { FaUser } from "react-icons/fa6";
const testimonials = [
  {
    name: "Mubashir",
    location: "Jidhafs, Bahrain",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "I liked very much the overall services provided by Shaheen Express and if I talk about what I liked most in their service then the behaviour of the team and the automated process of Shaheen Express which makes is faster than others."
  },
  {
    name: "Gary Jeffrey",
    location: "Isa Town, Bahrain",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "Not even a single complaint about Shaheen Express services. They are just an amazing logistic service provider than is gonna help you a lot in your business if you are want to hire them for your logistic or process."
  }
];

const TestimonialLoad = () => {
  return (
    <div className="flex justify-center max-w-5xl mx-auto items-center gap-10 p-10 h-[300px] bg-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-1/2 border-r last:border-r-0 pr-10 last:pr-0"
        >
          <p className="text-gray-600 text-[16px] ">"{testimonial.text}"</p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-Red flex items-center justify-center rounded-full text-white text-xl">
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

export default TestimonialLoad;
