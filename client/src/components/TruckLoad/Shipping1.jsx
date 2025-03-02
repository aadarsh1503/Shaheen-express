import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"

export default function Shipping1() {
    return (
      <div className="flex flex-col lg:flex-row w-full lg:mb-0 mb-[1100px] h-[500px]">
        {/* Card 1 */}
        <div
          className="relative  w-full lg:w-1/4 p-8 text-white"
          style={{ backgroundImage: `Url(${i2})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
             <div
    className="absolute inset-0 bg-[#328DB9] opacity-70" 
  ></div>
          <div className="relative bg-opacity-75 mt-16 p-6 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase">
            Port Services</h2>
            <p className="mt-6 text-[16px] leading-loose">
            Reduce your costs and time spent in port with Shaheen Express and convert your shipments to over-the-road truckload with our modest transloading programs.
            </p>
          </div>
        </div>
  
        {/* Card 2 */}
        <div
  className="relative w-full lg:w-1/4 p-8 text-gray-900"
  style={{ 
    backgroundImage: `url(${i3})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
  {/* White Overlay with Opacity */}
  <div
    className="absolute inset-0 bg-white opacity-70" 
  ></div>

  {/* Content */}
  <div className="relative bg-opacity-75 mt-16 p-6 h-full flex flex-col">
    <h2 className="text-lg font-bold uppercase text-blue-900">Drop Trailer</h2>
    <p className="mt-6 text-[16px] leading-loose">
    Now you can make the most space on your dock with Shaheen Express. Develop loading and unloading efficiencies with Shaheen Express drop trailer services.
    </p>
  </div>
</div>
  
        {/* Card 3 */}
        <div
          className="relative bg-red-300 w-full lg:w-1/4 p-8 text-white"
          style={{ backgroundImage: `Url(")`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            
          <div className=" bg-opacity-75 p-6 mt-16 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase">
            Expedited/Team</h2>
            <p className="mt-6 text-[16px] leading-loose">
            Load your truckloads shipment faster at affordable prices with Shaheen Express to meet your unique, time-critical shipments.
            </p>
          </div>
        </div>
  
        {/* Card 4 */}
        <div
          className="relative w-full lg:w-1/4 p-8 text-gray-900"
          style={{ backgroundImage: `Url(${i4})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
              <div
    className="absolute inset-0 bg-white opacity-70"
  ></div>
          <div className="relative bg-opacity-75 mt-16 p-6 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase text-blue-900">
            Specialty Services</h2>
            <p className="mt-6 text-[16px] leading-loose">
            No matter if you've used a visual page builder before, with this you'll be a pro the second you start using it. It's easy with this.
            </p>
          </div>
        </div>
      </div>
    );
  }
  