import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"

export default function ShippingServices() {
    return (
      <div className="flex flex-col lg:flex-row w-full h-screen lg:mb-0 mb-[700px] lg:h-[500px]">
        {/* Card 1 */}
        <div
          className="relative  w-full lg:w-1/4 p-8 text-white"
          style={{ backgroundImage: `Url(${i2})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
             <div
    className="absolute inset-0 bg-[#328DB9] opacity-70"
  ></div>
          <div className="relative bg-opacity-75 mt-16 p-6 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase">Temperature Controlled Truckload</h2>
            <p className="mt-4 text-sm">
              Connect with Shaheen Express which is reliable, with efficient available capacity is
              critical for your sensitive cold chain. We provide you service with various
              temperature-controlled contract carriers in our network, we’ve got you covered in any
              market in the US and Canada.
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
    <h2 className="text-lg font-bold uppercase text-blue-900">Temperature Controlled Consolidation</h2>
    <p className="mt-4 text-sm">
      With Shaheen Express, experts get you delivered on time. Established on your
      weekly freight mix, our experts will leverage the US and Canada’s large consolidation
      services to enhance your business performance.
    </p>
  </div>
</div>
  
        {/* Card 3 */}
        <div
          className="relative bg-red-300 w-full lg:w-1/4 p-8 text-white"
          style={{ backgroundImage: `Url(")`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            
          <div className=" bg-opacity-75 p-6 mt-16 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase">Refrigerated LTL</h2>
            <p className="mt-4 text-sm">
              Your LTL shipments demand speed, safety, and the best possible pricing to enhance
              your business performance. All this you get with Shaheen Express experts that help you
              in optimizing your refrigerated capacity options and create custom solutions.
            </p>
          </div>
        </div>
  
        {/* Card 4 */}
        <div
          className="relative w-full lg:w-1/4 p-8 text-gray-900"
          style={{ backgroundImage: `Url(${i4})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
              <div
    className="absolute inset-0 bg-white opacity-70" // 
  ></div>
          <div className="relative bg-opacity-75 mt-16 p-6 h-full flex flex-col">
            <h2 className="text-lg font-bold uppercase text-blue-900">Cross-Border</h2>
            <p className="mt-4 text-sm">
              When you want to supply on different borders, you need to know customs, tariffs,
              and traffic flows. With Shaheen Express, you will get benefits of all those expertise.
            </p>
          </div>
        </div>
      </div>
    );
  }
  