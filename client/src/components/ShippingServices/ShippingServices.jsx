import { Link } from "react-router-dom";

const services = [
  {
    title: "Power Only",
    description:
      "When the shipper owns the trailer that needs to be transported but does not have any trucks vacant then there is the requirement for power only shipping, the truck and driver...",
    image: "https://www.atsinc.com/hs-fs/hubfs/Images/Page%20Images/Pricing/Pricing-Page4.png?width=1500&name=Pricing-Page4.png",
    link: "/power-only",
  },
  {
    title: "Box Truck",
    description:
      "Shaheen Express provides you services of Heavy Haulers, we understand the importance of your box truck to your business. That’s the only reason when it comes to boxing truck transport...",
    image: "https://www.motivps.com/wp-content/uploads/2020/01/EPIC-E450-Utilimaster-Box-Truck.jpg",
    link: "/box-truck",
  },
  {
    title: "Cross Border",
    description:
      "With the help of Shaheen Express, logistics facilitate your over-the-road cross-border shipping. When you’re crossing one or multiple borders, trust our experienced...",
    image: "https://avatars.mds.yandex.net/get-altay/9830718/2a000001916bed738fd269a7a9b0cd3fe19d/XXL_height",
    link: "/crossBorder",
  },
  {
    title: "Small Parcel",
    description:
      "When you want small parcels shipments and consumers’ expectations are higher than ever so, your business needs a provider like Shaheen Express that...",
    image: "https://avatars.mds.yandex.net/i?id=26333633b1169208533994bb227a1bd00a394ef9-8906573-images-thumbs&n=13",
    link: "/smallParcel",
  },
];

export default function ShippingServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:-gap-32 p-6 justify-center">
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

