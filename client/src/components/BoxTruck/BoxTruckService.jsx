export default function BoxTruckService() {
    return (
      <div className="flex items-center space-x-6 p-8 mt-16 bg-white ml-0 lg:ml-[200px]">
        {/* Left Number Section */}
        <div className="text-center border-r border-gray-300 pr-6">
          <h3 className="text-[110px] text-gray-300 font-light">01</h3>
          <hr className="border-t border-gray-300 my-2 w-16 mx-auto" />
          <p className="text-xs font-bold text-gray-700 mt-2 tracking-widest">BOX TRUCK SERVICE</p>
        </div>
        
        {/* Right Content Section */}
        <div>
          <h4 className="text-lg font-bold text-gray-900">Superior Box Truck Shipping Services</h4>
          <p className="text-gray-700 mt-2 max-w-2xl">
            Shaheen Express has a dedicated team of experts who will ensure the safety of your goods during the
            shipping process. These box trucks are primarily used to transport heavy goods, and our company has
            experienced drivers who can handle this task. Shaheen Express is committed to providing you with the
            best and most competitive pricing available in the US and Canada.
          </p>
        </div>
      </div>
    );
  }