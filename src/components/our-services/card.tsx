import React from "react";
import CustomButton from "../shared/button";

interface ServiceCardProps {
  service: string;
  description: string;
  cta: string;
  image: string;
}

const getRandomPlacement = () => {
  const placements = [
    "order-first", // Image on top
    "order-last", // Image at the bottom
    "order-none", // Image at the default place
    "flex-row-reverse", // Image on the right
  ];
  return placements[Math.floor(Math.random() * placements.length)];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  description,
  cta,
  image,
}) => {
  const imagePlacement = getRandomPlacement();

  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col md:flex-row items-center md:items-start ${imagePlacement}`}
    >
      {/* <img
        src={image}
        alt={service}
        className="w-32 h-32 object-cover rounded-full md:w-48 md:h-48 m-4"
      /> */}
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-bold mb-2">{service}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <CustomButton size="sm" white={false} className="px-4 py-1 ">
          {cta}
        </CustomButton>
      </div>
    </div>
  );
};

const ServicesList: React.FC = () => {
  const services = [
    {
      service: "Website & App Development",
      description:
        "Establish your online presence with a website that stands out, distinguishing you from the competition.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/website-development.svg",
    },
    {
      service: "Social Media Marketing",
      description:
        "Ignite engagement and foster connections that elevate's your brand's digital landscape, transcending boundaries and captivating minds with every click.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/social-media-marketing.svg",
    },
    {
      service: "Search Engine Optimization",
      description:
        "Boost your website's visibility across various search engines to reach potential customers organically.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/seo.svg",
    },
    {
      service: "Performance Marketing",
      description:
        "Highlight on your brand's message with precision-targeted strategies and research-driven campaigns, effectively scaling your business.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/performance-marketing.svg",
    },
    {
      service: "Email Marketing",
      description:
        "Amplify your message and lead your audience to take action with compelling email campaigns that elevate your brand's presence.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/email-marketing.svg",
    },
    {
      service: "Visual Storytelling",
      description:
        "Capture the essence of your brand through our lens, capturing moments that portray its uniqueness.",
      cta: "Find Out More",
      image: "https://api.multiavatar.com/visual-storytelling.svg",
    },
  ];

  return (
    <div className=" my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service.service}
          description={service.description}
          cta={service.cta}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesList;
