import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import Heading from "@/components/shared/heading";
import { technicalSeoData } from "@/data/our-services/technical-seo";
import { ServiceCard } from "@/components/home/home";
import {
  keyOffPageSeoSuccess,
  offPageSeoFactors,
  whyOffPageSeo,
} from "@/data/our-services/off-page-seo";

const OffPageSeoComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="OFF-PAGE SEO"
        description="Boost Your Website Authority & Visibility with Off-Page SEO"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["FACTORS OF TECHNICAL ", "SEO"]}
          description="Struggling to get your website noticed in search results? Off-page SEO can do the job! At Lucien Solutions, we optimise your website as well as build your website’s authority and credibility in the eyes of search engines. This increases your online presence, brand awareness, and organic traffic, securing your website a higher spot on the search engine rankings


"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {offPageSeoFactors.map((data, index) => (
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
        <Heading firstLine={["WHY YOUR BRAND NEEDS OFF-PAGE  ", "SEO"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {whyOffPageSeo.map((data, index) => (
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
        <Heading firstLine={["KEY FOR OFF-PAGE    ", "SEO SUCCESS"]} />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {keyOffPageSeoSuccess.map((data, index) => (
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

export default OffPageSeoComponent;
