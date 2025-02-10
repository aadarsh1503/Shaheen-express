export default function PowerOnlySolutions() {
    return (
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-center text-3xl font-bold text-Blue mb-12">Power Only Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-gray-300 p-8 text-center">
            <h3 className="text-5xl text-Blue font-light">01</h3>
            <h4 className="text-lg font-bold text-Blue mt-4">Cross Border</h4>
            <p className="text-gray-700 mt-2">
              We had expert drivers who knew all the customs rules and traffic rules related to the
              borders of the US and Canada. So you can choose Shaheen Express with full trust.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="border border-gray-300 p-8 text-center">
            <h3 className="text-5xl text-Blue font-light">02</h3>
            <h4 className="text-lg font-bold text-Blue mt-4">Short and long haul services</h4>
            <p className="text-gray-700 mt-2">
              With Shaheen Express, ship your products anywhere and everywhere whether on long
              routes or locally in short routes.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="border border-gray-300 p-8 text-center">
            <h3 className="text-5xl text-Blue font-light">03</h3>
            <h4 className="text-lg font-bold text-Blue mt-4">Cost Effective</h4>
            <p className="text-gray-700 mt-2">
              Shaheen Express offers you cost-effective rents for hiring vehicles and drivers for
              your shipment.
            </p>
          </div>
        </div>
      </div>
    );
  }
  