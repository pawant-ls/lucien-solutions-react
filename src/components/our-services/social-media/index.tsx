"use client";
import MainBackground from "@/components/shared/main-bg";
import OurServicesHeading from "../heding";
import Spline from "@splinetool/react-spline";
import { contactUsData } from "@/data/home";
import {
  GradientMixer,
  NumbersCard,
  ServiceCard,
} from "@/components/home/home";
import CustomButton from "@/components/shared/button";
import Heading from "@/components/shared/heading";
import {
  roadmapToSuccess,
  socialMediaWeOffer,
  whatsInItForYou,
  whyLucien,
  whyLucienForContentMarketing,
} from "@/data/ssm";
import { InfoCard1 } from "@/components/about/about";
import TablePlans from "@/components/packages-plan/table-plans";
import { smmPackages } from "@/data/package-plans";
import PlanCards from "@/components/packages-plan/plan";

const SocialMediaMarketingComponent = () => {
  return (
    <MainBackground>
      <section className="  container">
        <main className=" min-h-80 bg-transparent  sm:-mt-40">
          <Spline scene="https://prod.spline.design/gNl7F4Fp8CJyOmOZ/scene.splinecode" />
        </main>{" "}
        <div className=" md:-mt-20">
          <OurServicesHeading
            title="Social Media Marketing "
            description="Transform your Brand with Tailored Social Media Campaigns for Data-Driven Marketing Solutions"
          />
        </div>
        <div>
          <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {contactUsData.map((data, index) => (
              <NumbersCard key={index} data={data} />
            ))}
          </div>
        </div>
      </section>

      <section className=" text-white container">
        <div className=" flex flex-col gap-5 my-20 items-center justify-center">
          <h4 className="   text-xl font-semibold">
            Crafting your brand’s most effective social media marketing
            strategies to soar high! Enhance your digital presence today!
          </h4>

          <CustomButton>Contact Us</CustomButton>
        </div>

        <Heading
          firstLine={[
            "From Clicks to Conversions, leave your digital mark with Lucien’s ",
          ]}
          secondLine="Tailored Social Media Strategies Social Media Strategies"
          description="Benefit from the power of social media and take your brand to new levels every day! Our social media strategies are built with the understanding of your brand history, target audience, brand objectives and competitive analysis. Our tailored social media strategies help you connect with your target audience effortlessly.
          With an experienced team on board, we build a bridge between you and your target audience.
          "
        />
        <Heading
          firstLine={["Know Us  ", "Better"]}
          description="Bringing hands-on experts with experience of more than 5 years, we help your brand drive meaningful results and strengthen your online brand presence in the digital realm.
          Lucien Solutions is a leading social media marketing agency in Mumbai with a presence in Pan India.


        
          Our team is built on the belief that a well-thought and well-documented social media strategy is the essential foundation for our client’s social media success stories. Lucien understands and aligns with your objectives, ensuring they are not only ambitious but also precise and measurable along with your broadening vision.

          

          
          
          "
          thirdLine="We go beyond the superficial level of analytics to understand the nuances of your audience’s behaviour, and preferences to get a clear view of where you stand and where you want to be! We tailor our social media strategy for visionaries like you- leaders who not only want to participate in this ever-changing digital world but also to make the most of it.
          Join hands with Lucien Solutions Today!"
        />

        <Heading firstLine={["What's in for ", "you?"]} />

        <div className=" my-20 gap-5  grid md:grid-cols-3">
          {whatsInItForYou.map((data, index) => (
            <ServiceCard
              hover={false}
              key={index}
              service={{
                name: data.title,

                // description: data.,
              }}
            />
          ))}
        </div>
        <Heading firstLine={["Social Media Services  ", "We Offer"]} />

        <div className=" my-20 gap-5  grid md:grid-cols-2">
          {socialMediaWeOffer.map((data, index) => (
            <InfoCard1 size="lg" key={index} value={data} />
          ))}
        </div>
        <Heading
          firstLine={["Why Lucien Solution for   ", "SMM Services?"]}
          description="Lucien Solutions is one of the best social media marketing agencies in Mumbai. We specialise in strategic social media campaigns that focus on building and protecting a positive brand image, creating loyalty among fans, enhancing your brand awareness and driving new leads for your business.

"
          thirdLine="Being one of the best digital marketing agencies in Mumbai, our full suite of social media marketing services includes:
"
        />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {whyLucien.map((data, index) => (
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

        <Heading firstLine={["Our Roadmap    ", "to Success"]} />

        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3">
          {roadmapToSuccess.map((data, index) => (
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
          firstLine={["Why Lucien Solution for     ", "Content Marketing"]}
        />
        <div className=" my-20 gap-5  grid sm:grid-cols-2 md:grid-cols-3 ">
          {whyLucienForContentMarketing.map((data, index) => (
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
        <Heading firstLine={["TARIFF           ", "PLANS"]} />

        <TablePlans plans={smmPackages} />

        <PlanCards plans={smmPackages} />
      </section>

      <GradientMixer />
    </MainBackground>
  );
};

export default SocialMediaMarketingComponent;
