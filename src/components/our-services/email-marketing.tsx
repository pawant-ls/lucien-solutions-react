import { emailMarketingData } from "@/data/our-services/email-marketing";
import Heading from "../shared/heading";
import MainBackground from "../shared/main-bg";
import OurServicesHeading from "./heding";
import OurServicesHeroSection from "./shared-hero";
import { ServiceCard } from "../home/home";
import TablePlans from "../packages-plan/table-plans";
import PlanCards from "../packages-plan/plan";
import { emailPackages } from "@/data/package-plans";
import { IPlan } from "../packages-plan/packages-plan";

const EmailMarketing = ({
  data,
}: {
  data: {
    emailMarketing: IPlan[];
  };
}) => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="EMAIL MARKETING"
        description="RSVP to your brand’s success party! Sending emails that make your brand shine.

"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["OUR EMAIL         ", "MARKETING PROCESS"]}
          description="Seamlessly integrate email marketing strategies that shimmer, captivate, and convert subscribers into loyal customers


          


"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {emailMarketingData.process.map((data, index) => (
            <ServiceCard
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
          firstLine={["How We          ", "Shine? "]}
          description="We immerse ourselves in your brand and audience to craft campaigns that speak directly to them, to their interests, and preferences. Leveraging our expertise we brighten each step for maximum effectiveness and impact.


          
          "
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {emailMarketingData.howWeShine.map((data, index) => (
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
          firstLine={["CLIENTS AND RESULTS    ", " WE ARE PROUD OF "]}
          description="Delivering exceptional outcomes for our clients remains our foremost pride and priority, reflecting our dedication to excellence.


          


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {emailMarketingData.clientsAndResults.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.client,
                icon: data.icon,

                description: data.result,
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
          <TablePlans plans={data?.emailMarketing} />
          <PlanCards plans={data?.emailMarketing} />
        </div>
      </section>
    </MainBackground>
  );
};

export default EmailMarketing;
