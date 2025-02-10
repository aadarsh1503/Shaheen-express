import { FaAngleDoubleRight } from "react-icons/fa";
import i1 from "./i1.png";

const BorderCrossingSolutions = () => {
  return (
    <div className="relative text-center py-16 px-6">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${i1})` }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div> {/* ✅ Opacity only on BG */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-Blue">
          Border Crossing Solutions
        </h2>
        <p className="mt-4 italic text-gray-700 mb-10 max-w-4xl mx-auto">
          Cross-border shippers are facing increased demand and higher expectations for quick, seamless delivery in today's world. The company requires ready capacity, flexible carrier modes, and a supplier with the expertise to navigate restrictions and processes without delays, such as Shaheen Express.
        </p>
   

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Truckload",
              description: "Shaheen Express meets all of the business needs by providing efficient capacity to our clients.",
            },
            {
              title: "Less than Truckload",
              description: "Manage your spending without sacrificing speed and can get delivery on time at a lower cost.",
            },
            {
              title: "Customs brokerage and trade compliance",
              description: "With Shaheen Express, you can reduce uncertainty, manage compliance, and keep your freight moving in all directions. We have an experienced team of licensed brokers who can assist you in running your business smoothly.",
            },
            {
              title: "Warehousing",
              description: "Distribute your products rapidly and efficiently by ensuring warehouse space in key locations along both sides of the border when you are dealing with Shaheen Express. You will get expert benefits with our team.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <FaAngleDoubleRight className="text-Red text-5xl mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-Blue">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorderCrossingSolutions;
