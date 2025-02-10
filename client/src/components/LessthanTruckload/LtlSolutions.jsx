import { FaAngleDoubleRight } from "react-icons/fa";

const LtlSolutions = () => {
  const solutions = [
    {
      title: "Consolidation",
      description:
        "If you want Partial shipments? There is nothing to worry about with Shaheen Express. You can easily centralize your LTL orders with other goods on the same route with full reliability and safety.",
    },
    {
      title: "Expedited LTL",
      description:
        "For shipments that are time-sensitive, logistics have various solutions including charter, commercial air, and air cargo solutions.",
    },
    {
      title: "Last Mile Delivery",
      description:
        "Our main motive is to make consumers happy with our flexible, large-format home delivery solutions. Shaheen Express works efficiently and provides the benefits of minimal product damage and better outcomes with every delivery.",
    },
    {
      title: "Small Parcel Shipping",
      description:
        "Shaheen Express parcel expertise, industry-leading latest technology, and flexible solutions meet your demand without sacrificing your budget. That's why small parcel shipping isn't challenging anymore.",
    },
    {
      title: "Shipper’s Insurance",
      description:
        "Protect your shipments with Shaheen Express insurance policies and get a wider level protection with coverage for cargo damages.",
    },
    {
      title: "Retail Consolidation",
      description:
        "With the help of Shaheen Express retail direct program, pre-paid supplier program, warehouse solutions, and retailer expertise you will get reliability to meet your requirements on time.",
    },
    {
        title: "Reverse Logistics",
        description:
          "Shaheen Express helps you to manage and strategize returns and over, short, and damages. With Shaheen Express, you can optimize your return journey and maintain control and visibility.",
      },
      {
        title: "Store Distribution",
        description:
          "For distribution of your product into various stores, you can join our direct store delivery solutions. Shaheen Express has an expert in this field and helps you to control costs.",
      },
      {
        title: "Temperature Controlled LTL",
        description:
          "Now you can get fast, reliable, and safe transport for your temperature-sensitive shipments. Shaheen Express has experts to conserve your temperature-controlled freight through various processes.",
      }
  ];

  return (
    <div className="py-10 px-5 bg-white text-center min-h-screen mb-[400px]">
      <h2 className="text-3xl font-semibold text-Blue">Less than Truckload (LTL) Solutions</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        If any LTL shipper requires the flexibility and visibility to anticipate any challenges, it is the first step towards achieving exceptional results. With Shaheen Express, you can cover all of your less-than-truckload needs from every angle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[1100px] h-[600px] mx-auto mt-8">
        {solutions.map((item, index) => (
          <div key={index} className="bg-Red   text-white p-12 rounded-lg shadow-lg">
            <div className="flex items-center relative right-6 gap-2">
                <div className="bg-Red1 p-2 rounded-full ">
              <FaAngleDoubleRight className="text-white rounded-full  text-2xl" />
              </div>
              <h3 className="text-lg font-bold whitespace-nowrap">{item.title}</h3>
            </div>
            <p className="mt-2 text-left relative left-2 text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LtlSolutions;
