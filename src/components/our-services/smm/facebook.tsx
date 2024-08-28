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
import { facebookMarketingData } from "@/data/our-services/smm/facebook";

const FacebookMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="FACEBOOK"
        description="Light up your Brand with Facebook Marketing        "
      />

      <section className=" text-text container">
        <div className=" items-center md:flex-row flex-col-reverse flex gap-10  ">
          <div className=" flex-1 space-y-3 ">
            <p className=" flex-1">
              Are you in search of a company that helps you to promote your
              brand’s advertisements on Facebook? Well, your search ends here,
              with Lucien Solutions! It is the best choice for a responsible
              Facebook advertising company in Mumbai.
            </p>
            <p>
              Options are many but effective results show few. One of them is
              our company which walks the extra mile for the clients. The
              crucial job of a top-notch Facebook Marketing Agency in Mumbai is
              to keep your marketing on point and business on the rise!
            </p>
            <p>
              Elevate your brand’s presence with our expert Facebook ad
              campaigns. We craft engaging content, targeted ads, and strategic
              campaigns to reach your ideal audience and boost your business
              growth. Let us help you shine on Facebook and convert your clicks
              into conversions.
            </p>
          </div>

          <div className=" ">
            <img src="/images/facebook.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={["Why Facebook           ", "Marketing?"]}
          description="Facebook is one of the most popular marketing platforms on the face of the Earth. As the social giant has grown to more than 2.7 billion active global users, it’s also expanded its advertising network suitable for a wide range of businesses.



"
          thirdLine="A ton of the benefits come through Facebook ad campaigns, but paid advertising also comes with a lot of complexities. It’s important to understand what Facebook has to offer businesses and how it might help your business reach new audiences. It can be done by understanding how its paid ad network is built to offer a bunch of advertising options.
"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {facebookMarketingData.benefits.map((data, index) => (
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
          firstLine={["What influences your    ", "Business’s Growth?"]}
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {facebookMarketingData.growthInfluences.map((data, index) => (
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
            "Why Lucien Solutions for    ",
            " Facebook Marketing?          ",
          ]}
          description="An efficient and best facebook marketing company is required to handle the entire work, and should be
          aligned with your business goals, here is Lucien Solutions. The right use of Facebook ads will be a piece
          of cake when we stand by your side.


"
        />
        <Heading
          firstLine={[
            "Our Success Path for   ",
            " Facebook Marketing         ",
          ]}
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {facebookMarketingData.successPath.map((data, index) => (
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

export default FacebookMarketingComponent;
