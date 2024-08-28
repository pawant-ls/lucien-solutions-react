import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import Heading from "@/components/shared/heading";
import { technicalSeoData } from "@/data/our-services/technical-seo";
import { ServiceCard } from "@/components/home/home";
import { localSeoData } from "@/data/our-services/local-seo";
import { ecommerceSeoData } from "@/data/our-services/ecommerce-seo";

const EcommerceSeoComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="E-COMMERCE SEO"
        description="Boost Your Local Presence with Expert SEO Services from Lucien Solution"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["FACTORS OF E-COMMERCE ", "SEO"]}
          description="Want to be the top e-commerce platform? Lucien Solutions’ is the ultimate guide to mastering e-commerce SEO! We’re here to help you navigate the world of online success with our top-tier e-commerce SEO services. Whether you have just started out or looking to boost your current strategy, our guide is packed with practical tips and proven tactics.


"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {ecommerceSeoData.factors.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,

                description: data.description,
                icon: data.icon,
              }}
            />
          ))}
        </div>
        <Heading firstLine={["WHY YOUR BRAND NEEDS E-COMMERCE ", "SEO"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {ecommerceSeoData.whyYouNeedEcommerceSeo.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,

                icon: data.icon,
              }}
            />
          ))}
        </div>
        <Heading
          firstLine={["OUR    ", "PROCESS"]}
          description="We systematically illuminate each page with optimization strategies, ensuring your brand shines brightest at the top.


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {technicalSeoData.process.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                // description: data.,
              }}
            />
          ))}
        </div>
        <Heading firstLine={["KEY FOR  E-COMMERCE   ", "SEO SUCCESS"]} />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {ecommerceSeoData.keyToSuccess.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                // description: data.,
              }}
            />
          ))}
        </div>
      </section>
    </MainBackground>
  );
};

export default EcommerceSeoComponent;
