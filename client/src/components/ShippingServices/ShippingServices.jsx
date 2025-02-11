import { Link } from "react-router-dom";

const services = [
  {
    title: "Power Only",
    description:
      "When the shipper owns the trailer that needs to be transported but does not have any trucks vacant then there is the requirement for power only shipping, the truck and driver...",
    image: "https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/A%20red%20truck%20driving%20on%20a%20road%20with%20mountains%20in%20the%20background.png",
    link: "/",
  },
  {
    title: "Box Truck",
    description:
      "Shaheen Express provides you services of Heavy Haulers, we understand the importance of your box truck to your business. That’s the only reason when it comes to boxing truck transport...",
    image: "https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/con-air.png",
    link: "/",
  },
  {
    title: "Cross Border",
    description:
      "With the help of Shaheen Express, logistics facilitate your over-the-road cross-border shipping. When you’re crossing one or multiple borders, trust our experienced...",
    image: "https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/con1.png",
    link: "/",
  },
  {
    title: "Small Parcel",
    description:
      "When you want small parcels shipments and consumers’ expectations are higher than ever so, your business needs a provider like Shaheen Express that...",
    image: "https://shaheen-express.mubashir-rehman.com/wp-content/themes/shaheenExpress/assets/Images/box.png",
    link: "/",
  },
];

export default function ShippingServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  p-6 justify-center">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className="bg-gradient-to-b from-[#975F5D] to-[#DC7774] hover:bg-gradient-to-b hover:from-[#711e1b] hover:to-[#d4433f] p-6 w-full max-w-[300px] rounded-lg shadow-md text-white transition-transform transform hover:scale-105 block mx-auto"
        >
          <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold text-lg mt-4 uppercase">{service.title}</h2>
          <p className="text-sm mt-2">{service.description}</p>
          <div className="mt-4 text-right text-2xl">➝</div>
        </a>
      ))}
    </div>
  );
}

