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
import { stepsToSuccessData } from "@/data/our-services/smm/influencer";

const InfluencerMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="INFLUENCER MARKETING"
        description="Maximise your Reach with Influencer Marketing"
      />

      <section className=" text-text container">
        <div className=" items-center flex gap-10 ">
          <p className=" flex-1">
            Expand your brand’s online visibility and connect with your target
            audience through strategic influencer marketing. By partnering with
            influencers who resonate with your market and align with your brand
            objectives, you can leverage your audience’s established trust and
            credibility to amplify your brand message and enhance your brand
            presence. Our influencer marketing services focus on identifying the
            right influencers for your brand, crafting compelling campaigns, and
            driving authentic engagement to maximise your reach and impact. Let
            us help you harness the power of influencer marketing to boost brand
            awareness and achieve your business goals.
          </p>

          <div className=" ">
            <img src="/images/influencer-marketing.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={[
            "Why should you invest in       ",
            "Influencer Marketing?    ",
          ]}
          description="Potential customers are more likely to make a purchase after hearing about or seeing a product with an influencer they follow versus a random advertisement. Influencer marketing for established brands and small businesses has a more significant impact than merely social media advertising and has a much better chance of higher ROI.
          By investing in influencer marketing, you’re allowing yourself and your brand to stand before your target audience and gain an incredible amount of insight into what your target audience is searching for, regarding your products and services.


"
        />
        <Heading firstLine={["Our Steps to        ", "Success   "]} />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {stepsToSuccessData.steps.map((data, index) => (
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
          firstLine={["Why          ", "Lucien Solutions? "]}
          description="Our Influencer marketing agency has a creative and innovative team that will find you the best influencers, resonating with your brand objectives and aligning with your business goals. Our ultimate goal is to craft a custom influencer marketing strategy tailored for your business while making data-driven adjustments as necessary for our partner brands.
"
          thirdLine="At Lucien Solutions, we believe in transparency and honesty, so you can always be sure of getting the results you paid for and deserve."
        />
      </section>
    </MainBackground>
  );
};

export default InfluencerMarketingComponent;
