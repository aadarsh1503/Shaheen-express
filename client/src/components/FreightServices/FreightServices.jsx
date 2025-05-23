import React from 'react';
import i1 from "./i1.png"
import i2 from "./i2.png"
import i3 from "./i3.png"
const FreightServices = () => {
  return (
    <>
        <h1 className='text-3xl font-bold text-center mt-24 '>FREIGHT SERVICES</h1>

    <div className='font-roboto-condensed lg:flex hidden'>
  
    <div className="flex w-full mt-8 mb-20 max-w-7xl mx-auto">
        
      <div className="w-1/2 relative">
        <img
          src={i1}
          alt="Freight Services"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 bg-white p-4  shadow-md max-w-[35%]">
          <h2 className="text-xl font-bold text-[#F8504C] mb-2">
          Less than Truckload
          </h2>
          <p className="text-[#F8504C]">
          With the development of ecommerce, less truckload shipping demands more flexibility than ever.
          </p>
        </div>
      </div>
      <div className="w-1/2">
      <div className="grid grid-cols-2 gap- md:gap- p- md:p-">
      {/* Intermodal */}
      <div className="bg-[#FFC107] p-6 h-[205px] text-white relative">
        <h2 className="font-bold uppercase">Intermodal</h2>
        <p className="mt-2">
          With Our Intermodal Services, Shaheen Express Provides You With The
          Latest Options And Control For Your Supply Chain.
        </p>
      </div>

      {/* Drayage */}
      <div className=" p-6 text-Red relative">
  {/* Text Content */}
  <div className="relative max-w-[80%] p-2 right-6 bottom-6 bg-white z-10"> {/* z-10 ensures text stays above the image */}
    <h2 className="font-bold uppercase">Drayage</h2>
    <p className="mt-2  ">
      Now You Can Easily Bridge The Gap Between Ocean And Inland
      Transportation With Shaheen Express Drayage Services.
    </p>
  </div>

  {/* Background Image */}
  <img
    src={i2}
    alt="Drayage"
    className="absolute inset-0 w-full  h-[230px] object-cover z-0 opacity-100" 
    // opacity-50 for semi-transparent image, adjust as needed
  />
</div>

      {/* Flatbed Trucking */}
      <div className="bg-white bottom-4 text-Red relative">
  {/* Text Content */}
  <div className="relative max-w-[70%] p-2 right-0 bg-white z-10"> {/* z-10 ensures text stays above the image */}
    <h2 className="font-bold uppercase">Drayage</h2>
    <p className="mt-2  ">
      Now You Can Easily Bridge The Gap Between Ocean And Inland
      Transportation With Shaheen Express Drayage Services.
    </p>
  </div>

  {/* Background Image */}
  <img
    src={i3}
    alt="Drayage"
    className="absolute inset-0 w-full h-[210px] object-cover z-0 opacity-100" 
    // opacity-50 for semi-transparent image, adjust as needed
  />
</div>

      {/* Temperature Controlled */}
      <div className="bg-[#17A2B8] p-12  bottom-4 h-[210px] text-white relative">
        <h2 className="font-bold right-6 bottom-4 relative  uppercase">Temperature Controlled</h2>
        <p className="mt-2 right-6 bottom-4 relative">
          Your Temperature-Sensitive Shipment Needs A Lot Of Care To Protect Its
          Quality.
        </p>
      </div>
    </div>
      </div>
    </div>
    </div>


{/* mobile */}

<div class="font-roboto-condensed lg:hidden flex flex-col">

<div class="flex flex-col md:flex-row w-full mt-8 mb-20 max-w-7xl mx-auto">
  
  <div class="w-full md:w-1/2 relative mb-8 md:mb-0">
    <img
      src={i1}
      class="w-full h-[250px] md:h-[400px] object-cover"
      alt="Less than Truckload"
    />
    <div class="absolute top-4 left-4 bg-white p-4 shadow-lg max-w-[80%] md:max-w-[40%]">
      <h2 class="text-lg md:text-xl font-bold text-[#F8504C] mb-2">Less than Truckload</h2>
      <p class="text-[#F8504C]">
        With the development of ecommerce, less truckload shipping demands more flexibility than ever.
      </p>
    </div>
  </div>

 
  <div class="w-full md:w-1/2">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

     
      <div class="bg-[#FFC107] p-6 text-white rounded-lg">
        <h2 class="font-bold uppercase">Intermodal</h2>
        <p class="mt-2">
          With Our Intermodal Services, Shaheen Express Provides You With The Latest Options And Control For Your Supply Chain.
        </p>
      </div>

    
      <div class="relative overflow-hidden rounded-lg">
        <img
          src={i2}
          alt="Drayage"
          class="w-full h-full object-cover opacity-90"
        />
        <div class="absolute top-4 left-4 bg-white p-4 z-10 max-w-[80%]">
          <h2 class="font-bold uppercase text-[#F8504C]">Drayage</h2>
          <p class="mt-2 text-[#F8504C]">
            Now You Can Easily Bridge The Gap Between Ocean And Inland Transportation With Shaheen Express Drayage Services.
          </p>
        </div>
      </div>


      <div class="relative overflow-hidden rounded-lg">
        <img
          src={i3}
          alt="Flatbed Trucking"
          class="w-full h-full object-cover opacity-90"
        />
        <div class="absolute top-4 left-4 bg-white p-4 z-10 max-w-[80%]">
          <h2 class="font-bold uppercase text-[#F8504C]">Flatbed Trucking</h2>
          <p class="mt-2 text-[#F8504C]">
            Our Flatbed Trucking Solutions Ensure Secure Transportation For Oversized And Heavy Cargo.
          </p>
        </div>
      </div>

    
      <div class="bg-[#17A2B8] p-6 text-white rounded-lg">
        <h2 class="font-bold uppercase">Temperature Controlled</h2>
        <p class="mt-2">
          Your Temperature-Sensitive Shipment Needs A Lot Of Care To Protect Its Quality.
        </p>
      </div>

    </div>
  </div>
</div>

</div>
</>
  );
};

export default FreightServices;