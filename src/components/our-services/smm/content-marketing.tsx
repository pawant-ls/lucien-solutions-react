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
import { contentMarketingData } from "@/data/our-services/smm/content-marketing";

const ContentMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="CONTENT MARKETING"
        description="Elevate your Brand with Expert Content Marketing"
      />

      <section className=" text-text container">
        <div className=" items-center flex gap-10 ">
          <p className=" flex-1">
            Content is the King! Period! Content is everything! It encompasses
            the whole situation of the business and thus outperforms simple
            situations to a gala of events with creativity. With the best
            content creation ideas, plans, designs, social paid ads, and network
            management discover different and creative marketing strategies
            focused on meeting objectives, spreading your brand and converting
            clicks into leads.
          </p>

          <div className=" ">
            <img src="/images/content-marketing.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={["Benefits of            ", "Content Marketing"]}
          description="With Lucien by your side, illuminate the path to success with our Content Marketing Services. Reach more audiences, and drive more sales and engagement effortlessly.
          Benefits your company can hold with Content Marketing
          


"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {contentMarketingData.benefits.map((data, index) => (
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
          firstLine={["Our Success Path for    ", "CONTENT Marketing"]}
          description="An efficient and best facebook marketing company is required to handle the entire work, and should be
          aligned with your business goals, here is Lucien Solutions. The right use of Facebook ads will be a piece
          of cake when we stand by your side.
          
          "
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {contentMarketingData.successPath.map((data, index) => (
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
          firstLine={["Benefits of     ", " Content Marketing"]}
          description="With Lucien by your side, illuminate the path to success with our Content Marketing Services. Reach more audiences, and drive more sales and engagement effortlessly.
          Benefits your company can hold with Content Marketing
          


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {contentMarketingData.benefits.map((data, index) => (
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

export default ContentMarketingComponent;
