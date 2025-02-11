export default function FeaturesSection() {
    const features = [
      {
        id: "01",
        title: "Use all our trucking and dispatch service resources online",
        description:
          "We understand how stressful and time-consuming it is to make hundreds of calls or send emails to your customers to ship your products, therefore, we provide our customers with online booking and tracking of trucking and dispatching services to make their job easy and stress-free."
      },
      {
        id: "02",
        title: "Advance and powerful technologies to dispatch your product",
        description:
          "At Shaheen Express we use the most advanced and reliable technologies to provide you with great trucking and dispatch services. These advanced and powerful technologies and tools help us to ship and dispatch your product very fast to your destination place."
      },
      {
        id: "03",
        title: "Full flexibility to book truck and dispatch services",
        description:
          "Every business has its own requirements and needs. That's why we give flexible services for the shipment to our customers. It means that you can book a variety of trucks and loading services as per your requirement."
      }
    ];
  
    return (
      <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#239DDB] mb-3">{feature.id}</h2>
            <h3 className="text-2xl mb-5 font-noto-sans-display font-semibold text-Blue tracking-wide ">{feature.title}</h3>
            <p className="text-gray-700 font-noto-serif tracking-wide">{feature.description}</p>
          </div>
        ))}
      </section>
    );
  }
  