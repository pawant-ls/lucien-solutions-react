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
import { graphicDesigningData } from "@/data/our-services/smm/graphic-design";

const GraphicDesignMarketingComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="GRAPHIC DESIGN"
        description="Bringing Life to Your Graphics with Graphic Designing"
      />

      <section className=" text-text container">
        <div className=" items-center flex gap-10 ">
          <p className=" flex-1">
            Our unique graphic designs are moving arrangements that communicate
            your vision with the kinds of advancement, creativity and
            uniqueness.
          </p>

          <div className=" ">
            <img src="/images/graphic-design.webp" alt="" />
          </div>
        </div>

        <Heading
          firstLine={[
            "Why Lucien Solutions for           ",
            "Graphic Designing?          ",
          ]}
          description="Our expert team of top Graphic Designers with more than 5 years of experience is the best professional team suited for your brand graphics. With the best graphic design skills and access to more than 3 premium tools and software, our team ensures you stay ahead of your business game at all times.




"
        />
        <Heading
          firstLine={["Benefits of            ", "Graphic Designing          "]}
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {graphicDesigningData.benefits.map((data, index) => (
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
        <Heading firstLine={["Our Strategy For    ", "Growth"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {graphicDesigningData.strategyForGrowth.map((data, index) => (
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

export default GraphicDesignMarketingComponent;
