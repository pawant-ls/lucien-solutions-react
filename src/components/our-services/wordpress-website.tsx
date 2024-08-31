import MainBackground from "@/components/shared/main-bg";
import Heading from "@/components/shared/heading";
import { technicalSeoData } from "@/data/our-services/technical-seo";
import { ServiceCard } from "@/components/home/home";
import {
  keyOffPageSeoSuccess,
  offPageSeoFactors,
  whyOffPageSeo,
} from "@/data/our-services/off-page-seo";
import { instagramMarketingData } from "@/data/our-services/smm/instagram";
import OurServicesHeroSection from "./shared-hero";
import { wordpressWebsiteData } from "@/data/our-services/wordpress";
import { websitePackages } from "@/data/package-plans";
import TablePlans from "../packages-plan/table-plans";
import PlanCards from "../packages-plan/plan";
import { IPlan } from "../packages-plan/packages-plan";

const WordpressComponent = ({
  data,
}: {
  data: {
    websiteDevelopment: IPlan[];
  };
}) => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="WORDPRESS WEBSITE"
        description="Thrive online with seamless & intutive websites from Lucien Solutions
        "
      />

      <section className=" text-text container">
        <Heading
          firstLine={["Why you need            ", "WordPress Website?"]}
          description="Wondering why you need a personalized website? To stand out from the crowd of websites & build a unique brand identity. At Lucien Solutions, we offer a wide range of services including custom theme and plugin development, website migration, maintenance, and performance optimisation. 



"
          thirdLine="We use the latest technologies and follow the best trends & practices to deliver high-quality, scalable, and secure WordPress solutions. With our centre focus on user satisfaction, we build personalised experiences to meet the unique needs of niche businesses across industries. We couple our cost-effective solutions with innovative ideas to cater to WordPress development services globally."
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {wordpressWebsiteData.reasonsToChooseWordPress.map((data, index) => (
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
        <Heading firstLine={["Services We           ", "Offer"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {wordpressWebsiteData.servicesWeOffer.map((data, index) => (
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
          firstLine={["TARIFF    ", " PLANS"]}
          description="You can choose a traffic that suits your business


"
        />

        <div className=" my-20 ">
          <TablePlans plans={data.websiteDevelopment} />
          <PlanCards plans={data.websiteDevelopment} />
        </div>

        <Heading firstLine={["OUR     ", " PROCESS"]} />
        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {wordpressWebsiteData.ourProcess.map((data, index) => (
            <ServiceCard
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                description: data.description,
              }}
            />
          ))}
        </div>
        <Heading firstLine={["Industries We      ", "Serve "]} />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {wordpressWebsiteData.industriesWeServe.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                description: data.description,
              }}
            />
          ))}
        </div>
        <Heading
          firstLine={["Key Factors for WordPress       ", "Website Success "]}
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {wordpressWebsiteData.keyFactorsForSuccess.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                description: data.description,
              }}
            />
          ))}
        </div>
      </section>
    </MainBackground>
  );
};

export default WordpressComponent;
