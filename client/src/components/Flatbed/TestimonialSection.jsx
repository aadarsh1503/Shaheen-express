import React from "react";
import { FaUser } from "react-icons/fa6";
const testimonials = [
  {
    name: "Abdul Rehman",
    location: "Dammam, KSA",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "Choosing Shaheen Express for the logistic and shipment purposes of our products was the best choice for our company that has helped us to grow our business tremendously. They are very committed and promising for their services and one of the topmost benefits of choosing Shaheen Express is that they have a very simple and automated process that makes them very fast."
  },
  {
    name: "Abdullah",
    location: "Riyadh, KSA",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "I searched for logistics company to assist me with the logistics and shipment process, and fortunately, I found Shaheen Express company for my logistics process. They have greatly assisted us in delivering and shipping our products on time."
  }
];

const TestimonialSection = () => {
  return (
    <div className="flex justify-center max-w-5xl mx-auto items-center h-[300px] gap-10 p-10 bg-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-1/2 border-r last:border-r-0 pr-10 last:pr-0"
        >
          <p className="text-gray-600 text-[13px] ">"{testimonial.text}"</p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full text-white text-xl">
              <FaUser />
            </div>
            <div className="ml-4">
              <h3 className="text-blue-600 font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm font-semibold">{testimonial.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;
