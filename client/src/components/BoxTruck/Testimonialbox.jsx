import React from "react";
import { FaUser } from "react-icons/fa6";
const testimonials = [
  {
    name: "Abdul Malik",
    location: "Afaf, Dammam",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "100% satisfied with Shaheen Express service. they are on top of their fields in terms of providing the best logistics, shipment, and transportation services. you can take Shaheen Express services without any doubt."
  },
  {
    name: "Akhter Ali",
    location: "East Riffa, Bahrain",
    image: "https://via.placeholder.com/50", // Replace with actual image
    text: "They (Shaheen Express ) can make your supply chain very strong and fast. they are absolutely amazing in terms of technology, experience, and human capital. we can recommend you to use Shaheen Express services."
  }
];

const Testimonialbox = () => {
  return (
    <>
    <div className="lg:flex hidden justify-center max-w-5xl mx-auto items-center gap-10 p-10 h-[300px] bg-white">
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
     <div className="flex flex-col lg:flex-row lg:hidden  justify-center max-w-5xl mx-auto items-center h-auto lg:h-[300px] gap-10 p-10 bg-white">
     {testimonials.map((testimonial, index) => (
       <div
         key={index}
         className="w-full lg:w-1/2 border-b lg:border-r lg:last:border-r-0 pb-6 lg:pb-0 pr-0 lg:pr-10 last:pb-0"
       >
         <p className="text-gray-600 text-[16px]">"{testimonial.text}"</p>
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
   </>
  );
};

export default Testimonialbox;
