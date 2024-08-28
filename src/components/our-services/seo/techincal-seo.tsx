import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import Heading from "@/components/shared/heading";
import { technicalSeoData } from "@/data/our-services/technical-seo";
import { ServiceCard } from "@/components/home/home";

const TechincalSeoComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="TECHINAL SEO"
        description="Enhance your website performance with advanced Technical SEO solutions"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["FACTORS OF TECHNICAL ", "SEO"]}
          description="Looking to secure the top SEO spot? You need SEO solutions that go beyond the basics. At Lucien Solutions, we deal with complex crawling, indexing, and rendering issues for our clients. Just like our results, our solutions are more than average. With comprehensive technical SEO packages, we address and enhance critical technical SEO factors

"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {technicalSeoData.factors.map((data, index) => (
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
        <Heading firstLine={["WHY YOUR BRAND NEEDS  ", "SEO"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {technicalSeoData.whyYouNeedTechnicalSeo.map((data, index) => (
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
        <Heading firstLine={["KEY FOR     ", "SEO SUCCESS"]} />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {technicalSeoData.keyToSuccess.map((data, index) => (
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

export default TechincalSeoComponent;
