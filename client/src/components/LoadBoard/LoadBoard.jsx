import React from 'react';
import i1 from "./i1.jpg";
import SupportSection from './SupportSection';
import Load1 from './Load1';
import TestimonialLoad from './TestimonialLoad';

const LoadBoard = () => {
  return (
    <div>
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img src={i1} className="h-[600px] w-full object-cover" alt="Load Board" />

      {/* Overlay with Text */}
      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-end p-10  bg-opacity-50">
        <div className="text-white max-w-lg mr-20 mt-20 text-right">
          <h1 className="text-4xl font-bold">Load Board</h1>
          <p className="mt-4 text-lg">
            We are one of the largest load boards, where carriers can easily book loads with us and can get instant offers, 
            avoid empty miles, and compare rates.
          </p>
        </div>
      </div>
    </div>
    <SupportSection />
    <Load1 />
    <TestimonialLoad />
    </div>
  );
};

export default LoadBoard;
