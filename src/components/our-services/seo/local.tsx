import MainBackground from "@/components/shared/main-bg";
import OurServicesHeroSection from "../shared-hero";
import Heading from "@/components/shared/heading";
import { technicalSeoData } from "@/data/our-services/technical-seo";
import { ServiceCard } from "@/components/home/home";
import { localSeoData } from "@/data/our-services/local-seo";

const LocalSeoComponent = () => {
  return (
    <MainBackground>
      <OurServicesHeroSection
        title="LOCAL SEO"
        description="Boost Your Local Presence with Expert SEO Services from Lucien Solution"
      />

      <section className=" text-text container">
        <Heading
          firstLine={["FACTORS OF Local ", "SEO"]}
          description="Trying to invite in-store traffic? You need Local SEO to attract local customers searching for your services. At Lucien Solution, we offer exceptional local SEO services designed to increase your business’s visibility and popularity among the locals. Our expert strategies are crafted to boost your online presence and foster meaningful engagement that drives them to your offline business as well. Let’s elevate your local SEO strategy together!


"
        />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {localSeoData.factors.map((data, index) => (
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
        <Heading firstLine={["WHY YOUR BRAND NEEDS LOCAL ", "SEO"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {localSeoData.whyYouNeedLocalSeo.map((data, index) => (
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
          firstLine={["OUR    ", "PROCESS"]}
          description="We systematically illuminate each page with optimization strategies, ensuring your brand shines brightest at the top.


"
        />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {technicalSeoData.process.map((data, index) => (
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
        <Heading firstLine={["KEY FOR  LOCAL   ", "SEO SUCCESS"]} />

        <div className=" my-20 gap-5  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {localSeoData.keyToSuccess.map((data, index) => (
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

export default LocalSeoComponent;
