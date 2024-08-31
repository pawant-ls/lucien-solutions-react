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
import { smmPackages, websitePackages } from "@/data/package-plans";
import TablePlans from "../packages-plan/table-plans";
import PlanCards from "../packages-plan/plan";
import { ppcAdvertisingData } from "@/data/our-services/ppc";
import { IPlan } from "../packages-plan/packages-plan";

const PayPerClickComponent = ({
  data,
}: {
  data: {
    socialMediaMarketing: IPlan[];
  };
}) => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="PAY PER CLICK"
        description="Transform Your ROI with Lucien Solutions’ Cutting-Edge PPC Strategies
        "
      />

      <section className=" text-text container">
        <Heading
          firstLine={["TYPES OF          ", "P.P.C "]}
          description="Planning to attract highly targeted traffic? Discover your brand’s full digital marketing potential with the best PPC solutions. At Lucien Solutions, we are committed to maximise your ROI with experience and innovative pay-per-click strategies. We ensure your ads reach the perfect audience at the perfect time. We use data-backed methods that deliver outstanding results. Elevate your brand’s online presence and experience unparalleled growth with our premier PPC services.




"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {ppcAdvertisingData.typesOfPPC.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,

                icon: data.icon,
                description: data.description,
                example: data.example,
              }}
            />
          ))}
        </div>
        <Heading
          firstLine={["WHY YOUR BRAND NEEDS PPC            ", "ADVERTISING"]}
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {ppcAdvertisingData.whyYouNeedPPC.map((data, index) => (
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
        <Heading firstLine={["SEARCH ENGINE              ", "OPTIMIZATION"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {ppcAdvertisingData.seoProcess.map((data, index) => (
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
          firstLine={["TARIFF    ", " PLANS"]}
          description="You can choose a traffic that suits your business


"
        />

        <div className=" my-20 ">
          <TablePlans plans={data.socialMediaMarketing} />
          <PlanCards plans={data.socialMediaMarketing} />
        </div>

        <Heading firstLine={["KEY FOR SUCCESS IN PPC      ", " ADVERTISING"]} />
        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {ppcAdvertisingData.keyToSuccessInPPC.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,
                icon: data.icon,

                // description: data.description,
              }}
            />
          ))}
        </div>
      </section>
    </MainBackground>
  );
};

export default PayPerClickComponent;
