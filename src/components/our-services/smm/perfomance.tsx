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
import { instagramMarketingData } from "@/data/our-services/smm/instagram";
import { performanceMarketingData } from "@/data/our-services/smm/perfomance";

const PerfomanceMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="SMM PERFORMANCE MARKETING"
        description="Do the Impossible with Performance Marketing

        "
      />

      <section className=" text-text container">
        <div className=" items-center flex gap-10 ">
          <p className=" flex-1">
            Achieve unparalleled results with performance marketing. Our
            data-driven strategies ensure every campaign delivers measurable
            results. Turn your ambitious goals into achievable milestones and
            watch your business thrive.
          </p>

          <div className=" ">
            <img src="/images/performance-marketing.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={[
            "What is Performance Marketing           ",
            "and What Does it Do?          ",
          ]}
          description="Performance marketing is a form of online marketing that focuses on measurable, trackable objectives such as sales, leads, or clicks. It is an effective way to reach your target audience with laser-focused precision and drive results that can be attributed to your marketing efforts. With performance marketing, you only pay for the results you get, making it a highly cost-effective way to market your business. And because it is results-based, it provides a high level of accountability and transparency, allowing you to see exactly how much marketing cost you are spending and what return on investment (ROI) you are getting.



"
        />
        <Heading
          firstLine={[
            "Advantages of           ",
            "Performance Marketing         ",
          ]}
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {performanceMarketingData.advantages.map((data, index) => (
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
        <Heading
          firstLine={["Our Roadmap to   ", "Performance Marketing Success"]}
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {performanceMarketingData.roadmap.map((data, index) => (
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

export default PerfomanceMarketingComponent;
