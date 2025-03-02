import React from "react";

const Card = ({ title, description, bgColor, textColor }) => {
  return (
    <div
      className="p-6 w-80 h-96 ml-2 lg:ml-16 rounded-lg shadow-lg border-2 border-white flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>{title}</h3>
      <p className={`text-sm text-center ${textColor}`}>{description}</p>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-gray-200 py-10 px-6">
      <Card
        title="Specialized Flatbed Equipment"
        description="When you work with Shaheen Express, you will receive specialized flatbed equipment for an unusual freight. Conestoga rolling tarps provide additional protection, and double drops allow for greater size flexibility."
        bgColor="#F8504C"
        textColor="text-white"
      />
      <Card
        title="Cross-Border Flatbed"
        description="Shipping weight across borders necessitates extensive knowledge of customs, tariffs, and traffic flows. Shaheen Express employs a large number of experts and customs brokers."
        bgColor="#BDE1F4"
        textColor="text-blue-900"
      />
      <Card
        title="Project Logistics"
        description="Give your large-scale projects to Shaheen Express for safekeeping and gain experience with expert services."
        bgColor="#F8504C"
        textColor="text-white"
      />
    </div>
  );
};

export default CardsSection;
