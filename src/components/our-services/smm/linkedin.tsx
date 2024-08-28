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
import { linkedinMarketingData } from "@/data/our-services/smm/linkedin";

const LinkedinMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="LINKEDIN MARKETING"
        description="Boost your Professional Presence with LinkedIn Marketing"
      />

      <section className=" text-text container">
        <div className=" flex-col-reverse  md:flex-row items-center flex gap-10 ">
          <p className=" flex-1">
            Harness the power of LinkedIn marketing to establish your authority,
            grow your network, and attract high-quality leads. Stand out in the
            professional world with targeted LinkedIn marketing campaigns that
            amplify your brand’s voice and visibility.
          </p>

          <div className=" ">
            <img src="/images/linkedin.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={["Who should go for           ", "Linkedin Marketing?"]}
          description="Big brands across industries leverage the power of Instagram marketing strategies to wow their audiences, grow their market share, and boost their sales.



"
          thirdLine="6 reasons why you should consider Linkedin for your business
"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {linkedinMarketingData.targetAudiences.map((data, index) => (
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
          firstLine={["Our Secret to Successful   ", "Linkedin Marketing"]}
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {linkedinMarketingData.secretToSuccess.map((data, index) => (
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
          firstLine={[
            "Why Lucien Solutions for           ",
            " Linkedin Marketing?",
          ]}
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {linkedinMarketingData.whyChooseLucien.map((data, index) => (
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

export default LinkedinMarketingComponent;
