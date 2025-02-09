import React from 'react';

const FreightServices = () => {
  return (
    <div className='font-roboto-condensed'>
        <h1 className='text-3xl font-bold text-center mt-24 '>FREIGHT SERVICES</h1>
  
    <div className="flex w-full mt-8 mb-20 max-w-7xl mx-auto">
        
      <div className="w-1/2 relative">
        <img
          src="https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/Sunrise%20truck%20ai%20generated%20image.png"
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
      <div className=" p-6 text-red-500 relative">
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
    src="https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/Truck%20long%20vehicle%20ready%20for%20delivering%20and%20transport.png"
    alt="Drayage"
    className="absolute inset-0 w-full  h-[230px] object-cover z-0 opacity-100" 
    // opacity-50 for semi-transparent image, adjust as needed
  />
</div>

      {/* Flatbed Trucking */}
      <div className="bg-white bottom-4 text-red-500 relative">
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
    src="https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/Blank%20cargo%20truck%20on%20the%20road-1.png"
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
  );
};

export default FreightServices;