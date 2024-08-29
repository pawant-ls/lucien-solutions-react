import { contactUsData, servicesCard } from "@/data/home";
import Heading from "../shared/heading";
import MainBackground from "../shared/main-bg";
import { GradientMixer, NumbersCard, ServiceCard } from "../home/home";
import ServicesList from "./card";
import { ourServices } from "@/data/our-service";

const OurServicesComponent = () => {
  return (
    <MainBackground>
      <section className=" container">
        <Heading
          firstLine={["Our Services, ", "Best Solutions for Your Business"]}
          description="Looking to illuminate your brand’s potential?
        We ensure you are not lost in the uncertainty of the market landscape, let us be the guide on your journey."
        />
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {contactUsData.map((data, index) => (
            <NumbersCard key={index} data={data} />
          ))}
        </div>

        {/* <ServicesList /> */}

        <div className=" my-20 grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
          {ourServices.map((service, index) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </section>
    </MainBackground>
  );
};

export default OurServicesComponent;
