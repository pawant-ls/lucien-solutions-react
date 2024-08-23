import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import CustomButton from "@/components/shared/button";
import Heading from "@/components/shared/heading";
import TablePlans from "@/components/packages-plan/table-plans";
import { seoPackages } from "@/data/package-plans";
import SMMCards from "@/components/packages-plan/plan";
import { ServiceCard } from "@/components/home/home";
import { InfoCard1 } from "@/components/about/about";
import {
  seoBenefits,
  seoProcess,
  seoStrategies,
} from "@/data/our-services/seo";

const SearchEngineOptimizationComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="SEARCH ENGINE OPTIMIZATION"
        description="Dominate the Search Results! Rank higher with Expert SEO Techniques"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["TYPES OF ", "SEO"]}
          description="You think the top SEO spot is a mirage? It is the spotlight for your brand!
Your brand’s digital potential is more than you think! Discover its real potential with Lucien Solution’s tailored SEO strategies that help your business achieve newer heights. Our customised SEO packages help businesses of all sizes, big or small, meet their unique goals. We craft strategies and packages that help brands thrive in their evolving industries.
"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {seoStrategies.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,

                description: data.description,
              }}
            />
          ))}
        </div>
        <Heading firstLine={["WHY YOUR BRAND NEEDS  ", "SEO"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {seoBenefits.map((data, index) => (
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
          firstLine={["SEARCH ENGINE OPTIMIZATION   ", "PROCESS"]}
          description="We systematically illuminate each page with optimization strategies, ensuring your brand shines brightest at the top.


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {seoProcess.map((data, index) => (
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

        <Heading
          firstLine={["TARIFF           ", "PLANS"]}
          description="You can choose a traffic that suits your business"
        />

        <TablePlans plans={seoPackages} />

        <SMMCards plans={seoPackages} />
      </section>
    </MainBackground>
  );
};

export default SearchEngineOptimizationComponent;
