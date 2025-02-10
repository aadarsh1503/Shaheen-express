import i3 from "./i3.png"
import i4 from "./i4.png"
import i5 from "./i5.webp"
import i6 from "./i6.png"
import i7 from "./i7.png"
import i8 from "./i8.png"
export default function TransportServices() {
    const services = [
      {
        title: "Dry Van",
        description: "Shaheen Express have together various fragmented truckload markets into a simplified affair, even when accidental issues arise. To connect with the largest network of truckload capacity in the US and Canada for reliable dry van shipping options.",
        image: i3,
      },
      {
        title: "Temperature Controlled",
        description: "To make sure your temperature-sensitive shipment arrives safely. Maximize Shaheen Express climate-controlled shipping services to meet even the most stringent requirements of your business.",
        image: i4,
      },
      {
        title: "Flatbed/Open Deck",
        description: "Protect your unique freight moving with open deck services by shipping over-dimensional or heavy haul loads. Trust our flatbed freight. Shaheen Express experts are available to help mitigate market fluctuations with capacity options for your planned, seasonal, and project-based flatbed freight.",
        image: i5,
      },
      {
        title: "Consolidation",
        description: "No need to waste your precious time. With Shaheen Express and large consolidation of the US and Canada. We are always improving our efficiency and simplifying your shipments with reliable and on-time delivery.",
        image: i6,
      },
      {
        title: "Cross Border",
        description: "When you want to do cross-border truckload shipments, it demands to have deep knowledge of customs, tariffs, and traffic flows. With the help of our expert team, we also deal in cross-border shipments and we'll integrate your logistics seamlessly.",
        image:i7,
      },
      {
        title: "Drayage",
        description: "Now you can save your time and enjoy ultimate flexibility with Shaheen Express drayage and inland shipping services. We are available across major water ports and inland rail ports.",
        image: i8,
      }
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold italic text-Blue">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-sm italic">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  