import { FaLightbulb } from "react-icons/fa";
import i3 from "./i3.jpg"
const AgentPartnerSection = () => {
  return (
    <div className="relative bg-cover bg-center py-16  px-4" style={{ backgroundImage: `Url(${i3})` }}>
      <div className="max-w-4xl mx-auto">
        <FaLightbulb className="text-red-500 text-5xl  mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-[#264795]">
          You Can Also Be An Agent Partner <br />With Shaheen Express
        </h2>
        <p className="text-[#264795] mt-2">
          Commence your Freight agent carrier with Shaheen Express
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
        {[
          { id: "01", text: "Pull in substantial profits" },
          { id: "02", text: "Quick and complimentary credit checks" },
          { id: "03", text: "Claims covered with solid insurance policies" },
          { id: "04", text: "Rapidly expanding carrier network" },
        ].map((item) => (
          <div key={item.id} className="text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-red-500 text-white rounded-full text-lg font-bold mx-auto">
              {item.id}
            </div>
            <p className="text-[#264795] mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentPartnerSection;
