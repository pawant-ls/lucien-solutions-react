import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import Heading from "@/components/shared/heading";
import {
  contentOptimizationElements,
  onPageSeoElements,
  seoBenefits,
} from "@/data/our-services/on-page";
import { ServiceCard } from "@/components/home/home";
import { seoProcess } from "@/data/our-services/seo";

const OnPageSeoComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="ON-PAGE SEO"
        description="Optimizing your website for search engines and users"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["Factors of On-Page          ", "SEO"]}
          description="Content is the heart and soul of your online presence! But with so much content out there, how do you make yours stand out? We make it innovative and out-of-the-box! At Lucien Solutions, we don’t believe in a one-size-fits-all approach. We craft unique content, text and multimedia, that attract your visitors, keep them engaged, and ultimately convert them into leads or customers.

"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {onPageSeoElements.map((data, index) => (
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
        <Heading firstLine={["WHY YOUR BRAND NEEDS ON-PAGE  ", "SEO"]} />

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
          firstLine={["KEY FOR ON-PAGE           ", "SEO SUCCESS"]}
          description="You can choose a traffic that suits your business"
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {contentOptimizationElements.map((data, index) => (
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
      </section>
    </MainBackground>
  );
};

export default OnPageSeoComponent;
