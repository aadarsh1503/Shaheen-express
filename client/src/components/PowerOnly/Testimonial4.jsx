import React from "react";
import { FaUser } from "react-icons/fa6";
const testimonials = [
  {
    name: "Asman",
    location: "Afaf, Dammam",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "‘‘I Don’t think that any other logistic service provider company will be able to provide the experience and technologies that Shaheen Express provides. I love and appreciate their services always. you can choose their services as they will not make you upset with their services.’’‘."
  },
  {
    name: "Faysal Ghuari ",
    location: "Philadelphia, Pennsylvania",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "‘‘Not even a single complaint about Shaheen Express services. They are just an amazing logistic service provider than is gonna help you a lot in your business if you are want to hire them for your logistic or process.’’‘"
  }
];

const Testimonial4 = () => {
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

export default Testimonial4;
