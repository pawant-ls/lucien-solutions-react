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

const InstagramMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="INSTAGRAM"
        description="Tap into the power of Instagram Marketing"
      />

      <section className=" text-text container">
        <div className=" items-center flex gap-10 ">
          <p className=" flex-1">
            Instagram marketing can help improve your brand awareness with the
            right strategy and plan. It helps you engage with your target
            audience without additional expenses. A strong Instagram presence
            makes it easy for consumers to find and connect with you.
          </p>

          <div className=" ">
            <img src="/images/instagram-logo.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={["Why Instagram           ", "Marketing?"]}
          description="Big brands across industries leverage the power of Instagram marketing strategies to wow their audiences, grow their market share, and boost their sales.


"
          thirdLine="6 reasons why you should consider Instagram for your business
"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {instagramMarketingData.reasonsToConsider.map((data, index) => (
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
          firstLine={["Benefits of Instagram Marketing for   ", "Businesses"]}
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {instagramMarketingData.benefits.map((data, index) => (
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
          firstLine={["OUR    ", " APPROACH"]}
          description="We systematically illuminate each page with optimization strategies, ensuring your brand shines brightest at the top.


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {instagramMarketingData.approach.map((data, index) => (
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
          description="Our expert social media marketing team is fully committed to ensuring your success, starting with an initial kickoff call and continuing through the launch of your Instagram posts. We believe in transparency and hence, we provide weekly/bi-weekly reporting calls and regular check-ins to keep you informed and on track. We take responsibility for the outcome of our clients and ensure success in every step!
"
          thirdLine="Our 3 C’s to Instagram Success
 "
          firstLine={["Countdown to Instagram     ", "Success "]}
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {instagramMarketingData.successSteps.map((data, index) => (
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

export default InstagramMarketingComponent;
